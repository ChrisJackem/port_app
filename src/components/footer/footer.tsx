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

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  const [status, data] = useImgs(theme_urls);
  if (status !== STATUS.LOADED || data === undefined) return <LoadingComponent />
  
  return (
    <footer id='footer-container' className='psudo flex pixel_grad'>      
      
      <section id='footer-left' className='flex-column'>        
        <div className='footer_links'>
          <h4 className='t-bg'>Navigate</h4>
          <div className='flex'>
            <LinkComponent name='Home' href='/home'/>
            <LinkComponent name='About' href='/about'/>
            <LinkComponent name='Gallery' href='/gallery'/>
            <LinkComponent name='Work' href='/work'/>
          </div>
        </div>
        <div className={'footer_links'}>
          <h4>Change Theme</h4>
          <div className='flex '>
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
            <Link href='https://github.com/ChrisJackem'>
              <LoadImg 
                className={'footer-external'} 
                src='./static/images/footer/github_logo.svg'
              />
            </Link>
          </div>

        <br/>
        <hr/>
        <br/>

        

        <div className='flex footer-lib flex-align-center flex-end'>
          <p>Built with:</p>
          <LoadImg src='./static/images/footer/framerLogo.png' alt='Framer motion logo'></LoadImg>
          <LoadImg src='./static/images/footer/nextLogo.png' alt='Next logo'></LoadImg>
        </div>

        </div>
      </aside>
      <div className='footer-copy chip-tl'>&copy; 2025 Chris Jackem</div>
    </footer>
  )
}

const ThemeBtnFooter = ({ Theme }: {Theme: ThemeType}) => {
    const { theme, SetTheme } = useContext(ThemeContext);
    const active = theme === Theme.name;
    return (
        <button
            className={`akira ${active ? 'active-theme' : ''}`}            
            onClick={()=>SetTheme(Theme)}
        >{Theme.name}</button>
    )
}

export default Footer