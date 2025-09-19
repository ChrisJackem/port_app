/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react"

const cache = new Map()

export const STATUS = {
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED:'failed'
}

/**
 * 
 * @param * normal attributes will be passed onto normal img tag
 * @param src this url will be fetched
 * @param children shown while loading 
 */
export const LoadImg = ({ src, children, className, alt, style, height, width}:{
    src:string;
    children?: React.ReactNode;
    className?: string;
    alt?: string;
    style?: object;
    height?: number;
    width?: number;
}) => {
    const [status, data] = useImg(src);
    if (status === STATUS.LOADING ){
        return (
            <div
                style={{ 
                    width: `${ width ? `${width}px` : '100px'}`,
                    height: `${ height ? `${height}px` : '100px'}`,
                    backgroundColor: 'var(--background, #CCC)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
            >
                {children}
            </div>
        )
    }else if (status === STATUS.FAILED){
        return (<p>FAILED</p>)
    }

    return (       
        <img
            src={typeof data === 'string' ? data : ''}
            alt={alt || 'Loaded Image'}
            className={className}
            style={style ?? undefined}
            width={width ?? undefined}
            height={height ?? undefined}
        />
    )
}

/**
 * Image fetching hook with cache.
 * STATUS constants are exported above
 * * status: one of the STATUS vars
 * * data: base64 string of the image once loaded
 * @param url Url of image
 * @returns [status, data]
 */
const useImg = (url: string) => {
    const [status, setStatus] = useState<string>(STATUS.LOADING);
    const [data, setData] = useState<string | undefined>();    
    useEffect(()=>{
        if ( cache.has(url) ){
            setStatus(STATUS.LOADED);
            setData(cache.get(url));
            console.log(`Cached ${url}`)
            return
        }
        try{
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        if (typeof reader.result === 'string'){
                            cache.set(url, reader.result);
                            setData(reader.result);
                            setStatus(STATUS.LOADED);
                        }else{
                            throw new Error(`file reader broke: ${reader.result}`)
                        }
                    }                
                    reader.readAsDataURL(blob);
                })
        }catch(E){
            setStatus(STATUS.FAILED);
            console.error('Fetch Error', E)
        }
    }, [url]);        
    return [status, data]
}

export default useImg