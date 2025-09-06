'use client'
import { THEMES, ThemeType } from '@/app/config/theme';
import React, { useEffect } from 'react'
import { useState, createContext } from "react";
//import type { Dispatch, SetStateAction } from "react";

// Key for localstorage
const ACTIVE_THEME = 'activeTheme';

export const ThemeContext = createContext<{
  theme: string;
  SetTheme: (t:ThemeType)=> void;
}>({ theme: 'Default', SetTheme: (t)=>{} });


const ThemeWrapper: React.FC<React.PropsWithChildren<object>> = ({ children }) => {    
    const [theme, setTheme] = useState('Default');

    // Load theme from localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem(ACTIVE_THEME);
            if ( storedTheme && THEMES.hasOwnProperty(storedTheme) ) {
                SetTheme(THEMES[storedTheme]);    
            }
        }
    }, []);

    const SetTheme = (_theme: ThemeType)=>{        
        document.documentElement.style.setProperty('--darkest', _theme.darkest);
        document.documentElement.style.setProperty('--background', _theme.background);
        document.documentElement.style.setProperty('--midground', _theme.midground);
        document.documentElement.style.setProperty('--foreground', _theme.foreground);
        document.documentElement.style.setProperty('--accent', _theme.accent);
        document.documentElement.style.setProperty('--text', _theme.text);
        localStorage.setItem(ACTIVE_THEME, _theme.name);
        setTheme(_theme.name);
        console.log('HERE ', _theme.name)
    }

    return (
        <ThemeContext value={{ theme: theme, SetTheme: SetTheme }}>
            {children}           
        </ThemeContext>
            
    )
}

export default ThemeWrapper