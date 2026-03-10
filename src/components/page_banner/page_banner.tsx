import React from 'react'
import styles from './page_banner.module.css'
import TypeHeader from '../type_header/type_header';

type PageBannerProps = {
    bg: string;
    title: string;
    content: string;
}



const PageBanner = ({bg, title, content}: PageBannerProps) => {

    const BG = `
    url(${bg}),
    linear-gradient(to top right, var(--darkest, #000), 80%, var(--accent, #ccc)),
    linear-gradient(to bottom, rgba(255,255,255, 0.3),10%, transparent )
        `

    return (
        <section className={`${styles.container}`}
            style={{ background:BG }}
        >
            <div className={`paged ${styles.inner_container}`}>
                {/* <h1 className={`${styles.title}`}>{title}</h1> */}
                <TypeHeader word={title} />
                <p>{content}</p>
            </div>
        </section>
    )
}

export default PageBanner