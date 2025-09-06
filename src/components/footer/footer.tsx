'use client'
import React, { useState } from 'react'
import './footer.css'
import ChipHeader from '../chip_header/chip_header'

const Footer = () => {
  return (
    <footer id='footer-container'>
      
      <div id='footer-header'>
       
        <ChipHeader 
        title='Jump to Page'
        childBg='rgba(255,255,255, .2)'
        >
          <div className='flex footer-links'>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>      
            <a href='/about'>About</a>      
            <a href='/about'>About</a>      
          </div>
        </ChipHeader>
      </div>

      <div id='footer-aside' className='flex-column chip-tl-md tx-fg'>
        
        <ChipHeader title='External Links'/>
        {/* <ChipHeader 
        title='Test'
        colBg='red'
        /> */}
        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>

        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
      </div>

      <div id='footer-footer' className='chip-tl-md'>
        <h3>Change Theme</h3>
        <p>Default</p>
        <p>Ocean</p>
        <p>BLAH</p>
        <p>BLAH</p>
        <p>BLAH</p>
      </div>
    </footer>
  )
}

export default Footer