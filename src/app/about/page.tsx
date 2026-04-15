'use client'
import { motion } from 'motion/react';
import { PageVariants } from '../config/variants';
import TypeHeader from '@/components/type_header/type_header';
import World from '@/components/animations/world/world';
import AnimContainer from '@/components/animations/anim_container';
import styles from './page.module.css';
import Kid, { KidSvg } from '@/components/animations/kid/kid';
import Schem from '@/components/animations/schem/schem';
import Link from 'next/link';
import PageBanner from '@/components/page_banner/page_banner';
import LetsBuild from '@/components/lets_build/lets_build';
import TimelineScroller, { TimelineChild } from '@/components/timeline_scroller/timeline_scroller';


/*********************************************************************************** About Page  */

const AboutPage = () => {

  return (
    <motion.div
        key="about"
        variants={PageVariants}
        initial="hidden"
        animate="enter" 
        exit="exit"
        className={"page-container gridded"}
    >
        <PageBanner title='ABOUT'
            content={'A little bit about me and what I do.'} />

        <div className={'page-container '}>            
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem in eveniet. Pariatur veniam iste, accusamus molestias tenetur, provident nemo tempore esse neque atque, aliquid eum voluptatum consequatur! Laudantium illum repudiandae asperiores! Adipisci esse autem, laudantium possimus consequatur numquam, commodi minima corporis voluptatum debitis ducimus blanditiis libero minus amet rem totam molestiae quibusdam alias eaque. Suscipit, id laboriosam! Aliquid illo, eveniet fugit nemo quis cupiditate quaerat, mollitia optio unde quae delectus quo. Ipsa eaque consectetur odio dicta natus voluptatibus consequuntur, architecto, recusandae esse corrupti voluptatem deleniti dignissimos doloribus perspiciatis dolorum iste sed beatae. Alias repellat obcaecati voluptate a dolor. Dolore!</p>
        </div>
                 
        <TimelineScroller>

            <TimelineChild state={'under'}>
                <KidSvg />
            </TimelineChild>

            <div className={'page-center'} style={{ marginTop: '3rem'}}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem in eveniet. Pariatur veniam iste, accusamus molestias tenetur, provident nemo tempore esse neque atque, aliquid eum voluptatum consequatur! Laudantium illum repudiandae asperiores! Adipisci esse autem, laudantium possimus consequatur numquam, commodi minima corporis voluptatum debitis ducimus blanditiis libero minus amet rem totam molestiae quibusdam alias eaque. Suscipit, id laboriosam! Aliquid illo, eveniet fugit nemo quis cupiditate quaerat, mollitia optio unde quae delectus quo. Ipsa eaque consectetur odio dicta natus voluptatibus consequuntur, architecto, recusandae esse corrupti voluptatem deleniti dignissimos doloribus perspiciatis dolorum iste sed beatae. Alias repellat obcaecati voluptate a dolor. Dolore!</p>
            </div> 
            
            <div className={'page-center'} style={{ marginTop: '3rem'}}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem in eveniet. Pariatur veniam iste, accusamus molestias tenetur, provident nemo tempore esse neque atque, aliquid eum voluptatum consequatur! Laudantium illum repudiandae asperiores! Adipisci esse autem, laudantium possimus consequatur numquam, commodi minima corporis voluptatum debitis ducimus blanditiis libero minus amet rem totam molestiae quibusdam alias eaque. Suscipit, id laboriosam! Aliquid illo, eveniet fugit nemo quis cupiditate quaerat, mollitia optio unde quae delectus quo. Ipsa eaque consectetur odio dicta natus voluptatibus consequuntur, architecto, recusandae esse corrupti voluptatem deleniti dignissimos doloribus perspiciatis dolorum iste sed beatae. Alias repellat obcaecati voluptate a dolor. Dolore!</p>
            </div>

             <TimelineChild state={'under'}>
                <KidSvg />
            </TimelineChild>

            <div className={'page-center'} style={{ marginTop: '3rem'}}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem in eveniet. Pariatur veniam iste, accusamus molestias tenetur, provident nemo tempore esse neque atque, aliquid eum voluptatum consequatur! Laudantium illum repudiandae asperiores! Adipisci esse autem, laudantium possimus consequatur numquam, commodi minima corporis voluptatum debitis ducimus blanditiis libero minus amet rem totam molestiae quibusdam alias eaque. Suscipit, id laboriosam! Aliquid illo, eveniet fugit nemo quis cupiditate quaerat, mollitia optio unde quae delectus quo. Ipsa eaque consectetur odio dicta natus voluptatibus consequuntur, architecto, recusandae esse corrupti voluptatem deleniti dignissimos doloribus perspiciatis dolorum iste sed beatae. Alias repellat obcaecati voluptate a dolor. Dolore!</p>
            </div> 
            <div className={'page-center'} style={{ marginTop: '3rem'}}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem in eveniet. Pariatur veniam iste, accusamus molestias tenetur, provident nemo tempore esse neque atque, aliquid eum voluptatum consequatur! Laudantium illum repudiandae asperiores! Adipisci esse autem, laudantium possimus consequatur numquam, commodi minima corporis voluptatum debitis ducimus blanditiis libero minus amet rem totam molestiae quibusdam alias eaque. Suscipit, id laboriosam! Aliquid illo, eveniet fugit nemo quis cupiditate quaerat, mollitia optio unde quae delectus quo. Ipsa eaque consectetur odio dicta natus voluptatibus consequuntur, architecto, recusandae esse corrupti voluptatem deleniti dignissimos doloribus perspiciatis dolorum iste sed beatae. Alias repellat obcaecati voluptate a dolor. Dolore!</p>
            </div>

            <TimelineChild state={'under'}>
                <KidSvg />
            </TimelineChild>
            
        </TimelineScroller>

        {/* <section className={`page_double ${styles.section_container}`}>
            <AnimContainer>
                <World />
            </AnimContainer>
            <div>
                <h2>From New England</h2>
                <p>I was born in Connecticut in the early days of the internet.</p>
                <br/>
                <p>I was a very artistic kid, attending TAG after school programs and being active in the art scene. I even sold a few paintings at art exhibitions in my area.</p>
                <br/>
                <p>My other passions were technology, which exploded when I was coming of age. In High School, I attended trade school for 2 years to learn electrical engineering.</p>
            </div>
        </section>

        <section className={`page_double ${styles.section_container}`}>
            <div>
                <h2>Taught myself to Code</h2>
                <p>I learned how to code at a very early age on a 486. Computers were so new, so there was little utility. I made my own websites and games for myself.
                </p>
                <br/>
                Since then, I have recieved a formal education, which at that point was almost a formality. I learn more every day, and I wouldn't have it any other way.
            </div>            
            <Kid />            
        </section>

        <section className={`page_double ${styles.section_container}`}>
            <Schem />
            <div className='padded'>
                <h2>I make stuff</h2>
                <p>I am always making web apps, games, utilities, and many other artistic and technical things including traditional mediums. Some samples are here in the 
                    <strong>
                        <Link className="" href='/work'> work </Link> 
                    </strong>
                    section.
                </p>                
            </div>
        </section> */}

        <LetsBuild />
    </motion.div>
  )
}

export default AboutPage