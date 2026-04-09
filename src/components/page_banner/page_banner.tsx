import React from 'react'
import styles from './page_banner.module.css'
import TypeHeader from '../type_header/type_header';
import { motion } from 'motion/react';
import { BannerVariants } from '@/app/config/variants';
import MeshBox from '../meshBox/meshBox';

type PageBannerProps = {    
    title: string;
    content: string;
}

const PageBanner = ({title, content}: PageBannerProps) => {
    return (
        <section className={`flex bg-conical-tl-dotted ${styles.container}`}>
            <div aria-hidden="true" className={styles.left_dec}>
                <h1>/////////////////////////////////////</h1>
                <p style={{opacity: 0.3}}>####### Christopher Jackem personal website sub page {title} hero start ########</p>
            </div>
            <div aria-hidden="true" className={`t-ac ${styles.right_dec}`}>
                <h1>\\\\</h1>
                <p style={{opacity: 0.2}}>^^^ Christopher Jackem personal website sub page {title} hero end</p>
            </div>
            <div className={styles.mesh_container}>
                <MeshBox />
            </div>           
            
            <div className={`flex-column  ${styles.inner_container}`}>                
                <TypeHeader word={title} />
                <hr />
                <p>{content}</p>
            </div>
        </section>
    )
}

export default PageBanner