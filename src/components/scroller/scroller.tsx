/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, Children, useState } from 'react';
import useRefs from '@/hooks/useRefs';
import styles from './scroller.module.css';
import { AnimatePresence, motion } from 'motion/react';
import SvgBtn from '../svg_btns/svg_btns';

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
    const [refSize, setRefSize] = useState<undefined | number>();
    // Toolbar
    const [scrollState, setScrollState] = useState<'first'|'last'|'lock'|''>('first');
    const [hideTools, setHideTools] = useState(true);
    const [userHideTools, setUserHideTools] = useState(true);

    // Init
    useEffect(()=>{
        setRefSize(Object.keys(refsByKey).length-1);

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
    }, [refsByKey, userHideTools]);    

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
        /* if (key === `${Object.keys(refsByKey).length-1}`){ */
        if (key === `${refSize}`){
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
                    onClick={()=>setUserHideTools(userHideTools => !userHideTools)}
                    color={COLOR_ACCENT}                         
                />
                { userHideTools && (<>
                    <SvgBtn type={'prev'}
                        onClick={()=>scrollNext(true)}
                        color={scrollState !== 'first' ? COLOR_ACCENT : COLOR_MIDGROUND}
                        disabled={ scrollState==='lock' }
                    />
                    <SvgBtn type={'next'}
                        onClick={()=>scrollNext()}
                        color={scrollState !== 'last' ? COLOR_ACCENT : COLOR_MIDGROUND}
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

export default Scroller;