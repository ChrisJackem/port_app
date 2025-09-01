'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import './pathButton.css';
import { motion, useAnimate } from 'motion/react';


function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function(this: unknown, ...args: Parameters<T>) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    } as T;
}

const PathButton = () => {
    const pathName = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {        
        const scrollHandler = () => {//debounce((scrolled) => {
            if (elementRef.current) {                            
                const scrollYed = window.scrollY > 130;
                setScrolled(scrollYed);
            }
        }
        window.addEventListener("scroll", scrollHandler);
        return () => { window.removeEventListener("scroll", scrollHandler); }
    }, []);

    function handleClick(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setScrolled(false);
    }

    return (        
        <motion.div
            ref={elementRef}
            onClick={handleClick}
            className={`nav-url${scrolled ? ' scrolled' : ''}`}
            layout
        >{pathName}</motion.div>
    )
}

export default PathButton