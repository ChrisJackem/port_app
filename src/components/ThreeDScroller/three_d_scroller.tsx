import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll, useMotionTemplate, useTransform, motion, useInView, easeOut, easeInOut } from 'framer-motion'
import styles from './three_d_scroller.module.css'
import { STATUS, useImgs } from '@/hooks/useImg';
import LineHeader from '../line_header/line_header';
import { getFileSizeFromBase64, getFileTypeFromBase64 } from '../util/base64utils';

type ModeString = 'init'|'scroll'|'userScroll'|'stop';

type StateType = {
  mode: ModeString;
  progress:number; 
  speed:number; 
  delta?:number;
  clicked_image?:string|null;
}

const ThreeDScroller = ({images}: {images:string[]}) => {
  const containerRef = useRef(null)
  const inView = useInView(containerRef);

  const [loadedImages, setLoadedImages] = useState<string[]>();
  const [viewing, setViewing] = useState<number>(-1);
  const [clicked, setClicked] = useState<number>(-1);


  const [status, data] = useImgs(images);
  const [state, setState] = useState<StateType>({
    mode: 'init',
    progress: 0, 
    speed: 0.03 
  });
 
  useEffect(()=>{
    const nextMode = inView ? 'scroll' : 'stop';
    setState( s => ({...s, mode: nextMode}) );
  }, [inView]);

  useEffect(()=>{
    if (status===STATUS.LOADED && data instanceof Map){
      setLoadedImages(Array.from( data.values() ))
    }
  }, [data, status])
  
  const handleDismissModal = ()=>{
    setState(s => ({...s, 
      clicked_image: null,
      mode: 'scroll'
    }))
  }
  


  const handleImageClick = (idx:number) => {
    setClicked(idx);
    const image = loadedImages===undefined ? null : loadedImages[idx] || null;
    setState( (s) => {    
    return{ ...s,
      clicked_image: image,
      mode: 'stop'
    }
    });
  }



  return (
    <div ref={containerRef} className={`${styles.container}`} >      
      { state.clicked_image && (<>
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

        <div className={`flex ${styles.image_modal}`}>
          <motion.img
            src={state.clicked_image}
            alt={`Hero Image`}
            style={{ mask: `url(#MASK_IN)` }}
            /* initial={{ scale: 2 }}           
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: easeOut }}   */
          />
          <div 
            className={`padded-md`}
            style={{ position: "absolute", top: 0, left: 0}}
          >
            <p><strong>NAME:</strong> {state.clicked_image}</p>
            <p><strong>TYPE:</strong> {getFileTypeFromBase64(state.clicked_image)}</p>
            <p><strong>SIZE:</strong> {getFileSizeFromBase64(state.clicked_image)}</p>
          </div>
          <button className={``}
            style={{ 
              position: 'absolute', 
              top: 0, 
              right: 0, 
              zIndex: 999999,
              padding: '1rem'}}
            onClick={handleDismissModal}
          >X</button>
        </div>
      </>)}

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

        <div className={`flex flex-column flex-just-center`} style={{ padding: '2rem', fontSize: 'medium'}}>
          <div> 
            <LineHeader text={'QUICK SAMPLE'}/>
            <h1 className='t-jumbo t-ital'>DESIGN</h1>            
            <p className={'bg-flipped t-bld'} style={{ padding: '0.05rem 1rem'}}>Click a thumbnail for detail</p>
          </div>
          
        <div className={`flex padded-md`}>
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