'use client'
import './footer.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import ChipHeader from '../chip_header/chip_header'
import { THEMES, ThemeType } from '@/app/config/theme';


const Footer = () => {
  return (
    <footer id='footer-container' className='flex psudo'>      
      
      <section id='footer-left' className='flex-child'>
        <ChipHeader title='Jump to Page' childBg='rgba(255,255,255, 0.4)'>
          <div className='flex footer-links'>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
            <a href='/about'>About</a>
            <a href='/about'>About</a>
          </div>
        </ChipHeader>
        <br/>
        <div>
          {/* <h5 className='bg-bg tx-fg chip-tl-br' style={{padding: '6px'}}>Change Theme</h5> */}          
          <h5 >Change Theme</h5>          
          <div className='flex' style={{ padding: '5px 0px'}}>
            <ThemeBtnFooter Theme={THEMES.Default} />
            <ThemeBtnFooter Theme={THEMES.Forest} />
            <ThemeBtnFooter Theme={THEMES.Sunset} />
            <ThemeBtnFooter Theme={THEMES.Ocean} />
            <ThemeBtnFooter Theme={THEMES.Candy} />
          </div>
          {/* <small>This changes the theme of the entire site until you change it</small> */}
        </div>
      </section>

      <aside id='footer-aside' className='flex-column flex-child chip-tl-md'>        
        <ChipHeader title='External Links'/>        
        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>

        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>2025 CMJ</p>
      </aside>

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