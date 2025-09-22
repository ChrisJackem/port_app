/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import styles from './icon_frame.module.css'
import useImg, {STATUS} from '@/hooks/useImg';
import LoadingComponent from '../loading_component/loading_component';


export const IconFrame = ({ url, children }: { 
    url: string; 
    children: ReactNode;
}) => {
    const [status, data] = useImg(url);
    const isLoaded = status && status === STATUS.LOADED;
    return (
    <div className={`psudo ${isLoaded ?'': styles.inactive} ${styles.main_container}`}>
        { !isLoaded 
            ? (<LoadingComponent />)
            : (<>
                <img
                    className={styles.imaged}
                    alt={'OK'}
                    src={data}
                ></img>
                {/* <div className={styles.child_container}> */}
                    {children}
                {/* </div> */}
              </>)
        }
        
    </div>
    )
}
