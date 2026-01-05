'use client'
import React, { useState } from 'react';
import { LoadImg } from '../load_img/load_img';
import styles from './gallery.module.css';
import { AnimatePresence, motion, stagger } from 'motion/react';
import { GalleryContainerVariants, GalleryVariants } from '@/app/config/variants';


type GalleryItem ={
  src: string;
  title?: string;  
  blerb?:string;
  orient: undefined | 'wide' | 'tall' | 'square';
}

const Gallery = ({items} :{items: GalleryItem[]}) => {
  const [selected, setSelected] = useState<null | GalleryItem>(null);
  function handleClick(index: number){
    console.log(index)
    setSelected(items[index]);
  }
  return (
    <div className={styles.main_container}>

        <AnimatePresence>
          { selected !== null && (
          <motion.div 
            className={styles.modal} 
            style={{ display: selected === null ? 'none' : 'flex'}}
            variants={GalleryContainerVariants}
                            initial="hidden"
                animate="enter"
                exit="exit"
          >          
            { selected && (
              <motion.div
                variants={GalleryVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                className={styles.modal_content}
              >
                <button className={styles.close_btn} onClick={()=>setSelected(null)}>X</button>
                <LoadImg src={selected.src} alt={'selected image larger'} />
                <div className={styles.modal_stats}>
                <h2>{selected.title}</h2>
                { selected.blerb && (<p>{selected.blerb}</p>) }
                </div>
              </motion.div>
            )}
          </motion.div>
          )}
        </AnimatePresence>

        { items.map( (item, i) => {
          return (
            <div
              className={`${styles.item} ${styles[item.orient || 'square']}`}
              key={i.toString()}
              onClick={()=>handleClick(i)}
            >
              <LoadImg src={item.src} />
            </div>
          )
          }
         )}
    </div>
  )
}

export default Gallery