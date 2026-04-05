import React, { useEffect, useRef, useState } from 'react'
import styles from './rain.module.css'
import { useInView } from "motion/react";
import { inView } from 'motion';

const Rain = ({str}:{str:string}) => {
    const [animatedString, setAnimatedString] = useState(str);
    const intervl = useRef(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    function update(){
        setAnimatedString( s => s.slice(-1) + s.slice(0, -1) )
        console.log(animatedString)
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
        <div 
            className={styles.rain}
            ref={ref}
        >
                {animatedString}
        </div>
    )
}

export default Rain