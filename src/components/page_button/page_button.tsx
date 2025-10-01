import React from 'react'
import styles from './page_button.module.css'
import { blinker } from '@/app/config/fonts';

const PageButton = ({ children, onClick, className='', style={}, active=false }: {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    active?:boolean;
}) => {
  return (
    <button
      className={`un-border p-rel ${className} ${styles.button} ${blinker.className} ${active ? styles.active : ''}`}
      style={{ ...style     
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PageButton