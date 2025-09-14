'use client'
import "./page.css";
import Image from 'next/image'
import { motion, stagger } from "motion/react";
import Typewriter from "@/components/typewriter/typewriter";
import ThemeBtns from "@/components/themeBtns/themeBtns";

/*********************************************************************************** Home Page  */
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

const HomePage = () => {
  return (    
    <motion.div
        id='home-container'
        key="home"
        variants={variantsPage}
        initial="hidden"
        animate="enter" 
        exit="exit"
        transition={{ type: 'tween' }}
        className="home-container page-container"
    >
      <section className="page-flex">
        <div id="typewriter-demo">
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

      <section id='shields' className="page-flex">
        <motion.div
          key='programming'
          className="shield bubble flex"
          variants={variantsDivs}
        >
            <h1>Programming</h1>
            <p>Self taught and formally accredited programmer</p>
            <br/>
            <button className={`chip-a link `} >GitHub</button>
        </motion.div>

        <motion.div 
          className="shield bubble flex"
          key='webDesign'          
          variants={variantsDivs} 
        >
          <h1>Web Design</h1>
          <p>Strong artistic background</p>
          <br/>
          <button className={`chip-a link `} >Work</button>
        </motion.div>
        
        <motion.div 
          className="shield bubble flex" 
          key='games'
          variants={variantsDivs} 
        >
          <h1>Games</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas!</p>
          <br/>
          <button className={`chip-a link `} >Work</button>
        </motion.div>
      </section>

      <div className="divider-2"></div>

      <section className="page-double" /* style={{backgroundColor: 'var(--midground)'}} */>
        <ThemeBtns />
      </section>
      
     
    </motion.div>
  );
}

export default HomePage