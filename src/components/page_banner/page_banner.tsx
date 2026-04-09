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
        <section className={`flex dotted ${styles.container}`}>
            <div className={styles.mesh_container}>
                <MeshBox />
            </div>
            
            <div className={`flex-column  ${styles.inner_container}`}>                
                <TypeHeader word={title} />
                <p>{content}</p>
            </div>
            {/* <div className={''}>
                <p>///fdfgh////////////////</p>
                <p>///fdfgh////////////////</p>
                <p>///fdfgh////////////////</p>
                <p>///fdfgh////////////////</p>
            </div> */}
        </section>
    )
}

export default PageBanner