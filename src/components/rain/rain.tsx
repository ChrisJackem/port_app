import React, { useEffect, useRef, useState } from 'react'
import styles from './rain.module.css'
import { useInView } from "motion/react";
import { inView } from 'motion';

const Rain = ({url}:{url:string}) => {
    
    const intervl = useRef(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    function update(){        
        console.log('update')
    }

    useEffect(() => {
        if (isInView){
            intervl.current =  window.setInterval(update, 1000);
        }else{
            window.clearInterval(intervl.current)
        }
        console.log(isInView)
    }, [isInView])

    return (
        <div className={styles.container}>

            <div 
                className={styles.rain}
                ref={ref}
                style={{ '--bg': `url('/static/${url}')` } as React.CSSProperties}
            >                        
            </div>
            <div className={styles.text}>
                <h1>SPACER</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, obcaecati?</p>
            </div>
        </div>        
    )
}

export default Rain