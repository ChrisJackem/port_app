import React from 'react';
import styles from './chip_header.module.css';
import { blinker } from '@/app/config/fonts';

type ChipHeaderProps = {
    title: string;
    colBg?: string;
    colTx?: string;
    children?: React.ReactNode;
    childBg?: string;
    fontSize?:number;
    style?: React.CSSProperties;
};

const ChipHeader = ({ title, colBg, colTx, children, childBg, fontSize, style={} }: ChipHeaderProps) => {
    const background_color = colBg ? colBg : `var(--background, #999)`;
    const text_color = colTx ? colTx : `var(--foreground, #FFF)`;
    const child_bg_color = childBg ? childBg : `var(--foreground, #FFF)`;
    return (
        <section style={style}>
            <div 
                className={`${blinker.className} ${styles.chipped_header}`} 
                style={{ borderBottom: `4px solid ${background_color}`, ['--bg' as string]: colBg }}
            >
                <h3 className={`chip-tl-md-npad ${styles.chip_text}`}
                    style={{ 
                        backgroundColor: background_color,
                        color: `${text_color}`,
                        fontSize: fontSize ? `${fontSize}px`: '20px'
                    }}
                >{title}</h3>
            </div>
            { children && <div
                className={`padded ${styles.child_container}`}
                style={{ backgroundColor: child_bg_color }}
            >{ children }</div>}
        </section>
    );
}
export default ChipHeader