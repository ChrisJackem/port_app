'use client'
import { motion } from 'motion/react';
import { PageVariants } from '../config/variants';
import TypeHeader from '@/components/type_header/type_header';
import World from '@/components/animations/world/world';
import AnimContainer from '@/components/animations/anim_container';
import styles from './page.module.css';
import Kid from '@/components/animations/kid/kid';

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
            <p>The following is a little about me and also some info about this site.</p>
        </section>

        <section className={`page_double ${styles.section_container}`}>
            <AnimContainer>
                <World />
            </AnimContainer>
            <div>
                <h2>From New England</h2>
                <p>I was born in Connecticut in the early days of the internet.  
                    From an early age I was interested in web design and the world wide web.
                </p>
                
            </div>
        </section>

        <section className={`page_double ${styles.section_container}`}>
            <div>
                <h2>Taught myself to Code</h2>
                <p>I learned how to code at a very early age. Computers were so new, so there was little utility. I made my own websites and games for myself.
                </p>
                
            </div>            
            <Kid />            
        </section>
        
        <section className='paged'>
            <h1 className='chip-tl-br bg-bg tx-fg' style={{ padding: '1rem 0.2rem 0.2rem 1rem' }}>About this website</h1>
            <p className='padded' >This website is optimized for speed and user experience. All images are lazy-loaded and so </p>   
        </section>
        <br/>
        <section className='faded_bg paged' style={{ padding: '5px'}}>
            <h1 className='chip-tl-br bg-bg tx-fg' style={{ padding: '1rem 0.2rem 0.2rem 1rem' }}>About Me</h1>
            <p className='padded' >I have always had an interest in computers and art. At a young age I learned how to code and since have made many, many things of which some still survive today, and are archived here.</p>   
        </section>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit qui! Libero odit molestias quisquam ex in! Architecto suscipit molestiae, doloremque maiores alias, voluptatem fuga earum sapiente distinctio ullam fugit eos eum illo, modi sequi iste iure! Odio, explicabo nulla.
        </p>
    </motion.div>
  )
}

export default AboutPage