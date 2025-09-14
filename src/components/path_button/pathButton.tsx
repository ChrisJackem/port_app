'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import './pathButton.css';
import { motion } from 'motion/react';
import { debounce } from '../debounce/debounce';

const PathButton = () => {
    const pathName = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {        
        const scrollHandler = debounce(() => {
            if (elementRef.current) {                            
                const scrollYed = window.scrollY > 160;
                setScrolled(scrollYed);
            }
        }, 100);
        window.addEventListener("scroll", scrollHandler);
        return () => { window.removeEventListener("scroll", scrollHandler); }
    }, []);

    function handleClick(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setScrolled(false);
    }

    return (        
        <motion.div
            ref={elementRef}
            onClick={handleClick}
            className={`nav-url${scrolled ? ' scrolled' : ''}`}
            layout
            transition={{ duration: .1}}
        >{pathName}</motion.div>
    )
}
export default PathButton