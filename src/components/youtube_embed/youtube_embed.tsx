import React, { useState } from "react";
import styles from './youtube_embed.module.css'
import LoadingComponent from "../loading_component/loading_component";

const YoutubeEmbed = ({ embedId, visible }:{embedId: string; visible: boolean}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div className={styles.video_responsive}>
      <iframe
        style={{ visibility: visible && loaded ? 'visible' : 'hidden' }}
        width="800"
        height="300"
        onLoad={()=>setLoaded(true)}      
        src={`https://www.youtube.com/embed/${embedId}`}
        allowFullScreen
        title="Embedded youtube video"
      /> 
      { !loaded && visible && <LoadingComponent />}    
    </div>
  )
};

export default YoutubeEmbed;