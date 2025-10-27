import { LoadImg } from '@/components/load_img/load_img'
import React from 'react'
import { motion } from 'motion/react';
import styles from './world.module.css';

const variantsMap = {
  initial: { 
    scale: 1,
    transition: { duration: 0, delay: 0, } 
   },
  animate: { 
      scale: 110,
      transition: {
        duration: 1, 
        delay: 2,
      } 
  },  
}

const variantsPin = {
  initial: { y: -50, opacity: 0,
    transition: { delay: 0, }
   },
  animate: { y: 0, opacity: 1,
    transition: { delay: 3, } 
  }
}

const World = () => {
  return (
    <motion.div className={`p-rel ${styles.container}`}>
        <motion.div
            key={'world'}
            className={`${styles.container}`}            
            variants={variantsMap}
        >
            <LoadImg src={'static/images/animations/world.svg'}                 
                className={styles.image}
            />            
        </motion.div>

        <motion.div
              key={'pin'}
              variants={variantsPin}
              className={`p-abs ${styles.pin}`}
            >
              <LoadImg src={'static/images/animations/pin.svg'}                   
                  className={`${styles.pin_image}`}
              />
            </motion.div>
    </motion.div>
  )
}

export default World