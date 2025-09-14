import React, { useEffect, useRef, Children } from 'react';
import useRefs from '@/hooks/useRefs';
//import { debounce } from '@/components/debounce/debounce';
//import { element } from 'three/tsl';

const TIMEOUT = 200;
const MIN_DISTANCE = 300;

const Scroller: React.FC<React.PropsWithChildren<object>> = ({ children }) => {    
    const timer = useRef<number | null>(null);
    const { refsByKey, setRef } = useRefs();
    // Sets up listener
    useEffect(()=>{        
        window.addEventListener('scroll', (scrollHandler) );
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, []);
    // Waits uptil scrolling has stopped
    function scrollHandler(){
        if ( timer.current ){       
            window.clearTimeout(timer.current)    
        }
        timer.current =  window.setTimeout(()=>{                
            scrollStopped();
            timer.current = null;
        }, TIMEOUT);
    }
    function scrollStopped(){
        console.log('stopped scrolling');
        for( const [ key, element ] of Object.entries(refsByKey)){
            console.log(`${key}:${element}`)
            const rect = element?.getBoundingClientRect();
            console.log(JSON.stringify(rect))
            if ( rect && (Math.abs(rect.y) <= MIN_DISTANCE) ){
                console.log('Clicking')
                window.scrollBy( {left: 0, top: rect.y, behavior: 'smooth'})
            } 
        }
    }

    return (
        <>
        {React.Children.toArray(children).map((child, i) => (
            <div 
            ref={el => { if (el) setRef(el, i.toString()); }}
            key={i}
            >{child}</div>
        ))}
        </>
    )
}

export default Scroller;