'use client'
import React from 'react'
import './page.css'
import { motion, stagger } from 'motion/react'
import WorkContainer from '@/components/work_container/work_container'
import config, {Slide} from '../config/work_config'

/*********************************************************************************** Work Page  */

const variantsPage = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 ,
        transition: { delayChildren: stagger(0.5, { from: "first" }) }
    },
  exit: { opacity: 0, x: 0, y: 10 },  
}

const WorkPage = () => {
  return (
    <motion.div
        id='work-main-container'
        key="work"
        variants={variantsPage}
        initial="hidden"
        animate="enter" 
        exit="exit"
        transition={{ type: 'tween' }}
        className="page-container"
    >    
        <WorkContainer title={'Test'} conf={config.test}>            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
        </WorkContainer>

        <WorkContainer title={'Cheesed 2'} conf={config.test2}>
            <h3>Cheesed 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
        </WorkContainer>

    </motion.div>
  )
}

export default WorkPage