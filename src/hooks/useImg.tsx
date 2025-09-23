/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"

export const CACHE = new Map<string, string | Promise<string>>(); // All file data

export const STATUS = {
    INIT:'init',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED:'failed'
};

/**
 * fetch file at url and manage CACHE -
 * CACHE[url] will be either:
 * * Promise[string] if loading
 * * String[data] if loaded * 
 * Once fetched img will be converted to base64 and stored
 * @param url url to fetch
 * @returns Promise[string] base64 image
 */
export function fetchFile(url: string): Promise<string> {
    if ( CACHE.has(url) ){
        const cached = CACHE.get(url);
        if (cached)
            return typeof cached === 'string'
                ? Promise.resolve<string>(cached)
                : cached;
    } 
    const promise = new Promise<string>((res, rej) => {
        fetch(url).then(response => response.blob())
        .then(blob => {            
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {                    
                    CACHE.set(url, reader.result); // *                  
                    res(reader.result);
                } else {
                    rej(new Error(`file reader result not a string: ${reader.result}`));
                }                
            };
            reader.readAsDataURL(blob);
        })
        .catch(E => rej(E))        
    });    
    CACHE.set(url, promise);// *
    return promise;
}

/**
 * Image fetching hook with CACHE.
 * STATUS constants are exported above
 * * status: one of the STATUS vars
 * * data: base64 string of the image once loaded
 * @param url Url of image
 * @returns [status, data]
 */
const useImg = (url: string ) => {
    const [status, setStatus] = useState<string>(STATUS.INIT);
    const [data, setData] = useState<string | undefined>();    
    useEffect(()=>{
        setStatus(STATUS.LOADING);
        fetchFile(url)
            .then( result =>{
                setStatus(STATUS.LOADED);
                setData(result);
            })
            .catch( error =>{
                console.error(`{useImg} fetch error: ${error}`)
                setStatus(STATUS.FAILED);
            });
    }, [url]);        
    return [status, data]
}

/**
 * Batch Image fetching hook with CACHE. Same as useImg but for arrays
 * STATUS constants are exported above
 * * status: one of the STATUS vars
 * * data: base64 string of the image once loaded
 * @param urls Url of image
 * @returns [status, data]
 */
export const useImgs = ( urls: string[] ) => {
    const [status, setStatus] = useState<string>(STATUS.INIT);
    const [data, setData] = useState<Map<string, string> | undefined>();    
    useEffect(()=>{
        setStatus(STATUS.LOADING);
        Promise.all( urls.map(url => fetchFile(url)) )
            .then( result =>{
                setStatus(STATUS.LOADED);
                setData( new Map( urls.map((url, i) => [url, result[i]]) ));
            })
            .catch( error =>{
                console.error(`{useImgs} fetch error: ${error}`)
                setStatus(STATUS.FAILED);
            });
    }, [urls]);        
    return [status, data];
}
export default useImg

