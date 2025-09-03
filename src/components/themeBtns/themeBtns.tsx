import React, { useState } from 'react';
import './themeBtns.css';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'motion/react';


type ThemeBtnProps = {
    options: {
        name: string;
        text: string;
        darkest: string;
        background: string;
        foreground: string;
        midground: string;
        accent: string;
    }
  onHover: (event: React.MouseEvent<HTMLButtonElement>) => void;
};


const ThemeBtns = () => {
    const [themeName, setThemeName] = useState('Default')
    const { ref, inView } = useInView({
        threshold: 0.6,
        delay: 1000,
    });

    const hoverHandler = (name: string)=>{
        console.log('Hover', name)
        setThemeName(name);
    }
    
    return (
    <div id="theme-container" ref={ref} className='flex'>
         <div 
            id="theme-screen"
            className={`${inView ? 'viewed' : ''}`}       
        >
            <div id="img-container">
                <AnimatePresence>
                    <motion.img
                    layout
                        id="theme-img"
                        key={themeName}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        exit={{ x: -300, y: 0, opacity: 0 }}
                        /* transition={{ duration: .2, type: 'tween' }} */
                        alt='The active theme'
                        width={300} 
                        height={300} 
                        src={`/theme_${themeName}.jpg`}
                    />
                </AnimatePresence>
            </div>
            
            <div id="theme-title">{themeName}</div>
        </div>
        <div id='btn-container' className="flex ">
            <h2 style={{ textAlign: 'center', width: '100%' }}>Change Theme</h2>
            
            <ThemeBtn 
            options={{
                name:"Default",
                text:'#FFF',
                darkest:'#000',
                background:'#3d3d3d',
                midground:'#999999',
                foreground:'#FFF',
                accent:'#dbf227',
            }}
            onHover={()=> hoverHandler('Default')}
            />
            <ThemeBtn
            options={{
                name:"Ocean",
                text:'#fff',
                darkest:'#022c43',
                background:'#115173',
                midground:'#ffd700',
                foreground:'#e1e1e1',
                accent:'#21e6c1'
            }}
            onHover={()=> hoverHandler('Ocean')}
            />
            <ThemeBtn
            options={{
                name:"Sunset",
                text:'#fff',
                darkest:'#2d0633',
                background:'#ff6e40',
                midground:'#ffb86b',
                foreground:'#fff',
                accent:'#ff206e'
            }}
            onHover={()=> hoverHandler('Sunset')}
            />
            <ThemeBtn 
            options={{
                name:"Forest",
                text:'#fff',
                darkest:'#184d47',
                background:'#96bb7c',
                midground:'#f3e9dd',
                foreground:'#fff',
                accent:'#b5cda3'
            }}
            onHover={()=> hoverHandler('Forest')}
            />
            <ThemeBtn 
            options={{
                name:"Candy",
                text:'#fff',
                darkest:'#ff61a6',
                background:'#ffb3c6',
                midground:'#faffd8',
                foreground:'#fff',
                accent:'#f7cac9'
            }}
            onHover={()=> hoverHandler('Candy')}
            />
            <p>Change the theme of the site here!</p>
        </div>
    </div>
    )
}



const ThemeBtn = ({ options, onHover}: ThemeBtnProps) => {    
    return (
        <div>
        <button
            className='chip-a link theme-btn'
            onClick={() => {
                document.documentElement.style.setProperty('--darkest', options.darkest);
                document.documentElement.style.setProperty('--background', options.background);
                document.documentElement.style.setProperty('--midground', options.midground);
                document.documentElement.style.setProperty('--foreground', options.foreground);
                document.documentElement.style.setProperty('--accent', options.accent);
                document.documentElement.style.setProperty('--text', options.text);
            }}
            onMouseEnter={onHover}
        >{options.name}</button>
        </div>   
    )
}

export default ThemeBtns