import React from 'react'
import styles from './page_banner.module.css'
import TypeHeader from '../type_header/type_header';
import { motion } from 'motion/react';
import { BannerVariants } from '@/app/config/variants';

type PageBannerProps = {    
    title: string;
    content: string;
}

const PageBanner = ({title, content}: PageBannerProps) => {
    return (
        <section 
            className={`${styles.container}`}
            
            
        >
            <div className={`paged ${styles.inner_container}`}>                
                <TypeHeader word={title} />
                <p>{content}</p>
            </div>
        </section>
    )
}

export default PageBanner