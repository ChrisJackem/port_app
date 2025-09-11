import React from 'react';
import styles from './loading_component.module.css';

const LoadingComponent = ({ dark_mode=true }) => {  
  return (
    <section
      className={styles.mainContainer}
      style={{ 
        color: `${dark_mode ? 'var(--darkest, #000)' : 'var(--foreground, #FFF)'}`
      }}
    >
      <StrokeLogo dark_mode={true}/>
      <span>Loading...</span>
    </section>
  );
}


// The logo twice, once flipped around in CSS. infinite -> animation
export const StrokeLogo = ({dark_mode=true, infinite=true}
  :{infinite?:boolean, dark_mode?:boolean}) => {

  const pen_style = infinite ? styles.pen : styles.penOnce ;
  const color = dark_mode ? 'var(--darkest, #000)' : 'var(--foreground, #FFF)';
  const path = "M69,206.5v-125l75,100v100H6.5V6.5h137.5v174";

  return (<div style={{ display: 'inline-block'}}>
    <svg 
      className={`${styles.svgLogo} `}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 150.5 288"
    >
      <path className={`${pen_style} `} d={path} fill="none" stroke={color} strokeWidth="14"/>
    </svg>
    <svg 
      className={`${styles.svgLogo} ${styles.flipped}`}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 150.5 288"
    >
      <path className={`${pen_style}`} d={path} fill="none" stroke={color} strokeWidth="14"/>
    </svg>
  </div>);
}


export default LoadingComponent;
