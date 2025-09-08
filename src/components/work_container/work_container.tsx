'use client'
import { motion, stagger, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import './work_container.css';
import { Slide } from '@/app/config/work_config';
import Image from 'next/image';
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
  const container_ref = useRef(null);
  //const images_loaded = useRef<Blob[] | null>(null);
  const [images, setImages] = useState<string[] | null>(null)
  const isInView = useInView(container_ref);


  useEffect(()=>{
    console.log('testing', isInView);
    /* if (!images && isInView){
      const blah = conf.images.map( (name)=> conf.dir + name );
      console.log(JSON.stringify(blah))
      setImages( blah )

    }

    return  */
    if (isInView && conf.images.length > 0 && !images) {
      console.log('fetchin')
      Promise.all(
      conf.images.map((img) =>
        fetch(`${conf.dir}${img}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch ${img}`);
          return res.blob();
        })
        .then((blob) => URL.createObjectURL(blob))
      )
      ).then((urls) => {
        setImages(urls);
        console.log('fetched', urls)
        //images_loaded.current = urls;
      }).catch((E) => {
      console.error(`Fetch Failed ${E}`);
      //images_loaded.current = null;
      });
    }
  }, [isInView]);

  return (
    <motion.section
        key={title}
        variants={variantsContainer}        
        ref={container_ref}
        className={`work-container ${isInView ? 'viewed' : ''}`}
    >
        <h2>{title}</h2>

        <motion.div
            key={`inner-${title}-a`}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className={`work-content`}
        >            
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero atque, accusantium a accusamus illum vitae expedita commodi cum, placeat aperiam harum error excepturi magni unde. Est veritatis dolor deserunt dignissimos esse iste ratione dolorem, delectus nobis exercitationem quae recusandae maiores repellendus aliquid. Praesentium debitis repudiandae autem a, nulla laboriosam eligendi esse quidem culpa architecto magnam? Quibusdam, iusto inventore dolor doloremque nam eveniet excepturi earum mollitia, tempora aperiam nesciunt placeat, rem perferendis accusantium qui odit delectus quod. Rem, tempora eaque, temporibus culpa ipsam omnis vel minima placeat quibusdam laboriosam et dolor id repellendus a cum explicabo, praesentium mollitia aspernatur commodi molestiae velit inventore quos voluptatibus. Nostrum autem architecto nesciunt non quaerat vero ipsum doloribus ducimus atque tempora ratione illum laborum et, in odit, consectetur, molestiae cum earum itaque officia. Reiciendis nam dolore beatae, reprehenderit doloremque ab autem sequi doloribus quo iusto at! Esse dolorem ratione optio adipisci aut dignissimos, natus praesentium vitae sapiente reiciendis quidem nobis culpa reprehenderit quod labore laborum voluptatum tempore nulla nostrum tempora amet corporis. Similique accusamus hic vel totam quasi eaque, aliquam nemo earum eos provident soluta nostrum, sed veniam autem delectus illum voluptatibus, quod natus ipsa deserunt distinctio eligendi. Fuga reiciendis maiores eveniet accusamus nisi.</p>
        { images && images.map((url, i) => (
          <Image 
          key={i.toString()} 
          src={url}
          alt={`alt ${i}`} 
          width={300}
          height={300}
          />
        ))}
        </motion.div>
        { isInView && <div>{children}</div> }

    </motion.section>
  )
}

export default WorkContainer;