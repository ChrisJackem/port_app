/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './slide_show.module.css'
import './slide_show.module.css';
import { AnimatePresence, motion } from 'motion/react'
//import { Slide } from '@/app/config/work_config'

const TIMEOUT = 1000;

const SlideShow = ({ title, inView, images/* data */ }:{ 
    title: string,
    inView:boolean,
    images: string[],
    /* data: Slide */
}) => {

    const [activeImg, setActiveImg] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [playing, setPlaying] = useState<boolean>(true);

    useEffect(() => {
        // Start interval if on screen and no interval running
        if ( playing && inView && !intervalRef.current && images.length > 1 ) {
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
                console.log('killed ', title)
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [inView]);

    function tickHandler() {
        setActiveImg((activeImg)=> ++activeImg >= images.length ? 0 : activeImg);
    }

    function playBtnHandler(){
        setPlaying( playing => {
            const ret = !playing;
            // Remove no matter what incase of spam click
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (ret) intervalRef.current = setInterval(tickHandler, TIMEOUT);            
            return ret
        } );
    }

    function imgBtnHandler(id:number){
        if (id > -1 && id < images.length){
            setActiveImg(id);        
        }
    }
    
    return (
    <div 
        className={`p-rel padded ${styles.slideshow_container ?? ''}`}
        style={{
            margin: '1rem 3% 0 0',
            paddingTop: '395px'
        }}
    >
        <div
            className='miter-tl-rb p-abs underer bg-dk'
            style={{ width: 800, height: 400 }}
        ></div>
        
        <AnimatePresence>
            <motion.img
                className={`miter-tl-rb p-abs under ${styles.slideshow_image_main ?? ''}`}                     
                key={activeImg}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ duration: .5, type: 'tween' }}
                alt={`Active theme image: ${title}`}
            width={800} 
            height={400}                            
                src={`${images[activeImg]}`}
            />
        </AnimatePresence>
        

        <div className={`${styles.slideshow_buttons} flex psudo`}>

            <button  onClick={playBtnHandler}>{ playing ? 'Stop' : 'Play' }</button>

            { images.length > 1 && images.map( (image, i)=>(
                <button
                    className={`un-border pointer ${i===activeImg ? styles.active : ''} ${styles.slideshow_button}`}
                    key={i.toString()}
                    onClick={()=>imgBtnHandler(i)}
                >
                <img
                    alt={`Button image for image #${i}.`}                    
                    src={`${images[i]}`}
                    width={50}
                    height={50}
                ></img>
                </button>
            ))}

        </div>
    </div>
    )
}

export default SlideShow