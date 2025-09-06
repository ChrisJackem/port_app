import React from 'react';
import './chip_header.css';

type ChipHeaderProps = {
    title: string;
    colBg?: string;
    colTx?: string;
    children?: React.ReactNode;
    childBg?: string;
};

const ChipHeader = ({ title, colBg, colTx, children, childBg }: ChipHeaderProps) => {
    const background_color = colBg ? colBg : `var(--background, #999)`;
    const text_color = colTx ? colTx : `var(--foreground, #FFF)`;
    const child_bg_color = childBg ? childBg : `var(--foreground, #FFF)`;
    return (
        <section className=''>
        <div 
            className='chipped-header'
            style={{ borderBottom: `4px solid ${background_color}` }}
        >
            <h3 
                className='chip-text chip-tl-md-npad'
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