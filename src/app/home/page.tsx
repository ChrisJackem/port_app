'use client'
import "./page.css";
import ThemeBtns from "@/components/themeBtns/themeBtns";
import { LoadImg } from "../../components/load_img/load_img";
import LoadingComponent from "@/components/loading_component/loading_component";
import dynamic from "next/dynamic";
import { IconFrame } from "@/components/icon_frame/icon_frame";
import AttentionSection, { IMG_TYPES } from "@/components/attention_section/attention_section";
import { motion } from "motion/react";
import { PageVariants } from "../config/variants";
import { SVG_GEAR } from "@/components/svg_btns/svg_btns";


/*********************************************************************************** Home Page  */

const TypewriterLoading = dynamic(
    ()=> import('@/components/typewriter/typewriter'),
    { loading: ()=> <LoadingComponent />}
)

const CacheReaderLoading = dynamic(
    ()=> import("@/components/cache_reader/cache_reader"),
    { loading: ()=> <LoadingComponent />}
)

const HomePage = () => {
  return (
    <motion.div 
      id='home-container' 
      className="home-container page-container"
      key="home"
      variants={PageVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >

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
      <br />


      <div className={`paged feature-header flex`}>
        
          <SVG_GEAR />
          <h2>Website Features</h2>
        
      </div>


      <section className="padded">
        <AttentionSection 
          color={'var(--background, #CCC)'} 
          bgOpacity={0.6} 
          icon_url={IMG_TYPES.CACHE}
        >
          <h2>Custom Image Cache</h2>
          <br/>
          <p>This site uses a <strong>custom image cache system</strong> for faster loading. As more images are loaded you will see this widget fill up. Can you find all the images?</p>
          <br/>
          <br/>
          <CacheReaderLoading />
        </AttentionSection>
      </section>
      
      <section className="page_double">
        <div className="flex home_text">
          <h2>Website Theme</h2>
          <p>You can change the colors of the entire site any time you want. 
            Your choice will be saved to localStorage and so when you come back later your theme will still be active.</p>
          <i>Theme can also be changed at the the bottom of every page.</i>   
        </div>
        <ThemeBtns />
      </section>

      <section className="padded">
        <AttentionSection 
          color={'var(--background, #CCC)'} 
          bgOpacity={0.6} 
          icon_url={IMG_TYPES.SCROLL}
          
        >
          <h2>Scroll to Top</h2>
          <br/>
          <p>Incase you haven&apos;t noticed, you can click the stripe at the top to instantly scroll up to the top for easier navigation.</p>
          <br/>
          <i>You can also navigate using the menu at the bottom of every page.</i>
        </AttentionSection>
      </section>
           
    </motion.div>
  );
}

export default HomePage