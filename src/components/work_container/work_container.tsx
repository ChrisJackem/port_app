/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useInView } from 'motion/react';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import './work_container.css';
import ChipHeader from '../chip_header/chip_header';
import SlideShow from '../slide_show/slide_show';
import LoadingComponent from '../loading_component/loading_component';
import { fetchFile, STATUS} from '@/hooks/useImg';

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
  status: string;
  slides: Slide[];
}
// Init slides
const createInitialSlides = (slides: Slide[]): SlideState => ({
    status: STATUS.INIT,
    slides: slides.map(slide => ({ 
      ...slide,     
      alt: slide.alt ? slide.alt : `${slide.title} image`,
      data: undefined 
    }))
})
function slideReducer( state: SlideState, action: { type: string,  payload: unknown }): SlideState {
  try{
    switch (action.type){    
      
      case 'LOADED':
        const DATA = action.payload as Map<string, string>;
        if (!DATA || !action.payload) throw new Error(`No Data:\n${JSON.stringify(action.payload)}`);
        return ({
          ...state,
          status: STATUS.LOADED,
          slides: state.slides.map( slide => ({ ...slide, data: DATA.get(slide.url) }) )
        })

      default: return state;
    }
  }catch(E){ 
    console.error(`ERR: ${E}`)
    return state; 
  }
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
  const [slideState, slideDispatch] = useReducer(slideReducer, content, createInitialSlides)
  const container_ref = useRef(null);
  const isInView = useInView(container_ref);

  // Batch lazy load the images when isInView
  useEffect(()=>{
    if ( slideState.status === STATUS.INIT && isInView ) {
      const imgs = content.map( item => item.url );
      Promise.all( imgs.map( img => fetchFile(`${img}`) ))
        .then( basedImages => {
          // Mapped to url : data
          const mapped_images = new Map( imgs.map((url, i) => [url, basedImages[i]]) );
          slideDispatch({type: 'LOADED', payload: mapped_images});
        })
        .catch( E => console.error(`slide error: ${E}`))
    }    
  }, [isInView]);

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