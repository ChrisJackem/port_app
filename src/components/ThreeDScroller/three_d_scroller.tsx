import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll, useMotionTemplate, useTransform, motion, useInView, easeOut, easeInOut, AnimatePresence } from 'framer-motion'
import styles from './three_d_scroller.module.css'
import { STATUS, useImgs } from '@/hooks/useImg';
import LineHeader from '../line_header/line_header';
import { getFileSizeFromBase64, getFileTypeFromBase64 } from '../util/base64utils';
import SvgBtn from '../svg_btns/svg_btns';

type ModeString = 'scroll'|'stop';

type StateType = {
  mode: ModeString;
  progress:number; 
  speed:number; 
  delta?:number;
  clicked_image?:number|null;
}

const ThreeDScroller = ({images, title}: {images:string[], title:string}) => {
  const containerRef = useRef(null)
  const inView = useInView(containerRef);
  const [loadedImages, setLoadedImages] = useState<string[]>();
  const [viewing, setViewing] = useState<number>(-1);
  const [clicked, setClicked] = useState<number>(-1);
  const [status, data] = useImgs(images);
  const [state, setState] = useState<StateType>({
    clicked_image: null,
    mode: 'scroll',
    progress: 0, 
    speed: 0.03 
  });
 
  // Set scroll mode from inView
  useEffect(()=>{    
    setState( s => {
      const nextMode = (inView && s.clicked_image===null) ? 'scroll' : 'stop';
      return {...s, mode: nextMode}
    } );
  }, [inView]);

  // Loads images into the state (base64[])
  useEffect(()=>{
    if (status===STATUS.LOADED && data instanceof Map){
      setLoadedImages(Array.from( data.values() ))
    }
  }, [data, status])
  
  // Dismiss active image
  const handleDismissModal = ()=>{
    setState(s => ({...s, 
      clicked_image: null,
      mode: 'scroll'
    }))
  }
  
  // Set active image
  const handleImageClick = (idx:number) => {
    setClicked(idx);
    const image = loadedImages===undefined ? null : loadedImages[idx] || null;
    setState( (s) => {    
    return{ ...s,
      clicked_image: idx,
      mode: 'stop'
    }
    });
  }

  return (
    <div ref={containerRef} className={`${styles.container}`} >

      <AnimatePresence>
      { state.clicked_image !== null && loadedImages && (<>
        <svg style={{ position: 'fixed', height: '900px', width: '1600px', zIndex:'-1', opacity: 0 }}>
        <defs>          
          <mask id="MASK_IN" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
            <image
              xlinkHref={`/static/images/gif_mask/gif_mask_wide.gif?a="${Math.random()}"`}              
              className='crisp-gif'
              height="100%"
              width="100%"
              />
          </mask>
        </defs>
      </svg>

        <motion.div className={`flex p-abs z-top ${styles.image_modal}`}
            initial={{ opacity: 0 }}           
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2, ease: easeOut }} 
        >

          {/* <p className={`p-abs ${styles.base_text}`}
          >{loadedImages[state.clicked_image ?? 0].substring(100)}</p> */}

          <motion.img
            src={loadedImages[state.clicked_image ?? 0]}
            alt={`Hero Image`}
            style={{ mask: `url(#MASK_IN)` }}
            initial={{ y: 30, filter: 'grayscale(100%)' }}           
            animate={{ y: 0, filter: 'grayscale(0%)'}}
            transition={{ duration: 1 }}  
          />

          <div className={`padded-md flex flex-column p-abs gap-sm`}>
            { state.clicked_image !== undefined && ( <>
                <p><strong>NAME:</strong> {images[state.clicked_image]?.split('/').pop()}</p>
                <p><strong>TYPE:</strong> {getFileTypeFromBase64(loadedImages[state.clicked_image])}</p>
                <p><strong>SIZE:</strong> {getFileSizeFromBase64(loadedImages[state.clicked_image])}</p>
            </>)}
          </div>

          <SvgBtn 
            type={'x'}
            color={'var(--darkest'}
            onClick={handleDismissModal}
            className={`p-abs-right md-btn ${styles.dismiss}`}
          />

        </motion.div>
      </>)}
      </AnimatePresence>

        { loadedImages
          ? ( <div className={`${styles.strip_container}`}>
                  <div className={`${styles.strip}`}>
                      <motion.div className={`flex flex-column ${styles.strip_inner} ${state.mode==='scroll' ? styles.scroll : ''}`} >
                          {loadedImages.map((img, idx) => (
                            <ImageScroll key={idx} idx={idx} onInView={setViewing} src={img} />                      
                          ))}
                          {loadedImages.map((img, idx) => (
                            <ImageScroll key={`${idx}_dupe`} idx={idx} onInView={setViewing} src={img}/>
                          ))}
                      </motion.div>
                  </div>
              </div>
          )
          : (
            <p>Loading...</p>
          )
        }

        <div className={`flex ${styles.text_container}`}>          
          <div> 
            <LineHeader text={'QUICK SAMPLE'}/>
            <h1 className={`${styles.big_letters}`}>{title}</h1>
            <p className={'t-bld'}>Click a thumbnail for detail</p>
          </div>
        </div>

        <div className={`flex ${styles.thumb_container}`}>
          {loadedImages && ( loadedImages.map((img, idx) => (
              <img
                key={idx}
                role='button'
                onClick={()=>handleImageClick(idx)}
                alt={`Horizontal Button #${idx}`}
                src={img}
                className={`${viewing===idx && styles.active} ${styles.hor_strip_image}`}                    
              />                                 
            ))                
          )}
        </div>

    </div>
  )
}

/* The left scrolling images */
const ImageScroll = ({src, idx, onInView }:{ src:string, idx:number, onInView: Function })=>{
  const containerRef = useRef(null);
  const inView  = useInView(containerRef, {amount: 0.25});
  
  useEffect(()=>{
    if (inView) onInView(idx)
  }, [inView]);

  return (
    <div ref={containerRef} className={styles.image_container} >
      <img
        alt={''}
        src={src}
        className={styles.strip_image}
      />
    </div>
  )
}

export default ThreeDScroller