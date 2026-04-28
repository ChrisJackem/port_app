import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { AnimatePresence, easeIn, easeInOut, motion, useScroll, useAnimation, useInView } from 'motion/react'
import styles from './timeline_scroller.module.css'
import useRefs from '@/hooks/useRefs'
import useDebounce from '@/hooks/useDebounce'


/** Spinning plane animation like from superman 3 */
const crystalVariants = {
    initial:{ opacity: 0, scale: 0.7, filter: 'blur(10px)', rotateY: 90, rotateX: -40, rotateZ: 20 },                  
    animate:{ opacity: 1,  scale: 1.5, filter: 'blur(0px)' , rotateY: 0, rotateX: 0, rotateZ: 1 },                  
    exit:{ opacity: 0, scale: 0.5, filter: 'blur(18px)', rotateY: 45, rotateX: 90, rotateZ: -20}
}

export const TextVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }    
}

const TimelineScroller = ({children}: {children: ReactNode}) => {
    const controls = useAnimation();
    const container_ref = useRef(null);
    const isInView = useInView(container_ref);
    const {refsByKey, setRef} = useRefs();
    const [heroImages, setHeroImages] = useState<Map<number, ReactNode>>(new Map());
    const { scrollY, scrollYProgress } = useScroll()
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const [outOfBounds, setOutOfBounds] = useState(true);

    useEffect(() => {
        if (isInView) {
        controls.start("animate");
        }
    }, [controls, isInView]);
    
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
        const _scrollY = scrollY.get()
        if (refsByKey) {
            Object.entries(refsByKey).forEach(([key, ref]) => {
                const rect = ref.getBoundingClientRect();
                const elementTop = rect.top + _scrollY;
                const elementBottom = elementTop + rect.height;
                const viewportCenter = _scrollY + window.innerHeight / 2;                
                if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
                    setVisibleIndex(parseInt(key))
                }
                console.log()
            })
        }
        setOutOfBounds(_scrollY < 500 || scrollYProgress.get() > 0.9);        
    }
    const debouncedScrollHandler = useDebounce(10, scrollHandler)
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
        <section className={`p-rel ${styles.container}`} ref={container_ref}>
            {/* <p>{visibleIndex}</p> */}
            <div className={`p-rel ${styles.modal_nav}`}>
                <ol type="I" className={`flex flex-column ${styles.ol_nav}`}>
                <AnimatePresence>
                { !outOfBounds && Array.from(heroImages.entries()).map(([index, child]) => {
                    return (
                        <motion.li
                            onClick={()=>handleTopClick(index+1)}
                            initial={{ opacity: 0, x: 100}}
                            animate={{ opacity: 1, x: 0}}
                            exit={{ opacity: 0, x: 100}}
                            transition={{ delay: 0.2, duration: 0.3, ease:easeIn }}
                            className={`button ${visibleIndex == index+1 && 'active'} ${styles.list_nav}`} 
                            key={`list-${index}`}
                            role='button'
                        >                            
                        </motion.li>
                )})}
                </AnimatePresence>
                </ol>
            </div>
            
                <motion.div className={`${styles.modal}`}>
                <AnimatePresence>
                    { Array.from(heroImages.entries()).map(([index, child]) => {
                        if ( Math.abs(visibleIndex - index) > 1 || outOfBounds)  return null;
                        return (
                            <motion.div
                                key={`hero-${index}`}
                                layout                               
                                className={`${styles.hero_container}`}
                                variants={ crystalVariants }
                                initial={'initial'} animate={'animate'} exit={'exit'}
                                transition={{ delay: 0.2, duration: 1, ease:easeInOut }}          
                            >{child}</motion.div>
                    )}) }
                </AnimatePresence>                
            </motion.div>
           
            <div className={`${styles.content}`}>
                { React.Children.map(children, (child, i) => {
                    const isHero = React.isValidElement(child) && child.type === TimelineChild;
                    return ( isHero ? null : (
                        <motion.div 
                            ref={el => { if (el) setRef(el, i.toString()); }}
                            variants={TextVariant}
                            initial={'initial'} animate={'animate'} exit={'exit'}
                        >
                            {child}
                        </motion.div>
                    ) )
                })}
            </div>
        </section>
    )
}

type TimelineState = 'visible'|'over'|'under'

export const TimelineChild = ({children}: {children: ReactNode}) => {
    return (<>{children}</>);
}

export default TimelineScroller