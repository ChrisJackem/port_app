import React from 'react';
import './themeBtns.css';

const ThemeBtns = () => {
    return (
        <div id='btn-container' className="flex ">
            <ThemeBtn 
                name="Default"
                text='#000'
                darkest='#000' 
                background='#3d3d3d'
                midground='#999999'
                foreground='#FFF'
                accent='#dbf227'
            />
            <ThemeBtn 
                name="Ocean"
                text='#fff'
                darkest='#022c43'
                background='#115173'
                midground='#ffd700'
                foreground='#e1e1e1'
                accent='#21e6c1'
            />
            <ThemeBtn 
                name="Sunset"
                text='#fff'
                darkest='#2d0633'
                background='#ff6e40'
                midground='#ffb86b'
                foreground='#fff'
                accent='#ff206e'
            />
            <ThemeBtn 
                name="Forest"
                text='#fff'
                darkest='#184d47'
                background='#96bb7c'
                midground='#f3e9dd'
                foreground='#fff'
                accent='#b5cda3'
            />
            <ThemeBtn 
                name="Candy"
                text='#fff'
                darkest='#ff61a6'
                background='#ffb3c6'
                midground='#faffd8'
                foreground='#fff'
                accent='#f7cac9'
            />
        </div>
    )
}


type ThemeBtnProps = {
  name: string;
  text: string;
  darkest: string;
  background: string;
  foreground: string;
  midground:string;
  accent:string;
};

const ThemeBtn = ({ name, text, darkest, background, foreground, midground, accent}: ThemeBtnProps) => {
  return (
    <div>
        <button
            className='chip-a theme-btn'
            onClick={() => {
            document.documentElement.style.setProperty('--darkest', darkest);
            document.documentElement.style.setProperty('--background', background);
            document.documentElement.style.setProperty('--midground', midground);
            document.documentElement.style.setProperty('--foreground', foreground);
            document.documentElement.style.setProperty('--accent', accent);
            document.documentElement.style.setProperty('--text', text);
            }}
        >{name}</button>
    </div>
  )
}

export default ThemeBtns