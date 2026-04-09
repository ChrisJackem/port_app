'use client'
import { THEMES, ThemeType } from '@/app/config/theme';
import React, { useEffect } from 'react'
import { useState, createContext } from "react";

export const CanvasContext = createContext<{
  title: string;
  blurb: string;
}>({ title: 'XXX', blurb: "YYYYY" });

/**
 * Wraps children with the CanvasContext provider
 * @param children children with access to CanvasContext   
 */
const CanvasWrapper: React.FC<React.PropsWithChildren<object>> = ({ children }) => {    
    const [title, setTheme] = useState('Default');
    const [blurb, setBlurb] = useState('Lorem Ipsom Lorem Ipsom');

    // Load title from localStorage
    useEffect(() => {
        
    }, []);

    return (
        <CanvasContext value={{ title: title, blurb: blurb }}>
            {children}
        </CanvasContext>            
    )
}

export default CanvasWrapper