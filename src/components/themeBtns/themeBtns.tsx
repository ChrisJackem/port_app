'use client'
import React, { useContext } from 'react';
import './themeBtns.css';
import { AnimatePresence, motion } from 'motion/react';
import { THEMES, ThemeType } from '@/app/config/theme';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';

const ThemeBtns = () => {
    const { theme } = useContext(ThemeContext);       
    return ( 
    <div id='theme-main-container'>        
        <div id="theme-container">
            
            <AnimatePresence>
                <motion.img
                    id="theme-img"
                    className='absolute-fill'                    
                    key={theme}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    exit={{ x: -400, y: 0, opacity: 0 }}
                    /* transition={{ duration: .2, type: 'tween' }} */
                    alt='The active theme'
                    width={400} 
                    height={355}                            
                    src={`static/images/theme_${theme}.jpg`}
                    layout
                />
            </AnimatePresence>

            <div id='button-text' >
                <h2>Change Theme</h2>
                <p>Change the theme of the entire website with the buttons below</p>
            </div>
            <span id='active-theme-text'>Active: {theme}</span>
        </div>            
            <div id='btn-container' className="flex chip-tl-box">                  
                <ThemeBtn Theme={THEMES.Default} />               
                <ThemeBtn Theme={THEMES.Forest} />               
                <ThemeBtn Theme={THEMES.Sunset} />
                <ThemeBtn Theme={THEMES.Ocean} />
                <ThemeBtn Theme={THEMES.Candy} />                
            </div>
    </div> 
    )
}

const ThemeBtn = ({ Theme }: {Theme: ThemeType}) => {
    const { theme, SetTheme } = useContext(ThemeContext);
    return (
        <button
            className={`chip-a link theme-btn ${theme === Theme.name ? 'active' : ''}`}
            onClick={()=> { if (SetTheme) SetTheme(Theme); }}            
        >{Theme.name}</button>
    )
}

export default ThemeBtns