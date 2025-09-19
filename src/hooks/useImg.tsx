/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react"

export const STATUS = {
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED:'failed'
}

const cache = new Map()

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
        return (<div
            /* style={{ 
                width: `${ width ? `${width}px` : '100px'}`,
                height: `${ height ? `${height}px` : '100px'}`,
                backgroundColor: 'var(--background, #CCC)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }} */
        >{children}</div>)
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


const useImg = (url: string) => {
    const [status, setStatus] = useState<string>(STATUS.LOADING);

    const [data, setData] = useState<string | Promise<string>>(        
        cache.has(url) ? cache.get(url) :        
        new Promise((res, rej)=>{
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onloadend = () => res(reader.result);
                    reader.onerror = () => rej;
                    reader.readAsDataURL(blob);
                })
                .catch(rej);
        }).then( (res)=>{
            if (typeof res === 'string'){
                setStatus(STATUS.LOADED);
                setData(res);
                cache.set(url, res);
            }
        })
    )

    return [status, data]
}

export default useImg