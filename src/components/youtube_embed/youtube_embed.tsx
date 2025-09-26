import React from "react";
import styles from './youtube_embed.module.css'

const YoutubeEmbed = ({ embedId }:{embedId: string}) => (
  <div className={styles.video_responsive}>
    <iframe
      width="800"
      height="300"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="modestbranding;"
      allowFullScreen
      title="Embedded youtube video"
    />
  </div>
);

export default YoutubeEmbed;