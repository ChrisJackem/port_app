/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import styles from './attention_section.module.css';
import { LoadImg } from '../load_img/load_img';
import { motion, useInView } from 'motion/react';
import { SlamVariantsContainer, SlamVariantsLeft, SlamVariantsRight } from "@/app/config/variants";

export const IMG_TYPES = {
    EXCLAIM: 'static/images/icons/icon_exclaim.svg',
    QUESTION: 'static/images/icons/icon_question.svg',
    CACHE: 'static/images/icons/icon_cache.svg',
    SCROLL: 'static/images/icons/icon_scroll.svg'
}

const AttentionSection = ({children, icon_url, color, bgOpacity=1, supressInitial=false}:{
        children:React.ReactNode;
        icon_url: string;
        color: string;
        bgOpacity?: number;
        supressInitial?: boolean;
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
            variants={SlamVariantsContainer}
            initial={supressInitial ? undefined : 'unseen' }
            animate={isInView ? 'seen' : 'unseen'}
            exit='unseen'
            transition= {{ delayChildren: 0.2 }}
            className={`chip-top paged psudo ${styles.container}`}
            style={containerStyle}
        >          
            <motion.div className={`flex ${styles.imaged}`} variants={SlamVariantsLeft}>
                <LoadImg src={icon_url} alt={'attention image'}></LoadImg>
            </motion.div>

            <motion.div className={`chip-tr padded p-rel ${styles.child_container}`} variants={SlamVariantsRight}>
                {children}
            </motion.div>

        </motion.section>
    )
}

export default AttentionSection