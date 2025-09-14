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

///////////////////////////////////////////////////////
const WorkContainer = ({ title, conf, children }: {
    title: string;
    conf: Slide
    children: React.ReactNode;
}) => {
  const [loadingStatus, setLoadingStatus] = useState('init');
  const container_ref = useRef(null);
  const [images, setImages] = useState<string[] | null>(null)
  const isInView = useInView(container_ref, {amount: .75});

  // Batch lazy load the images when isInView
  useEffect(()=>{
    if ( loadingStatus==='init' && isInView ) {
      setLoadingStatus('loading');
      // Load all images and return string[] with full urls
      Promise.all( 
        conf.images.map((img) => 
          new Promise((res, rej)=>{
            const image_url = `${conf.dir}${img}`;
            const image = new Image();
            image.onload = ()=> res(image_url);
            image.onerror = (E)=> rej(E);
            image.src = image_url;
          })
      )
      // Set states
      ).then((urls) => {
        console.log(JSON.stringify(urls, null, 2))
        setImages(urls as string[]);
        setLoadingStatus('loaded');
      }).catch((E) => {
        console.error(`Image load failed:\n ${E}`);      
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
        { images ? 
        <SlideShow 
            title={title}
            inView={isInView}
            images={images}
            /* data={conf} */
        /> 
        : <LoadingComponent dark_mode={false}/> }
      </motion.div>

          <div className='work-child-outer-container'>

            { conf.link !== undefined && images && /* false && */
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