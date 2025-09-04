'use client'
import React, { useState, useEffect } from 'react';
import './themeBtns.css';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'motion/react';


/////////////////////////////// THEME ////////////////////////////////////
type ThemeType = {
    name: string;
    text: string;
    darkest: string;
    background: string;
    foreground: string;
    midground: string;
    accent: string;
}
type ThemesType = {
    [key: string]: ThemeType;
};
const THEMES: ThemesType = {
    'Default':{
        name:"Default",
        text:'#FFF',
        darkest:'#000',
        background:'#3d3d3d',
        midground:'#999999',
        foreground:'#FFF',
        accent:'#dbf227',
    },    
    'Forest':{
        name:"Forest",
        text:'#2a190cff',
        darkest:'#184d47',
        background:'#96bb7c',
        midground:'#f3e9dd',
        foreground:'#fff',
        accent:'#cdffa6ff'
    },
    'Sunset':{
        name:"Sunset",
        text:'#fff',
        darkest:'#2d0633',
        background:'#ff6e40',
        midground:'#ffb86b',
        foreground:'#fff',
        accent:'#ffff00ff'
    },
   'Ocean':{
        name:"Ocean",
        text:'#022c43',
        darkest:'#022c43',
        background:'#115173',
        midground:'#ffd700',
        foreground:'#e1e1e1',
        accent:'#21e6c1'
    },
    'Candy':{
        name:"Candy",
        text:'#1b1e60ff',
        darkest:'#ff61a6',
        background:'#ffb3c6',
        midground:'#faffd8',
        foreground:'#fff',
        accent:'#d8ffb3ff'
    },
}
const ACTIVE_THEME = "activeTheme";

const ThemeBtns = () => {
    //const [themeName, setThemeName] = useState('Default');
    const [activeTheme, setActiveTheme] = useState('Default');

    function SetTheme(theme: ThemeType){
        document.documentElement.style.setProperty('--darkest', theme.darkest);
        document.documentElement.style.setProperty('--background', theme.background);
        document.documentElement.style.setProperty('--midground', theme.midground);
        document.documentElement.style.setProperty('--foreground', theme.foreground);
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--text', theme.text);
        localStorage.setItem(ACTIVE_THEME, theme.name);
        setActiveTheme(theme.name);
    }

    // Load theme from localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem(ACTIVE_THEME);
            if (storedTheme) {
                if (storedTheme && THEMES.hasOwnProperty(storedTheme)){
                    setActiveTheme(storedTheme)
                    //setThemeName(storedTheme);
                    SetTheme(THEMES[storedTheme])
                }                  
            }
        }
    }, []);
    
    const { ref, inView } = useInView({
        threshold: 0.6
    });

    const hoverHandler = (name: string)=>{
        //setThemeName(name);
    }
    
    return (
    <div id='theme-main-container'>
        
        <div id="theme-container" ref={ref}>
            
            <AnimatePresence>
                <motion.img
                    id="theme-img"
                    className='absolute-fill'                    
                    key={activeTheme}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    exit={{ x: -400, y: 0, opacity: 0 }}
                    /* transition={{ duration: .2, type: 'tween' }} */
                    alt='The active theme'
                    width={400} 
                    height={355}                            
                    src={`static/images/theme_${activeTheme}.jpg`}
                    layout
                />
            </AnimatePresence>

            <div id='button-text' >
                <h2>Change Theme</h2>
                <p>Change the theme of the entire website with the buttons below</p>
            </div>
            <span id='active-theme-text'>Active: {activeTheme}</span>
        </div>
            
            <div id='btn-container' className="flex chip-tl-box">                  
                <ThemeBtn 
                options={THEMES['Default']}
                onHover={()=> hoverHandler('Default')}
                onClick={()=>{ SetTheme(THEMES['Default']) }}
                />
                <ThemeBtn
                options={THEMES['Ocean']}
                onHover={()=> hoverHandler('Ocean')}
                onClick={()=>{ SetTheme(THEMES['Ocean']) }}
                />
                <ThemeBtn
                options={THEMES['Sunset']}
                onHover={()=> hoverHandler('Sunset')}
                onClick={()=>{ SetTheme(THEMES['Sunset']) }}
                />
                <ThemeBtn 
                options={THEMES['Forest']}
                onHover={()=> hoverHandler('Forest')}
                onClick={()=>{ SetTheme(THEMES['Forest']) }}
                />
                <ThemeBtn 
                options={THEMES['Candy']}
                onHover={()=> hoverHandler('Candy')}
                onClick={()=>{ SetTheme(THEMES['Candy']) }}
                />
            </div>
    </div>
    )
}


type ThemeBtnProps = {
    options: ThemeType;
    onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const ThemeBtn = ({ options, onHover, onClick }: ThemeBtnProps) => {
    return (
        <button
            className='chip-a link theme-btn'
            onClick={onClick}
            onMouseEnter={onHover}
        >{options.name}</button>
    )
}

export default ThemeBtns