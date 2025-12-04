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
        
        <div className={`tx-ac flex-column`} style={{ textAlign: 'center', gap: '2px' }}>          
            { link.local 
              ? <></>
              : <>
                <p>{ link.cta_text ? link.cta_text : 'Click to Play'}</p>
                <small style={{ fontSize: '10px', color: 'var(--foreground, #FFF)', }}>(External Link)</small>
              </>
            }            
        </div>

        { link.local
            ? <Link href={link.href}>{ (<PageButton>{link.text}</PageButton>) }</Link>
            : <a className="" href={link.href} target="_blank" rel="noopener noreferrer">
                <PageButton>{link.text}</PageButton>
              </a>
        }
    </section>
  )
}

export default SlideShowLink