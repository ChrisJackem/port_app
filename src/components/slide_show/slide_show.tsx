/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './slide_show.module.css'
import './slide_show.module.css';
import { AnimatePresence, motion } from 'motion/react'
import SvgBtn from '../svg_btns/svg_btns';
import { Slide } from '../work_container/work_container';

const TIMEOUT = 3000;

const SlideShow = ({ title, inView, slides }:{  title: string, inView:boolean, slides: Slide[] }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [playing, setPlaying] = useState<boolean>(true);

    useEffect(() => {
        if (!(slides.length > 1)) return;
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
    }, [inView]);

    function tickHandler() {
        setActiveSlide(activeSlide => ++activeSlide >= slides.length ? 0 : activeSlide);
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
        if (id > -1 && id < slides.length){
            setActiveSlide(id);
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
                key={activeSlide}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{    opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                alt={`Active theme image: ${title}`}      
                src={slides[activeSlide].data}
            />
        </AnimatePresence>        

        { slides.length &&
        <div 
            className={`${styles.slideshow_buttons} flex`}
            style={{ animationDuration: `${TIMEOUT}ms`}}
        >             
             <SvgBtn
                className={`${styles.play_button}`}
                type={playing ? 'pause' : 'play'} 
                onClick={()=>playBtnHandler()}
             ></SvgBtn>
            
            { slides.length > 1 && slides.map( (image, i)=>(
                <button
                    className={`un-border ${i===activeSlide ? styles.active : ''} ${styles.slideshow_button}`}
                    key={i.toString()}
                    onClick={()=> imgBtnHandler(i)}
                    aria-hidden='true'
                >
                    <img
                        className={styles.img_btn}
                        alt={`Slideshow Image #${i}.`}
                        src={slides[i].data}
                    ></img>
                </button>
            ))}
        </div>}

    </motion.div>
    )
}

export default SlideShow