import React from 'react';
import styles from './loading_component.module.css';
import logo from '../../../public/static/images/Logo_half.svg'
import Image from 'next/image';

const LoadingComponent: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  
  return (
    <div
      className={styles.mainContainer}
      style={style}
    >
      <span className={styles.spinner}>
        {/* <Image 
        className={styles.pen}
          alt='Derp' 
          src={logo} 
          width={25} 
          height={50}
        /> */}
        <StrokeLogo />
        <StrokeLogo xtra_styles={styles.flipped}/>
      </span>
      <span>Loading...</span>
    </div>
  );
}



const StrokeLogo = ({xtra_styles}:{xtra_styles?: string}) => {
  return (
    <svg 
      className={`${styles.svgLogo} ${xtra_styles !== undefined ? xtra_styles : ''}`}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.5 288"
    >
      <path className={`${styles.pen}`} d="M69,206.5v-125l75,100v100H6.5V6.5h137.5v174" fill="none" stroke="white" strokeWidth="14"/>
    </svg>
  );
}


export default LoadingComponent;
