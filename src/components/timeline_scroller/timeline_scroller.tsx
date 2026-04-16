import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { AnimatePresence, easeOut, motion, useMotionValue, useScroll, useTransform } from 'motion/react'
import styles from './timeline_scroller.module.css'
import useRefs from '@/hooks/useRefs'
import useTimeout from '@/hooks/useTimeout'
import useDebounce from '@/hooks/useDebounce'
import { KidSvg } from '../animations/kid/kid'


const TimelineScroller = ({children}: {children: ReactNode}) => {
    const container_ref = useRef(null)
    const {refsByKey, setRef} = useRefs();
    const [heroImages, setHeroImages] = useState<Map<number, ReactNode>>(new Map());
    const { scrollY, scrollYProgress } = useScroll()
    const [visibleIndex, setVisibleIndex] = useState(-1);
    
    const getHeros = ()=>{
        const heros = new Map();
        React.Children.forEach(children, (child, i) => {
            if (React.isValidElement(child) && child.type === TimelineChild) {
                heros.set(i, child)
            }
        })
        setHeroImages(heros);
    }
    useEffect(getHeros, []);
   
    const scrollHandler = (e:any)=>{
        if (refsByKey) {
             Object.entries(refsByKey).forEach(([key, ref]) => {
                const rect = ref.getBoundingClientRect();
                const elementTop = rect.top + scrollY.get();
                const elementBottom = elementTop + rect.height;
                const viewportCenter = scrollY.get() + window.innerHeight / 2;                
                if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
                    setVisibleIndex(parseInt(key))
                }
            })
        }
    }
    const debouncedScrollHandler = useDebounce(scrollHandler, 10)
    useEffect(()=>{
        window.addEventListener('scroll', debouncedScrollHandler );
        return ()=>{ window.removeEventListener('scroll', debouncedScrollHandler );}
    }, [debouncedScrollHandler])   

    function handleTopClick(index:number){
        const ref = refsByKey[index.toString()];
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return (
        <section className={`p-rel ${styles.container}`} ref={container_ref} >
            <p>{visibleIndex}</p>            
            
            <div className={`flex p-rel ${styles.modal_top}`}>
                { Array.from(heroImages.entries()).map(([index, child]) => {
                    return (<motion.button                             
                        key={`button-${index}`}
                        onClick={()=>handleTopClick(index+1)}
                        className={`button ${visibleIndex == index+1 && 'active'}`}
                        >{`Child ${index}`}</motion.button>
                    )})}
            </div>

            { scrollY.get() > 10 && scrollYProgress.get() < 0.99 && (
                <motion.div className={`${styles.modal}`}>
                <AnimatePresence>
                    { Array.from(heroImages.entries()).map(([index, child]) => {
                        if ( Math.abs(visibleIndex - index) > 1 ) return null;
                        return (
                            <motion.div key={`hero-${index}`}
                                layout
                                className={styles.hero_container}   
                                initial={{ opacity: 0, scale: 1.2, filter: 'blur(8px)' }}                     
                                animate={{ opacity: 1,  scale: 1, filter: 'blur(0px)' }}                     
                                exit={{ opacity: 0, scale: 0.8, filter: 'blur(18px)'}}
                                transition={{ delay: 0.2, duration: 0.35, ease: easeOut }}          
                            >{child}</motion.div>
                    )}) }
                </AnimatePresence>                
            </motion.div>)}
           
            <div className={styles.content}>
                { React.Children.map(children, (child, i) => {
                    const isHero = React.isValidElement(child) && child.type === TimelineChild;
                    return ( isHero ? null : (
                        <div className={`bg-light-fade ${styles.content_container}`} ref={el => { if (el) setRef(el, i.toString()); }}>
                            {child}
                        </div>
                    ) )
                })}
            </div>
        </section>
    )
}

type TimelineState = 'visible'|'over'|'under'

export const TimelineChild = ({children}: {state:TimelineState, children: ReactNode}) => { 
    const [scrollState, setScrollState] = useState<TimelineState>('under');
    return <>{children}</>
}

export default TimelineScroller