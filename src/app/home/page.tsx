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
import CacheReader from "@/components/cache_reader/cache_reader";
//import { LoadImgs } from "@/components/load_img/load_imgs";

/*********************************************************************************** Home Page  */
// Animation

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

      <section className={'page_triple'}>
        <IconFrame url="static/images/icons/icon_code.svg" alt="code icon">
          <h1>Programming</h1>
          <p>Self taught and formally accredited programmer</p>            
          <button className={`chip-a link `} >GitHub</button>            
        </IconFrame>        

        <IconFrame url="static/images/icons/icon_parent.svg" alt="parenthasis icon">
          <h1>Programming</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, reprehenderit!</p>            
          <button className={`chip-a link `} >GitHub</button>            
        </IconFrame>

        <IconFrame url="static/images/icons/icon_web.svg" alt="web icon">
          <h1>Web Design</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempore? Esse nulla hic mollitia pariatur doloribus cupiditate fugiat voluptas quam?</p>
          <button className={`chip-a link `} >Work</button>  
          </IconFrame>
      </section>

      <br/>
      <div className="divider-1"></div>
      <br/>

      <section className="page_double" style={{
          padding: '40px', 
          gap: '2rem' 
        }}>
        <CacheReader />
        <div>
          <h2>Feature: Custom Image Cache</h2>
          <p>This site uses a custom image cache bla blac</p>
        </div>
      </section>

      <br/>
      <div className="divider-2"></div>
      <br/>

      <section className="paged">
        <ThemeBtns />
      </section>
           
    </div>
  );
}

export default HomePage