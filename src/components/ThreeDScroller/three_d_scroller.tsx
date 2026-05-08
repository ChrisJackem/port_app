import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll, useMotionTemplate, useTransform, motion, useInView } from 'framer-motion'
import styles from './three_d_scroller.module.css'

type ModeString = 'init'|'scroll'|'userScroll'|'stop';

type StateType = {
  mode: ModeString,
  progress:number; 
  speed:number; 
  delta?:number 
}

const ThreeDScroller = ({images}: {images:string[]}) => {
  const containerRef = useRef(null)
  const inView = useInView(containerRef);
  const mode = useRef<ModeString>('scroll');
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const rafRef = useRef<number | null>(null);
  const myScrollPos = useRef<number|null>(null);
  const [state, setState] = useState<StateType>({
    mode: 'init',
    progress: 0, 
    speed: 0.03 
  });
 
  useEffect(()=>{
    const nextMode = inView ? 'scroll' : 'init';
    if (inView){          
        rafRef.current = window.requestAnimationFrame(update);        
    }else{       
      rafRef.current && window.cancelAnimationFrame(rafRef.current);
    }
    setState( s => ({...s, mode: nextMode}) )
  }, [inView]);

  const update = useCallback(()=>{
      rafRef.current = window.requestAnimationFrame(update);
      if (inView){        
        setState( m => {
          let prog = m.progress += m.speed;
          if (prog > 50) prog = 0             
          return { ...m, progress: prog }
        })
      }    
  }, [inView]);

  // Init 
  useEffect(()=>{
    //rafRef.current = window.requestAnimationFrame(update);
    window.addEventListener('wheel', handleWheel);   

    return ()=> { 
      window.removeEventListener('wheel', handleWheel);
      rafRef.current && window.cancelAnimationFrame(rafRef.current); 
    }
  },[])

  //////////////////// Handlers ///////////////////////////
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mode.current==='stop'){
      mode.current = 'scroll'
      setState
      rafRef.current = window.requestAnimationFrame(update);
    }else{
      mode.current = 'stop'
    }    
  }

  const handleWheel = (event: WheelEvent) => {console.log('KMM')
      const d = event.deltaY;

      if (inView){console.log('OOOOOPPP')
        myScrollPos.current = (containerRef.current as HTMLDivElement | null)?.getBoundingClientRect().y || null;
        console.log(myScrollPos.current)
        window.scrollTo({ top: myScrollPos.current ?? 0 })
        //if (Math.abs(d) > 0) {
          rafRef.current && window.cancelAnimationFrame(rafRef.current);
          setState( m => {
              let prog = m.progress += (m.speed * 20000);
              if (Math.abs(prog) > 50) prog = 0             
              return { ...m,
                mode: 'stop',
                progress: prog 
              }
            })
      }
      //}
    
  }

  return (
    <div 
      ref={containerRef} 
      className={`${styles.container} ${state.mode==='scroll' ? styles.lock : ''}`}
    >
       
        <svg style={{ position: 'fixed', width: 1, height: 1, opacity: 0 }}>
            <defs>
            <mask id="animatedMask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
              <image xlinkHref="static/gif_mask/gif_mask_in.gif" height="100%" width="100%" />
            </mask>
            </defs>        
        </svg>  

        <div className={styles.strip_container}>
            <div className={`${styles.strip}`}>
                <motion.div 
                  className={`flex flex-column ${styles.strip_inner}`}
                  style={{ transform: `translate(0px, -${state.progress}%)` }}
                >
                    {images.map((img, idx) => (
                      <ImageScroll key={idx} src={img} click={handleImageClick}/>                      
                    ))}
                    {images.map((img, idx) => (
                      <ImageScroll key={`${idx}_dupe`} src={img} click={handleImageClick}/>                      
                    ))}
                </motion.div>
            </div>
        </div>
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

const ImageScroll = ({src, click}:{src:string, click: Function})=>{
  const containerRef = useRef(null);
  const  inView  = useInView(containerRef);  
  return (
    <div ref={containerRef} className={styles.image_container}
      onClick={ e => click(e, inView) }
    >
      <p style={{ color: 'white' }}>{inView ? 'YES' : 'NO'}</p>
      <img
        alt={''}
        src={src}
        className={styles.strip_image}
      />
    </div>
  )
}



export default ThreeDScroller