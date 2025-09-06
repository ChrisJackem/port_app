
export type ThemeType = {
    name: string;
    text: string;
    darkest: string;
    background: string;
    foreground: string;
    midground: string;
    accent: string;
}

export type ThemesType = {
    [key: string]: ThemeType;
};

export const THEMES: ThemesType = {
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