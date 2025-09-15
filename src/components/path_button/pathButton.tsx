'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import styles from './pathButton.module.css';
import { motion } from 'motion/react';

const PathButton = ({ threshold }: {threshold: number}) => {
    const pathName = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {        
        const scrollHandler = () => {
            if (elementRef.current) {                            
                const scrollYed = window.scrollY > threshold;
                setScrolled(scrollYed);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => { window.removeEventListener("scroll", scrollHandler); }
    }, [threshold]);

    function handleClick(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setScrolled(false);
    }

    return (        
        <motion.div
            ref={elementRef}
            onClick={handleClick}
            className={`${styles.nav_url} ${scrolled ? styles.scrolled : ''}`}
            layout
            transition={{ duration: .1}}
        >{pathName}</motion.div>
    )
}
export default PathButton