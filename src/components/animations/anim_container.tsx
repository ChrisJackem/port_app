import { motion, stagger, useInView } from 'motion/react'
import React, { useRef } from 'react'

const variants = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
}

const AnimContainer = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);
    return (
        <motion.div
            className='p-rel'
            key={'animationContainer'}
            ref={containerRef}
            variants={variants}
            initial='initial'
            animate={ isInView ? 'animate' : 'initial'}
            transition={{ duration: 1, delayChildren: stagger(0.2, { startDelay: 0.5 }) }}  
        >
            {children}
        </motion.div>
    )
}

export default AnimContainer