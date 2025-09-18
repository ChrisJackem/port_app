/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { motion, stagger, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import './work_container.css';
import { Slide } from '@/app/config/work_config';
import ChipHeader from '../chip_header/chip_header';
import SlideShow from '../slide_show/slide_show';
import LoadingComponent from '../loading_component/loading_component';


const variantsContainer = {
  initial: { transform: "scale(.98)" },
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: .5, x: 0, transform: "scale(.9)", 
    transition: { delayChildren: stagger(1, { startDelay: 0.5, from: "first" }) }
   },
  exit: { opacity: 0, x: -70, y: 10 },
  viewport: { amount: 0.95 }
}

const variantSlideIn = {
  initial:{ x: 100, opacity: 0 },
  whileInView:{ x: 0, opacity: 1 },
}
/**
 * Slideshow and content container
 * This will fetch all images in conf and save them in images state as base64
 * Then we can have a wonderful slideshow! Also keeps track of loading state
 * @param title The title at the top
 * @param conf img urls and other config
 * @param children This will be visible while loading and is the written content
 */
const WorkContainer = ({ title, conf, children }: {
    title: string;
    conf: Slide
    children: React.ReactNode;
}) => {
  const [loadingStatus, setLoadingStatus] = useState<string>('init');
  const [images, setImages] = useState<string[] | null>(null)
  const container_ref = useRef(null);
  const isInView = useInView(container_ref);

  // Batch lazy load the images when isInView
  useEffect(()=>{
    if ( loadingStatus==='init' && isInView ) {
      setLoadingStatus('loading');
      // Load all images and return string[] of base64 data
      Promise.all( conf.images.map( img => {
          try {
              return new Promise( async (res, rej)=>{
                const response = await fetch( `${conf.dir}${img}` );
                const blob = await response.blob();
                const reader = new FileReader();                
                reader.onloadend = ()=> res(reader.result);
                reader.onerror = rej;
                reader.readAsDataURL(blob);           
              })
          } catch (error) {
              console.error(`Fetch Error: ${error}`);
          }
      } ) )
      // Set states
      .then( basedImages => {
        //console.log(JSON.stringify(basedImages, null, 2))
        setImages(basedImages as string[]);
        setLoadingStatus('loaded');
      })
      .catch( E => console.error(`Image load failed:\n ${E}`) );
    }    
  }, [isInView]);

  // CSS
  const ready_class = loadingStatus === 'loaded' && isInView ? 'ready' : '';
  const viewed_class = isInView ? 'viewed' : '';

  return (
    <motion.section className={`work-container flex-column p-rel ${viewed_class} ${ready_class}`}
        key={title + '_container'}
        variants={variantsContainer}
        whileInView= {{transform: "scale(1)", opacity: 1}}
        ref={container_ref}        
    >
      <motion.div className="work-title"
        key={title + '_title'}
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
      >
        <ChipHeader title={title} colBg='var(--midground, red)' colTx='var(--text, red)' />
      </motion.div>
        
      <motion.div className={`slideshow-container`}
          key={`slideshow-${title}`}
          variants={variantSlideIn}
      >
        { images ? 
          <SlideShow 
              title={title}
              inView={isInView}
              images={images}
          /> 
        : <LoadingComponent dark_mode={false}/> }
      </motion.div>
      
      <div className='link-container p-rel'>
        { conf.link !== undefined && images && (
          <div className={`link-button-container psudo chip-tl-box flex`} >
            <button className='chip-a link_button'>Goto</button>
            <small>Goto Blah</small>
          </div>
        )}
      </div> 

      <div className='work-child-outer-container'>
        <div className='work-child-inner-container'>{children}</div>        
      </div>

    </motion.section>
  )
}

export default WorkContainer;