'use client'
import { THEMES, ThemeType } from '@/app/config/theme';
import React, { useEffect } from 'react'
import { useState, createContext } from "react";

// Key for localstorage
const ACTIVE_THEME = 'activeTheme';

/** A context for centralizing the theme property.
 * This is not the normal way of storing the context value, we are passing it through SetTheme() first.
 * This updates our styles, localStorage and state at once
 * @param {string} theme The name of the (current) theme
 * @param {ThemeType} SetTheme How we update the theme 
 */
export const ThemeContext = createContext<{
  theme: string;
  SetTheme: (t:ThemeType)=> void;
}>({ theme: 'Default', SetTheme: ()=>{} });

/**
 * Wraps children with the ThemeContext provider
 * @param children children with access to ThemeContext   
 */
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

    /**
     * Set the theme global CSS --var(iables) and localStorage
     * @param {ThemeType} _theme new theme object
     */
    const SetTheme = (_theme: ThemeType)=>{        
        document.documentElement.style.setProperty('--darkest', _theme.darkest);
        document.documentElement.style.setProperty('--background', _theme.background);
        document.documentElement.style.setProperty('--midground', _theme.midground);
        document.documentElement.style.setProperty('--foreground', _theme.foreground);
        document.documentElement.style.setProperty('--accent', _theme.accent);
        document.documentElement.style.setProperty('--text', _theme.text);
        localStorage.setItem(ACTIVE_THEME, _theme.name);
        setTheme(_theme.name);
    }

    return (
        <ThemeContext value={{ theme: theme, SetTheme: SetTheme }}>
            {children}           
        </ThemeContext>            
    )
}

export default ThemeWrapper