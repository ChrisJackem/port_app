'use client'
import "./page.css";
//import Image from 'next/image'
import { motion, stagger } from "motion/react";
//import Typewriter from "@/components/typewriter/typewriter";
import ThemeBtns from "@/components/themeBtns/themeBtns";
import { LoadImg } from "../../components/load_img/load_img";
import LoadingComponent from "@/components/loading_component/loading_component";
import dynamic from "next/dynamic";
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
    <div
        id='home-container'        
        className="home-container page-container"
    >
   {/*  <motion.div
        id='home-container'
        key="home"
        variants={variantsPage}
        initial="hidden"
        animate="enter" 
        exit="exit"
        transition={{ type: 'tween' }}
        className="home-container page-container"
    > */}
      <section className="page-flex">              
        {/* <Typewriter /> */}
        <TypewriterLoading />
        <LoadImg
        style={{ margin: '0 auto'}}       
          width={300}
          height={300}
          alt={"portrait drawing"}
          src={"static/images/portrait_02.svg"}
        >
          <LoadingComponent dark_mode={false}/>
        </LoadImg>
      </section>

      <section id='shields' className="page-flex">
        <div
          key='programming'
          className="shield bubble flex"
        >
            <LoadImg
              style={{ margin: '0 auto'}}      
              width={100}
              height={100}
              alt={"XX"}
              src={"static/images/icons/icon_bracket.svg"}
            ><LoadingComponent dark_mode={false}/></LoadImg>

            <h1>Programming</h1>
            <p>Self taught and formally accredited programmer</p>
            <br/>
            <button className={`chip-a link `} >GitHub</button>
        </div>

        <div className="shield bubble flex">
          <LoadImg
              style={{ margin: '0 auto'}}        
              width={100}
              height={100}
              alt={"XX"}
              src={"static/images/icons/icon_parent.svg"}
            ><LoadingComponent dark_mode={false}/></LoadImg>

          <h1>Web Design</h1>
          <p>Strong artistic background</p>
          <br/>
          <button className={`chip-a link `} >Work</button>
        </div>
        
        <div 
          className="shield bubble flex" 
        >
          <LoadImg
              style={{ margin: '0 auto'}}      
              width={100}
              height={100}
              alt={"XX"}
              src={"static/images/icons/icon_bracket.svg"}
            ><LoadingComponent dark_mode={false}/></LoadImg>
          <br/>
          <h1> Games </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas!</p>
          <br/>
          <button className={`chip-a link `} >Work</button>
        </div>
      </section>

      <div className="divider-2"></div>

      <section className="page-double" /* style={{backgroundColor: 'var(--midground)'}} */>
        <ThemeBtns />
      </section>
           
    </div>
  );
}

export default HomePage