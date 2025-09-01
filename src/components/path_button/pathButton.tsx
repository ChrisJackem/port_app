'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import './pathButton.css';


function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function(this: any, ...args: any[]) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    } as T;
}

const PathButton = () => {
    const elementRef = useRef(null);
    //const [rect, setRect] = useState<DOMRect | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        
        //setRect((elementRef?.current as unknown as HTMLElement).getBoundingClientRect());
        
        const scrollHandler = debounce(() => {
            if (elementRef.current) {
                //const rect = (elementRef.current as HTMLElement).getBoundingClientRect();
                //console.log(rect.y)
                //const btm = rect.y + rect.height;
                const scrollYed = window.scrollY > 100;
                //if (!scrollYed) return;                
                //const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setScrolled(scrollYed);
            }
        }, 1000);

        window.addEventListener("scroll", scrollHandler);
        return () => { window.removeEventListener("scroll", scrollHandler); }
    }, []);

    function handleClick(e: React.MouseEvent<HTMLDivElement>){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setScrolled(false);
    }

    return (        
        <div
            ref={elementRef}
            onClick={handleClick}
            className={`blade-1 nav-url${scrolled ? ' scrolled' : ''}`}
        >{pathName}</div>
    )
}

export default PathButton