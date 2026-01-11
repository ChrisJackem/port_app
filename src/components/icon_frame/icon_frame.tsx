/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import styles from './icon_frame.module.css'
import useImg, {STATUS} from '@/hooks/useImg';
import LoadingComponent from '../loading_component/loading_component';

/**
 * A simple responsive container with an image at the top and a custom loading animation
 * ** uses useImg custom hook **
 * @param url the url of the icon image 
 * @param alt the alt of the icon image 
 * @param children the content
 */
export const IconFrame = ({ url, alt, children }: { 
    url: string; 
    alt: string; 
    children: ReactNode;
}) => {
    const [status, data] = useImg(url);
    const isLoaded = status && status === STATUS.LOADED;
    return (
        <div className={`p-rel ${isLoaded ?'': styles.inactive} ${styles.main_container}`}>
            { !isLoaded 
                ? <LoadingComponent />
                : <>
                    <img
                        className={styles.imaged}
                        alt={alt}
                        src={data}
                    ></img>                
                    {children}                
                </>
            }
            
            {/* <svg width="300" height="300" viewBox="0 0 300 300">
                <rect width="300" height="300" fill="#ccc" opacity=".25"/>
                <polygon points="0 300 0 287.5 162.5 287.5 187.5 275 300 275 300 300 0 300" fill="#999" opacity=".44"/>
                <polygon points="0 0 300 0 300 25 250 25 237.5 12.5 0 12.5 0 0" fill="#999" opacity=".44"/>
            </svg> */}
        </div>
    )
}