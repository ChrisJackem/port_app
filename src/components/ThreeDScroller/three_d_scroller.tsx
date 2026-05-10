import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll, useMotionTemplate, useTransform, motion, useInView, easeOut, easeInOut } from 'framer-motion'
import styles from './three_d_scroller.module.css'
import { STATUS, useImgs } from '@/hooks/useImg';

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

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
   setState( (s) => {
    //const newMode = s.mode==='scroll' ? 'stop' : 'scroll';
    const img = (e.target as HTMLImageElement).getAttribute('src');    
    return{ 
      ...s,
      clicked_image: img,
      mode: 'stop'
    }
   });
  }

  const handleHover = (over:boolean)=>{
    /* setState( s => {
    const newMode = over ? 'stop' : 'scroll';
    return{ ...s, mode: newMode }
   }); */
  }

  const handleDismissModal = ()=>{
    setState(s => ({...s, 
      clicked_image: null,
      mode: 'scroll'
    }))
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
            initial={{ scale: 2 }}           
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: easeOut }}  
          />
          <p>Some sgit</p>
          <button className={`button`}
            style={{ position: 'absolute', top: 0, right: 0, zIndex: 999999}}
            onClick={handleDismissModal}
          >X</button>
        </div>
      </>)}
        { status===STATUS.LOADED && data instanceof Map
          ? (
              <div className={`${styles.strip_container} `}
                onMouseEnter={()=>handleHover(true)}
                onMouseLeave={()=>handleHover(false)}
              >
                  <div className={`${styles.strip}`}>
                      <motion.div className={`flex flex-column ${styles.strip_inner} ${state.mode==='scroll' ? styles.scroll : ''}`} >
                          {Array.from(data.values()).map((img, idx) => (
                            <ImageScroll key={idx} src={img} click={handleImageClick}/>                      
                          ))}
                          {Array.from(data.values()).map((img, idx) => (
                            <ImageScroll key={`${idx}_dupe`} src={img} click={handleImageClick}/>
                          ))}
                      </motion.div>
                  </div>
              </div>
          )
          : (
            <p>Loading...</p>
          )
        }

        <div className={`flex flex-align-center`}>
          <div>
            <h1 className='t-jumbo t-ital'>DESIGN</h1>
            <p>Click to expand images</p>
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

const ImageScroll = ({src, click}:{ src:string, click: (e: React.MouseEvent<HTMLImageElement>) => void} )=>{
  const containerRef = useRef(null);
  const  inView  = useInView(containerRef);
  return (
    <div ref={containerRef} className={styles.image_container}>
      {/* <p style={{ color: 'white' }}>{inView ? 'YES' : 'NO'}</p> */}
      <img
        onClick={click}
        alt={''}
        src={src}
        className={styles.strip_image}
      />
    </div>
  )
}



export default ThreeDScroller