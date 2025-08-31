'use client'
import { useEffect, useRef, useState, useReducer } from "react";
import "./page.css";
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";



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

  // Animation
  const variants = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}

//////////////////////////////////////////////////////////////////////////////
const HomePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    delay: 1000,
  }); 

  const [typed, dispatchTyped] = useReducer(typedReducer, {
    index: 0,
    word: "",
    direction: 1
  });

  useEffect(()=>{
    dispatchTyped({type:"INIT"});
      const timeout = setInterval(() => {       
        dispatchTyped({type: "TYPE"});        
      }, DELAY);
    
    return ()=> {
      console.log('cleared timeout')
      clearTimeout(timeout);
    };
  }, []); 

  return (    
    <motion.div
        key="home"
        variants={variants}
        initial="hidden"
        animate="enter" 
        exit="exit"
        transition={{ type: 'tween' }}
        className="home-container page-container"
    >
      {/* <div className="divider-3"></div> */}
      {/* <button className="chipped-button">Button</button> */}
      
      <section className="page-flex">
        <div>
          <h1 className='heavy'>I make</h1>
          {/* <p className='heavy'>{typed.word===null ? 'Things' : typed.word }</p>
          <p className='heavy'>{typed.index===null ? 'Things' : typed.index }</p> */}
          {/* <p className="heavy">{renderWord || 'Things'}</p> */}
          <p className="heavy">{typed.word}</p>
          <h3>If I had to explain myself, it gets complicated.</h3>
        </div>

        <Image         
          width={300}
          height={300}
          alt="portrait drawing" 
          src="./portrait_02.svg"
        />
      </section>

      {/* <div className="divider-1"></div> */}

      <section className="page-flex" >

        <motion.div 
          className="shield bubble"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          >
          <h1>Programming</h1>
          <p>Self taught and formally accredited programmer</p>
          <br/>
          <button className="accent-bg" >Button</button>
        </motion.div>

        <div className="shield bubble" >
          <h1>Web Design</h1>
          <p>Strong artistic background</p>
          <br/>
          <button className="accent-bg" >Button</button>
        </div>
        
        <div className="shield bubble" >
          <h1>Games</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas!</p>
          <br/>
          <button className="accent-bg" >Button</button>
        </div>
      </section>

      <div className="divider-2"></div>

      <section className="page-double" ref={ref}>
        { inView && <p>In View!</p>}
        <h2>Test</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus repellendus pariatur enim tenetur quibusdam expedita, ducimus aperiam voluptatem excepturi culpa harum itaque! Maxime accusamus obcaecati voluptates est, animi atque, eos, voluptatibus nemo asperiores dignissimos quidem porro magni blanditiis praesentium rerum id. Numquam aperiam eligendi accusantium minima cumque soluta non.</p>
      </section>
      <div className="divider-1"></div>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <div id='test' className="shield">
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas!</p>
        <span>SPAN</span>
      </div> */}
    </motion.div>
    
  );
}

export default HomePage