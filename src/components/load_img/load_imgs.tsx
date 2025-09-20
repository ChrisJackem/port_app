/* eslint-disable @next/next/no-img-element */

import { STATUS, useImgs } from "@/hooks/useImg";


/**
 * 
 * @param * normal attributes will be passed onto normal img tag
 * @param src this url will be fetched
 * @param children shown while loading 
 */
export const LoadImgs = ({ src, children, className, alt, style, height, width}:{
    src:string[];
    children?: React.ReactNode;
    className?: string;
    alt?: string;
    style?: object;
    height?: number;
    width?: number;
}) => {
    const [status, data] = useImgs(src)
    if (data){
        console.log(JSON.stringify(data, null, 2))
    }
    switch(status){
        case STATUS.INIT: return ( <div></div> );
        case STATUS.FAILED: return( <p>Something bad happened. Please try again later.</p> )
        case STATUS.LOADING: return (
            <div style={{ 
                width: `${ width ? `${width}px` : '100px'}`,
                height: `${ height ? `${height}px` : '100px'}`,
                backgroundColor: 'var(--background, #CCC)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{children}</div>
        );
        case STATUS.LOADED: return(<>
            
           {/* <img
                src={ typeof data === "string" ? data : data?.get(src[0]) }
                alt={alt || 'Loaded Image'}
                className={className}
                style={style ?? undefined}
                width={width ?? undefined}
                height={height ?? undefined}
            /> */}
        </>)

        default: return null;
    }
}