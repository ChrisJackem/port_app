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
            
            <WorkContainer title='Noter'
                link={{
                    text: 'Install',                   
                    href: "https://chromewebstore.google.com/detail/noter/febdhbfmobmdhhffbepbajikpnjokhmc?hl=en-US",
                    cta_text: 'Google Web Store'
                }}
                content={[
                    { title: 'logo', url: 'static/images/work/noter/noter_logo.png' },                    
                    { title: 'rclick', url: 'static/images/work/noter/noter_context.png', text: 'Easy Right Click Menu' },                    
                    { title: 'gui', url: 'static/images/work/noter/noter_gui.png' },
                    { title: 'help', url: 'static/images/work/noter/noter_help.png', text: 'Detailed In-App help' },
                    { title: 'noter promo', url: 'static/images/work/noter/noter_logo.png',  embedId:'7NpmneoyLUA' }
            ]}>
                <div className='blurb_title'>
                    <h2>Noter Browser Extension</h2>
                    <p>For Chromium Browsers</p>
                </div>
                <p>
                    Noter is the easy way to copy text from a webpage. Noter allows you to extract snippets of text from the internet, edit them, and add them to your system clipboard easily.
                </p>
                <br/>
                <p>
                    Doing some research? Noter logs the url you copied from for your references later. Getting code snippets off of Stack Overflow? You can edit the code right in the browser before you paste it into your project.
                </p>
                <div className="feature_box">
                    <h5 className="t-green">Features</h5>
                    <ul>
                        <li>Easy 2-click functionality</li>
                        <li>Create, Read, Update, Delete any snippet anytime</li>
                        <li>Detailed help with diagrams</li>
                        <li>URLs tracked along with snippets</li>
                        <li>Works on all Chromium browsers</li>
                    </ul>
                </div>
            </WorkContainer>

            <WorkContainer title='Vandal'
                link={{ text: 'Go', href: 'https://walls-e3b59.web.app', cta_text: 'Goto Vandal' }}
                content={[
                    { title: 'logo', url: 'static/images/work/vandal/vandal_logo.png' },                    
                    { title: 'promo', url: 'static/images/work/vandal/vandal_promo_1.png' },
                    { title: 'stall', url: 'static/images/work/vandal/vandal_stall.png', text: 'Robust drawing tools' },                    
                    { title: 'delete', url: 'static/images/work/vandal/vandal_delete.png',  text: 'Built-in moderation' }
            ]}>
                <div className='blurb_title'>
                    <h2>Vandal</h2>
                    <p>Online vandalism simulator</p>
                </div>
                <p>
                    Vandal is an online vector drawing app. Users are registered and logged in automatically using Google Firebase cookies.
                    Users can choose between 4 different drawing tools and can customize the shape fill color and stroke color/size to almost anything they want. Thanks to the Undo feature, mistakes and tweaking your drawing are very easy.
                    As well as being able to draw whatever you want, you can remove anyone&apos;s drawing anytime, making this app self moderating. 
                </p>
                <div className="feature_box">
                    <h5 className="t-green">Features</h5>
                    <ul>
                        <li>Seamless, automatic login/register</li>
                        <li>Vector drawings for speed and fidelity</li>
                        <li>Any color fill and/or stroke</li>
                        <li>12 slot undo queue</li>
                        <li>Built-in moderation</li>
                        <li>Detailed help</li>                        
                    </ul>
                </div> 
                <small><strong>Note:</strong> I do not condone vandalism, this was meant to replace actual vandalism</small>
            </WorkContainer>

            <WorkContainer title='Ultra Custodian'
                link={{ text: 'Play', href: 'google.com' }}
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