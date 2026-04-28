'use client'
import './footer.css'
import React, { useContext } from 'react'
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
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
import LineHeader from '../line_header/line_header';
import IframeFooter from '../i_frame_footer/i_frame_footer';


const Footer = () => {
  const {theme} = useContext(ThemeContext);
  const [status, data] = useImgs(theme_urls);
  if (status !== STATUS.LOADED || data === undefined) return <LoadingComponent />
  
  return (
    
    <footer id='footer-container' className='psudo flex'>      
      <section id='footer-logo-container'>
          <StrokeLogo infinite={false}/>          
          <small>chrisjackem.com</small>
          {/* <div>///////////////////////</div> */}
      </section>
      
      <section id='footer-left' className='flex-column'>        
        <div className='footer_links'>
          {/* <h4 >NAV</h4> */}
          <ul className='flex list-style-none footer-button-container'>
            {/* <LinkComponent className={``} name='Home' href='/home'/> */}
            <LinkFooter name='Home' href='/home'/>
            <LinkFooter name='About' href='/about'/>
            <LinkFooter name='Work' href='/work'/>
            {/* <LinkComponent className={``} name='About' href='/about'/> */}
            {/* <LinkComponent className={`button`} name='GALLERY' href='/gallery'/> */}
            {/* <LinkComponent className={``} name='Work' href='/work'/> */}
          </ul>
        </div>
        <div className={'footer_links'}>
          <LineHeader text='Theme' />
          <br/>
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
            <Link
              aria-label='My FaceBook profile'            
              href='https://www.facebook.com/chris.jackem'>              
              <SVG_FB classname='footer-icon' final_color='var(--accent, yellow)'/>
            </Link>
            <Link 
              aria-label='My LinkedIn profile'
              href='https://www.linkedin.com/in/christopher-jackem-128b04187/'>             
              <SVG_LI classname='footer-icon' />
            </Link>
            <Link
              aria-label='My GitHub profile'
              href='https://github.com/ChrisJackem'>              
              <SVG_GH classname='footer-icon'/>
            </Link>
          </div>

        <br/>
        <hr/>
        <br/>        

        <div className='flex footer-lib flex-align-center flex-end'>          
          <LoadImg className={'footer-icon'} width={600} height={228} src='./static/images/footer/framerLogo.png' alt='Framer motion logo'></LoadImg>
          <LoadImg className={'footer-icon'} width={502} height={501} src='./static/images/footer/nextLogo.png' alt='Next logo'></LoadImg>
        </div>

        </div>
      </aside>
      <div className='footer-copy'>&copy; 2025 CHRIS JACKEM</div>
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

const LinkFooter = ({ name, href }: { name: string, href: string }) => {
    const pathname = usePathname();
    const isActive:string = pathname === href ? 'active' : ''
    return (
        <li>
            <Link href={href} className={`footer-link ${isActive ? "active" : ""}`}>
                {name}
            </Link>
        </li>
    )
}

export default Footer