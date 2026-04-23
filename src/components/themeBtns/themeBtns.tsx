'use client'
import React, { useContext } from 'react';
import './themeBtns.css';
import { AnimatePresence, motion } from 'motion/react';
import { THEMES, ThemeType } from '@/app/config/theme';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import LoadingComponent from '../loading_component/loading_component';
import { STATUS, useImgs } from '@/hooks/useImg';
import PageButton from '../page_button/page_button';

// The images are all in the same dir, and 1 for each theme
export const theme_directoried = (s:string) => `static/images/theme_${s}.jpg`
export const theme_urls:string[] = Object.keys(THEMES).map( name => theme_directoried(name) );

const ThemeBtns = () => {
    const {theme} = useContext(ThemeContext);
    const [status, data] = useImgs(theme_urls);   

    if (status !== STATUS.LOADED || data === undefined) return <LoadingComponent />
    return ( 
        <div id='theme-main-container'>            
            <div id='btn-container' className={`flex chip-tl-box `}>                  
                <ThemeBtn Theme={THEMES.Default} />           
                <ThemeBtn Theme={THEMES.Forest} />               
                <ThemeBtn Theme={THEMES.Sunset} />
                <ThemeBtn Theme={THEMES.Ocean} />
                <ThemeBtn Theme={THEMES.Candy} />                             
            </div>                
        </div> 
    )
}

export const ThemeBtn = ({ Theme }: {Theme: ThemeType}) => {
    const { theme, SetTheme } = useContext(ThemeContext);
    return (
        <PageButton
            active={theme === Theme.name}
            onClick={()=>SetTheme(Theme)}
        >{Theme.name}</PageButton>
    )
}

export default ThemeBtns