'use client'
import React from 'react'
import './page.css'
import WorkContainer from '@/components/work_container/work_container'
import Scroller from '@/components/scroller/scroller'
//import AttentionSection, {IMG_TYPES} from '@/components/attention_section/attention_section'
import SvgBtn from '@/components/svg_btns/svg_btns'
import { motion } from 'motion/react'
import { PageVariants } from '../config/variants'
//import TypeHeader from '@/components/type_header/type_header'
import PageBanner from '@/components/page_banner/page_banner'
import LetsBuild from '@/components/lets_build/lets_build'

const WorkPage = () => {
  return (
    <motion.div id='work-main-container' 
        className="page-container gridded"
        variants={PageVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
    >      

    <PageBanner title='WORK'
        content='The following is some of my most recent personal projects.' />

    <div id='work-work-container' className='flex flex-column'>

        <Scroller>
            
            <WorkContainer title='Flack'
                link={{
                    text: 'VISIT',                   
                    href: "https://flack.cx",
                    cta_text: 'Goto Flack'
                }}
                content={[
                    { title: 'logo', url: 'static/images/work/flack/flack_logo.png' },                    
                    { title: 'dashboard', url: 'static/images/work/flack/flack_dashboard.png', text: 'Easy to use interface' },                    
                    { title: 'gui', url: 'static/images/work/flack/flack_wall.png', text: 'Masonry layout' },
                    { title: 'crop', url: 'static/images/work/flack/flack_profile_image.png', text: 'Upload image crop/zoom' },
            ]}>
                <div className='blurb_title'>
                    <h2>Flack</h2>
                    <p>Social Media</p>
                </div>                
                <br/>
                <p>
                    Flack is an old-school styled social media with every feature you would expect in a social media app. Share videos and images with your friends and give them praise or flack on thier posts.
                </p>
                <br/>
                <p>
                    Completely ad-free, no tracking, and easy to use, with a detailed help page.
                </p>
                
                <div className="feature_box">
                    <h3 className="t-green">Features</h3>
                    <ul>
                        <li>No Tracking or data harvesting</li>
                        <li>Ad-Free, even in embedded video</li>
                        <li>Add, Delete, Block, Chat, and interact with friends</li>
                        <li>YouTube and BitChute support</li>
                        <li>Emoji Support, Emoji picker</li>
                        <li>Bot Control with Recaptcha2.0</li>
                        <li>Backend image resizing and formatting (space saving)</li>
                    </ul>
                </div>
            </WorkContainer>

            <WorkContainer title='Noter'
                link={{
                    text: 'VISIT',                   
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
                    <h2>Noter</h2>
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
                    <h3 className="t-green">Features</h3>
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
                    text: 'VISIT',
                    href: 'https://walls-e3b59.web.app', 
                    cta_text: 'Visit Vandal' 
                }}
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
                    Vandal is an online vector drawing app. Users are registered and logged in automatically using cookies.
                    Users can choose between 4 different drawing tools and can customize the shape fill color and stroke color/size to almost anything they want. Thanks to the Undo feature, mistakes and tweaking your drawing are very easy.
                    As well as being able to draw whatever you want, you can remove anyone&apos;s drawing anytime, making this app self moderating.
                </p>
                <p>Powered by Google Firebase</p>
                <div className="feature_box">
                    <h3 className="t-green">Features</h3>
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
                link={{ 
                    text: 'VISIT', 
                    href: 'https://meme-o-matic.web.app/', 
                    cta_text: 'Visit Meme-O-Matic' 
                }}
                content={[
                    { title: 'meme 1', url: 'static/images/work/meme/meme_01.png' },                   
                    { title: 'meme 2', url: 'static/images/work/meme/meme_02.png' },                   
                    { title: 'meme 3', url: 'static/images/work/meme/meme_03.png' },                   
                    { title: 'meme 3', url: 'static/images/work/meme/meme_04.png' },                    
            ]}>
                 <div className='blurb_title'>
                    <h2>Meme-O-Matic</h2>
                    <p>Utility Web App</p>
                </div>
                <strong>Finally, you can create memes completely inside your browser!</strong>
                <br/>
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
                    <h3 className="t-green">Features</h3>
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
                    text: 'VISIT', 
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
                    <h2>Pipe Dream</h2>
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
                    <h3 className="t-green">Features</h3>
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
                link={{ 
                    text: 'VISIT', 
                    href: '/uc', 
                    local: true, 
                    cta_text: 'Play'
                }}
                content={[
                    { title: 'test', url: 'static/images/work/ultracus/ultra_promo0.png' },                   
                    { title: 'test', url: 'static/images/work/ultracus/ultra_promo1.png' },                   
                    { title: 'test3', url: 'static/images/work/ultracus/ultra_promo2.png' },
                    
            ]}>
                 <div className='blurb_title'>
                    <h2>Ultra Custodian</h2>
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
                    <h3 className="t-green">Features</h3>
                    <ul>
                        <li>Unlockable tools, easter eggs, and more</li>
                        <li>Laid back, no pressure style game loop</li>
                        <li>Subtle life training for kids</li>                                          
                    </ul>
                </div>
                <small><strong>Note:</strong> this will not work on mobile browsers</small>
            </WorkContainer>
        
        </Scroller>

        <LetsBuild />

    </div>
    </motion.div>
  )
}

export default WorkPage