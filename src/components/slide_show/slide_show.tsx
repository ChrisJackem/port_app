/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './slide_show.module.css'
import './slide_show.module.css';
import { AnimatePresence, motion } from 'motion/react'

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
            console.log('stopped ', title)
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, has_images]);

    function tickHandler() {
        setActiveImg(activeImg => ++activeImg >= images.length ? 0 : activeImg);
    }

    function playBtnHandler( force_off=false ){
        setPlaying( playing => {
            const ret = force_off===true ? false : !playing;
            // Remove no matter what incase of spam click
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
    <div className={`p-rel padded ${styles.slideshow_container}`} >
        
        <AnimatePresence>
            <motion.img
                className={`miter-tl-rb p-abs ${styles.slideshow_image_main}`}                     
                key={activeImg}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ duration: .5, type: 'tween' }}
                alt={`Active theme image: ${title}`}      
                src={`${images[activeImg]}`}
            />
        </AnimatePresence>        

        { has_images &&<div className={`${styles.slideshow_buttons} flex`}>
             <button onClick={()=>playBtnHandler()}>{ playing ? 'Stop' : 'Play' }</button>
            { images.length > 1 && images.map( (image, i)=>(
                <button
                    className={`un-border pointer ${i===activeImg ? styles.active : ''} ${styles.slideshow_button}`}
                    key={i.toString()}
                    onClick={()=> imgBtnHandler(i)}
                >
                <img
                    className={styles.img_btn}
                    alt={`Button image for image #${i}.`}                    
                    src={`${images[i]}`}                                      
                ></img>
                </button>
            ))}
        </div>}

    </div>
    )
}

export default SlideShow