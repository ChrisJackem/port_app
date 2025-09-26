'use client'
import { motion } from 'motion/react'

/*********************************************************************************** About Page  */

const variants = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}
const AboutPage = () => {

  return (
    <motion.div
        key="about"
        variants={variants}
        initial="hidden"
        animate="enter" 
        exit="exit"
        className="about-container"
    >
        <section className='paged'>
            <h1 className='chip-tl-br bg-bg tx-fg' style={{ padding: '1rem 0.2rem 0.2rem 1rem' }}>About this website</h1>
            <p className='padded' >This website is optimized for speed and user experience. All images are lazy-loaded and so </p>   
        </section>
        <br/>
        <section className='faded_bg paged' style={{ padding: '5px'}}>
            <h1 className='chip-tl-br bg-bg tx-fg' style={{ padding: '1rem 0.2rem 0.2rem 1rem' }}>About Me</h1>
            <p className='padded' >I have always had an interest in computers and art. At a young age I learned how to code and since have made many, many things of which some still survive today, and are archived here.</p>   
        </section>        
    </motion.div>
  )
}

export default AboutPage