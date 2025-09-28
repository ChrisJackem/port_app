import React, { useState } from "react";
import styles from './youtube_embed.module.css'
import LoadingComponent from "../loading_component/loading_component";

/**
 * Youtube component - 
 * Loads youtube video [embedId] and shows loading component while loading DOM.
 * Control the visiblity so we keep the video loaded but hide it.
 * @param embedId the youtube id (v=XXXX) 
 * @param visible hide iFrame to keep loaded but invisible
 */
const YoutubeEmbed = ({ embedId, visible=true }:{embedId: string; visible?: boolean}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div className={styles.video_responsive} style={{ 
        zIndex: visible ? 1 : -1, 
        opacity: visible ? 1 : 0,
        transform: `translateX(${visible ? 0 : -100}px)`
      }}>
      <iframe
        style={{ visibility: visible && loaded ? 'visible' : 'hidden' }}
        onLoad={()=>setLoaded(true)}      
        src={`https://www.youtube.com/embed/${embedId}`}
        allowFullScreen
        title="Embedded youtube video"
      /> 
      { !loaded && visible && (
        <div className="p-abs" style={{ width: '100%', height: "100%" }}>
          <LoadingComponent />
        </div>
        )}    
    </div>
  )
};

export default YoutubeEmbed;