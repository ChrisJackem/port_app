/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import styles from './attention_section.module.css';
import { LoadImg } from '../load_img/load_img';
import { motion, stagger, useInView } from 'motion/react';

export const IMG_TYPES = {
    EXCLAIM: 'static/images/icons/icon_exclaim.svg',
    QUESTION: 'static/images/icons/icon_question.svg',
    CACHE: 'static/images/icons/icon_cache.svg'
}

// Animation
const variantsContainer = {   
    seen: { opacity: 1 },
    unseen: { opacity: 0 },
    /* transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) } */
    transition: { duration: 2 }
}
const variantsLeft = {
    seen: { x: 0, opacity: 1 },
    unseen: { x: -200, opacity: 0 }
}
const variantsRight = {
    seen: { x: 0, opacity: 1 },
    unseen: { x: 200, opacity: 0 }
}

const AttentionSection = ({children, icon_url, color, bgOpacity=1}:{
        children:React.ReactNode;
        icon_url: string;
        color: string;
        bgOpacity?: number;
    }) => {

    const container_ref = useRef(null);
    const isInView = useInView(container_ref);
    const containerStyle = { // Send props to css
        ['--opacity' as any]: `${bgOpacity}`,
        ['--color' as any]: `${color}`
    } as React.CSSProperties;

    return (
        <motion.section
            ref={container_ref}
            variants={variantsContainer}
            initial={'unseen'}
            animate={isInView ? 'seen' : 'unseen'}
            className={`chip-top paged psudo ${styles.container}`}
            style={containerStyle}
        >
            <motion.div className={`flex ${styles.imaged}`} variants={variantsLeft}>
                <LoadImg src={icon_url} alt={'attention image'}></LoadImg>
            </motion.div>
            
            <motion.div className={`chip-tr padded ${styles.child_container}`} variants={variantsRight}>
                {children}
            </motion.div>

        </motion.section>
    )
}

export default AttentionSection