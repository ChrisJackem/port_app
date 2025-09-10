import React from 'react';
import styles from './loading_component.module.css';

const LoadingComponent: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  
  return (
    <div
      className={styles.mainContainer}
      style={style}
    >
      <span className={styles.spinner}>        
        <StrokeLogo />
       {/*  <StrokeLogo xtra_styles={styles.flipped}/> */}
      </span>
      <span>Loading...</span>
    </div>
  );
}



export const StrokeLogo = ({xtra_styles, infinite=true}:{infinite?:boolean, xtra_styles?: string}) => {
  const pen_style = infinite ? styles.pen : styles.penOnce ;
  return (<>
    <svg 
      className={`${styles.svgLogo} ${xtra_styles !== undefined ? xtra_styles : ''}`}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.5 288"
    >
      <path className={`${pen_style} ${xtra_styles !== undefined ? xtra_styles : ''}`} d="M69,206.5v-125l75,100v100H6.5V6.5h137.5v174" fill="none" stroke="white" strokeWidth="14"/>
    </svg>
    <svg 
      className={`${styles.svgLogo} ${styles.flipped} ${xtra_styles !== undefined ? xtra_styles : ''}`}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.5 288"
    >
      <path className={`${pen_style} ${xtra_styles !== undefined ? xtra_styles : ''}`} d="M69,206.5v-125l75,100v100H6.5V6.5h137.5v174" fill="none" stroke="white" strokeWidth="14"/>
    </svg>
  </>);
}


export default LoadingComponent;
