/* eslint-disable @next/next/no-img-element */
'use client'
import "./page.css";
import ThemeBtns from "@/components/themeBtns/themeBtns";
import { LoadImg } from "../../components/load_img/load_img";
import LoadingComponent from "@/components/loading_component/loading_component";
import dynamic from "next/dynamic";
import { IconFrame } from "@/components/icon_frame/icon_frame";


/*********************************************************************************** Home Page  */
// Animation

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

      <section className="page_double">
        <div className="centered">
          <CacheReaderLoading />
        </div>
        <div className="faded_bg chip-tl-br">
          <h2 className="feature chip-tl-br">Custom Image Cache</h2>
          <p className="padded"  style={{ marginRight: '10px' }}>This site uses a <strong>custom image cache system </strong>for faster loading. As more images are loaded you will see this widget fill up. Can you find all the images?</p>
        </div>        
      </section>

     <br/>
      <div className="divider-2"></div>
      <br/>

      <section className="page_double">
        <div className="flex home_text">
          <h2 className="feature chip-tl-br">Website Theme</h2>
          <p>You can change the colors of the entire site any time you want. 
            Your choice will be saved to localStorage and so when you come back later your theme will still be active.</p>
          <i>Theme can also be changed from the footer below.</i>   
        </div>

        <ThemeBtns />
      </section>
           
    </div>
  );
}

export default HomePage