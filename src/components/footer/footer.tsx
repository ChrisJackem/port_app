import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer-container'>
      
      <div id='footer-header' className='chip-tl-md'>
        <h3>chrisjackem.com</h3>
        <a href='/home'>Home</a>
        <br/>
        <a href='/about'>Home</a>      
      </div>

      <div id='footer-aside'>
        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>

        <h3>Stuff</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, error?</p>
      </div>

      <div id='footer-footer'>
        <h4>Bla</h4>
        <p>BLAH</p>
        <p>BLAH</p>
        <p>BLAH</p>
      </div>
    </footer>
  )
}

export default Footer