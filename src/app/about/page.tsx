'use client'
import { animate } from 'motion'
import { motion } from 'motion/react'

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
        transition={{ duration: 2, type: 'tween' }}
        className="about-container"
    >
        <div className="page-flex">
            <section>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
            </section>

            <section>
                <h3>More</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
            </section>
        </div>
        <div className="page-flex">
            <section>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
            </section>

            <section>
                <h3>More</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
            </section>
        </div>
        <div className="page-flex">
            <section>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
            </section>

            <section>
                <h3>More</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quaerat molestias tempore perspiciatis doloremque ut nemo nulla nostrum beatae laborum voluptatum laudantium, excepturi totam recusandae quod at dolores ullam iure?</p>
            </section>
        </div>
        
        
    </motion.div>
  )
}

export default AboutPage