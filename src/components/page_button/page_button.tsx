import React from 'react'
import styles from './page_button.module.css'
import { Blinker } from 'next/font/google';

const font = Blinker({
  subsets: ["latin"],
  weight: '700'
});

const PageButton = ({ children, onClick, className, style, active=false }: {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    active?:boolean;
}) => {
  return (
    <button
      className={`un-border p-rel ${className ? className + ' ' : ''}${styles.button} ${font.className} ${active ? styles.active : ''}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PageButton