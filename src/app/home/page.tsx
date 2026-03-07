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
import Link from "next/link";
import ThemeBanner from "@/components/theme_banner/theme_banner";


/*********************************************************************************** Home Page  */

const TypewriterLoading = dynamic(
    ()=> import('@/components/typewritertoo/typewriter'),
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
          <p>Self taught with decades of programming experience</p>
          <Link className="" 
            href={'https://github.com/ChrisJackem'} 
            target="_blank" rel="noopener noreferrer"
          >
            <button aria-label="Github external link" className='button'>Github</button>
          </Link> 
        </IconFrame>        

        <IconFrame url="static/images/icons/icon_game.svg" alt="parenthasis icon">
          <h1>Applications</h1>
          <p>I make web-based full stack apps and games</p>            
          <Link className="" href={'/work'}>
            <button aria-label={"Games page"} className='button'>Work</button>
          </Link>
        </IconFrame>

        <IconFrame url="static/images/icons/icon_web_1.svg" alt="web icon">
          <h1>Design</h1>
          <p>I love to design and create and experienced in every medium</p>       
          <Link href='/gallery' aria-label="Gallery page">
            <button aria-label="Gallery page" className='button'>Gallery</button>            
          </Link> 
        </IconFrame>
      </section>

      <div className={`feature-header flex`}>        
          <SVG_GEAR />
          <h3>Website Features</h3>
      </div>

      <section className="padded">
        <AttentionSection 
          color={'var(--background, #CCC)'}
          bgOpacity={0.6} 
          icon_url={IMG_TYPES.CACHE}
        >
          <h4>Custom Image Cache</h4>          
          <p>This site uses a <strong>custom image cache system</strong> for faster loading. As more images are loaded you will see this widget fill up. Can you find all the images?</p>
          <br/><br/>
          <CacheReaderLoading />
        </AttentionSection>
      </section>
      
      {/* <section id='theme-page' >
        
        <ThemeBtns />
      </section> */}
      <ThemeBanner />

      <section className="padded">
        <AttentionSection 
          color={'var(--background, #CCC)'} 
          bgOpacity={0.6} 
          icon_url={IMG_TYPES.SCROLL}          
        >
          <h4>Scroll to Top</h4>          
          <p>Incase you haven&apos;t noticed, you can click the stripe at the top to instantly scroll up to the top for easier navigation.</p>
          <br/>
          <i>You can also navigate using the menu at the bottom of every page.</i>
        </AttentionSection>
      </section>
           
    </motion.div>
  );
}

export default HomePage