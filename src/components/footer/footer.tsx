'use client'
import React, { useContext } from 'react'
import './footer.css'
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import ChipHeader from '../chip_header/chip_header'
import CacheReader from '../cache_reader/cache_reader'
import { THEMES, ThemeType } from '@/app/config/theme';
import { Armata } from 'next/font/google';

const font_body = Armata({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-armata'
});

const Footer = () => {
  return (
    <footer id='footer-container'>
      
      <div id='footer-header'>
       
        <ChipHeader 
        title='Jump to Page'
        childBg='rgba(255,255,255, .2)'
        >
          <div className='flex footer-links'>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>      
            <a href='/about'>About</a>      
            <a href='/about'>About</a>      
          </div>
        </ChipHeader>
      </div>

      <div id='footer-aside' className='flex-column chip-tl-md tx-fg'>
        
        <ChipHeader title='External Links'/>
        {/* <ChipHeader 
        title='Test'
        colBg='red'
        /> */}
        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>

        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
      </div>

      <div id='footer-footer' className='chip-tl-md'>
        <h3>Change Theme</h3>
        <p style={{ fontSize: 'small' }}>This changes the theme of the entire site until you change it</p>
        <div 
          style={{ padding: '1rem'}}
          className='flex'
        >
          <ThemeBtnFooter Theme={THEMES.Default} />             
          <ThemeBtnFooter Theme={THEMES.Forest} />               
          <ThemeBtnFooter Theme={THEMES.Sunset} />
          <ThemeBtnFooter Theme={THEMES.Ocean} />
          <ThemeBtnFooter Theme={THEMES.Candy} />
        </div>
        

        {/* <CacheReader /> */}
      </div>
    </footer>
  )
}

const ThemeBtnFooter = ({ Theme }: {Theme: ThemeType}) => {
    const { theme, SetTheme } = useContext(ThemeContext);
    const active = theme === Theme.name;
    return (
        <div
            role='button'
            className={`pointer `}
            style={{
              transition: 'all 200ms ease-out',
              color : `${ active ? 'var(--background, #CCC)' : 'inherit'}`,
              borderBottom: `${active ? '2px' : '0px'} solid var(--background, #CCC)`,  
              fontSize: active ? '22px' : '20px', 
              fontWeight: 600 
            }}
            onClick={()=>SetTheme(Theme)}           
        >{Theme.name}</div>
    )
}

export default Footer