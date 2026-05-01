import React from 'react'
import styles from './brain.module.css'

const Brain = () => {
  return (
    <div className={`flex ${styles.container}`}>
        <img 
            src={'/static/images/brain_animation/brain.png'}
            alt={'brain'}
        />
        <div>
            <h3 className={`t-jumbo-md t-it t-ac`}>THUNK DIFFERENTLY</h3>
            <p
                className={styles.sticker_text}
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
    </div>
  )
}

export default Brain