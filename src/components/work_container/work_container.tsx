'use client'
import { motion, stagger, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import './work_container.css';
import { Slide } from '@/app/config/work_config';

import ChipHeader from '../chip_header/chip_header';
import SlideShow from '../slide_show/slide_show';

//import { animate } from 'motion';

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


const WorkContainer = ({ title, conf, children }: {
    title: string;
    conf: Slide;
    children: React.ReactNode;
}) => {
  const [loadingStatus, setLoadingStatus] = useState('init');
  const container_ref = useRef(null);
  const [images, setImages] = useState<string[] | null>(null)
  const isInView = useInView(container_ref);

  // Batch lazy load the images when isInView
  useEffect(()=>{
    if ( loadingStatus==='init' && isInView ) {
      setLoadingStatus('loading');
      // Retrieve blobbed images and convert to objURL[]
      Promise.all(        
        conf.images.map((img) =>
          fetch(`${conf.dir}${img}`)
          .then((res) => {
            if (!res.ok) throw new Error(`Failed to fetch ${img}`);
            return res.blob();
          })
          .then((blob) => URL.createObjectURL(blob))
        )
      // Set states
      ).then((urls) => {
        setImages(urls);
        setLoadingStatus('loaded');
      }).catch((E) => {
        console.error(`Fetch Failed ${E}`);      
      });
    }    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  // CSS
  const ready_class = loadingStatus === 'loaded' && isInView ? 'ready' : '';
  const viewed_class = isInView ? 'viewed' : '';

  return (
    <motion.section className={`work-container ${viewed_class} ${ready_class}`}
        key={title}
        variants={variantsContainer}
        whileInView= {{transform: "scale(1)", opacity: 1}}
        ref={container_ref}        
    >
      <motion.div className="work-title"
        key={title}
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
      >
        <ChipHeader title={title} colBg='var(--accent, red)' colTx='black' />
      </motion.div>
        
          <motion.div className={`work-content`}
              key={`inner-${title}-a`}
              variants={variantSlideIn}
          >
            {/* { images && images.map((url, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                key={i.toString()} 
                src={url}
                alt={`alt ${i}`}
              />
            ))} */}
            { images && 
              <SlideShow 
              title={'Test'}
                inView={isInView}
                data={conf}
              />
            }
          </motion.div>

          <div className='work-child-outer-container'>
            { conf.link !== undefined && 
              <div className='link-container'>
                <button className={`chip-a link `} >Button</button>
              </div>
            }
            <div className='work-child-inner-container'>{children}</div>
          </div>

    </motion.section>
  )
}

export default WorkContainer;