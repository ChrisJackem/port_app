/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './slide_show.module.css'
import './slide_show.module.css';
import { AnimatePresence, motion } from 'framer-motion'
import SvgBtn from '../svg_btns/svg_btns';
import { Slide } from '../work_container/work_container';
import YoutubeEmbed from '../youtube_embed/youtube_embed';
//import useRefs from '@/hooks/useRefs';

const TIMEOUT = 3000;

const SlideShow = ({ title, inView, slides }:{  title: string, inView:boolean, slides: Slide[] }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    //const {refsByKey, setRef} = useRefs();
    const [videoIds, setVideoIds] = useState<string[] | undefined>();
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [playing, setPlaying] = useState<boolean>(true);


    useEffect(()=>{
        // Find video slides
        const found_videos = slides
            .map(slide => slide.embedId)
            .filter((id): id is string => typeof id === 'string');
        if (found_videos.length > 0) setVideoIds(found_videos);
    }, [])

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
        setActiveSlideIndex(activeSlideIndex => ++activeSlideIndex >= slides.length ? 0 : activeSlideIndex);
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
            setActiveSlideIndex(id);
            if (playing) playBtnHandler(true);        
        }
    }

    const activeSlide = slides[activeSlideIndex];
    const hero_height = 400;
    
    return (
    <div className={`p-rel ${styles.slideshow_container}`}>

        { inView && videoIds !== undefined && videoIds.map((id, i)=> (
            <YoutubeEmbed 
                key={i}
                embedId={id} 
                visible={activeSlide.embedId === id}
            />
        ) )}  

        <AnimatePresence>
            <>
            { !activeSlide.embedId && ( <motion.img
                className={`miter-tl-rb p-abs ${styles.slideshow_image_main}`} 
                height={`${hero_height}px`}
                key={activeSlideIndex}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{    opacity: 0, x: 100 }}
                alt={`Active theme image: ${title}`}      
                src={activeSlide.data}
            /> ) }     
            
            { activeSlide.text && ( 
                <motion.div 
                    className={`chip-tl-br ${styles.slide_text}`}
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{    opacity: 0, x: 100 }}                                  
                >{activeSlide.text}</motion.div>
            )}
            </>
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
            
            { slides.length > 1 && slides.map(( image, i )=>(
                <button
                    className={`un-border ${i===activeSlideIndex ? styles.active : ''} ${styles.slideshow_button}`}
                    key={i.toString()}
                    onClick={()=> imgBtnHandler(i)}
                >
                    <img
                        className={styles.img_btn}
                        alt={`Slideshow Image #${i}.`}
                        src={slides[i].data}
                    ></img>
                </button>
            ))}
        </div>}

    </div>
    )
}

export default SlideShow