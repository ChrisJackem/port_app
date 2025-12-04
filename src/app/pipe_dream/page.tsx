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
        <p>A game I made in college that still has a special place in my heart. 
          A solid demo game with progression, multiple game modes, easter eggs, a tutorial, unlockables (literally) and more. 
          Works on desktop browsers.</p>
          <br/>
          <i><strong>Note:</strong> Turn down volume before you click the game</i>
          <br/>
          <br/>
      </div>
            <div className={`page-flex flex-column p-rel ${styles.game_frame_container}`}>
            {/* <iframe                
                className={styles.game_frame}
                id='pd-game'
                title="Pipe Dream"
                src='static/PipeDream/index.html'
                sandbox='x'
            ></iframe>  */}
            <IFrameComponent src='static/PipeDream/index.html' />      
        </div>
    </div>
  )
}

export default PdPage