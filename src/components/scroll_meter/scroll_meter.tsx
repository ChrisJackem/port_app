import React, { useState, useRef } from 'react'
import styles from './scroll_meter.module.css';
import { SVG_NEEDLE } from '../svg_btns/svg_btns';

const useDebounce = (callback: () => void, delay: number) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const debouncedCallback = () => {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(callback, delay);
    };
    return debouncedCallback;
};

const ScrollMeter = () => {
    const [scroll, setScroll] = useState<number>(0);


    const handleScroll = () => {
        setScroll(Math.floor( (window.scrollY / window.innerHeight) * 100));
        console.log('Scroll event fired');
    };

    const debouncedScroll = useDebounce(handleScroll, 300);

    React.useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [debouncedScroll]);

    return (
        <section className={styles.container}>

            <small>{scroll.toFixed(10)}</small>

            <div className={styles.meter}>
                <div 
                    className={styles.needle} 
                    style={{ '--left': `${scroll}%` } as React.CSSProperties}
                >
                    <SVG_NEEDLE final_color={'var(--text)'} />
                </div>
            </div>

            <p>X</p>

        </section>
    )
}

export default ScrollMeter