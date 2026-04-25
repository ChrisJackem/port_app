'use client'
import React from 'react'
import styles from './contact_form.module.css'
import SvgBtn from '../svg_btns/svg_btns'
import { AnimatePresence, easeInOut, easeOut, motion } from 'motion/react'
import { useModal } from '../modals/modal_context'

const ContactForm = () => {
    const { modalName, setModalName } = useModal();
    return ( 
        <AnimatePresence>
            { modalName == 'contact' && (
                <motion.div 
                    key={'contact'} 
                    className={`modal ${styles.container}`}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                >
                    <img
                    style={{ marginLeft: 'auto'}}
                    fetchPriority="high"
                    alt='vector self portrait'
                    width='200px'
                    height='220px'
                    src='static/images/portrait_02.svg'
                    />
                    <div className={`flex flex-column`} style={{ justifyContent: 'flex-end' }}>
                        <h1>Contact</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, modi!</p>
                    </div>

                    <SvgBtn 
                        type={'x'} 
                        className={styles.dismiss} 
                        color={'#fff'}
                        onClick={()=> setModalName(null) }
                    />
                </motion.div> 
            )}  
        </AnimatePresence> 
    )
}

export default ContactForm