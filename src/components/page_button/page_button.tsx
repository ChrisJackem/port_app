import React from 'react'
import styles from './page_button.module.css'

const PageButton = ({ children, onClick, className, style }: {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}) => {
  return (
    <button
      className={`un-border p-rel ${className ? className + ' ' : ''}${styles.button}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PageButton