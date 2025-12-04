'use client'
import React from 'react';
import styles from './pdstyles.module.css';
import AttentionSection, { IMG_TYPES } from '@/components/attention_section/attention_section';

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
            <iframe                
                className={styles.game_frame}
                id='pd-game'
                title="Pipe Dream"
                src='static/PipeDream/index.html'
                sandbox='x'
            ></iframe>            
        </div>     
        
        <AttentionSection
            color={'var(--background, #CCC)'}
            bgOpacity={0.5}
            icon_url={IMG_TYPES.QUESTION}
            supressInitial={true}
        >
            <h2>How to play</h2>
            <br/>
            <p>Use the keyboard and mouse to move around the school. There are many different tasks to complete every day to earn money.
            You can check the filth levels using the bars in the interface. Clean up the whole thing to earn a bonus, and clock out when you are done.</p>
            <br/>
            <p>Use money to unlock tools to earn even more money, or win money or fantastic rewards from lockers!</p>
            <br/>
            <table className='scroll-table'>
                <caption className='scroll-table-caption'>Controls</caption>
                <tbody>
                    <tr>
                        <td>Move</td>
                        <td>WASD</td>
                    </tr>
                    <tr>
                        <td>Look</td>
                        <td>Mouse</td>
                    </tr>
                    <tr>
                        <td>Hand/Tools</td>
                        <td>Left Click</td>
                    </tr>
                    <tr>
                        <td>Trash</td>
                        <td>Right Click</td>
                    </tr>
                                
                    <tr>
                        <td>Buy Locker</td>
                        <td>Y</td>
                    </tr>
                    <tr>
                        <td>Pause</td>
                        <td>P</td>
                    </tr>
                </tbody>
            </table>
            
        </AttentionSection>
    </div>
  )
}

export default PdPage