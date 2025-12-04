'use client'
import React from 'react';
import styles from './i_frame_component.module.css'

type iFrameProps = {
    src: string;
    title?:string;
}

const IFrameComponent = ({src, title}:iFrameProps)=>{
    return(
        <iframe                
            className={styles.iframe}
                  
            title={title ? title : 'iFrame'}
            src={src}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>   
    )
}
export default IFrameComponent;