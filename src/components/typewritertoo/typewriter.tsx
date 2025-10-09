/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { WORDS } from '@/app/config/words';
import styles from './typewriter.module.css';
import { useInView } from 'motion/react';

/**
 * @param index - the index inside WORDS
 * @param progress - the progress we made - ( len(WORDS[index]) * 2 )
 */
type WordStatus = {
    index: number;
    progress: number;
}

function randomWord( currentIndex:number=0 ): WordStatus {
    let i:number = currentIndex;
    while ( i === currentIndex ) i = Math.floor(Math.random() * WORDS.length);    
    return { index: i, progress: 0 }
}

/**
 * Typewriter component
 * started/stopped by useInView hook
 * tick is self contained and uses 'word' ref
 * 
 * word - internal state used for tick()
 * renderWord - render state set by tick
 */
const Typewriter = () => {
    const word = useRef<WordStatus>(randomWord());
    const [renderWord, setRenderWord] = useState<string>('');
    const timeOut = useRef<undefined | NodeJS.Timeout>(undefined);

    const container_ref = useRef(null)
    const isInView = useInView(container_ref);

    useEffect(()=>{
        const kill = ()=>{
            if(timeOut.current){
                clearTimeout(timeOut.current);
                timeOut.current = undefined;
            }
        }        
        ( isInView ? tick : kill )();      
        return kill;
    }, [isInView]);

    const tick = ()=>{
        let wait:number = 200;
        let { progress, index } = word.current;
        const full_word:string = WORDS[index];
        const l:number = full_word.length;
        let current_word:string = '';

        progress += 1;
        if ( progress <= l ){// Forwards
            wait = progress === l
                ? 3000 // Full word - pause
                : Math.max( 200, Math.floor(Math.random() * 500) );
            current_word = full_word.slice(0, progress);              
        }else{            
            if ( progress >= (l * 2) ){ // Done. Get new word
                wait = 500;
                ({ progress, index } = randomWord(index));
            }else{// backwards
                const overflowed = progress - l;
                current_word = full_word.slice(0, -overflowed);
            }         
        }

        ( word.current = { progress, index } );
        setRenderWord(current_word);     
        timeOut.current = setTimeout( tick, wait );
    };

    return (
        <section
            ref={container_ref}
            className={styles.container}
        >            
            <h2 className={styles.heading}>I Make</h2>
            <div className={styles.word_container}>
                {renderWord}
                <span className={styles.dash}>|</span>
            </div>
        </section>
    )
}

export default Typewriter