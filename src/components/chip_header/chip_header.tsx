import React from 'react';
import './chip_header.css';

type ChipHeaderProps = {
    title: string;
    colBg?: string;
    colTx?: string;
    children?: React.ReactNode;
    childBg?: string;
    styles?: React.CSSProperties;
};

const ChipHeader = ({ title, colBg, colTx, children, childBg, styles }: ChipHeaderProps) => {
    const background_color = colBg ? colBg : `var(--background, #999)`;
    const text_color = colTx ? colTx : `var(--foreground, #FFF)`;
    const child_bg_color = childBg ? childBg : `var(--foreground, #FFF)`;
    return (
        <section style={ styles ? styles : {}}>
            <div 
                className='chipped-header'
                style={{ borderBottom: `4px solid ${background_color}`, ['--bg' as string]: colBg }}
            >
                <h3 
                    className='chip-text chip-tl-md-npad chip-header-text'
                    style={{ backgroundColor: background_color, color: `${text_color}`}}
                >{title}</h3>
            </div>
            { children && <div 
                className='chip-header-child-container padded'
                style={{ backgroundColor: child_bg_color }}
            >{ children }</div>}
        </section>
    );
}
export default ChipHeader