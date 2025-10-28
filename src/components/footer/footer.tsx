'use client'
import './footer.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import ChipHeader from '../chip_header/chip_header'
import { THEMES, ThemeType } from '@/app/config/theme';
import { LoadImg } from '../load_img/load_img';
import Link from 'next/link';
import LinkComponent from '../link_component/linkComponent';

const Footer = () => {
  return (
    <footer id='footer-container' className='flex psudo'>      
      
      <section id='footer-left' className='flex-child'>
        <ChipHeader title='Jump to Page' childBg='rgba(255,255,255, 0.4)' fontSize={22}>
          <div className='flex footer-links'>
            <LinkComponent name='Home' href='/home'/>
            <LinkComponent name='About' href='/about'/>
            <LinkComponent name='Work' href='/work'/>
            
          </div>
        </ChipHeader>
        <br/>

        <div className={'padded bg-faded tx-fg chip-tl-md theme-container'}>          
          <h5 style={{ marginBottom: 5, color: 'white' }}>Change Theme</h5>
          <div className='flex' style={{ padding: '5px 0px'}}>
            <ThemeBtnFooter Theme={THEMES.Default} />
            <ThemeBtnFooter Theme={THEMES.Forest} />
            <ThemeBtnFooter Theme={THEMES.Sunset} />
            <ThemeBtnFooter Theme={THEMES.Ocean} />
            <ThemeBtnFooter Theme={THEMES.Candy} />
          </div>
        </div>

      </section>

      <aside id='footer-aside' className='flex-column flex-child chip-tl-md'>
        <ChipHeader title='Links' fontSize={22} childBg='rgba(255,255,255, 0.4)'>

          <div className='flex'>
            <Link href='https://www.facebook.com/chris.jackem'>
              <LoadImg 
                className={'footer-external'} 
                src='./static/images/footer/fb_logo.svg'
              />
            </Link>
            <Link href='https://www.linkedin.com/in/christopher-jackem-128b04187/'>
              <LoadImg 
                className={'footer-external'} 
                src='./static/images/footer/li_logo.svg'
              />
            </Link>
          </div>

        <br/>
        <div className='flex footer-lib'>
          <h4 style={{ width: '100%', marginBottom: 4 }}>This site is powered by</h4>
          <LoadImg src='./static/images/footer/framerLogo.png' alt='Framer motion logo'></LoadImg>
          <LoadImg src='./static/images/footer/nextLogo.png' alt='Next logo'></LoadImg>
        </div>

        </ChipHeader>
      </aside>
      <div className='footer-copy chip-tl'>&copy; 2025 Chris Jackem</div>
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
              color : `${ active ? 'var(--accent, #CCC)' : 'inherit'}`,
              borderBottom: `${active ? '2px' : '0px'} solid var(--accent, #CCC)`,  
              /* fontSize: active ? '22px' : '20px',  */
              fontWeight: 600 
            }}
            onClick={()=>SetTheme(Theme)}           
        >{Theme.name}</div>
    )
}

export default Footer