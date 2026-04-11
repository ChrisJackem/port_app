import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './work_slideshow.module.css'
import { AnimatePresence, motion, useScroll, useTransform, useMotionTemplate, easeOut, useInView } from 'motion/react';
import useParallax from '@/hooks/useParalax';

type SlideImage = {
    src: string,
    alt: string,
    text?:string
}
type WorkSlideShowProps = {
    children: ReactNode,
    images: SlideImage[],
}

const WorkSlideShow = ({images, children}: WorkSlideShowProps) => {
    const [currentImage, setCurrentImage] = useState<SlideImage | undefined>(images[0]);
    const container_ref = useRef<HTMLElement>(null);    
    const isInView = useInView(container_ref, { amount: 0.25 })

    // Parallax
    const paralaxScreen = useParallax([-30, 30]);
    const paralaxText = useParallax([-30, 70]);
    const moveContainerZ = useParallax([-100, 0], container_ref, ['end start', 'end center']);
    const opacContainer = useParallax([0, 1], container_ref, ['end start', 'end center']);

    const InView = useEffect( ()=> {
        if (container_ref.current) {
            if (isInView) {
                container_ref.current.classList.add(styles.active);
            } else {
                container_ref.current.classList.remove(styles.active);
            }
        }
    }, [isInView]);

    return (
        <section className={styles.main_container} ref={container_ref}>
            <motion.div className={styles.container} 
                style={{ 
                transform: useMotionTemplate`translate3d( 0,0, ${moveContainerZ}px )`,
                opacity: useMotionTemplate`${opacContainer}`
                }}>
                <motion.div className={styles.image_container} style={{ transform: useMotionTemplate`translate( -2px, ${paralaxScreen}px )`}}>
                    { currentImage && 
                        <AnimatePresence>
                            <motion.img                        
                                className={`${styles.hero_image}`}                        
                                alt={`Active theme image: ${currentImage.alt}`}      
                                src={currentImage.src}
                            />
                        </AnimatePresence>
                    }
                    <SlideControls />
                </motion.div>

                <motion.div className={styles.child_container} style={{ transform: useMotionTemplate`translateY( ${paralaxText}px )`}} >
                    {children}           
                <motion.div className={styles.cta} >
                    <button className='button active'>Click</button>
                    <button className='button'>Click</button>
                </motion.div>

                </motion.div>

                <div style={{ opacity: 0.3 }}></div>
            </motion.div>
        </section>
    )
}


const SlideControls = () => {

    return (
        <div className={styles.controls}>
            <button className='button'>Button</button>
            <button className='button'>Button</button>
            <button className='button'>Button</button>
        </div>
    )
}

export default WorkSlideShow