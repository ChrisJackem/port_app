import React from 'react'
import styles from './line_header.module.css'

const LineHeader = ({text}:{text: string} ) => {
  return (
    <div className={`t-cap ${styles.container}`}>
        {text}
    </div>
  )
}

export default LineHeader