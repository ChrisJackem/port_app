'use client'
import React from 'react'
import './page.css'
import { motion, stagger } from 'motion/react'
import WorkContainer from '@/components/work_container/work_container'
import config from '../config/work_config'

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
        className="page-container flex flex-column"
    >     
        <WorkContainer title={'Test'} conf={config.test}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
        </WorkContainer>

        <WorkContainer title={'Cats'} conf={config.test2}>
            <h1>Cats</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
            <br/>
            <h3>Cat Features:</h3>
            <ul style={{ marginLeft: 30 }}>
                <li>Cuddly</li>
                <li>Snuggly</li>
                <li>Get off there</li>
            </ul>
        </WorkContainer>

        <WorkContainer title={'Cheesed 3'} conf={config.test3}>
            <h3>Cheesed 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
        </WorkContainer>

    </motion.div>
  )
}

export default WorkPage