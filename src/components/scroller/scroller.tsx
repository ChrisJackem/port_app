/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, Children, useState } from 'react';
import useRefs from '@/hooks/useRefs';
import styles from './scroller.module.css';
import { AnimatePresence, motion } from 'motion/react';

const TIMEOUT = 200;
const MIN_DISTANCE = 300;
const COLOR_ACCENT = 'var(--accent, #FFF)';
const COLOR_MIDGROUND = 'var(--midground, #CCC)';
const COLOR_DARKEST = 'var(--darkest, #000)';

// Animations Toolbar
const variantsToolbar = {
  initial: { opacity: 0, y: -100 },
  hidden: { opacity: 0, y:  -100 },
  enter: { opacity: 1, y: 0 }
}

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
    // Toolbar
    const [scrollState, setScrollState] = useState<'first'|'last'|'lock'|''>('first');
    const [hideTools, setHideTools] = useState(true);
    const [userHideTools, setUserHideTools] = useState(true);

    useEffect(()=>{
        const scrollHandler = ()=> {            
            if ( timer.current ) {
                window.clearTimeout(timer.current);
                timer.current = null;            
            }            
            // Scroll Snap
            timer.current = window.setTimeout(()=>{
                for( const [key, element] of Object.entries(refsByKey)){
                    if (!element) continue;
                    const rect_y = element.getBoundingClientRect().y;            
                    if ( (Math.abs(rect_y) <= MIN_DISTANCE) && (window.scrollY > 100) ){                                  
                        if (userHideTools){
                            window.scrollBy( { top: rect_y, behavior: 'smooth'});
                            checkScroll(key);
                        } 
                    } 
                }
                const scrolled = window.scrollY;
                if (scrolled < 20) setScrollState('first');
                setHideTools(scrolled < 100);
                timer.current = null;
            }, TIMEOUT);
        }
        // * Scroll to top at init
        //window.scrollTo({ top: 0, behavior: 'smooth'});   
        window.addEventListener('scroll', scrollHandler );
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, [userHideTools]);    

    // Scroll to next or previous scroll container
    function scrollNext(reverse=false){
        if (scrollState === 'lock' || !userHideTools) return;
        const obj = reverse ? Object.entries(refsByKey).reverse() : Object.entries(refsByKey); 
        for( const [key, element] of obj ){
            if (!element) continue;
            const rect = element.getBoundingClientRect();
            // Different checks for reverse *
            if ( !reverse && rect.top > 1 || reverse && rect.top < -1 ){
                window.scrollBy( { top: rect.top, behavior: 'smooth'});
                // Lock and set timeout for unlock
                setScrollState('lock');
                window.setTimeout( ()=>checkScroll(key), 1000);
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
        <AnimatePresence>
            { (!hideTools) && (<motion.div className={`flex ${styles.scroll_tools}`}
                key={'tool-bar'}
                variants={variantsToolbar}              
                initial='hidden'
                animate='enter'
                exit='hidden'
                layout
            >   
                <SvgBtn type={userHideTools ? 'x' : 'scroll'}
                    onClick={ ()=> setUserHideTools(userHideTools => !userHideTools) }
                    color={COLOR_ACCENT}                         
                />
                { userHideTools && (<>
                    <SvgBtn type={'prev'}
                        onClick={()=>scrollNext(true)}
                        color={scrollState !== 'first' ? COLOR_ACCENT : COLOR_DARKEST}
                        disabled={ scrollState==='lock' }
                    />
                    <SvgBtn type={'next'}
                        onClick={()=>scrollNext()}
                        color={scrollState !== 'last' ? COLOR_ACCENT : COLOR_DARKEST}
                        disabled={ scrollState==='lock' }                  
                    />  
                </>)}              
                  
            </motion.div>) }
            </AnimatePresence>
            

            { React.Children.toArray(children).map((child, i) => {
                if (!child) return null;
                return <div
                    className={styles.scroll_container}                    
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
    type: 'next'|'prev'|'x'|'scroll';
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
 }) => {
    const final_color = color ? color : 'var(--accent, #FFF)';
    function getSvg(){
        switch(type){
            case 'next': return (<SVG_NEXT final_color={final_color}  />)
            case 'prev': return (<SVG_PREV final_color={final_color} />)
            case 'x': return (<SVG_X final_color={final_color} />)
            case 'scroll': return (<SVG_SCROLL final_color={final_color} />)
        }
    }
    return (
        <button
            onClick={onClick}
            className={`${styles.btn_next}`}
            /* disabled={disabled} This was disabling and not firing callback on some devices */
            style={{ opacity: `${ disabled ? 0.5 : 1 }`}}
        >{ getSvg() }</button>
    );
};

export const SVG_NEXT = ({ final_color }: { final_color: string }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="176 99.24 176 137.75 25 137.75 25 99.24 62.75 99.24 61.75 50 99.5 50 176 99.24"/>
    </svg>
);

export const SVG_PREV = ({ final_color }: { final_color: string }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="25 99.24 25 137.75 176 137.75 176 99.24 138.25 99.24 139.25 50 101.5 50 25 99.24"/>
    </svg>
);

export const SVG_X = ({ final_color }: { final_color: string }) => (
    <svg  viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="169.21 70.82 143.29 41.68 101.62 78.72 64.57 37.04 35.43 62.96 72.47 104.63 30.79 141.68 56.71 170.82 98.38 133.78 135.43 175.46 164.57 149.54 127.53 107.87 169.21 70.82"/>
    </svg>
);

export const SVG_SCROLL = ({ final_color }: { final_color: string }) => (
    <svg  viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="99.25 37 137.5 37 137.5 187 99.25 187 99.25 149.5 62.5 149.5 62.5 112 99.25 37"/>
        <rect fill={final_color} strokeWidth="4%" stroke="#000" x="62" y="12.5" width="76" height="12.5"/>  
    </svg>
);


export default Scroller;