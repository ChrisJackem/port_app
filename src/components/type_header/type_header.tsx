import { TypeVariant } from '@/app/config/variants'
import { motion, stagger } from 'motion/react'
import React from 'react'
import styles from './type_header.module.css';
/**
 * Breaks word into divs for a header. 
 * @param word
 * @returns 
 */
const TypeHeader = ({ word }:{ word:string }) => {
  return (
    <motion.section 
        className={`psudo ${styles.container}`}
        variants={TypeVariant.container}
        initial='initial'
        animate='animate'
        transition={{ duration: 0, delayChildren: stagger(0.2, { startDelay: 0.2 }) }}        
    >
        {/* Robot text */}
        <h1 className={`p-abs ${styles.reader_text}`}>{word}</h1>

        <div className={`flex ${styles.letter_container}`}
        >
            { word.split('').map(( letter, i )=>(
                <motion.div
                    className={`${styles.letter}`}
                    variants={TypeVariant.child}
                    key={i}
                    aria-hidden={true}
                >
                    {letter}
                </motion.div>
            ))}
        </div>
    </motion.section>
  )
}

export default TypeHeader