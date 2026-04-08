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
import Mesh2 from "@/components/mesh2/mesh2";
import { LineHeaderHoriz } from "@/components/line_header_horiz/line_header_horiz";
import Rain from "@/components/rain/rain";
import ScrollMeter from "@/components/scroll_meter/scroll_meter";
import { useState } from "react";
import FlackPopup from "@/components/flack_popup/flack_popup";
import LetsBuild from "@/components/lets_build/lets_build";


/*********************************************************************************** Home Page  */

const TypewriterLoading = dynamic(
    ()=> import('@/components/typewritertoo/typewriter'),
    { loading: ()=> <LoadingComponent />}
)
const CacheReaderLoading = dynamic(
    ()=> import("@/components/cache_reader/cache_reader"),
    { loading: ()=> <LoadingComponent />}
)
/* const MeshLoading = dynamic(
    ()=> import("@/components/mesh/mesh"),
    { loading: ()=> <Mesh type={'dodec'}/>} 
) */

const HomePage = () => {
  const [showPop, setShowPop] = useState(false);
  return (
    <motion.div 
      id='home_container' 
      className="dotted page-container"
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
        <div id="home_blurb" className="flex flex-align-center bg-fade">
          <div className="flex-column padded">
            <LineHeader text='What I do' />
            <TypewriterLoading />
            <p className="t-vs">
              I make all kinds of things. This is my website where I showcase some of my recent and favorite digital content.
            </p>            
            <br/>
            <div className="flex">
              <button aria-label="Gallery page" className='button active'>work</button>
              <button aria-label="Gallery page" className='button'>Lets Talk</button>
            </div>
          </div>          
        </div>
        
        <Mesh2 />

        {/* <aside className="hero-meter"> */}
          <ScrollMeter
            className={''}
            triggers={[              
              { id: 0, start: 10, end: 20, color: 'var(--midground, #000)'},
              { id: 1, start: 20, end: 30, color: 'var(--text, yellow)'},
              { id: 2, start: 50, end: 80, color: 'var(--accent, yellow)'}
            ]}          
          >
            <p>0</p>
            <p>1</p>
            <FlackPopup />
          </ScrollMeter> 
          
        {/* </aside> */}

      </section>

      <br/>

      <section className="page-center padded page_double page-container">        
        <div className=" border-left flex flex-column-left" style={{ 
          gap: '0.25rem', 
          paddingLeft: '1.8rem', 
          justifyContent: 'center'         
        }}>
          <p className="t-shout">     
            <strong>I specialize in web apps. </strong>          
            However I can handle any aspect of almost any project from the metal to the final product.
          </p>
          <br/>
          <small className="t-ac">I even make a mean chicken parm</small>
          <br/>          
          <div className="flex ">
            <p>X</p>
            <p>X</p>
            <p>X</p>
          </div>
        </div>
        <img
          style={{ marginLeft: 'auto'}}
          fetchPriority="high"
          alt='vector self portrait'
          width='300px'
          height='300px'
          src='static/images/portrait_02.svg'
        />
      </section>

      <LineHeaderHoriz text={"SKILLSET SYNOPSIS A"}/>

      <section className={'page_triple page-container p-rel skill-triple bg-dk-fade'}>
        
        <IconFrame url="static/images/icons/icon_code.svg" alt="code icon">
          <h2>PROGRAMMING</h2>
          <p>Self taught with decades of programming experience</p>
          <Link
            aria-label="My GitHub profile"
            href={'https://github.com/ChrisJackem'} 
            target="_blank" rel="noopener noreferrer"
          >
            <button aria-label="Github external link" className='button active'>github</button>
          </Link> 
        </IconFrame>        

        <IconFrame url="static/images/icons/icon_game.svg" alt="parenthasis icon">
          <h2>APPLICATIONS</h2>
          <p>I make web-based full stack apps and games</p>            
          <Link
            href='/work' 
            aria-label="Work page"
          >
            <button aria-label={"Games page"} className='button active'>work</button>
          </Link>
        </IconFrame>

        <IconFrame url="static/images/icons/icon_web_1.svg" alt="web icon">
          <h2>DESIGN</h2>
          <p>I love to design and create and experienced in every medium</p>       
          <Link 
            href='/gallery' 
            aria-label="Gallery page"
          >
            <button aria-label="Gallery page" className='button active'>gallery</button>            
          </Link> 
        </IconFrame>
      </section>

      <div className={`feature-header flex`}>        
          <SVG_GEAR />
          <h1>WEBSITE FEATURES</h1>
      </div>

      <section className="page-center">
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

      <section className="page-center">
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
      </section>

      <hr className="bg-ac"/>

        <LetsBuild />
           
    </motion.div>
  );
}

export default HomePage