import React from 'react'
import styles from './brain.module.css'
import Link from 'next/link'

const Brain = () => {
  return (
    <div className={`flex ${styles.container}`}>
        <svg style={{ position: 'static', width: 0, height: 0, opacity: 0 }}>
            <defs>
            <filter id="squishy" colorInterpolationFilters="sRGB">                  
                <feTurbulence type="fractalNoise" baseFrequency="0.1" result='turb'> 
                    <animate attributeName="baseFrequency" values="0.01; 0.02; 0.01;" dur="12s" repeatCount="indefinite"/>
                </feTurbulence>

                <feFlood y="0" floodColor="var(--accent)" result="TINTER" />                
                <feComposite in="TINTER" in2="SourceAlpha" operator="in" result="MASKED_TINT" />

                <feDisplacementMap in="MASKED_TINT" in2="turb" scale="25" xChannelSelector="R" yChannelSelector="B">
                    {/* <animate attributeName="scale" values="25; 30; 60;  25;" dur="3s" repeatCount="indefinite" begin="0" /> */}
                </feDisplacementMap>
            </filter>
            </defs>        
        </svg>   
            <img                
                src={'/static/images/brain_animation/brain_desat.png'}
                alt={'brain'}
                style={{ filter: 'url(#squishy)' }}
            />  
        <div className={`flex flex-column flex-just-center`}>
            <h3 className={`t-jumbo-md t-it t-ac`}>THUNK DIFFERENTLY</h3>
            <p className={styles.sticker_text}>
                My approach to problem solving is unique and I have a strong tendancy twords <strong>DIY</strong>.
                Other people's code is convenient, but I love the entire process.         
            </p>
            <Link
                aria-label="My GitHub profile"
                href={'https://github.com/ChrisJackem'} 
                target="_blank" rel="noopener noreferrer"
                role='button'
                className='button'
                style={{ width: 'min-content' }}
            >
                github*               
          </Link>
          <small style={{ marginTop: '-0.65rem' }}>*external link</small>          
        </div>
    </div>
  )
}

export default Brain