import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './work_slideshow.module.css'
import { AnimatePresence, motion, useScroll, useTransform, useMotionTemplate, easeOut, useInView, useMotionValueEvent } from 'motion/react';
import useParallax from '@/hooks/useParalax';

type SlideImage = {
    id: number,
    src: string,
    alt: string,
    text?:string
}

const WorkSlideShow = ({images, children}: { children: ReactNode, images: SlideImage[] }) => {
    const [currentImage, setCurrentImage] = useState<SlideImage | undefined>(undefined);
    const container_ref = useRef<HTMLElement>(null);    
    const isInView = useInView(container_ref, { amount: 0.25 });
    const { screenY, textY, contY, contO } = useParallax({ ref: container_ref as React.RefObject<HTMLElement> });

    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalHeight, naturalWidth } = e.currentTarget;
        console.log(`loaded ${e}`)
        setDimensions({ height: naturalHeight, width: naturalWidth });
    };

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
            <motion.div className={styles.container} style={{ z: contY, opacity: contO }}>
                <motion.div 
                    className={styles.image_container}                     
                    style={{ 
                        y: screenY,
                        aspectRatio: `${dimensions.width} / ${dimensions.height}`,
                        paddingTop: `${(dimensions.height / dimensions.width) * 100}%`,
                    }}
                >
                    <AnimatePresence>
                        { currentImage 
                        ? (<motion.img
                            onLoad={handleImageLoad}
                            key={currentImage.id}
                            initial={{ opacity: 0, x: -30}}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{    opacity: 0, x: 30 }}
                            transition={{ duration: 0.4, ease: 'easeOut', type: 'tween' }}                              
                            className={`${styles.hero_image}`}                        
                            alt={`Active theme image: ${currentImage.alt}`}      
                            src={currentImage.src}
                            width={1000}
                            height={600}
                            />)
                        : (<div>Loading</div>)
                        }
                    </AnimatePresence>
                    { images.length > 1 
                        ? ( <SlideControls 
                            slides={images}
                            onUserUpdate={setCurrentImage}
                            />) 
                        : (<div>|</div>) 
                    }
                </motion.div>

                <motion.div className={styles.child_container} style={{ y: textY }} >
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


const SlideControls = ({slides, onUserUpdate}: {slides: SlideImage[], onUserUpdate:Function}) => {
    const activeId = useRef<number>(0);
    const [slide, setSlide] = useState<SlideImage>(slides[activeId.current]);

    function changeSlide(
        advance:number | null = 1, // or
        change: number | null = null
    ){
        if (advance !== null){
            activeId.current = (activeId.current + advance + slides.length) % slides.length;
        }else if (change  !== null){            
            activeId.current = change;
        }else{
            console.error(`changeSlide error: nothing`)
            return;
        }
        setSlide( slides[activeId.current] );
        onUserUpdate( slides[activeId.current] );
    }

    return (
        <div className={styles.controls}>
            <div>{slide.id}</div>
            <button className='button' onClick={()=>changeSlide(null,0)}>0</button>
            <button className='button' onClick={()=>changeSlide(null,1)}>1</button>
            <button className='button' onClick={()=>changeSlide(null,2)}>2</button>
            <button className='button' onClick={()=>changeSlide(-1)}>&lt;</button>
            <button className='button' onClick={()=>changeSlide(1)}>&gt;</button>
        </div>
    )
}

export default WorkSlideShow