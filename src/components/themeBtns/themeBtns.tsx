import React from 'react'


const ThemeBtns = () => {
    return (
        <div id='btn-container' className="flex ">
            <ThemeBtn 
                name="Default" 
                background='#3d3d3d'
                midground='#999999'
                foreground='#FFF'
                accent='#dbf227'
            />
            <ThemeBtn 
                name="Ocean" 
                background='#1e3a5c'
                midground='#3a6ea5'
                foreground='#e0f7fa'
                accent='#00bcd4'
            />
            <ThemeBtn 
                name="Sunset" 
                background='#ff6e40'
                midground='#ffb74d'
                foreground='#fff3e0'
                accent='#d84315'
            />
            <ThemeBtn 
                name="Forest" 
                background='#2e7d32'
                midground='#81c784'
                foreground='#e8f5e9'
                accent='#388e3c'
            />
            <ThemeBtn 
                name="Lavender" 
                background='#6a1b9a'
                midground='#b39ddb'
                foreground='#f3e5f5'
                accent='#ab47bc'
            />
        </div>
    )
}


type ThemeBtnProps = {
  name: string;
  background: string;
  foreground: string;
  midground:string;
  accent:string;
};

const ThemeBtn = ({ name, background, foreground, midground, accent}: ThemeBtnProps) => {
  return (
    <div>
        <button
            className='chip-a theme-btn'
            onClick={() => {
            document.documentElement.style.setProperty('--background', background);
            document.documentElement.style.setProperty('--midground', midground);
            document.documentElement.style.setProperty('--foreground', foreground);
            document.documentElement.style.setProperty('--accent', accent);
            }}
        >{name}</button>
    </div>
  )
}

export default ThemeBtns