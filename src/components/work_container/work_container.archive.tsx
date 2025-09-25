/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import './work_container.css';
import { Slide } from '@/app/config/work_config';
import ChipHeader from '../chip_header/chip_header';
import SlideShow from '../slide_show/slide_show';
import LoadingComponent from '../loading_component/loading_component';
import { fetchFile } from '@/hooks/useImg';

/**
 * Slideshow and content container.
 * Keeps track of loading state and waits to fetch images until inView (motion)
 * * Uses the global CACHE (fetchFile)
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
      Promise.all( conf.images.map( img => fetchFile(`${conf.dir}${img}`) ))       
        .then( basedImages => {
          setImages(basedImages as string[]);
          setLoadingStatus('loaded');
        })
        .catch( E => console.error(`Image load failed:\n ${E}`) );
    }    
  }, [isInView]);

  return (
    <section className='work-container flex-column p-rel' ref={container_ref}>     
      <ChipHeader title={title} colBg='var(--foreground, #FFF)' colTx='var(--text, red)' />
      { images === null 
        ? <LoadingComponent 
            dark_mode={true}
            height={400 + 'px'}            
          />
        : <SlideShow 
            title={title}
            inView={isInView}
            images={images}              
        /> 
      }      
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

    </section>
  )
}

export default WorkContainer;