import React from 'react';
import Link from 'next/link';
import styles from './slide_show_link.module.css';
import PageButton from '../page_button/page_button';

export type SSlinkType = {
    href: string;
    text: string;
    cta_text?: string | undefined;
    local?:boolean;
}

const SlideShowLink = ({ link }:{ link:SSlinkType }) => {
  return (
    <section className={`${styles.link_container}`}>
        
        <div className={`flex-column`} style={{ textAlign: 'right', gap: '1px' }}>          
          { !link.local && <small className={styles.small_text}>(External Link)</small> }            
        </div>

        { link.local
            ? <Link href={link.href}>{ (
              <button className='button t-cap bg-ac  t-bld'>{link.text}</button>
            ) }</Link>
            : <a className="" href={link.href} target="_blank" rel="noopener noreferrer">
                {/* <PageButton>{link.text}</PageButton> */}
                <button className='button t-cap bg-ac t-bld'>{link.text}</button>
              </a>
        }
    </section>
  )
}

export default SlideShowLink