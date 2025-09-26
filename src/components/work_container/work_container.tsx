/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import './work_container.css';
import ChipHeader from '../chip_header/chip_header';
import SlideShow from '../slide_show/slide_show';
import LoadingComponent from '../loading_component/loading_component';
import { fetchFile, STATUS} from '@/hooks/useImg';
import useRefs from '@/hooks/useRefs';

// Individual slides
export type Slide = {
  title: string;
  url: string;
  alt?: string;
  embedId?: undefined | string;
  text?: undefined | string;
  data?: undefined | string;
}

// State of the component
export type SlideState = {
  status: string; // useImg constants
  slides: Slide[];
}

export type WorkContainerProps = {
    title: string;
    content: Slide[]
    children: React.ReactNode;
}
/**
 * Slideshow and content container.
 * Keeps track of loading state and waits to fetch images until inView (motion)
 * * Uses the global CACHE (fetchFile)
 * @param title The title at the top
 * @param conf img urls and other config
 * @param children This will be visible while loading and is the written content
 */
const WorkContainer = ({ title, content, children }: WorkContainerProps) => {
  const [slideState, setSlideState] = useState<SlideState>({ status: STATUS.INIT, slides:content });

  const container_ref = useRef(null);
  const isInView = useInView(container_ref);

  // Batch lazy load the images when isInView
  useEffect(()=>{
    if ( slideState.status === STATUS.INIT && isInView ) {
      setSlideState( slideState => ({ ...slideState, status: STATUS.LOADING }) );
      Promise.all( content.map(item => item.url).map(img => fetchFile(img)) )
        .then( basedImages => {
          setSlideState( slideState => ({
              ...slideState,
              status: STATUS.LOADED,
              slides: content.map( (slide, i) => ({
                  ...slide,
                  data: basedImages[i] 
              }))
            })          
          );
        })
        .catch( E => {
          console.error(`slide error: ${E}`);
          setSlideState( slideState => ({...slideState, status: STATUS.FAILED }) );
        })
    };
  }, [isInView, content]);

  return (
    <section className='work-container flex-column p-rel' ref={container_ref}>     
      <ChipHeader title={title} colBg='var(--foreground, #FFF)' colTx='var(--text, red)' />
      { slideState.status !== STATUS.LOADED 
        ? <LoadingComponent 
            dark_mode={true}
            height={ '400px'}
          />
        : <SlideShow 
            title={title}
            inView={isInView}
            slides={slideState.slides}              
        /> 
      }      
      <div className='link-container p-rel'>
        {/* { images && (
          <div className={`link-button-container psudo chip-tl-box flex`} >
            <button className='chip-a link_button'>Goto</button>
            <small>Goto Blah</small>
          </div>
        )} */}
      </div>
      <div className='work-child-outer-container'>
        <div className='work-child-inner-container'>{children}</div>        
      </div>

    </section>
  )
}

export default WorkContainer;