'use client'
import TypeHeader from '@/components/type_header/type_header'
import { motion } from 'motion/react'
import React from 'react'
import { PageVariants } from '../config/variants'
import styles from './gallery.module.css'
import { LoadImg } from '@/components/load_img/load_img'
import Gallery from '@/components/gallery/gallery_elem'
import PageBanner from '@/components/page_banner/page_banner'

const GalleryPage = () => {
  return (
    <motion.div id='gallery-main-container' 
            className="page-container"
            variants={PageVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
    >
     {/*  <section className='paged'>
            <TypeHeader word='Gallery' />
            <p>Drawings, designs, and other non-interactive things I made over the years</p>            
      </section> */}

      <PageBanner title='GALLERY'
            content='Some samples of designs and other graphics' />

      <div className={`paged ${styles.gallery}`} style={{ maxWidth: '1200'}}>

        <Gallery items={[
          {
            title: 'Peg',
            blerb: 'Peg Bundy distorted',
            dims: [20, 11],
            src: 'static/images/gallery/peg_03.png',
          },
           {
            title: 'Gain',
            blerb: 'Motivational poster',
            dims: [11, 18],
            src: 'static/images/gallery/gain_01.png',
          },
           
           { 
            title: 'Deal with it later',
            blerb: 'Sarcastic motivational poster',
            dims: [20, 20],
            src: 'static/images/gallery/deal.png',
          },
          {
            title: 'Santa',
            blerb: 'Christmas card GIF',            
            dims: [11, 11],
            src: 'static/images/gallery/christmas.gif',
          },
         
          {
            title: 'Self Portrait with cheese',
            blerb: 'Self portrait using McDonalds items',
            dims: [12, 18],
            src: 'static/images/gallery/burger2.png',
          },

          {
            title: 'Morning',
            blerb: 'Motivational poster',
            dims: [19, 11],
            src: 'static/images/gallery/morning.gif',
          },
         /*  {
            title: 'Until my body breaks',
            blerb: 'Motivational poster',            
            dims: [19, 12],
            src: 'static/images/gallery/until.png',
          }, */
         /*  {
            title: 'Arbourous',
            blerb: 'Character design drawing',            
            dims: [10, 7],
            src: 'static/images/gallery/ArborousPoster.jpg',
          }, */

          {
            title: 'Blood Drive',
            blerb: 'Blood Drive advertisement GIF',
            dims: [19, 17],
            src: 'static/images/gallery/nosferatu.gif',
          },          
          
         
          {
            title: 'Rat Monkey',
            blerb: '3d Model of the rat monkey from the movie "Brain Dead"',
            dims: [12, 10],
            src: 'static/images/gallery/rat.jpg',
          },     
          /* {
            title: 'Nurse Ratched',
            blerb: "If you didn't see the movie you won't get it",            
            dims: [12, 10],
            src: 'static/images/gallery/ratch.png',
          },
          {
            title: 'War',
            blerb: "Demoralization poster",            
            dims: [12, 9],
            src: 'static/images/gallery/neverEndingWar.png',
          }, */
         /*  {
            title: 'Ted',
            blerb: '3d Model',            
            dims: [20, 15],
            src: 'static/images/gallery/ted.jpg',
          },
          {
            title: 'Pipe dream promo',
            blerb: 'Promotional image for a game',            
            dims: [12, 6],
            src: 'static/images/work/pipedream/seo_promo_website.png',
          },
          
          {
            title: 'Weapon of Hope',
            blerb: 'Motivational poster',            
            dims: [20, 16],
            src: 'static/images/gallery/hope.png',
          },
          {
            title: 'Habit',
            blerb: "colored pencil drawing",            
            dims: [12, 15],
            src: 'static/images/gallery/habit.png',
          },      */    

        ]} />            
      </div>

    </motion.div>
  )
}

export default GalleryPage