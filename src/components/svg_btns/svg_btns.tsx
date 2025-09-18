import styles from './svg_btns.module.css';

const SvgBtn = ({ color, onClick, type, className='', disabled=false }: { 
    color?: string; 
    className?: string;
    type: 'next'|'prev'|'x'|'scroll'|'play'|'pause';
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
 }) => {
    const final_color = color ? color : 'var(--accent, #FFF)';
    function getSvg(){
        switch(type){
            case 'next': return (<SVG_NEXT final_color={final_color}  />)
            case 'prev': return (<SVG_PREV final_color={final_color} />)
            case 'x': return (<SVG_X final_color={final_color} />)
            case 'scroll': return (<SVG_SCROLL final_color={final_color} />)
            case 'play': return (<SVG_PLAY final_color={final_color} />)
            case 'pause': return (<SVG_PAUSE final_color={final_color} />)
        }
    }
    return (
        <button
            className={`un-border ${className} ${styles.btn}`}
            onClick={onClick}
            
            /* className={`${styles.btn_next}`} */
            /* disabled={disabled} This was disabling and not firing callback on some devices */
            style={{ opacity: `${ disabled ? 0.5 : 1 }`}}
        >{ getSvg() }</button>
    );
};

export const SVG_NEXT = ({ final_color }: { final_color: string }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="176 99.24 176 137.75 25 137.75 25 99.24 62.75 99.24 61.75 50 99.5 50 176 99.24"/>
    </svg>
);

export const SVG_PREV = ({ final_color }: { final_color: string }) => (
    <svg viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="25 99.24 25 137.75 176 137.75 176 99.24 138.25 99.24 139.25 50 101.5 50 25 99.24"/>
    </svg>
);

export const SVG_X = ({ final_color }: { final_color: string }) => (
    <svg  viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="169.21 70.82 143.29 41.68 101.62 78.72 64.57 37.04 35.43 62.96 72.47 104.63 30.79 141.68 56.71 170.82 98.38 133.78 135.43 175.46 164.57 149.54 127.53 107.87 169.21 70.82"/>
    </svg>
);

export const SVG_SCROLL = ({ final_color }: { final_color: string }) => (
    <svg  viewBox="0 0 200 200">
        <polygon fill={final_color} strokeWidth="4%" stroke="#000" points="99.25 37 137.5 37 137.5 187 99.25 187 99.25 149.5 62.5 149.5 62.5 112 99.25 37"/>
        <rect fill={final_color} strokeWidth="4%" stroke="#000" x="62" y="12.5" width="76" height="12.5"/>  
    </svg>
);

export const SVG_PLAY = ({ final_color }: { final_color: string }) => (
    <svg  viewBox="0 0 200 200">
        <polygon stroke="#000" strokeWidth="3px" fill={final_color} points="173 111.24 173 149.75 48 149.75 48 111.24 72.75 111.24 71.75 62 109.5 62 173 111.24"/>
        <path stroke="#000" strokeWidth="3px" fill={final_color} d="M176.72,30l13.28,13.28v133.43l-13.28,13.28H43.28l-13.28-13.28V43.28l13.28-13.28h133.43M185,10H35l-25,25v150l25,25h150l25-25V35l-25-25h0Z"/>
    </svg>
);
export const SVG_PAUSE = ({ final_color }: { final_color: string }) => (
   <svg viewBox="0 0 200 200">
    <polygon fill={final_color} points="169.23 85.44 136.65 66 120.36 66 120.36 153.5 169.23 153.5 169.23 85.44"/>
    <polygon fill={final_color} points="50.69 134.06 83.28 153.5 99.57 153.5 99.57 66 50.69 66 50.69 134.06"/>
    <path fill={final_color} d="M176.72,30l13.28,13.28v133.43l-13.28,13.28H43.28l-13.28-13.28V43.28l13.28-13.28h133.43M185,10H35l-25,25v150l25,25h150l25-25V35l-25-25h0Z"/>
    </svg>
);

export default SvgBtn;