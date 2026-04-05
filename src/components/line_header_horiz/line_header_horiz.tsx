import React from 'react'
import styles from './line_header_horiz.module.css'

export const LineHeaderHoriz = ({text}:{text:string}) => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>{text}</p>
        <hr className={styles.hr} />
    </div>
  )
}
