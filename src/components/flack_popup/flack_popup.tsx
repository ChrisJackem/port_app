import React from 'react'
import styles from './flack_popup.module.css';
import { LoadImg } from '../load_img/load_img';
import LineHeader from '../line_header/line_header';

const FlackPopup = () => {
  return (
    <section className={`fixed-modal ${styles.container}`}>
        <div className={styles.inner_container}>
            <div className={styles.image_container}>
                <LoadImg
                    className={styles.image}                    
                    src='/static/images/work/flack/flack_long.png'                
                    alt={'flack logo'}
                />
            </div>
            <div className={styles.blurb}>
                <br/>
                <br/>
                <LineHeader text='CONTACT' />
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
                    <button className='button active'>Sign Up</button>
                    <button className='button '>Dismiss</button>
                </div>
                <small>Sign up right from this website.</small>
            </div>
        </div>
    </section>
  )
}

export default FlackPopup