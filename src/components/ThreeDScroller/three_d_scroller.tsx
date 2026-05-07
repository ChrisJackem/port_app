import React, { useEffect, useRef, useState } from 'react'
import { useScroll, useMotionTemplate, useTransform, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './three_d_scroller.module.css'


const ThreeDScroller = ({images}: {images:string[]}) => {
  const containerRef = useRef(null)
  const { ref: inViewRef, inView } = useInView();
  const { scrollY } = useScroll({ target: containerRef });
  const [mode, setMode] = useState<'init'|'scroll'|'userScroll'|'stop'>('scroll');
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  useEffect(()=>{
    
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>

        <svg style={{ position: 'fixed', width: 0, height: 0, opacity: 0 }}>
            <defs>
            <mask id="animatedMask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
              <image xlinkHref="static/gif_mask/gif_mask_in.gif" height="100%" width="100%" />
            </mask>
            </defs>        
        </svg>  

        <div ref={inViewRef} className={styles.strip_container}>
            <div className={`${styles.strip}`}>
                <div className={`flex flex-column ${styles.strip_inner} ${mode==='scroll' ? styles.scroll : ''}`} 
                style={{ filter: 'url(#animatedMask)' }}
                >
                    {images.map((img, idx) => (
                      <ImageScroll key={idx} src={img}/>                      
                    ))}
                    {images.map((img, idx) => (
                      <ImageScroll key={`${idx}_dupe`} src={img}/>                      
                    ))}
                </div>
            </div>
        </div>
        <div className={`flex flex-align-center`}>
          <div>
            <h1 className='t-jumbo t-ital'>TITLE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempora.</p>
          </div>
        </div>
        <div className={`flex flex-column flex-just-center padded-md`}>
          <button className='button'>Click</button>
          <button className='button active'>Click</button>
          <button className='button'>Click</button>
          <button className='button'>Click</button>
        </div>
    </div>
  )
}

const ImageScroll = ({src}:{src:string})=>{
  return (
    <div>
      <img
        alt={''}
        src={src}
        className={styles.strip_image}
      />
    </div>
  )
}



export default ThreeDScroller