'use client'
import React, { useContext, useEffect, useState } from 'react';
import './themeBtns.css';
import { AnimatePresence, motion } from 'motion/react';
import { THEMES, ThemeType } from '@/app/config/theme';
import { ThemeContext } from '../theme_wrapper/theme_wrapper';
import LoadingComponent from '../loading_component/loading_component';

type ImageResult = {
    name: string;
    data: string;
}

const ThemeBtns = () => {
    const {theme} = useContext(ThemeContext);
    const [themeImgs, setThemeImgs] = useState<undefined | Map<string, string>>();
    
    useEffect(()=>{
        // Load all images for themes as base64
        Promise.all(
            Object.keys(THEMES).map((key) => {
                return new Promise<ImageResult>((res, rej) => {
                    fetch(`static/images/theme_${key}.jpg`)
                        .then(response => response.blob())
                        .then(blob => {
                            const reader = new FileReader();
                            reader.onloadend = () => res({
                                name: key, 
                                data: typeof reader.result === 'string' ? reader.result : '' 
                            });                            
                            reader.onerror = rej;
                            reader.readAsDataURL(blob);
                        })
                        .catch(rej);
                });
            })
        )
        // Save to themeImgs
        .then((imageResults) => {
            const _map = new Map<string, string>();
            for (const { name, data } of imageResults) {
                if (data.length < 2){
                    console.error(`ThemeBtns image failed: ${name}`)
                }else{
                    _map.set(name, data);
                }
            }
            setThemeImgs(_map);
        })
    }, []);

    /////////////////////////////////////////// Loading
    if (!themeImgs) return <LoadingComponent />

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
                    transition={{ duration: .4, type: 'tween' }}
                    alt={`Active theme image: ${theme}`}
                    width={400} 
                    height={355}                            
                    /* src={`static/images/theme_${theme}.jpg`} */
                    src={`${themeImgs?.get(theme)}`}
                    layout
                />
            </AnimatePresence>

            <div id='button-text' >
                <h2>Change Theme</h2>
                <p>Change the theme of the entire website with the buttons below</p>
            </div>
            <span id='active-theme-text'>Active: {theme}</span>
        </div>            
            <div id='btn-container' className={`flex chip-tl-box `}>                  
                <ThemeBtn Theme={THEMES.Default} />               
                <ThemeBtn Theme={THEMES.Dark} />               
                <ThemeBtn Theme={THEMES.Forest} />               
                <ThemeBtn Theme={THEMES.Sunset} />
                <ThemeBtn Theme={THEMES.Ocean} />
                <ThemeBtn Theme={THEMES.Candy} />                
            </div>
            {/* { themeImgs && Array.from(themeImgs.entries()).map(([name, data], i) => <p key={i}>{`${name}`}</p>) } */}
    </div> 
    )
}

const ThemeBtn = ({ Theme }: {Theme: ThemeType}) => {
    const { theme, SetTheme } = useContext(ThemeContext);
    return (
        <button
            className={`chip-a link theme-btn ${theme === Theme.name ? 'active' : ''}`}
            onClick={()=>SetTheme(Theme)}           
        >{Theme.name}</button>
    )
}

export default ThemeBtns