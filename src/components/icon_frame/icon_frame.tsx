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
        <div className={`psudo ${isLoaded ?'': styles.inactive} ${styles.main_container}`}>
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
        </div>
    )
}