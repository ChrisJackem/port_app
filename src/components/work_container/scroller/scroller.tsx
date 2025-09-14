/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, Children } from 'react';
import useRefs from '@/hooks/useRefs';

const TIMEOUT = 200;
const MIN_DISTANCE = 300;

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
    
    return (
        <>
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