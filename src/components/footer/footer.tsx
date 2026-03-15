'use client'
import './footer.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import ChipHeader from '../chip_header/chip_header'
import { THEMES, ThemeType } from '@/app/config/theme';
import { LoadImg } from '../load_img/load_img';
import Link from 'next/link';
import LinkComponent from '../link_component/linkComponent';
import { AnimatePresence, motion } from 'motion/react';
import { STATUS, useImgs } from '@/hooks/useImg';
import LoadingComponent from '../loading_component/loading_component';
import { theme_directoried, theme_urls } from '../themeBtns/themeBtns';
import { StrokeLogo } from '../loading_component/loading_component';
import SvgBtn, { SVG_FB, SVG_GH, SVG_LI } from '../svg_btns/svg_btns';

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  const [status, data] = useImgs(theme_urls);
  if (status !== STATUS.LOADED || data === undefined) return <LoadingComponent />
  
  return (
    <footer id='footer-container' className='psudo flex'>      
      
      <section id='footer-logo-container'>
          <StrokeLogo infinite={false}/>
          <small>chrisjackem.com</small>    
      </section>
      
      <section id='footer-left' className='flex-column'>        
        <div className='footer_links'>
          <h4 className='t-bg'>NAVIGATE</h4>
          <div className='flex footer-button-container'>
            <LinkComponent className={`button`} name='HOME' href='/home'/>
            <LinkComponent className={`button`} name='ABOUT' href='/about'/>
            <LinkComponent className={`button`} name='GALLERY' href='/gallery'/>
            <LinkComponent className={`button`} name='WORK' href='/work'/>
          </div>
        </div>
        <div className={'footer_links'}>
          <h4>THEME</h4>
          <div className='flex footer-button-container'>
            <ThemeBtnFooter Theme={THEMES.Default} />
            <ThemeBtnFooter Theme={THEMES.Forest} />
            <ThemeBtnFooter Theme={THEMES.Sunset} />
            <ThemeBtnFooter Theme={THEMES.Ocean} />
            <ThemeBtnFooter Theme={THEMES.Candy} />
          </div>        
        </div>
      </section>

      <aside id='footer-right' className='flex-column'>        
        <div>    

          <div className='flex flex-end'>
            <Link href='https://www.facebook.com/chris.jackem'>
              {/* <LoadImg 
                className={'footer-icon'} 
                src='./static/images/footer/fb_logo.svg'
              /> */}
              <SVG_FB classname='footer-icon' final_color='var(--accent, yellow)'/>
            </Link>
            <Link href='https://www.linkedin.com/in/christopher-jackem-128b04187/'>
             {/*  <LoadImg 
                className={'footer-icon'} 
                src='./static/images/footer/li_logo.svg'
              /> */}
              <SVG_LI classname='footer-icon' />
            </Link>
            <Link href='https://github.com/ChrisJackem'>
              {/* <LoadImg 
                className={'footer-icon'} 
                src='./static/images/footer/github_logo.svg'
              /> */}
              <SVG_GH classname='footer-icon'/>
            </Link>
          </div>

        <br/>
        <hr/>
        <br/>        

        <div className='flex footer-lib flex-align-center flex-end'>
          <p>Built with:</p>
          <LoadImg className={'footer-icon'} src='./static/images/footer/framerLogo.png' alt='Framer motion logo'></LoadImg>
          <LoadImg className={'footer-icon'} src='./static/images/footer/nextLogo.png' alt='Next logo'></LoadImg>
        </div>

        </div>
      </aside>
      <div className='footer-copy chip-tl'>&copy; 2025 CHRIS JACKEM</div>
    </footer>
  )
}

const ThemeBtnFooter = ({ Theme }: {Theme: ThemeType}) => {
    const { theme, SetTheme } = useContext(ThemeContext);
    const active = theme === Theme.name;
    return (
        <button
            className={`button footer-theme-btn ${active && 'active'}`}
            onClick={()=>SetTheme(Theme)}
        >{Theme.name.toLowerCase()}</button>
    )
}

export default Footer