'use client'
import { motion, stagger, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import './work_container.css';
import { Slide } from '@/app/config/work_config';
import Image from 'next/image';
import ChipHeader from '../chip_header/chip_header';
//import { animate } from 'motion';

const variantsContainer = {
  hidden: { opacity: 0, x: -70, y: 10 },
  enter: { opacity: 1, x: 0, y: 0/* ,
    transition: { delayChildren: stagger(0.5, { from: "first" }) }
    */},
  exit: { opacity: 0, x: -70, y: 10 },  
}

const variantsInner = {
  initial:{ x: -100 },
  whileInView:{ x: 0 },
  transition:{ duration: 1 }
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
  }, [isInView]);

  // CSS
  const ready_class = loadingStatus === 'loaded' && isInView ? 'ready' : '';
  const viewed_class = isInView ? 'viewed' : '';

  return (
    <motion.section
        key={title}
        variants={variantsContainer}        
        ref={container_ref}
        className={`work-container ${viewed_class} ${ready_class}`}
        layout
    >
      <div className="work-title">
        <ChipHeader title={title} colBg='red'/>
        {/* <h2>{title}</h2> */}
        <p>Loading: {loadingStatus}</p> 
      </div>
        
        <motion.div
            key={`inner-${title}-a`}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className={`work-content`}
        >
          { images && images.map((url, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              key={i.toString()} 
              src={url}
              alt={`alt ${i}`}
            />
          ))}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorum quis minus labore sunt autem incidunt! Quas sint porro aliquam mollitia quidem, sapiente aspernatur optio nihil placeat praesentium doloremque eligendi unde saepe cumque autem similique ex perferendis ipsam consequuntur molestiae ipsum dignissimos reiciendis nostrum odio? Ad illo adipisci quos impedit sed autem quae eveniet totam. Totam explicabo porro nihil dolor, dignissimos illo quo officiis? In maiores unde harum quibusdam optio perspiciatis blanditiis quia fugit, quam odio labore exercitationem reiciendis ut sit nobis sint, esse totam ullam amet voluptate officiis! Voluptatum animi quos autem non amet officiis repudiandae aliquam consectetur tenetur nostrum reiciendis tempora quidem sequi laudantium ducimus, officia totam sed? Ea molestias nam voluptas nihil accusantium. Est rem, provident aut quis officiis quasi dolorum minus officia asperiores distinctio repudiandae sint, consequuntur praesentium eligendi consectetur aliquam voluptate ea, quam nam? Voluptates rem nam deleniti nesciunt numquam recusandae, et assumenda possimus corporis natus in dolores, perspiciatis, dicta vitae provident exercitationem a vel delectus! Adipisci a cupiditate, quibusdam ipsam doloribus rerum quo commodi molestiae nesciunt ab explicabo magni possimus odio exercitationem blanditiis optio ipsa molestias minima. Labore est ducimus cumque, hic quibusdam, doloribus earum quod officiis commodi blanditiis nesciunt iure soluta vel quo.</p>
        </motion.div>
        
        <div 
          className='work-child-container padded'
        >{children}</div>

    </motion.section>
  )
}

export default WorkContainer;