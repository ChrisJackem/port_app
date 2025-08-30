'use client'
import { useEffect, useRef, useState } from "react";
import "./page.css";
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const DELAY = 300;
const WORDS = [
  "Games",
  "Websites",
  "Social Media",
  "Utilities",
  "Scripts"
]
const HomePage = () => {


  const { ref, inView } = useInView({
    threshold: 0.6,
    delay: 1000,
  });


  // TODO:: Simplify this
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const word = useRef<string | null>("Things");
  const [action, setAction] = useState<null | string>(null);

  useEffect(()=>{
    if (false && !timeout.current){
      timeout.current = setInterval(()=>{
       
        if (word.current === null){
          //word.current = `${Math.floor( Math.random() * WORDS.length)}`
          word.current = `${WORDS[Math.floor(Math.random() * WORDS.length)]}...`;
          setAction(word.current)
        }else{
           console.log('tick', word.current, word.current.length)
          if (word.current.length > 1) {
            const sliced = word.current.slice(0, -1);
            word.current = sliced;
            console.log(sliced)
            setAction(sliced)
          } else {
            word.current = null;
          }
        }
      }, DELAY)
    }
    return ()=>{
      console.log('Timeout cleared')
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    }
  }, [word]);

  return (
    <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout 
        className="home-container"
    >
      {/* <div className="divider-3"></div> */}
      {/* <button className="chipped-button">Button</button> */}
      
      <section className="page-flex">
        <div>
          <h1 className='heavy'>I make</h1>
          <p className='heavy'>{action===null ? 'Things' : action }</p>
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