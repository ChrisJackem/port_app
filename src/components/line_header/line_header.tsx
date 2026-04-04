import React from 'react'
import styles from './line_header.module.css'

const LineHeader = ({text}:{text: string} ) => {
  return (
    <div className={`t-cap ${styles.container}`}>
        <h3>{text}</h3>
    </div>
  )
}

export default LineHeader