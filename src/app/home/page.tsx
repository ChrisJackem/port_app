'use client'
//import { useEffect, useRef, useState, useReducer } from "react";
import "./page.css";
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import Typewriter from "@/components/typewriter/typewriter";


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
          <button className="chip-btn-a" >Button</button>
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
      <section className="page-double">        
        <h2>Test</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus repellendus pariatur enim tenetur quibusdam expedita, ducimus aperiam voluptatem excepturi culpa harum itaque! Maxime accusamus obcaecati voluptates est, animi atque, eos, voluptatibus nemo asperiores dignissimos quidem porro magni blanditiis praesentium rerum id. Numquam aperiam eligendi accusantium minima cumque soluta non.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus repellendus pariatur enim tenetur quibusdam expedita, ducimus aperiam voluptatem excepturi culpa harum itaque! Maxime accusamus obcaecati voluptates est, animi atque, eos, voluptatibus nemo asperiores dignissimos quidem porro magni blanditiis praesentium rerum id. Numquam aperiam eligendi accusantium minima cumque soluta non.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus repellendus pariatur enim tenetur quibusdam expedita, ducimus aperiam voluptatem excepturi culpa harum itaque! Maxime accusamus obcaecati voluptates est, animi atque, eos, voluptatibus nemo asperiores dignissimos quidem porro magni blanditiis praesentium rerum id. Numquam aperiam eligendi accusantium minima cumque soluta non.</p>
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