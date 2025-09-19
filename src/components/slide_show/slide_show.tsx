/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './slide_show.module.css'
import './slide_show.module.css';
import { AnimatePresence, motion } from 'motion/react'
import SvgBtn from '../svg_btns/svg_btns';

const TIMEOUT = 1000;

const SlideShow = ({ title, inView, images }:{ 
    title: string,
    inView:boolean,
    images: string[],
}) => {
    const [activeImg, setActiveImg] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [playing, setPlaying] = useState<boolean>(true);
    const has_images = images.length > 1;

    useEffect(() => {
        if (!has_images) return;
        // Start interval if on screen and no interval running
        if ( playing && inView && !intervalRef.current ) {
            intervalRef.current = setInterval(tickHandler, TIMEOUT);
        }
        // Stop interval if not on screen
        else if (!inView && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [inView, has_images]);

    function tickHandler() {
        setActiveImg(activeImg => ++activeImg >= images.length ? 0 : activeImg);
    }

    function playBtnHandler( force_off=false ){
        setPlaying( playing => {
            const ret = force_off===true ? false : !playing;
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (ret) intervalRef.current = setInterval(tickHandler, TIMEOUT);            
            return ret;
        } );
    }

    function imgBtnHandler(id:number){
        if (id > -1 && id < images.length){
            setActiveImg(id);
            if (playing) playBtnHandler(true);        
        }
    }
    
    return (
    <motion.div 
        className={`p-rel ${styles.slideshow_container}`}
        layout
    >
        
        <AnimatePresence>
            <motion.img
                className={`miter-tl-rb p-abs ${styles.slideshow_image_main}`}                     
                key={activeImg}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{    opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                alt={`Active theme image: ${title}`}      
                src={`${images[activeImg]}`}
            />
        </AnimatePresence>        

        { has_images &&
        <div 
            className={`${styles.slideshow_buttons} flex`}
            style={{ animationDuration: `${TIMEOUT}ms`}}
        >             
             <SvgBtn
                className={`${styles.play_button}`}
                type={playing ? 'pause' : 'play'} 
                onClick={()=>playBtnHandler()}
             ></SvgBtn>
            
            { images.length > 1 && images.map( (image, i)=>(
                <button
                    className={`un-border ${i===activeImg ? styles.active : ''} ${styles.slideshow_button}`}
                    key={i.toString()}
                    onClick={()=> imgBtnHandler(i)}
                    aria-hidden='true'
                >
                    <img
                        className={styles.img_btn}
                        alt={`Slideshow Image #${i}.`}
                        src={images[i]}                                  
                    ></img>
                </button>
            ))}
        </div>}

    </motion.div>
    )
}

export default SlideShow