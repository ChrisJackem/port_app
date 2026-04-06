import React, { useContext } from 'react'
import styles from './theme_banner.module.css';
import { THEMES, ThemeType } from '@/app/config/theme';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import { useImgs } from '@/hooks/useImg';
import { AnimatePresence, motion } from 'motion/react';

// The images are all in the same dir, and 1 for each theme
export const theme_directoried = (s:string) => `static/images/theme_${s}.jpg`
export const theme_urls:string[] = Object.keys(THEMES).map( name => theme_directoried(name) );

const ThemeBanner = () => {
    const {theme} = useContext(ThemeContext);
    const [status, data] = useImgs(theme_urls);
    return (
    <div className={`psudo ${styles.container}`}>
        <AnimatePresence>
            <motion.img
                className={`${styles.theme_img}`}                   
                key={theme}
                initial={{   opacity: 0 }}
                animate={{  opacity: 0.1 }}
                exit={{   opacity: 0 }}
                transition={{ duration: .4, type: 'tween' }}
                alt={`Active theme image: ${theme}`}
                width={400} 
                height={355}
                src={ typeof data === 'string'
                    ? data
                    : data?.get(theme_directoried(theme))
                }
                layout
            />
        </AnimatePresence>      
        <div className={`p-rel ${styles.theme_icon}`}>
            <span className={`p-abs ${styles.theme_label}`}>Active:&nbsp;{theme}</span>
            <AnimatePresence>
            <motion.img
                className={`p-abs`}                   
                key={theme}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{  y: -20, opacity: 0 }}
                transition={{ duration: .4, type: 'tween' }}
                alt={`Active theme image: ${theme}`}
                width={400} 
                height={355}
                src={ typeof data === 'string'
                    ? data
                    : data?.get(theme_directoried(theme))
                }
                layout
            />
        </AnimatePresence>
            
        </div>
        <div className={`${styles.theme_text}`}>
            <h3 className={styles.heading}>WEBSITE THEME</h3>
            <p>You can change the colors of the entire site any time you want. 
            Your choice will be saved to localStorage and so when you come back later your theme will still be active.</p>
            <br/>
            <i>Theme can also be changed at the the bottom of every page.</i>   
        </div>
        <div className={`flex ${styles.theme_btns}`}>         
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
        <button 
            className={`${styles.theme_btn} button${(theme === Theme.name) ? ' active' : ""}`}            
            onClick={()=>SetTheme(Theme)}
        >
            {Theme.name.toLowerCase()}
        </button>
    )
}

export default ThemeBanner