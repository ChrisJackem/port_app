'use client'
import { motion } from 'motion/react';
import { PageVariants } from '../config/variants';
import TypeHeader from '@/components/type_header/type_header';
import World from '@/components/animations/world/world';
import AnimContainer from '@/components/animations/anim_container';
import styles from './page.module.css';
import Kid from '@/components/animations/kid/kid';
import Schem from '@/components/animations/schem/schem';
import Link from 'next/link';

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
            <p>A little bit about me and what I do.</p>
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

        <section className={`page_double ${styles.section_container}`}>
            <Schem />
            <div className='padded'>
                <h2>I make stuff</h2>
                <p>I am always making web apps, games and other utilities. Some samples are here in the 
                    <strong>
                        <Link className="" href='/work'> work </Link> 
                    </strong>
                    section.
                </p>                
            </div>
        </section>
    </motion.div>
  )
}

export default AboutPage