/* eslint-disable react-hooks/exhaustive-deps */
//import { Armata } from 'next/font/google';
import React, { useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import { THEMES } from '@/app/config/theme';
/* 
const font_typewriter = Armata({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-armata'
}); */

////////////////////////// Typewriter Effect ////////////////////////////////////
//const DELAY = 200;

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

type TypedState = {
  index: number;
  word: string;
  direction: number;
  wait: boolean;
};

function typedReducer(state: TypedState, action: { type: string }): TypedState {
    function getNewState():TypedState{
        let i: number = -1;
        // Do not pick the same one twice
        while ( i < 0  || (state.index !== undefined && i === state.index) ){
          i = Math.floor(Math.random() * WORDS.length);
        }        
        return {
          wait: false,
          direction: 1,
          index: i,
          word: `${WORDS[i][0]}`
        }
    }
    switch(action.type){      
      case "INIT":
        return getNewState();
      case "TYPE":     
        if (state.direction===1){ // Forwards
          const WORD = WORDS[state.index]
          const _word = WORD.slice(0, state.word.length + 1);
          if ( _word.length >= WORD.length ){ // Switch directions
              return { ...state, 
                word: _word, 
                direction: -1,
                wait: true 
              };            
          }else{
            return { ...state, word: _word };
          }
        }else{// Backwards
          const _word = state.word.slice(0, -1);          
          if (_word.length <= 1){ // No more string left
            return getNewState()
          }
          if (state.wait) state.wait = false;// do something ?
          return { ...state, word: _word }
        }

      default: return state;
    }
  }


const canvasProps = { 
    fontSize: 36,
    width: 250, 
    height: 50
};
const Typewriter = ({ }) => {
    const [typed, dispatchTyped] = useReducer(typedReducer, {index: 0, word: "", direction: 1, wait: false} );
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasCtx = useRef<CanvasRenderingContext2D | null>(null);
    const {theme} = useContext(ThemeContext);
    
    useEffect(()=>{
      // Initialize canvas context
      if (canvasRef.current && !canvasCtx.current){
        const ctx = canvasRef.current.getContext('2d');
        if (ctx){
          ctx.font = `${canvasProps.fontSize}px Monospace`
          canvasCtx.current = ctx;
          canvasCtx.current.fillStyle = THEMES[theme].text;
        }
      }
      // Writing to canvas
      if (typed.word && canvasCtx.current && canvasRef.current){
        canvasCtx.current.clearRect(0, 0, canvasProps.width, canvasProps.height);      
        canvasCtx.current.fillText(typed.word + '_', 0, canvasProps.height-10);
      }
      timeOut()
    }, [typed.word]);

    // Setup animation
    useEffect(()=>{
      dispatchTyped({type:"INIT"});
      timeOut();
    }, []);

    const timeOut = useCallback(()=> {
      let time;      
      if (typed.wait){ // Switching directions 
        time = 3000;
      } else if (typed.direction === -1){ // Constant delete
        time = 200;
      } else{ // Normal
        time = time || Math.max( 200, Math.random() * 800 );
      }
      setTimeout(()=>dispatchTyped({type: "TYPE"}), time);
    }, [typed] );

    return (
        <div className='padded'>
          <h1 style={{ fontSize: '26px', marginBottom: -10 }}>
            {`I make${!typed?.word ? '...' : ''}`}
          </h1>
            <canvas
              ref={canvasRef}
              width={canvasProps.width}
              height={canvasProps.height}
            ></canvas>          
          <p>If I had to explain myself, it gets complicated.</p>
        </div>
    )
}

export default Typewriter