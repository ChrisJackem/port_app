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
import LineHeader from "@/components/line_header/line_header";
import Mesh from "@/components/Mesh/mesh";


/*********************************************************************************** Home Page  */

const TypewriterLoading = dynamic(
    ()=> import('@/components/typewritertoo/typewriter'),
    { loading: ()=> <LoadingComponent />}
)
const CacheReaderLoading = dynamic(
    ()=> import("@/components/cache_reader/cache_reader"),
    { loading: ()=> <LoadingComponent />}
)
const MeshLoading = dynamic(
    ()=> import("@/components/Mesh/mesh"),
    { loading: ()=> <Mesh />}
)

const HomePage = () => {
  return (
    <motion.div 
      id='home_container' 
      className="page-container"
      key="home"
      variants={PageVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <section
        id="home-splash" 
        className="page_double page-hero p-rel"
      >
        <div id="home_blurb" className="flex flex-align-center">
          <div className="flex-column padded">
            <LineHeader text='What I do' />
            <TypewriterLoading />
            <p className="t-vs">
              I make all kinds of things. This is my website where I showcase some of my recent and favorite digital content.
            </p>            
            <br/>
            <div className="flex">
              <button aria-label="Gallery page" className='button active'>work</button>
            </div>
          </div>          
        </div>
        <MeshLoading />
      </section>

      <br/>

      <section className="page-center padded page_double">
        <div>
          <p className="t-shout">     
            <strong>I specialize in web apps. </strong>          
            However I can handle any aspect of almost any project from the metal to the final product.
          </p>
          <br/>
          <small className="t-ac">I even make a mean chicken parm</small>
          <br/>
          <br/>
          <div className="flex ">
            <p>X</p>
            <p>X</p>
            <p>X</p>
          </div>
        </div>
        <img
          fetchPriority="high"
          alt='vector self portrait'
          width='300px'
          height='300px'
          src='static/images/portrait_02.svg'
        />
      </section>

      <section className={'page_triple page-container'}>
        <IconFrame url="static/images/icons/icon_code.svg" alt="code icon">
          <h2>PROGRAMMING</h2>
          <p>Self taught with decades of programming experience</p>
          <Link
            aria-label="My GitHub profile"
            href={'https://github.com/ChrisJackem'} 
            target="_blank" rel="noopener noreferrer"
          >
            <button aria-label="Github external link" className='button dark'>github</button>
          </Link> 
        </IconFrame>        

        <IconFrame url="static/images/icons/icon_game.svg" alt="parenthasis icon">
          <h2>APPLICATIONS</h2>
          <p>I make web-based full stack apps and games</p>            
          <Link
            href='/work' 
            aria-label="Work page"
          >
            <button aria-label={"Games page"} className='button dark'>work</button>
          </Link>
        </IconFrame>

        <IconFrame url="static/images/icons/icon_web_1.svg" alt="web icon">
          <h2>DESIGN</h2>
          <p>I love to design and create and experienced in every medium</p>       
          <Link 
            href='/gallery' 
            aria-label="Gallery page"
          >
            <button aria-label="Gallery page" className='button dark'>gallery</button>            
          </Link> 
        </IconFrame>
      </section>

      <div className={`feature-header flex`}>        
          <SVG_GEAR />
          <h3>WEBSITE FEATURES</h3>
      </div>

      {/* <section className="padded">
        <AttentionSection 
          color={'var(--background, #CCC)'}
          bgOpacity={0.6} 
          icon_url={IMG_TYPES.CACHE}
        >
          <h4>CUSTOM IMAGE CACHE</h4>          
          <p>This site uses a <strong>custom image cache system</strong> for faster loading. As more images are loaded you will see this widget fill up. Can you find all the images?</p>
          <br/><br/>
          <CacheReaderLoading />
        </AttentionSection>
      </section>      
      
      <ThemeBanner />

      <section className="padded">
        <AttentionSection 
          color={'var(--background, #CCC)'} 
          bgOpacity={0.6} 
          icon_url={IMG_TYPES.SCROLL}          
        >
          <h4>SCROLL TO TOP</h4>          
          <p>Incase you haven&apos;t noticed, you can click the stripe at the top to instantly scroll up to the top for easier navigation.</p>
          <br/>
          <i>You can also navigate using the menu at the bottom of every page.</i>
        </AttentionSection>
      </section> */}
           
    </motion.div>
  );
}

export default HomePage