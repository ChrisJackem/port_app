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
    const [scrollState, setScrollState] = useState('first');

    // Listener
    useEffect(()=>{        
        window.addEventListener('scroll', scrollHandler );
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, []);

    function scrollHandler(){        
        if ( timer.current ){       
            window.clearTimeout(timer.current)
        }
        timer.current =  window.setTimeout(()=>{
            scrollSnap();
            if (window.scrollY === 0) setScrollState('first');
            timer.current = null;
        }, TIMEOUT);
    }

    // Called from timeou. Scrolls to closest refByKey
    function scrollSnap(){
        for( const element of Object.values(refsByKey)){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;            
            if ( (Math.abs(rect_y) <= MIN_DISTANCE) && (window.scrollY > 100) ){                                  
                window.scrollBy( { top: rect_y, behavior: 'smooth'});                
            } 
        }
    }

    function scrollNext(reverse=false){
        const last_element = (Object.keys(refsByKey).length - 1).toString();  
        const obj = reverse ? Object.entries(refsByKey).reverse() : Object.entries(refsByKey);  
        for( const [key, element] of obj ){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;
            // Different checks for reverse - this allows both btns to use this
            if ( !reverse && rect_y > 0 || reverse && rect_y < 0 ){
                window.scrollBy( { top: rect_y, behavior: 'smooth'});
                //setNextState(key.toString() !== last_element);
                if (key === last_element){
                    setScrollState('last');
                }else  if (key === '0'){
                    setScrollState('first');
                }else{
                    setScrollState('');
                }
                return;
            }
        }
    }
        
    return (
        <>
            <motion.div className={`flex ${styles.scroll_tools}`}>                          
                <SvgBtn type={'prev'}
                    onClick={()=>scrollNext(true)} 
                    color={scrollState !== 'first' ? COLOR_ACCENT : COLOR_DARKEST}
                    /* disabled={scrollState !== 'first'} */
                />
                <SvgBtn type={'next'}
                    onClick={()=>scrollNext()} 
                    color={scrollState !== 'last' ? COLOR_ACCENT : COLOR_DARKEST}
                    /* disabled={scrollState !== 'last'} */
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

export const SvgBtn = ({ color, onClick, type, disabled = false }: { color?: string; type:'next'|'prev'; disabled?: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    const final_color = color ? color : 'var(--accent, #FFF)';
    function getSvg(){
        switch(type){
            case 'next': return (<SVG_NEXT final_color={color} />)
            case 'prev': return (<SVG_PREV final_color={color} />)
        }
    }
    return (
        <button
            onClick={onClick}
            className={`${styles.btn_next}`}
            disabled={disabled}
        >{ getSvg() }</button>
    );
};

export const SVG_NEXT = ({ final_color }: { final_color: string | undefined }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="176 137.24 176 175.75 25 175.75 25 137.24 62.75 137.24 61.75 88 99.5 88 176 137.24" />
    </svg>
);
export const SVG_PREV = ({ final_color }: { final_color: string | undefined }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="25 137.24 25 175.75 176 175.75 176 137.24 138.25 137.24 139.25 88 101.5 88 25 137.24"/>
    </svg>
);


export default Scroller;