/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react'

const WORDS = [
  "Games",
  "Websites",
  "Social Media",
  "Utilities",
  "Scripts",
  "Mistakes",
  "Web Apps",
  "Maquettes",
  "Layouts",
  "Websites",
  "Bots",
  "Modals",
  "Trades"
]

type WordType = {
    index: number;
    fullWord: string;
    currWord: string;
    progress: number;
}

function randomWord( currentIndex:number=0 ): WordType {
    let i:number = currentIndex;
    while ( i === currentIndex ) i = Math.floor(Math.random() * WORDS.length);    
    return {
        index: i,
        progress: 0,
        currWord: '',
        fullWord: WORDS[i]
    }
}

const Typewriter = () => {
    const word = useRef<WordType>(randomWord());
    const [renderWord, setRenderWord] = useState('');
    const timeOut = useRef<undefined | NodeJS.Timeout>(undefined);

    useEffect(()=>{
        tick()    
        return ()=>{
            if (timeOut.current) clearTimeout(timeOut.current);
        }
    }, []);

    const tick = useCallback(()=>{
        let wait:number = 200;
        let { progress, currWord, index, fullWord } = word.current;
        const l = fullWord.length;
        progress += 1;
        if ( progress <= l ){// Forwards
            wait = progress === l
                ? 3000 // Full word - pause
                : Math.max( 200, Math.floor(Math.random() * 500) );
            currWord = fullWord.slice(0, progress);              
        }else{            
            if ( progress >= (l * 2) ){ // Done. Get new word
                wait = 500;
                ({ progress, currWord, index, fullWord } = randomWord(index));
            }else{// backwards                
                const overflowed = progress - l;
                currWord = fullWord.slice(0, -overflowed);
            }         
        }
        ( word.current = { progress, currWord, index, fullWord } );
        setRenderWord(currWord);     
        timeOut.current = setTimeout( tick, wait );
    }, [word]);


    return (
        <section>
            <br/>
            <h2>I Make</h2>
            <div>{renderWord}</div>
        </section>
    )
}

export default Typewriter