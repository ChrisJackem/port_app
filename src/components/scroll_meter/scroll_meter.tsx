import React, { useState, useRef, ReactNode } from 'react'
import styles from './scroll_meter.module.css';
import { SVG_NEEDLE } from '../svg_btns/svg_btns';
import { atkin } from '@/app/config/fonts';

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

type ScrollTrigger = {
    start: number;
    end: number;
    color?:string;
    callback?: Function;
}

const ScrollMeter = ({triggers, update}:{triggers?:ScrollTrigger[], update?: Function}) => {
    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = () => {
        const new_scroll = Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (triggers){
            const trig = triggers.filter( t => t.start <= new_scroll && new_scroll < t.end );
            if ( trig.length ){
                //console.log(JSON.stringify(trig));
                trig.forEach( t => t.callback && t.callback() );
                
            }                
        }
        if ( update ){
            update();
        }
        //console.log(new_scroll)
        setScroll( old_scroll => {
            //const direction = `${old_scroll > new_scroll ? "UP" : "DOWN"}`
            return new_scroll;
        });
    };

    const debouncedScroll = useDebounce(handleScroll, 300);

    React.useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [debouncedScroll]);

    return (
        <section className={`${styles.container} `} style={{ width: '50%'}}>
            <small>{scroll.toFixed(8)}</small>
            <div className={styles.meter}>
                { triggers && 
                <div>
                    {triggers.map((trigger, index) => (
                        <div
                            key={index}
                            className={styles.bar}
                            style={{                                
                                left: `${trigger.start}%`,
                                width: `${trigger.end - trigger.start}%`,
                                backgroundColor: trigger.color || 'transparent',                                
                            }}
                        />
                    ))}
                </div> }

                <div 
                    className={styles.needle} 
                    style={{ '--left': `${Math.max(0.5, Math.floor(scroll) )}%` } as React.CSSProperties}
                >
                    <SVG_NEEDLE final_color={'var(--text)'} />
                </div>
            </div>

            <p className=''>|||</p>

        </section>
    )
}

export default ScrollMeter