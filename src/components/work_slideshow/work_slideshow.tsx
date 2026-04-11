import React, { ReactNode, useRef, useState } from 'react'
import styles from './work_slideshow.module.css'
import { AnimatePresence, motion, useScroll, useTransform, useMotionTemplate } from 'motion/react'

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
    const { scrollYProgress } = useScroll({
        target: container_ref,
        offset: ["start end", "end start"]
    })
    const paralaxScreen = useTransform( scrollYProgress, [0, 1], [-12, 12], { clamp: false } )
    const paralaxText = useTransform( scrollYProgress, [0, 1], [-8, 8], { clamp: false } )


    return (
    <div className={styles.container} ref={container_ref}>

        <motion.div className={styles.child_container}
        style={{ transform: useMotionTemplate`translateY( ${paralaxText}% )`}}
        >
            {children}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <motion.div className={styles.cta}>
            <button className='button active'>Click</button>
            <button className='button'>Click</button>

        </motion.div>
        </motion.div>

        <motion.div className={styles.image_container} 
        style={{ transform: useMotionTemplate`translate( -5%, ${paralaxScreen}% )`}}>
            { currentImage && 
                <AnimatePresence>
                    <motion.img                        
                        className={`${styles.hero_image}`}                        
                        alt={`Active theme image: ${currentImage.alt}`}      
                        src={currentImage.src}
                    />
                </AnimatePresence>
            }
            <div>Controls</div>
        </motion.div>
        
        <div style={{ opacity: 0.3 }}></div>

    </div>
    )
}

export default WorkSlideShow