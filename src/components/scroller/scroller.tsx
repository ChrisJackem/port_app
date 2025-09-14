/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, Children } from 'react';
import useRefs from '@/hooks/useRefs';
import styles from './scroller.module.css';
import { motion } from 'motion/react';

const TIMEOUT = 200;
const MIN_DISTANCE = 300;

export const ImgScroll = ({ }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">  
        <polygon fill="var(--accent, #FFF)" points="99.25 37 137.5 37 137.5 187 99.25 187 99.25 149.5 62.5 149.5 62.5 112 99.25 37"/>
        <rect fill="var(--accent, #FFF)" x="62" y="12.5" width="76" height="12.5"/>  
    </svg>
  )
}
export const ImgNext = ({ }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">  
        <polygon fill="var(--accent, #FFF)" points="176 137.24 176 175.75 25 175.75 25 137.24 62.75 137.24 61.75 88 99.5 88 176 137.24"/> 
    </svg>
  )
}

const Scroller: React.FC<React.PropsWithChildren<object>> = ({ children }) => {    
    const timer = useRef<number | null>(null);
    const { refsByKey, setRef } = useRefs();

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
            timer.current = null;
        }, TIMEOUT);
    }

    // Snappin'
    function scrollSnap(){
        for( const element of Object.values(refsByKey)){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;            
            if ( (Math.abs(rect_y) <= MIN_DISTANCE) && (window.scrollY > 100) ){                    
                window.scrollBy( { top: rect_y, behavior: 'smooth'})
            } 
        }
    }

    function scrollNext(){
        console.log("OK")
        for( const element of Object.values(refsByKey)){
            if (!element) continue;
            const rect_y = element.getBoundingClientRect().y;
            if (rect_y > 0){
                window.scrollBy( { top: rect_y, behavior: 'smooth'});
                return;
            }

            /* if ( (Math.abs(rect_y) <= MIN_DISTANCE) && (window.scrollY > 100) ){                    
                window.scrollBy( { top: rect_y, behavior: 'smooth'})
            }  */
        }
    }
    
    return (
        <>
            <motion.div className={`flex ${styles.scroll_tools}`}>
                <button                    
                    className={`${styles.btn_scroll}`}
                ><ImgScroll/></button>
                <button
                onClick={scrollNext}
                className={`${styles.btn_next}`}><ImgNext/></button>
            </motion.div>
            { React.Children.toArray(children).map((child, i) => (
                <div 
                    style={{ padding: '1rem 0' }}
                    ref={el => { if (el) setRef(el, i.toString()); }}
                    key={i}
                >{child}</div>
            ))}
        </>
    )
}



export default Scroller;