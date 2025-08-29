'use client'
import { useEffect, useRef, useState } from "react";
import "./page.module.css";
import Image from 'next/image'

const DELAY = 300;
const WORDS = [
  "Games",
  "Websites",
  "Social Media",
  "Utilities",
  "Scripts"
]

export default function Home() {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  //const [word, setWord] = useState<string | null>(null);
  const word = useRef<string | null>("Things");
  const [action, setAction] = useState<null | string>(null);
  useEffect(()=>{
    if (!timeout.current){
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
    <div className="home-container">
      {/* <button className="chipped-button">Button</button> */}
      
      <section className="page-double">
        <div>
          <h1 className='heavy'>I make {action===null ? 'Things' : action }</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, expedita!</p>
        </div>

        <Image         
          width={300}
          height={300}
          alt="portrait drawing" 
          src="./portrait_02.svg"
        />
      </section>

      {/* <div className="divider-1"></div> */}

      <section className="page-double">
        

        <div id='test' className="shield bubble" style={{ flex: 1,  background: "#515151ff" }}>
          <h1>Programming</h1>
          <p>Self taught and formally accredited programmer</p>
          <br/>
          <button className="accent-bg" style={{ alignSelf: 'center'}}>Button</button>
        </div>

        <div id='test' className="shield bubble" style={{ flex: 1, background: "#515151ff" }}>
          <h1>Web Design</h1>
          <p>Strong artistic background</p>
          <br/>
          <button className="accent-bg" style={{ alignSelf: 'center'}}>Button</button>
        </div>
        
        <div id='test' className="shield bubble" style={{ flex: 1, background: "#515151ff" }}>
          <h1>Games</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas!</p>
          <br/>
          <button className="accent-bg" style={{ alignSelf: 'center'}}>Button</button>
        </div>

        
      </section>


      <div className="divider-2"></div>

      <section className="page-double">
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
    </div>
  );
}
