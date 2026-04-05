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
        <div>
            <div 
                className={styles.rain}
                ref={ref}
                style={{ backgroundImage: `url('/static/${url}')` }}
            >
            
            </div>
            <div 
                className={styles.rain}
                ref={ref}
                style={{ backgroundImage: `url('/static/${url}')` }}
            >
            
            </div>
        </div>        
    )
}

export default Rain