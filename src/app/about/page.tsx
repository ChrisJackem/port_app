'use client'
import { motion } from 'motion/react';
import { PageVariants } from '../config/variants';
import TypeHeader from '@/components/type_header/type_header';
import World from '@/components/animations/world/world';
import AnimContainer from '@/components/animations/anim_container';
import styles from './page.module.css';
import Kid from '@/components/animations/kid/kid';
import Schem from '@/components/animations/schem/schem';
import { NavLink } from '@/components/nav_bar/nav_bar';
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
            <p>The following is a little about me and also some info about this site.</p>
        </section>

        <br/><br/>

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

        <br/><br/>

        <section className={`page_double ${styles.section_container}`}>
            <div>
                <h2>Taught myself to Code</h2>
                <p>I learned how to code at a very early age. Computers were so new, so there was little utility. I made my own websites and games for myself.
                </p>                
            </div>            
            <Kid />            
        </section>

        <br/><br/>

        <section className={`page_double ${styles.section_container}`}>
            <Schem />
            <div className='padded'>
                <h2>I make stuff</h2>
                <p>I am always making web apps, games and other utilities. Some samples are here in the <Link className="tx-mg" href='/work'>work</Link> section.
                </p>                
            </div>
        </section>

        <br/>
        <div className="divider-1"></div>
        <br/>
        
        <div className='paged'>
            <h2>About this site</h2>
            <p></p>
        </div>
    </motion.div>
  )
}

export default AboutPage