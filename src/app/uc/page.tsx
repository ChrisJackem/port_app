'use client'
import React from 'react'
import Image from 'next/image'
import styles from './ucstyles.module.css'
import AttentionSection, { IMG_TYPES } from '@/components/attention_section/attention_section';
import { useIsMobile } from '@/hooks/useIsMobile';
import { iframe } from 'motion/react-client';
import { LoadImg } from '@/components/load_img/load_img';

const UcPage = () => {
  const isMobile = useIsMobile();
  return (
    <div className={`paged ${styles.main_container}`}>

      <div>
        <h1>Ultra Custodian</h1>
        <p>A game I made in college that still has a special place in my heart. 
          A solid demo game with progression, multiple game modes, easter eggs, a tutorial, unlockables (literally) and more. 
          Works on desktop browsers.</p>
          <br/>
          <i><strong>Note:</strong> Turn down volume before you click the game</i>
          <br/>
          <br/>
      </div>

      <LoadImg
        className={styles.not_support_img}
        style={{ display: isMobile ? 'block' : 'none'}}
        src='static/UltraCustodian_2020/uc_splash_not_support.png' 
        alt='Game not supported'
        width={800}
        height={600}
      />     

      { !isMobile && <>
            <div className={`page-flex flex-column p-rel ${styles.game_frame_container}`}>
            <iframe                
                className={styles.game_frame}
                id='uc-game'
                title="UC demo"                
                src='static/UltraCustodian_2020/index.html'
            ></iframe>            
        </div>
        </>
       }

        <h3 className='tx-cen'>Press P to pause</h3>
        <br/>          
        
        <AttentionSection
            color={'var(--background, #CCC)'}
            bgOpacity={0.5}
            icon_url={IMG_TYPES.QUESTION}
            supressInitial={true}
        >
            <h2>How to play</h2>
            <br/>
            <p>Use the keyboard and mouse to move around the school. There are many different tasks to complete every day to earn money.
            Clean up the school, then clock out when you are done.</p>
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

export default UcPage