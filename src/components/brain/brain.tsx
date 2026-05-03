import React from 'react'
import styles from './brain.module.css'

const Brain = () => {
  return (
    <div className={`flex ${styles.container}`}>
        {/* <svg style={{ display: 'none' }}>
            <filter id="turb-dissolve" colorInterpolationFilters='sRGB' x="0%" y="0%">
                
                <feTurbulence type="fractalNoise" baseFrequency="0.02"/>                
                <feColorMatrix type="luminanceToAlpha"/>                
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0">
                        <animate attributeName="slope" values="0.5;2;2;1.5;1;0.5;0" dur="3s" repeatCount="indefinite"/>
                    </feFuncA>
                </feComponentTransfer>
                <feComponentTransfer>
                    <feFuncA type="discrete" tableValues="0 1"/>
                </feComponentTransfer>
                <feGaussianBlur stdDeviation="1"/>

                <feComposite operator="in" in="SourceGraphic" result="overlay"/>
                
                <feColorMatrix in="SourceGraphic" type="saturate" values="0" result="underlay"/>

                <feComposite operator="over" in="overlay" in2="underlay"/>
            </filter>
        </svg> */}
        <svg style={{ position: 'static', width: 1, height: 1, opacity: 0 }}>
            <defs>
            <filter id="simpleglitchfilter" colorInterpolationFilters="sRGB">
                <feFlood floodColor="rgb(128, 0, 128" result="BASE_COLOR" />
                <feFlood height="40" y="0" floodColor="rgb(255, 0, 128" transform="rotate(90deg)" result="X-TRANSFORM" >
                    <animate attributeName="y" values="350px; -40px;" dur="2s" repeatCount="indefinite" begin="0" />
                </feFlood>                
                <feMerge result="MERGE">
                    <feMergeNode in="BASE_COLOR" />
                    <feMergeNode in="X-TRANSFORM" />
                </feMerge>
                <feDisplacementMap in="SourceGraphic" in2="MERGE" scale="20" xChannelSelector="R" yChannelSelector="B">
                    {/* <animate attributeName="scale" values="-8; 5.5; 0; 18; 4.5; -17; 28; -4; -9; 5; -5.5; 9; -8" dur="8s" repeatCount="indefinite" begin="0" /> */}
                </feDisplacementMap>
            </filter>
            </defs>        
        </svg>   
            <img                
                src={'/static/images/brain_animation/brain.png'}
                alt={'brain'}
                style={{ filter: 'url(#simpleglitchfilter)' }}
            />  
        <div>
            <h3 className={`t-jumbo-md t-it t-ac`}>THUNK DIFFERENTLY</h3>
            <p
                className={styles.sticker_text}
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
    </div>
  )
}

export default Brain