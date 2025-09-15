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

/**
 * Scroller.tsx | scroll manager - 
 * Container for react nodes. Will wrap each child with a div that will act as the snapping point.
 * Uses a scroll listener and a timeout [TIMEOUT] to debounce the check. 
 * If  any wrapper div if within [MIN_DISTANCE] of the top of viewport, [scrollSnap()] will scroll the viewport to the top.
 * 
 * Also adds buttons to navigate between wrappers, absolute positioned
 * We use [scrollNext(reverse?)] to scroll to the next / previous containers - reverse to go back up the list.
 * @param children 
 */
const Scroller: React.FC<React.PropsWithChildren<object>> = ({ children }) => {    
    const timer = useRef<number | null>(null);
    const {refsByKey, setRef} = useRefs();
    const [scrollState, setScrollState] = useState<'first'|'last'|''>('first');

    // Scroll Listener
    useEffect(()=>{
        // * Scroll to top at init
        window.scrollTo({ top: 0, behavior: 'smooth'});   
        window.addEventListener('scroll', scrollHandler );
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, []);

    // Scroll Handler
    function scrollHandler(){        
        if ( timer.current ){       
            window.clearTimeout(timer.current)
        }
        timer.current =  window.setTimeout(()=>{
            scrollSnap();
            if (window.scrollY < 20) setScrollState('first');
            timer.current = null;
        }, TIMEOUT);
    }

    // Called from timeout. Scrolls to closest refByKey
    function scrollSnap(){
        for( const [key, element] of Object.entries(refsByKey)){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;            
            if ( (Math.abs(rect_y) <= MIN_DISTANCE) && (window.scrollY > 100) ){                                  
                window.scrollBy( { top: rect_y, behavior: 'smooth'});
                checkScroll(key)
            } 
        }
    }

    // Scroll to next or previous scroll container
    function scrollNext(reverse=false){        
        const obj = reverse ? Object.entries(refsByKey).reverse() : Object.entries(refsByKey); 
        for( const [key, element] of obj ){
            if (!element) continue;
            const rect = element.getBoundingClientRect();
            // Different checks for reverse *
            if ( !reverse && rect.top > 0 || reverse && rect.top < 0 ){
                window.scrollBy( { top: rect.top, behavior: 'smooth'}); 
                checkScroll(key);
                return;
            }
        }
    }

    // Helper for scroll methods
    // checks key (refsByKey) for first or last and sets scroll state
    function checkScroll( key:string ){
        //const last_element = `${Object.keys(refsByKey).length-1}`;
        if (key === `${Object.keys(refsByKey).length-1}`){
            setScrollState('last');
        }else if (key === '0'){
            setScrollState('first');
        }else{
            setScrollState('');
        }
    }
        
    return (
        <>
            <motion.div className={`flex ${styles.scroll_tools}`}>                          
                <SvgBtn type={'prev'}
                    onClick={()=>scrollNext(true)} 
                    color={scrollState !== 'first' ? COLOR_ACCENT : COLOR_DARKEST}                    
                />
                <SvgBtn type={'next'}
                    onClick={()=>scrollNext()} 
                    color={scrollState !== 'last' ? COLOR_ACCENT : COLOR_DARKEST}                    
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

/********************************************************************** Buttons  */
export const SvgBtn = ({ color, onClick, type, disabled=false }: { 
    color?: string; 
    type: 'next'|'prev';
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
 }) => {

    const final_color = color ? color : 'var(--accent, #FFF)';

    function getSvg(){
        switch(type){
            case 'next': return (<SVG_NEXT 
                final_color={final_color} 
                />)
            case 'prev': return (<SVG_PREV 
                final_color={final_color}

                />)
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

export const SVG_NEXT = ({ final_color }: { final_color: string }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="176 137.24 176 175.75 25 175.75 25 137.24 62.75 137.24 61.75 88 99.5 88 176 137.24" />
    </svg>
);

export const SVG_PREV = ({ final_color }: { final_color: string }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="25 137.24 25 175.75 176 175.75 176 137.24 138.25 137.24 139.25 88 101.5 88 25 137.24"/>
    </svg>
);


export default Scroller;