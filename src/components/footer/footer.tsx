import React from 'react'
import './footer.css'
import ChipHeader from '../chip_header/chip_header'

const Footer = () => {
  return (
    <footer id='footer-container'>
      
      <div id='footer-header'>
        <h2>Footer</h2>
        <br/>
        <ChipHeader 
        title='Links'
        colBg='#FFF'
        colTx='#000'
        />
        <a href='/home'>Home</a>
        <br/>
        <a href='/about'>Home</a>      
      </div>

      <div id='footer-aside' className='flex-column chip-tl-md tx-fg'>
        
        <ChipHeader title='Links'/>
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
        <h4>Bla</h4>
        <p>BLAH</p>
        <p>BLAH</p>
        <p>BLAH</p>
      </div>
    </footer>
  )
}

export default Footer