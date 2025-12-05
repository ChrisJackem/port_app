'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './i_frame_component.module.css'

// Check iFrame height interval (ms)
const INTERVAL = 300;

type iFrameProps = {
    src: string;
    title?:string;
}


const IFrameComponent = ({src, title}:iFrameProps)=>{
    const frameRef = useRef<HTMLIFrameElement>(null);
    const frameDoc = useRef<Document | null>(null);
    const [timer, setTimer] = useState(null);
    const [contentHeight, setContentHeight] = useState(0);

    function checkHeight(){        
        if (frameDoc.current){
            if (timer) clearTimeout(timer);
            const time =  setTimeout(()=>{
                if (frameDoc.current) {
                    setContentHeight(frameDoc.current.body.scrollHeight);
                    //setContentHeight(frameDoc.current.body.getBoundingClientRect().height);
                }
            }, INTERVAL)
        }
    }
    useEffect(()=>{
        if (frameRef.current) frameDoc.current = frameRef.current.contentDocument || frameRef.current.contentWindow?.document || null;
        if (frameDoc.current){
            frameDoc.current.addEventListener('click', checkHeight);
        }        
    }, [frameRef])


    /* useEffect(()=>{
        checkHeight();
        const interval = window.setInterval(checkHeight, INTERVAL );
        return ()=> window.clearInterval(interval);
    }, [frameRef, contentHeight]); */

    return(
        <>
        <p>{contentHeight}</p>
        <iframe
            onClick={()=> {setTimeout(checkHeight, INTERVAL)} }
            height={`${contentHeight + 2}px`}
            ref={frameRef}              
            className={styles.iframe}
            title={title ? title : 'generic iFrame title'}
            src={src}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>   
        </>
    )
}
export default IFrameComponent;