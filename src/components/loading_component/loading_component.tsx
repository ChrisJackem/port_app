import React from 'react';
import styles from './loading_component.module.css';

const LoadingComponent = ({ dark_mode=true, height=undefined, width=undefined }:{
  dark_mode?:boolean;
  width?: string;
  height?: string;
}) => {  
  return (
    <section
      className={styles.mainContainer}
      style={{ 
        height: height ? height : '100%',
        width: width ? width : '100%'
      }}
    >
      <StrokeLogo dark_mode={dark_mode}/>
    </section>
  );
}


// The logo twice, once flipped around in CSS. infinite -> animation
export const StrokeLogo = ({dark_mode=true, infinite=true}
  :{infinite?:boolean, dark_mode?:boolean}) => {

  const pen_style = infinite ? styles.pen : styles.penOnce ;
  const color = dark_mode ? 'var(--darkest, #000)' : 'var(--foreground, #FFF)';
  const path = "M69,206.5v-125l75,100v100H6.5V6.5h137.5v174";

  return (
  <div >
    <svg className={`${styles.svgLogo}`} viewBox="0 0 150.5 288">
      <path className={`${pen_style} `} d={path} fill="none" stroke={color} strokeWidth="14"/>
    </svg>
    <svg className={`${styles.svgLogo} ${styles.flipped}`} viewBox="0 0 150.5 288">
      <path className={`${pen_style}`} d={path} fill="none" stroke={color} strokeWidth="14"/>
    </svg>
  </div>
  );
}

export default LoadingComponent;
