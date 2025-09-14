'use client'
import React from 'react'
import './page.css'
import { motion, stagger } from 'motion/react'
import WorkContainer from '@/components/work_container/work_container'
import config from '../config/work_config'
import Scroller from '@/components/scroller/scroller'

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
    <Scroller>
        
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam consectetur voluptates, doloribus saepe vitae quos sed asperiores tempore, atque repudiandae ratione accusamus quibusdam vero cupiditate. Provident totam alias obcaecati reiciendis porro necessitatibus veniam? Nostrum doloribus eligendi aliquid labore ut quas incidunt, quidem voluptate ipsum harum totam architecto nobis, consectetur porro! Molestias quod quam natus accusamus iusto qui ipsa, facilis neque voluptatem autem soluta! Cumque laborum illum nisi qui tempora, numquam repellendus tempore doloribus delectus recusandae excepturi deserunt exercitationem voluptate ipsam? Sed unde iure, illum laboriosam, in at odit eveniet, blanditiis hic maiores sapiente officia ipsa et velit eos eaque.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam consectetur voluptates, doloribus saepe vitae quos sed asperiores tempore, atque repudiandae ratione accusamus quibusdam vero cupiditate. Provident totam alias obcaecati reiciendis porro necessitatibus veniam? Nostrum doloribus eligendi aliquid labore ut quas incidunt, quidem voluptate ipsum harum totam architecto nobis, consectetur porro! Molestias quod quam natus accusamus iusto qui ipsa, facilis neque voluptatem autem soluta! Cumque laborum illum nisi qui tempora, numquam repellendus tempore doloribus delectus recusandae excepturi deserunt exercitationem voluptate ipsam? Sed unde iure, illum laboriosam, in at odit eveniet, blanditiis hic maiores sapiente officia ipsa et velit eos eaque.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam consectetur voluptates, doloribus saepe vitae quos sed asperiores tempore, atque repudiandae ratione accusamus quibusdam vero cupiditate. Provident totam alias obcaecati reiciendis porro necessitatibus veniam? Nostrum doloribus eligendi aliquid labore ut quas incidunt, quidem voluptate ipsum harum totam architecto nobis, consectetur porro! Molestias quod quam natus accusamus iusto qui ipsa, facilis neque voluptatem autem soluta! Cumque laborum illum nisi qui tempora, numquam repellendus tempore doloribus delectus recusandae excepturi deserunt exercitationem voluptate ipsam? Sed unde iure, illum laboriosam, in at odit eveniet, blanditiis hic maiores sapiente officia ipsa et velit eos eaque.</p>
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
    
    </Scroller>
    </motion.div>
  )
}

export default WorkPage