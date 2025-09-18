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
            className={`un-border p-rel ${className} ${styles.btn}`}
            onClick={onClick}
            aria-hidden='true'
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
        <path fill={final_color} d="M175,0H25L0,25v150l25,25h150l25-25V25L175,0ZM163,139.75H38v-38.5h24.75l-1-49.24h37.75l63.5,49.24v38.5Z"/>
    </svg>
);

export const SVG_PAUSE = ({ final_color }: { final_color: string }) => (
   <svg viewBox="0 0 200 200">
    <path fill={final_color} d="M175,0H25L0,25v150l25,25h150l25-25V25L175,0ZM89.57,143.5h-16.29l-32.58-19.44V56h48.87v87.5ZM159.23,143.5h-48.87V56h16.29l32.58,19.44v68.06Z"/>
    </svg>
);

export default SvgBtn;