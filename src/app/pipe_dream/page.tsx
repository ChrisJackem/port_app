'use client'
import React from 'react';
import styles from './pdstyles.module.css';
import AttentionSection, { IMG_TYPES } from '@/components/attention_section/attention_section';
import IFrameComponent from '@/components/i_frame/iframe_component';

const PdPage = () => {
  return (
    <div className={`paged ${styles.main_container}`}>

      <div>
        <h1>Pipe Dream</h1>
        <p>A web game I made with 100% vanilla JavaScript. This is the classic pipe dream game that everyone knows ported to normal HTML SPA.
          Features a robust level editor you can use to make your own custom levels or even edit the originals. Choose any color of fluid to create your puzzles, and name the tiles to create a more immersive experience.

        </p>          
      </div>
            <div className={`page-flex flex-column p-rel ${styles.game_frame_container}`}>            
            <IFrameComponent src='static/PipeDream/index.html'/>      
        </div>
    </div>
  )
}

export default PdPage