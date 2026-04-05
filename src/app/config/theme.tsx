
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
        darkest: "#111",
        background: "#1d1d1d",
        midground: "#999",
        foreground: "#242424",
        accent: "#dbf227",
    },
    Dark: {
        name: "Dark",
        text: "#FFF",
        darkest: "#272727",
        background: "#757575",
        midground: "#282828",
        foreground: "#131313",
        accent: "#27e4f2",
    },
    Forest: {
        name: "Forest",
        text: "#fff",
        darkest: "#0b2421",
        background: "#2d5a3d",
        midground: "#1a3a27",
        foreground: "#0f1f15",
        accent: "#7fb069",
    },
    Sunset: {
        name: "Sunset",
        text: "#000",
        darkest: "#2d0633",
        background: "#ff6e40",
        midground: "#ffb86b",
        foreground: "#fff",
        accent: "#ff0",
    },
    Ocean: {
        name: "Ocean",
        text: "#fff",
        darkest: "#022c43",
        background: "#041720",
        midground: "#ffd700",
        foreground: "#012233",
        accent: "#21e6c1",
    },
    Candy: {
        name: "Candy",
        text: "#1b1e60",
        darkest: "#ff61a6",
        background: "#ffb3c6",
        midground: "#faffd8",
        foreground: "#fff",
        accent: "#d8ffb3",
    },
};