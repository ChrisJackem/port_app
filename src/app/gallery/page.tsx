'use client'
import TypeHeader from '@/components/type_header/type_header'
import { motion } from 'motion/react'
import React from 'react'
import { PageVariants } from '../config/variants'
import styles from './gallery.module.css'
import { LoadImg } from '@/components/load_img/load_img'
import Gallery from '@/components/gallery/gallery_elem'

const GalleryPage = () => {
  return (
    <motion.div id='work-main-container' 
            className="page-container"
            variants={PageVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
    >
      <section className='paged'>
            <TypeHeader word='Gallery' />
            <p>A random assortment of images</p>            
      </section>

      <div className={`paged ${styles.gallery}`} style={{ maxWidth: '1200'}}>

        <Gallery items={[
          {
            title: 'Peg',
            blerb: 'Peg Bundy distorted',
            orient: 'wide',
            src: 'static/images/gallery/peg_03.png',
          },

          {
            title: 'Morning',
            blerb: 'What a wonderful day to have a curse',
             orient: 'wide',
            src: 'static/images/gallery/morning.gif',
          },

          {
            title: 'Gain',
            blerb: 'Motivational poster',
            orient: 'tall',
            src: 'static/images/gallery/gain_01.png',
          },          
          {
            title: 'Blood Drive',
            blerb: 'Blood Drive advertisement GIF',
            orient: 'square',
            src: 'static/images/gallery/nosferatu.gif',
          },

          {
            title: 'Procrastination',
            blerb: 'Pro-procrastination propaganda',            
            orient: 'square',
            src: 'static/images/gallery/deal.png',
          },
          {
            title: 'Santa',
            blerb: 'Christmas card GIF',            
            orient: 'tall',
            src: 'static/images/gallery/christmas.gif',
          },

          {
            title: 'Sweat',
            blerb: 'Motivational poster',            
            orient: 'wide',
            src: 'static/images/gallery/until.png',
          },

        ]} />

        {/* <LoadImg className={styles.item} style={{ span: 10 }} src={'static/images/work/pipedream/seo_promo_website.png'} height={100}/>        
        <LoadImg className={styles.item} style={{ span: 20 }} src={'static/images/work/pipedream/seo_promo_website.png'} height={200}/>        
        <LoadImg className={styles.item} style={{ span: 15 }} src={'static/images/work/pipedream/seo_promo_website.png'} height={100}/>        
        <LoadImg className={styles.item} style={{ span: 2 }} src={'static/images/work/pipedream/seo_promo_website.png'} height={100}/>    */}     
        {/* <div className={`${styles.item} ${styles.wide}`}>
          <LoadImg src='static/images/work/pipedream/seo_promo_website.png' />
        </div>
        <div className={`${styles.item} ${styles.square}`}>
          <LoadImg src='static/images/work/pipedream/seo_promo_website.png' />
        </div>
        <div className={`${styles.item} ${styles.tall}`}>
          <LoadImg src='static/images/work/pipedream/seo_promo_website.png' />
        </div>
        
        <div className={`${styles.item} ${styles.square}`}>
          <LoadImg src='static/images/work/pipedream/seo_promo_website.png' />
        </div>
        <div className={`${styles.item} ${styles.wide}`}>
          <LoadImg src='static/images/work/pipedream/seo_promo_website.png' />
        </div>
        <div className={`${styles.item} ${styles.square}`}>
          <LoadImg src='static/images/work/pipedream/seo_promo_website.png' />
        </div> */}
        

  

            
      </div>

    </motion.div>
  )
}

export default GalleryPage