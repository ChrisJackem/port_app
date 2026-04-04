
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
    Default: {
        name: "Default",
        text: "#FFF",
        darkest: "#111111",
        background: "#1d1d1d",
        midground: "#999999",
        foreground: "#242424",
        accent: "#dbf227",
    },
    Dark: {
        name: "Dark",
        text: "#FFF",
        darkest: "#272727ff",
        background: "#757575ff",
        midground: "#282828ff",
        foreground: "#131313ff",
        accent: "#27e4f2ff",
    },
    Forest: {
        name: "Forest",
        text: "#ffffff",
        darkest: "#0b2421",
        background: "#2d5a3d",
        midground: "#1a3a27",
        foreground: "#0f1f15",
        accent: "#7fb069ff",
    },
    Sunset: {
        name: "Sunset",
        text: "#000",
        darkest: "#2d0633",
        background: "#ff6e40",
        midground: "#ffb86b",
        foreground: "#fff",
        accent: "#ffff00ff",
    },
    Ocean: {
        name: "Ocean",
        text: "#ffffff",
        darkest: "#022c43",
        background: "#041720",
        midground: "#ffd700",
        foreground: "#012233",
        accent: "#21e6c1",
    },
    Candy: {
        name: "Candy",
        text: "#1b1e60ff",
        darkest: "#ff61a6",
        background: "#ffb3c6",
        midground: "#faffd8",
        foreground: "#fff",
        accent: "#d8ffb3ff",
    },
};