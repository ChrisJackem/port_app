import React from 'react'
import styles from './flack_popup.module.css';
import { LoadImg } from '../load_img/load_img';

const FlackPopup = () => {
  return (
    <section className={`fixed-modal ${styles.container}`}>
        <div className={styles.inner_container}>
            <LoadImg
                className={styles.image}
                src='/static/images/work/flack/flack_logo.png'                
                alt={'flack logo'}
            />
            <div className={styles.blurb}>
                
                <h1>LETS TALK</h1>
                <hr/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, optio?</p>
                <br/>
                <div className='flex'>
                    <button className='button'>Dismiss</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlackPopup