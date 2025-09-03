'use client'
//import { useEffect, useRef, useState, useReducer } from "react";
import "./page.css";
import Image from 'next/image'
import { motion, stagger } from "motion/react";
import Typewriter from "@/components/typewriter/typewriter";
import ThemeBtns from "@/components/themeBtns/themeBtns";
import { Tilt_Warp } from "next/font/google";


const tilt = Tilt_Warp({
    subsets:['latin'],
    style: "normal",    
    weight: '400'
});

// Animation
const variantsPage = {
  hidden: { opacity: 0, x: 0, y: 10 },
  enter: { opacity: 1, x: 0, y: 0 ,
    transition: {
      delayChildren: stagger(0.25, { from: "first" })
    }
  },
  exit: { opacity: 0, x: 0, y: 10 },
}
const variantsDivs = {
  hidden: { opacity: 0, x: 0, y: 10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 10 },  
}

//////////////////////////////////////////////////////////////////////////////
const HomePage = () => {
  /* const { ref, inView } = useInView({
    threshold: 0.6,
    delay: 1000,
  }); */ 

  return (    
    <motion.div
        key="home"
        variants={variantsPage}
        initial="hidden"
        animate="enter" 
        exit="exit"
        transition={{ type: 'tween' }}
        className="home-container page-container"
    >
      <section className="page-flex">
        <div>
          <h1 className='heavy'>I make</h1>
          <Typewriter />
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
          key='programming'
          className="shield bubble"
          variants={variantsDivs} 
        >
            <h1>Programming</h1>
            <p>Self taught and formally accredited programmer</p>
            <br/>
            <button className={`chip-a link ${tilt.className}`} >GitHub</button>
        </motion.div>

        <motion.div 
          className="shield bubble"
          key='webDesign'          
          variants={variantsDivs} 
        >
          <h1>Web Design</h1>
          <p>Strong artistic background</p>
          <br/>
          <button className={`chip-a link ${tilt.className}`} >Work</button>
        </motion.div>
        
        <motion.div 
          className="shield bubble" 
          key='games'
          variants={variantsDivs} 
        >
          <h1>Games</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas!</p>
          <br/>
          <button className={`chip-a link ${tilt.className}`} >Work</button>
        </motion.div>
      </section>

      <div className="divider-2"></div>

      <section className="page-double" >
        <ThemeBtns />
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