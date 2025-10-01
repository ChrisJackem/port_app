import React from 'react';
import { blinker } from '@/app/config/fonts';
import styles from './chip_header.module.css';

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
        <section >
            <div 
                className={styles.chipped_header} 
                style={{ borderBottom: `4px solid ${background_color}`, ['--bg' as string]: colBg }}
            >
                <h3 
                    className={`chip-tl-md-npad ${styles.chip_text} `}
                    style={{ backgroundColor: background_color, color: `${text_color}`}}
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