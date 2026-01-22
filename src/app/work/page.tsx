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
                    text: 'Go',                   
                    href: "https://chromewebstore.google.com/detail/noter/febdhbfmobmdhhffbepbajikpnjokhmc?hl=en-US",
                    cta_text: 'Google Store'
                }}
                content={[
                    { title: 'logo', url: 'static/images/work/noter/noter_logo.png' },                    
                    { title: 'rclick', url: 'static/images/work/noter/noter_context.png', text: 'Easy Right Click Menu' },                    
                    { title: 'gui', url: 'static/images/work/noter/noter_gui.png' },
                    { title: 'help', url: 'static/images/work/noter/noter_help.png', text: 'Detailed In-App help' },
                    { title: 'noter promo', url: 'static/images/work/noter/noter_logo.png',  embedId:'7NpmneoyLUA' }
            ]}>
                <div className='blurb_title'>
                    <h3>Noter</h3>
                    <p>Chromium Browser Extension</p>
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
                link={{ 
                    text: 'Go',
                    href: 'https://walls-e3b59.web.app', 
                    cta_text: 'Vandalize' 
                }}
                content={[
                    { title: 'logo', url: 'static/images/work/vandal/vandal_logo.png' },
                    { title: 'promo', url: 'static/images/work/vandal/vandal_promo_1.png' },
                    { title: 'stall', url: 'static/images/work/vandal/vandal_stall.png', text: 'Robust drawing tools' },               
                    { title: 'delete', url: 'static/images/work/vandal/vandal_delete.png',  text: 'Built-in moderation' }
            ]}>
                <div className='blurb_title'>
                    <h3>Vandal</h3>
                    <p>Online vandalism simulator</p>
                </div>
                <p>
                    Vandal is an online vector drawing app. Users are registered and logged in automatically using cookies.
                    Users can choose between 4 different drawing tools and can customize the shape fill color and stroke color/size to almost anything they want. Thanks to the Undo feature, mistakes and tweaking your drawing are very easy.
                    As well as being able to draw whatever you want, you can remove anyone&apos;s drawing anytime, making this app self moderating.
                </p>
                <p>Powered by Google Firebase</p>
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

            <WorkContainer title='Meme-O-Matic'
                link={{ text: 'Go', href: 'https://meme-o-matic.web.app/', cta_text: 'Meme' }}
                content={[
                    { title: 'meme 1', url: 'static/images/work/meme/meme_01.png' },                   
                    { title: 'meme 2', url: 'static/images/work/meme/meme_02.png' },                   
                    { title: 'meme 3', url: 'static/images/work/meme/meme_03.png' },                   
                    { title: 'meme 3', url: 'static/images/work/meme/meme_04.png' },                   
                    
                    
            ]}>
                 <div className='blurb_title'>
                    <h3>Meme-O-Matic</h3>
                    <p>Utility Web App</p>
                </div>
                <h4>Finally, you can create memes completely inside your browser!</h4>
                <br/>
                <p>
                    This is a simple meme generation web app I created with React. Create your own memes for any occasion with your own personal touch.
                    Many different colors and fonts are available at your fingertips. Create the next viral sensation or make your friends laugh at the inside joke.                    
                </p>
                <br/>
                <p>
                    In order to make a meme with this app, you need a base image to start. You can use an image from your device, copy / paste one in, or even use a URL.
                    After you choose an image, add the message you want on top. You can change any aspect of the text at any time until you are happy. 
                    Have as many text nodes as you want for really complicated messages or even a comic strip.
                    When you are done, download your image to your device and spread it around the world!                                    
                </p>

                <div className="feature_box">
                    <h5 className="t-green">Features</h5>
                    <ul>
                        <li>Upload, link, or paste images easily</li>
                        <li>12 different radical fonts</li>
                        <li>Resize and recolor any way you want</li>
                        <li>FREE</li>                                          
                    </ul>
                </div>
            </WorkContainer>

            <WorkContainer title='Pipe Dream'
                link={{ 
                    text: 'Go', 
                    href: 'https://chrisjackem.github.io/pipe-dream/',
                    cta_text: 'Play' 
                }}
                content={[
                    { title: 'logo', url: 'static/images/work/pipedream/seo_promo_website.png' },
                    { title: 'logo', url: 'static/images/work/pipedream/pipe_promo_3.png', text: 'Challenging Levels' },
                    { title: 'logo', url: 'static/images/work/pipedream/pipe_new_promo3.png' },
                    { title: 'logo', url: 'static/images/work/pipedream/pipe_new_promo2.png', text: 'Level Editor' },
            ]}>
                <div className='blurb_title'>
                    <h3>Pipe Dream</h3>
                    <p>HTML Puzzle Game</p>
                </div>
                <p>
                   Pipe Dream is an HTML game you have played before if you are old enough or have ever played BioShock. Rearrange and rotate the pipes to direct the fluids to thier respective tanks.
                   Beat the game to become the true plumber hero!                    
                </p>
                <br/>
                <p>                   
                    Mobile / PC support. Pipe Dream is lightweight enough to run fast on even the oldest of devices.
                    Pipe Dream uses the native drag and drop with a CSS grid for maximum compatability.
                    Multiple levels and even a level editor providing an eternity of gameplay!
                </p>
                <div className="feature_box">
                    <h5 className="t-green">Features</h5>
                    <ul>
                        <li>Mobile and PC browser support</li> 
                        <li>Web based - no download</li>
                        <li>Level Editor</li>
                        <li>Level Select</li>
                        <li>Free</li>
                    </ul>
                </div>               
            </WorkContainer>

            <WorkContainer title='Ultra Custodian'
                link={{ text: 'Go', href: '/uc', local: true, cta_text: 'Play' }}
                content={[
                    { title: 'test', url: 'static/images/work/ultracus/ultra_promo0.png' },                   
                    { title: 'test', url: 'static/images/work/ultracus/ultra_promo1.png' },                   
                    { title: 'test3', url: 'static/images/work/ultracus/ultra_promo2.png' },
                    
            ]}>
                 <div className='blurb_title'>
                    <h3>Ultra Custodian</h3>
                    <p>Janitorial simulator</p>
                </div>
                <p>This is a web build for a project I made in 2012 with Unity, written in C#. A solid game theory demo game with many features including progression, easter eggs, unlockables and more.</p>
                <br/>
                <p>Ultra Custodian is a first-person janitor game where the goal is to clean the school every day using all the tools you have access to. The more you clean, the more money you will earn.
                    Work hard and unlock more tools to clean more thoroughly. After you clean everything you can, clock out until the next day when the filth has accumulated again.
                    Use cash to unlock the lockers to win money, tools, and wonderful secret prizes!
                </p>
                <br/>
                <p>Ultra Custodian features 3 different game modes, including a thorough tutorial. Challenge yourself with cleaning the school while its on fire. Now that is dedication to your work!</p>               
                <p></p>
                <br/>
                <div className="feature_box">
                    <h5 className="t-green">Features</h5>
                    <ul>
                        <li>Unlockable tools, easter eggs, and more</li>
                        <li>Laid back, no pressure style game loop</li>
                        <li>Subtle life training for kids</li>                                          
                    </ul>
                </div>
                <small><strong>Note:</strong> this will not work on mobile browsers</small>
            </WorkContainer>

            

            {/* <WorkContainer title='Title'
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
            </WorkContainer> */}
        
        </Scroller>

    </div>
    </motion.div>
  )
}

export default WorkPage