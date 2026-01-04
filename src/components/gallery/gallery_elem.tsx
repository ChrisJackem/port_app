'use client'
import React, { useState } from 'react';
import { LoadImg } from '../load_img/load_img';
import styles from './gallery.module.css';


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
        <div className={styles.modal} style={{ display: selected === null ? 'none' : 'flex'}}>
          <button onClick={()=>setSelected(null)}>X</button>
          { selected && (
          <img src={selected.src} alt={'selected image larger'} />)}
        </div>        
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