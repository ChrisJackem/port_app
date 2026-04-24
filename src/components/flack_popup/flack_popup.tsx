'use client'
import React, { useEffect, useState } from 'react'
import styles from './flack_popup.module.css';
import { LoadImg } from '../load_img/load_img';
import LineHeader from '../line_header/line_header';
import { useModal } from '../modals/modal_context';

const FlackPopup = ({}) => {
    const { modalName, setModalName } = useModal();
    const [dismissed, setDismissed] = useState(false);
    
    // Handles localStorage 'dismissed' value
    /* useEffect( ()=> {
        if (window.localStorage.getItem('dismissed')==='true')
            setDismissed(true)
    }, []) */

    function handleDismiss(forever:boolean=false){        
        //if (forever) window.localStorage.setItem('dismissed', 'true');
        setDismissed(true)
    }
    
    if (modalName !== 'flack' || dismissed) return null;

    return (
    <section className={`fixed-modal ${styles.container}`} key={'flack-popup'}>
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
                    <button onClick={()=>handleDismiss()} className='button accentB'>Dismiss</button>
                    <small onClick={()=>handleDismiss(true)}>Dismiss this popup forever</small>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FlackPopup