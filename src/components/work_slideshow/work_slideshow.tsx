import React, { ReactNode, useRef, useState } from 'react'
import styles from './work_slideshow.module.css'
import { AnimatePresence, motion, useScroll, useTransform, useMotionTemplate, easeOut } from 'motion/react'

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
    const container_ref = useRef(null);
    
    const { scrollYProgress: scrollYProgressMove } = useScroll({
        target: container_ref,
        offset: ["end start", "start start"]
    })

     const { scrollYProgress } = useScroll({
        target: container_ref,
        offset: ["start start", "end end"]
    })
    const paralaxScreen = useTransform( scrollYProgress, [0, 1], [-30, 30], { clamp: false } )
    const paralaxText = useTransform( scrollYProgress, [0, 1], [-40, 40], { clamp: false } )
    
    const moveContainer = useTransform( scrollYProgressMove, [0, 1], [-200, 0] )
    const opacContainer = useTransform( scrollYProgressMove, [0, 1], [0, 1] )


    return (
        <section className={styles.main_container} ref={container_ref}>
            <motion.div className={styles.container} style={{ 
                transform: useMotionTemplate`translate3d( 0,0, ${moveContainer}px )`,
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
                <div className={styles.cta}>
                    <button className='button active'>Click</button>
                    <button className='button'>Click</button>
                </div>

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