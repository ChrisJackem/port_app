import React from 'react'
import styles from './page_banner.module.css'
import TypeHeader from '../type_header/type_header';
import { AnimatePresence, easeIn, motion } from 'motion/react';
import { BannerVariants } from '@/app/config/variants';
import MeshBox from '../meshBox/meshBox';

type PageBannerProps = {    
    title: string;
    content: string;
}

const PageBanner = ({title, content}: PageBannerProps) => {
    if (!title || !content) return null;

    return (
        <AnimatePresence>
        <section className={`flex bg-conical-tl-dotted ${styles.container}`}>
            <div aria-hidden="true" className={styles.left_dec}>
                <h1>/////////</h1>
                <p style={{opacity: 0.3}}>####### Christopher Jackem personal website sub page {title} hero start ########</p>
            </div>
            <div aria-hidden="true" className={`t-ac ${styles.right_dec}`}>
                <h1>\\\</h1>
                <p style={{opacity: 0.2}}>^^^ Christopher Jackem personal website sub page {title} hero end</p>
            </div>
            <div className={styles.mesh_container}>
                <MeshBox />
            </div>           
            
            <div className={`flex-column  ${styles.inner_container}`}>                
                <TypeHeader word={title} />
                <hr />
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: easeIn, delay: 1.2 }}
                    key={content}
                >
                    {content}
                </motion.p>
            </div>
        </section>
        </AnimatePresence>
    )
}

export default PageBanner