'use client'
import React, { useState } from 'react';
import { LoadImg } from '../load_img/load_img';
import styles from './gallery.module.css';
import { AnimatePresence, motion, stagger } from 'motion/react';
import { GalleryContainerVariants, GalleryVariants } from '@/app/config/variants';
import SvgBtn from '../svg_btns/svg_btns';


type GalleryItem ={
  src: string;
  title?: string;  
  blerb?:string;
  dims: number[];
  orient?: undefined | 'wide' | 'tall' | 'square';
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
            <motion.div
              variants={GalleryVariants}
              initial="hidden"
              animate="enter"
              exit="exit"
              className={styles.modal_content}
            >
              <SvgBtn
                className={styles.dismiss}
                type={'x'}
                color={'var(--accent, yellow)'}
                onClick={()=>setSelected(null)}
              />                
              <LoadImg src={selected.src} alt={'selected image larger'} />
              <div className={styles.modal_stats}>
              <h2 className='tx-ac'>{selected.title}</h2>
              { selected.blerb && (<i>{selected.blerb}</i>) }
              </div>
            </motion.div>            
          </motion.div>
          )}
        </AnimatePresence>

        { items.map( (item, i) => {
          const style = {
            gridColumn: `span ${item.dims[0]} / auto`,
            gridRow: `span ${item.dims[1]} / auto`
          }
          return (
            <div
              className={`${styles.item}`}
              style={style}
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