'use client'
import { motion } from 'motion/react';
import { PageVariants } from '../config/variants';
import TypeHeader from '@/components/type_header/type_header';
import World from '@/components/animations/world/world';

/*********************************************************************************** About Page  */

const AboutPage = () => {

  return (
    <motion.div
        key="about"
        variants={PageVariants}
        initial="hidden"
        animate="enter" 
        exit="exit"
        className="about-container"
    >
        <section className='paged'>
            <TypeHeader word='About' />            
        </section>

        <section className='page_double'>
            <World />
            <div>
                <h2>I am from CT</h2>
                <p>Born in Connecticut in the early stages of the internet</p>
            </div>
        </section>
        
        {/* <section className='paged'>
            <h1 className='chip-tl-br bg-bg tx-fg' style={{ padding: '1rem 0.2rem 0.2rem 1rem' }}>About this website</h1>
            <p className='padded' >This website is optimized for speed and user experience. All images are lazy-loaded and so </p>   
        </section>
        <br/>
        <section className='faded_bg paged' style={{ padding: '5px'}}>
            <h1 className='chip-tl-br bg-bg tx-fg' style={{ padding: '1rem 0.2rem 0.2rem 1rem' }}>About Me</h1>
            <p className='padded' >I have always had an interest in computers and art. At a young age I learned how to code and since have made many, many things of which some still survive today, and are archived here.</p>   
        </section>        */} 
    </motion.div>
  )
}

export default AboutPage