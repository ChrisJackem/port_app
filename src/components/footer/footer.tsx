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
    <footer id='footer-container' className='flex psudo'>      
      
      <section id='footer-left' className='flex-child'>
        <ChipHeader title='Navigate' childBg='rgba(255,255,255, 0.4)' colTx={'var(--accent)'} fontSize={18}  size={'small'}>
          
          <div className='flex footer-links'>
            <LinkComponent name='Home' href='/home'/>
            <LinkComponent name='About' href='/about'/>
            <LinkComponent name='Gallery' href='/gallery'/>
            <LinkComponent name='Work' href='/work'/>            
          </div>
        </ChipHeader>


        <div className={'padded bg-faded tx-fg theme_container'}>
          
          <h5 style={{ marginBottom: 5, color: 'white' }}>Change Theme</h5>
          <div className='flex' style={{ padding: '5px 0px'}}>
            <ThemeBtnFooter Theme={THEMES.Default} />
            <ThemeBtnFooter Theme={THEMES.Forest} />
            <ThemeBtnFooter Theme={THEMES.Sunset} />
            <ThemeBtnFooter Theme={THEMES.Ocean} />
            <ThemeBtnFooter Theme={THEMES.Candy} />
          </div>
        <AnimatePresence>
          <motion.img
              className='theme_img'                    
              key={theme}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: -400, y: 0, opacity: 0 }}
              transition={{ duration: .4, type: 'tween' }}
              alt={`Active theme image: ${theme}`}
              width={400} 
              height={355}
              src={ typeof data === 'string'
                  ? data
                  : data.get(theme_directoried(theme))
              }
              layout
          />
        </AnimatePresence>
        </div>
      </section>

      <aside id='footer-aside' className='flex-column flex-child chip-tl-md'>
        <ChipHeader title='External Links' fontSize={18} childBg='rgba(255,255,255, 0.4)' colTx={'var(--accent)'} size={'small'}>

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

        <div className='flex footer-lib'>
          <h6 style={{ width: '100%', marginBottom: 4 }}>Built with</h6>
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
            className={`pointer ${active ? 'active-theme' : ''}`}
            style={{
              transition: 'all 200ms ease-out',
              color : `${ active ? 'var(--accent, #CCC)' : 'inherit'}`,
              fontWeight: 600 
            }}
            onClick={()=>SetTheme(Theme)}
        >{Theme.name}</div>
    )
}

export default Footer