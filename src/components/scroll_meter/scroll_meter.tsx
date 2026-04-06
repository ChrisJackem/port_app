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
    id: number,
    start: number;
    end: number;
    color?:string;
    callback?: Function;
}

const ScrollMeter = ({triggers, className, children}:{triggers?:ScrollTrigger[], className?:string, children?: ReactNode[]}) => {
    const [scroll, setScroll] = useState<number>(0);
    const triggered = useRef<Set<number>>(new Set());// ids of triggered triggers

    const handleScroll = () => {
        const new_scroll = Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (triggers){
            const trigged = triggers.filter( t => t.start <= new_scroll && new_scroll < t.end );
            const triggeredIds = new Set(trigged.map( t => t.id ));

            // Look for untriggers
            const untriggered = Array.from(triggered.current).filter( id => !triggeredIds.has(id) );
            if (untriggered.length){
                console.log('untrigger', untriggered)
                untriggered.forEach( id => triggered.current.delete(id) );
            }
            if ( trigged.length ){
                console.log(JSON.stringify(trigged));
                triggered.current = triggeredIds;
                trigged.forEach( t => t.callback && t.callback() );                
            }                            
        }        
        setScroll( old_scroll => {
            return Math.floor(new_scroll);
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
                    </div> 
                }

                { triggered.current.size > 0 && children && 
                    <div>
                        {children.map( (child, index) => (triggered.current.has(index) && child) || null )}    
                    </div>
                }

                <div 
                    className={styles.needle} 
                    style={{ '--left': `${Math.max(0.5, Math.floor(scroll) )}%` } as React.CSSProperties}
                >
                    <SVG_NEEDLE final_color={'var(--text)'} />
                </div>
            </div>

            <p className=''>
                {triggers && triggers.map((_, index) => (
                    <span key={index}>|</span>
                ))}
            </p>

        </section>
    )
}

export default ScrollMeter