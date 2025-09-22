'use client'
import "./page.css";
//import Image from 'next/image'
import { motion, stagger } from "motion/react";
//import Typewriter from "@/components/typewriter/typewriter";
import ThemeBtns from "@/components/themeBtns/themeBtns";
import { LoadImg } from "../../components/load_img/load_img";
import LoadingComponent from "@/components/loading_component/loading_component";
import dynamic from "next/dynamic";
import { IconFrame } from "@/components/icon_frame/icon_frame";
//import { LoadImgs } from "@/components/load_img/load_imgs";

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

const TypewriterLoading = dynamic(
    ()=> import('@/components/typewriter/typewriter'),
    { loading: ()=> <LoadingComponent />}
)

const HomePage = () => {
  return (    
    <div id='home-container' className="home-container page-container">

      <section className="page-flex">              
        <TypewriterLoading />

        <LoadImg
          style={{ margin: '0 auto'}}       
          width={300}
          height={300}
          alt={"portrait drawing"}
          src={"static/images/portrait_02.svg"}
        />
      </section>
      <br/>
      <section className="page-flex">
        <IconFrame url={"static/images/icons/icon_bracket.svg"}>
          <h1>Programming</h1>
            <p>Self taught and formally accredited programmer</p>            
            <button className={`chip-a link `} >GitHub</button>            
        </IconFrame>        

        <IconFrame url={"static/images/icons/icon_parent.svg"}>
          <h1>Programming</h1>
            <p>Self taught and formally accredited programmer</p>            
            <button className={`chip-a link `} >GitHub</button>            
        </IconFrame>

        <IconFrame url={"static/images/icons/icon_bracket.svg"}>
          <h1>Web Design</h1>
          <p>Strong artistic background</p>          
          <button className={`chip-a link `} >Work</button>   
        </IconFrame>        
      </section>
      <br/>
      <div className="divider-2"></div>

      <section className="page-double" /* style={{backgroundColor: 'var(--midground)'}} */>
        <ThemeBtns />
      </section>
           
    </div>
  );
}

export default HomePage