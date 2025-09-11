/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './slide_show.module.css'
import { AnimatePresence, motion } from 'motion/react'
//import { Slide } from '@/app/config/work_config'

const SlideShow = ({ title, inView, images/* data */ }:{ 
        title: string,
        inView:boolean,
        images: string[],
        /* data: Slide */
    }) => {

    function buttonHandler(id:number){
        if (id > -1 && id < images.length){
            setActiveImg(id)
        }
    }
    
    const [activeImg, setActiveImg] = useState(0);
    
    useEffect(()=>{
        //setActiveImg()
    }, [inView]);
    
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
        

        <div className={`${styles.slideshow_buttons} flex`}>
            <button>Play</button>
            { images.length > 1 && images.map( (image, i)=>(
                <button
                    className={`un-border pointer shadow-sm ${styles.slideshow_button}`}
                    key={i.toString()}
                    onClick={()=>buttonHandler(i)}
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