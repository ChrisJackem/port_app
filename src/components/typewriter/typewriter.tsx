/* eslint-disable react-hooks/exhaustive-deps */
import { Armata } from 'next/font/google';
import React, { useEffect, useReducer, useRef } from 'react'

const font_typewriter = Armata({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-armata'
});

////////////////////////// Typewriter Effect ////////////////////////////////////
const DELAY = 200;

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
};

function typedReducer(state: TypedState, action: { type: string }): TypedState {

    function getNewState():TypedState{
        let i: number = -1;
        // Do not pick the same one twice
        while ( i < 0  || (state.index !== undefined && i === state.index) ){
          i = Math.floor(Math.random() * WORDS.length);
        }        
        return {
          direction: 1,
          index: i,
          word: `${WORDS[i][0]}`
        }
    }

    switch(action.type){      
      case "INIT"://////////////////////////////
        return getNewState();        

      case "TYPE"://////////////////////////////        
        if (state.direction===1){ // Forwards
          const WORD = WORDS[state.index]
          const _word = WORD.slice(0, state.word.length + 1);
          if ( _word.length >= WORD.length ){ // Switch directions
            return { ...state, word: _word, direction: -1 };
          }else{
            return { ...state, word: _word };
          }
        }else{// Backwards
          const _word = state.word.slice(0, -1);          
          if (_word.length < 2){ // No more string left
            return getNewState()
          }
          return { ...state, word: _word }
        }

      default: return state;
    }
  }

const Typewriter = ({}) => {
    const [typed, dispatchTyped] = useReducer(typedReducer, {
        index: 0,
        word: "",
        direction: 1
    });
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasCtx = useRef<CanvasRenderingContext2D | null>(null);
    const canvasSize = { width: 300, height: 60 }

    
    useEffect(()=>{
      if (canvasRef.current){
        const ctx = canvasRef.current.getContext('2d');
        if (ctx){
          ctx.font = '40px Monospace'
          canvasCtx.current = ctx;
        }
      }

      if (typed.word && canvasCtx.current && canvasRef.current){
        canvasCtx.current.clearRect(0, 0, canvasSize.width, canvasSize.height);      
        canvasCtx.current.fillText(typed.word, 10, canvasSize.height-10);
      }
    }, [typed.word]);

    // Setup animation
    useEffect(()=>{
      dispatchTyped({type:"INIT"});      
      const timeout = setInterval( () => {        
        dispatchTyped({type: "TYPE"});
      }, DELAY);    
      return ()=> { clearTimeout(timeout); }
    }, []);

    return (
        <>
          <h3>I Make</h3>          
          <canvas ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
          ></canvas>
        </>
    )
}

export default Typewriter