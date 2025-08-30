'use client'
import { motion } from 'motion/react'


const AboutPage = () => {

  return (
    <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout 
        className="about-container page-flex"
    >
        <section>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
        </section>

        <section>
            <h3>More</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
        </section>
        
    </motion.div>
  )
}

export default AboutPage