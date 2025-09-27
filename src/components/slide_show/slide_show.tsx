/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './slide_show.module.css'
import './slide_show.module.css';
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgBtn from '../svg_btns/svg_btns';
import { Slide } from '../work_container/work_container';
import YoutubeEmbed from '../youtube_embed/youtube_embed';

// Timeout interval time (ms)
const TIMEOUT = 3000;
/**
 *  Slideshow component - 
 * Images should be loaded * 
 * 
 * Youtube videos are loaded when inView. url of videos is for thumbnail only.
 * YoutubeEmbed component takes care of the loading state of videos but they are always there while inView is true, just hidden.
 * When inView is false they will be removed, stopping any playing video. ( The only way to stop them easily )
 * 
 * activeSlide (activeSlideIndex) will dictate what is shown. ( image / video )
 * 
 * videoIds will contain any video ids we find in the slide
 * We filter out the video slides with useEffect on init
 * 
 * @param title the title at the top 
 * @param inView visible in viewport 
 * @param slides[] slide data 
 */
const SlideShow = ({ title, inView, slides }:{  title: string, inView:boolean, slides: Slide[] }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [videoIds, setVideoIds] = useState<string[] | undefined>();
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [playing, setPlaying] = useState<boolean>(true);
    const [scope, animate] = useAnimate();
    const [animateControls, setAnimateControls] = useState<undefined | ReturnType<typeof animate>>()
    const activeSlide = slides[activeSlideIndex];
    const hero_height = 400;

    useEffect(()=>{
        progressBar(playing);
        const found_videos = slides // Find video slides
            .map(slide => slide.embedId)
            .filter((id): id is string => typeof id === 'string');
        if (found_videos.length > 0) setVideoIds(found_videos);
    }, [])

    useEffect(() => {
        if (!(slides.length > 1)) return;            
        // Start bar
        progressBar(inView && playing);
        // Reset slide on hide - this hides video loading
        if (!inView) setActiveSlideIndex(0);

        // Interval
        if ( playing && inView && !intervalRef.current ) {
            // Start interval if on screen and no interval running
            intervalRef.current = setInterval(tickHandler, TIMEOUT);
        }else if (!inView && intervalRef.current) {
            // Stop interval if not on screen
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

    function progressBar( start:boolean ){
        if (!start){
            animateControls?.stop();            
            animate( scope.current, 
                { width: "0%" }, 
                { duration: .2, ease: 'linear' })            
        }else{
            setAnimateControls( 
                animate( scope.current, 
                    { width: ["0%", "100%"] }, 
                    { duration: TIMEOUT / 1000, ease: 'linear' })
            )
        }
    }

    function tickHandler() {        
        progressBar(true);
        setActiveSlideIndex(activeSlideIndex => ++activeSlideIndex >= slides.length ? 0 : activeSlideIndex);
    }

    function playBtnHandler( force_off=false ){
        setPlaying( playing => {
            const ret = force_off===true ? false : !playing;
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (ret) intervalRef.current = setInterval(tickHandler, TIMEOUT);
            progressBar(ret);
            return ret;
        } );
    }

    function imgBtnHandler(id:number){
        if (id > -1 && id < slides.length){
            setActiveSlideIndex(id);
            if (playing) playBtnHandler(true);        
        }
    }    
    
    return (
        <div className={`p-rel ${styles.slideshow_container}`}>

            <div
                ref={scope}
                className={`bg-ac ${styles.progress_bar}`}                
            ></div>

            { inView && videoIds !== undefined && videoIds.map((id, i)=> (
                <YoutubeEmbed 
                    key={i}
                    embedId={id} 
                    visible={activeSlide.embedId === id}
                />
            ) )}        

            <AnimatePresence>
                <>
                { !activeSlide.embedId && ( 
                    <motion.img
                        className={`miter-tl-rb p-abs ${styles.slideshow_image_main}`} 
                        height={`${hero_height}px`}
                        key={activeSlideIndex}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{    opacity: 0, x: 100 }}
                        transition={{ duration: 0.2, ease: 'easeOut', type: 'tween' }}
                        alt={`Active theme image: ${title}`}      
                        src={activeSlide.data}
                    />
                ) }
                
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