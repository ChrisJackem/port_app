/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, Children, useState } from 'react';
import useRefs from '@/hooks/useRefs';
import styles from './scroller.module.css';
import { motion } from 'motion/react';

const TIMEOUT = 200;
const MIN_DISTANCE = 300;

const COLOR_ACCENT = 'var(--accent, #FFF)';
const COLOR_MIDGROUND = 'var(--midground, #CCC)';
const COLOR_DARKEST = 'var(--darkest, #000)';

const Scroller: React.FC<React.PropsWithChildren<object>> = ({ children }) => {    
    const timer = useRef<number | null>(null);
    const {refsByKey, setRef} = useRefs();
    const [nextState, setNextState] = useState(true);
    const [scrollState, setScrollState] = useState(true);

    // Listener
    useEffect(()=>{        
        window.addEventListener('scroll', scrollHandler );
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, []);

    function scrollHandler(){        
        if ( timer.current ){       
            window.clearTimeout(timer.current)
            /* setBtnNextColor()  */
        }
        timer.current =  window.setTimeout(()=>{
            scrollSnap();
            timer.current = null;
        }, TIMEOUT);
    }

    // Snappin'
    function scrollSnap(){
        for( const element of Object.values(refsByKey)){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;            
            if ( (Math.abs(rect_y) <= MIN_DISTANCE) && (window.scrollY > 100) ){                                  
                window.scrollBy( { top: rect_y, behavior: 'smooth'});                
            } 
        }
    }

/*     function toggleScroller(){
        setScrollState( scrollState => !scrollState );
    } */

    function scrollNext(reverse=false){
        const last_element = (Object.keys(refsByKey).length - 1).toString();  
        const obj = reverse ? Object.entries(refsByKey).reverse() : Object.entries(refsByKey);  
        for( const [key, element] of obj ){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;
            if ( !reverse && rect_y > 0 || reverse && rect_y < 0 ){
                window.scrollBy( { top: rect_y, behavior: 'smooth'});
                setNextState(key.toString() !== last_element);
                return;
            }
        }
    }
    /* function scrollNext(reverse=false){
        const last_element = (Object.keys(refsByKey).length - 1).toString();  
        const obj = reverse ? Object.entries(refsByKey).reverse() : Object.entries(refsByKey);  
        for( const [key, element] of obj ){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;
            if (rect_y > 0){
                window.scrollBy( { top: rect_y, behavior: 'smooth'});
                setNextState(key.toString() !== last_element);
                return;
            }
        }
    } */
    
    return (
        <>
            <motion.div className={`flex ${styles.scroll_tools}`}>
                <BtnScroll 
                    onClick={() => setScrollState( scrollState => !scrollState )} 
                    color={scrollState ? COLOR_ACCENT : COLOR_MIDGROUND} 
                />                 
                <BtnPrev
                    onClick={()=>scrollNext(true)} 
                    color={nextState ? COLOR_ACCENT : COLOR_DARKEST} 
                />
                <BtnNext 
                    onClick={()=>scrollNext()} 
                    color={nextState ? COLOR_ACCENT : COLOR_DARKEST} 
                />
            </motion.div>

            { React.Children.toArray(children).map((child, i) => {
                if (!child) return null;
                return <div 
                    style={{ padding: '1rem 0' }}
                    ref={el => { if (el) setRef(el, i.toString()); }}
                    key={i}
                >{child}</div>
            } ) }
        </>
    )
}

export const BtnScroll = ({ color, onClick, disabled=false }:{color?: string, disabled?:boolean, onClick:(e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    const final_color = color ? color : 'var(--accent, #FFF)';
    return (
        <button 
            className={`${styles.btn_scroll}`} 
            onClick={onClick}
            disabled={disabled}
        >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">  
                <polygon fill={final_color} stroke-width="4%" stroke="#000" points="99.25 37 137.5 37 137.5 187 99.25 187 99.25 149.5 62.5 149.5 62.5 112 99.25 37"/>
                <rect fill={final_color} stroke-width="3px" stroke="#000" x="62" y="12.5" width="76" height="12.5"/>  
            </svg> 
        </button>
    )
}

export const BtnNext = ({ color, onClick, disabled = false }: { color?: string; disabled?: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    const final_color = color ? color : 'var(--accent, #FFF)';
    return (
        <button
            onClick={onClick}
            className={`${styles.btn_next}`}
            disabled={disabled}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <polygon fill={final_color} stroke-width="4%" stroke="#000" points="176 137.24 176 175.75 25 175.75 25 137.24 62.75 137.24 61.75 88 99.5 88 176 137.24" />
            </svg>
        </button>
    );
};

export const BtnPrev = ({ color, onClick, disabled = false }: { color?: string; disabled?: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    const final_color = color ? color : 'var(--accent, #FFF)';
    return (
        <button
            onClick={onClick}
            className={`${styles.btn_next}`}
            disabled={disabled}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <polygon fill={final_color} stroke-width="4%" stroke="#000" points="25 137.24 25 175.75 176 175.75 176 137.24 138.25 137.24 139.25 88 101.5 88 25 137.24"/>
            </svg>
        </button>
    );
};

export default Scroller;