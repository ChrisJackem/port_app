import { LoadImg } from '@/components/load_img/load_img'
import React from 'react'
import styles from './world.module.css';
import { motion, scale } from 'motion/react';

const World = () => {
  return (
    <div className={styles.container}>
        <motion.div
            className={styles.container}
            initial={{ scale: 1 }}
            animate={{ scale: 110 }}
            transition={{ duration: 3, delay: 2, ease: 'easeInOut' }}
        >
            <LoadImg src={'static/images/animations/world.svg'} 
                width={300}
                height={300}
                className={styles.image}
            />
        </motion.div>
    </div>
  )
}

export default World