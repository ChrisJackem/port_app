/* eslint-disable @next/next/no-img-element */

import useImg, { STATUS } from "@/hooks/useImg";
import LoadingComponent from "../loading_component/loading_component";

/**
 * 
 * @param * normal attributes will be passed onto normal img tag
 * @param src this url will be fetched
 * @param children shown while loading 
 */
export const LoadImg = ({ src, className, alt, style, height, width}:{
    src:string;    
    className?: string;
    alt?: string;
    style?: object;
    height?: number;
    width?: number;
}) => {

    const [status, data] = useImg(src);    
    const placeholder_style: React.CSSProperties = {
        width: `${ width ? `${width}px` : '100px'}`,
        height: `${ height ? `${height}px` : '100px'}`,
        backgroundColor: 'var(--background, #787878ff)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    }

    switch(status){
        case STATUS.FAILED: return( <p>Something bad happened. Please try again later.</p> )
        
        case STATUS.INIT:
        case STATUS.LOADING: return ( 
                <div style={placeholder_style}>
                    <LoadingComponent/>
                </div> 
            );

        case STATUS.LOADED: return(
            <img
                src={typeof data === 'string' ? data : ''}
                alt={alt || 'Loaded Image'}
                className={className}
                style={style ?? undefined}
                width={width ?? undefined}
                height={height ?? undefined}
            />
        )
        default: return null;
    }
}