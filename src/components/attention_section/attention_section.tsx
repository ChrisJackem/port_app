import React from 'react';
import styles from './attention_section.module.css';
import { LoadImg } from '../load_img/load_img';

const AttentionSection = ({children, color}:{
        children:React.ReactNode
        color: string
    }) => {
    return (
        <section 
        className={`chip-top paged ${styles.container}`}
        style={{ backgroundColor: color }}
        >
            <div className={`flex ${styles.imaged}`}>
                <LoadImg src={'static/images/icons/icon_exclaim.svg'} alt={'exclaimation image'}></LoadImg>
            </div>
            <div className={`chip-tr padded ${styles.child_container}`}>{children}</div>
        </section>
    )
}

export default AttentionSection