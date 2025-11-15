'use client'
import React from 'react'
import './page.css'
import WorkContainer from '@/components/work_container/work_container'
import Scroller from '@/components/scroller/scroller'
import AttentionSection, {IMG_TYPES} from '@/components/attention_section/attention_section'
import SvgBtn from '@/components/svg_btns/svg_btns'
import { motion } from 'motion/react'
import { PageVariants } from '../config/variants'
import TypeHeader from '@/components/type_header/type_header'

const WorkPage = () => {
  return (
    <motion.div id='work-main-container' 
        className="page-container"
        variants={PageVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
    >
        <section className='paged'>
            <TypeHeader word='Work' />
            <motion.div
            >
                The following is some of my most recent personal projects. 
            </motion.div>   
        </section>

    <div id='work-work-container' className='flex flex-column'>
        <AttentionSection
            color={'var(--background, #CCC)'}
            bgOpacity={0.5}
            icon_url={IMG_TYPES.EXCLAIM}
            supressInitial={true}
        >
            <h2 style={{ marginBottom: '15px' }}>Scroll Control</h2>
            <p>This page features custom scroll controls. This is meant to display individual elements filling the viewport the entire time. 
                As well as <strong>scroll snapping,</strong> you can navigate without scrolling or swiping. Turning off controls will disable snapping and buttons.
            </p>
            <br/>
            <table className='scroll-table'>
                <caption className='scroll-table-caption'>Buttons</caption>
                <tbody>
                    <tr>
                        <td>Toggle controls on/off</td>
                        <td><SvgBtn className={''} type='x' /></td>
                    </tr>
                    <tr>
                        <td>Previous Element</td>
                        <td><SvgBtn className={''} type='prev' /></td>
                    </tr>
                    <tr>
                        <td>Next Element</td>
                        <td><SvgBtn className={''} type='next' /></td>
                    </tr>            
                </tbody>
            </table>
            <br/>
            <i>If controls are not visible yet, scroll down some more.</i>
        </AttentionSection>

        <Scroller>
            
            <WorkContainer title='Noter' playText='Google Web Store'
                link={{
                    text: 'Install',                   
                    href: "https://chromewebstore.google.com/detail/noter/febdhbfmobmdhhffbepbajikpnjokhmc?hl=en-US"
                }}
                content={[
                    { title: 'logo', url: 'static/images/work/noter/noter_logo.png' },                    
                    { title: 'test', url: 'static/images/slideShow_test_delete.png' },                    
                    { title: 'menu', url: 'static/images/work/noter/noter_menu.png', text: 'Easy Right Click Menu' },
            ]}>
                <div className='blurb_title'>
                    <h3>Noter Browser Extension</h3>
                    <p>For Chromium Browsers</p>
                </div>

                <p>
                    Noter is the easy way to copy text from a webpage. Noter allows you to extract snippets of text from the internet, edit them, and add them to your system clipboard easily.
                </p>  

                <br/>

                <p>
                    Doing some research? Noter logs the url you copied from for your references later. Getting code snippets off of Stack Overflow? You can edit the code right in the browser before you paste it into your project.
                </p>

                <div className="feature-box">
                    <h6 className="t-green">Features</h6>
                    <ul>
                        <li>Easy 2-click functionality</li>
                        <li>Create, Read, Update, Delete any snippet anytime</li>
                        <li>Detailed help with diagrams</li>
                        <li>URLs tracked along with snippets</li>
                        <li>Works on all Chromium browsers</li>
                    </ul>
                </div>
            </WorkContainer>

            <WorkContainer title='Ultra Custodian'
                link={{ text: 'Click', href: 'google.com' }}
                content={[
                    { title: 'test', url: 'static/images/work/test/test1.png' },
                    { title: 'test2', 
                        url: 'static/images/work/test/test2.png',
                        text: 'This is working' 
                    },
                    { title: 'test3', url: 'static/images/work/test/test3.png' },
                    { title: 'Beei',
                        url: 'static/images/work/test2/cat3.jpg', 
                        embedId:'J63mfimO5qE'
                    },
                    { title: 'Beef',
                        url: 'static/images/work/test2/cat2.jpg', 
                        embedId:'aAGaNgkBdgc'
                    }
            ]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            </WorkContainer>

            <WorkContainer title='Title'
                link={{ text: 'Click to dasmdfkasdmfkl', href: 'google.com' }}
                content={[
                    { title: 'test', url: 'static/images/work/test/test1.png' },
                    { title: 'test2', 
                        url: 'static/images/work/test/test2.png',
                        text: 'This is working' 
                    },
                    { title: 'test3', url: 'static/images/work/test/test3.png' },
                    { title: 'Beei',
                        url: 'static/images/work/test2/cat3.jpg', 
                        embedId:'J63mfimO5qE'
                    },
                    { title: 'Beef',
                        url: 'static/images/work/test2/cat2.jpg', 
                        embedId:'aAGaNgkBdgc'
                    }
            ]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            </WorkContainer>

            <WorkContainer title='Title'
                link={{ text: 'Click', href: 'google.com' }}
                content={[
                    { title: 'test', url: 'static/images/work/test/test1.png' },
                    { title: 'test2', 
                        url: 'static/images/work/test/test2.png',
                        text: 'This is working' 
                    },
                    { title: 'test3', url: 'static/images/work/test/test3.png' },
                    { title: 'Beei',
                        url: 'static/images/work/test2/cat3.jpg', 
                        embedId:'J63mfimO5qE'
                    },
                    { title: 'Beef',
                        url: 'static/images/work/test2/cat2.jpg', 
                        embedId:'aAGaNgkBdgc'
                    }
            ]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, deleniti?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ad sint, rerum doloremque suscipit natus sit eaque in modi quia animi? Cum aliquam quo omnis dignissimos labore rem nulla reprehenderit mollitia, aperiam debitis distinctio eaque, expedita tempora perferendis. Iure, ducimus.</p>
            </WorkContainer>

            <WorkContainer title='Cats' content={[
                { title: 'test', url: 'static/images/work/test2/cat1.jpg' },
                { title: 'test', url: 'static/images/work/test2/cat2.jpg' },
                { title: 'test', url: 'static/images/work/test2/cat3.jpg' },
            ]}>
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
        
        </Scroller>

    </div>
    </motion.div>
  )
}

export default WorkPage