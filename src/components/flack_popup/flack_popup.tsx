'use client'
import React, { useEffect, useState } from 'react'
import styles from './flack_popup.module.css';
import LineHeader from '../line_header/line_header';
import { useModal } from '../modals/modal_context';
import { AnimatePresence, motion } from 'motion/react';

const FlackPopup = ({}) => {
    const { modalName, setModalName } = useModal();
    const [dismissed, setDismissed] = useState(false);
    
    return (
    <AnimatePresence>
        { (modalName === 'flack' && !dismissed) && (
            <motion.section 
                key={'flack-popup'}
                className={`fixed-modal ${styles.container}`}
                initial={{ x: -100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                exit={{ x: -100, opacity: 0}}
            >
            <div className={`modal ${styles.inner_container}`}>
                <div className={styles.image_container}>
                    <img
                        className={styles.image}                    
                        src='/static/images/work/flack/flack_long.png'                
                        alt={'flack logo'}
                    />
                </div>
                <div className={styles.blurb}>
                    <br/>
                    <br/>
                    <LineHeader text='CONTACT ME' />
                    <h1 className='t-ital'>LET'S TALK</h1>
                    <hr/>
                    <p className='line-spaced'><strong>I made my own social media app</strong> and you can contact me there if you are interested. Its free and I don't track, spy or show ads.</p>
                    <ul className='m-left'>
                        <li>Ad Free</li>
                        <li>No Tracking</li>
                        <li>No Spying</li>
                    </ul>                
                    <br/>                
                    <div className='flex'>
                        <button  className='button active'>Sign Up</button>
                        <button onClick={()=>setDismissed(true)} className='button accentB'>Dismiss</button>
                        <small onClick={()=>setDismissed(true)}>Dismiss this popup forever</small>
                    </div>
                </div>
            </div>
        </motion.section>
    )}
    </AnimatePresence>
    )
}

export default FlackPopup