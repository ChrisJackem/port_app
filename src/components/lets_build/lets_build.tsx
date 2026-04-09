import React from 'react'
import styles from './lets_build.module.css'

const LetsBuild = () => {
  return (
    <div className={`striped accent-psudo ${styles.container}`} data-psudo={'//////'}>
        <section className={`padded paged page-container page-center ${styles.container_inner}`}>
        {/*  <div className={'t-sideways p-abs t-jumbo'}>//</div> */}
            <div className="t-right">
                <h1 className="t-jumbo-md t-it">LET'S BUILD THE INTERNET TOGETHER.</h1>
                <p>Feel free to reach out for help on any project.</p>
                <br/>
                <button className="button active">Hire Me</button>
            </div>
        </section>
    </div>
  )
}


export default LetsBuild