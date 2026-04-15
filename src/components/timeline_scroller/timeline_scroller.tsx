import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useScroll, useTransform } from 'motion/react'
import styles from './timeline_scroller.module.css'
import useRefs from '@/hooks/useRefs'
import useTimeout from '@/hooks/useTimeout'
import useDebounce from '@/hooks/useDebounce'
import { KidSvg } from '../animations/kid/kid'


const TimelineScroller = ({children}: {children: ReactNode}) => {
    const container_ref = useRef(null)
    const {refsByKey, setRef} = useRefs();
    const [heroImages, setHeroImages] = useState<Map<number, ReactNode>>(new Map())
    
    useEffect(()=>{
        const heros = new Map();
        React.Children.forEach(children, (child, i) => {
            if (React.isValidElement(child) && child.type === TimelineChild) {
                heros.set(i, child)
            }
        })
        setHeroImages(heros);
    }, [])

    const scrollHandler = (e)=>{
        console.log('K')
    }
    const debouncedScrollHandler = useDebounce(scrollHandler, 50)
    useEffect(()=>{
        window.addEventListener('scroll', debouncedScrollHandler );
        return ()=>{ window.removeEventListener('scroll', debouncedScrollHandler );}
    }, [debouncedScrollHandler])   
  
    return (
        <section className={`p-rel ${styles.container}`} ref={container_ref} >
            <div className={`fixed-modal ${styles.modal}`}>
                { Array.from(heroImages.entries()).map(([index, child]) => (
                    <div key={index}>{child}</div>
                )) }
            </div>
            <div>
                { React.Children.map(children, (child, i) => {
                    const isHero = React.isValidElement(child) && child.type === TimelineChild;
                    console.log(isHero)
                    return ( isHero ? null : child )
                })}
            </div>
        </section>
    )
}

type TimelineState = 'visible'|'over'|'under'

export const TimelineChild = ({state, children}: {state:TimelineState, children: ReactNode}) => { 
   
    return <>{children}</>
}

export default TimelineScroller