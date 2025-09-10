import React, { useEffect, useState } from 'react'
import './slide_show.css'
import { AnimatePresence, motion } from 'motion/react'
import { Slide } from '@/app/config/work_config'

const SlideShow = ({ title, inView, data }:{ 
        title: string,
        inView:boolean,
        data: Slide
}) => {

    function buttonHandler(id:number){
        if (id > -1 && id < data.images.length){
            setActiveImg(id)
        }
    }
    
    const [activeImg, setActiveImg] = useState(0);
    
    useEffect(()=>{
        //setActiveImg()
    }, [inView]);
    
    return (
    <div className='slideshow-container'>
        <AnimatePresence>
            <motion.img
                id={`slideshow-main-${title}`}
                className='slideshow-image-main'                     
                key={activeImg}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -200, y: 0, opacity: 0 }}
                transition={{ duration: 0.85, type: 'spring' }}
                alt={`Active theme image: ${title}`}
                width={400} 
                height={355}                            
                src={`${data.dir}${data.images[activeImg]}`}
                layout
            />
        </AnimatePresence>

        <div className='slideshow-buttons flex'>
            { data.images.map( (image, i)=>(
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    alt='meaning'
                    key={i.toString()}
                    src={`${data.dir}${data.images[i]}`}
                    width={50}
                    height={50}
                    onClick={()=>buttonHandler(i)}
                ></img>
            ))}
        </div>
    </div>
    )
}

export default SlideShow