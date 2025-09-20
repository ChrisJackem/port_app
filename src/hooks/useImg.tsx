/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"

const CACHE = new Map()

export const STATUS = {
    INIT:'init',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED:'failed'
}

/**
 * fetch file at url and manage CACHE
 * @param url url to fetch and save to CACHE
 * @returns Promise[string] Containing the data of the file in base64
 */
function fetchFile(url: string): Promise<string> {
    return new Promise((res, rej) => {
        if ( CACHE.has(url) ){
            console.log(`url(${url}) is CA$HED`)
            res(CACHE.get(url));
        }        
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    CACHE.set(url, reader.result);
                    res(reader.result);
                } else {
                    rej(new Error(`file reader result not a string: ${reader.result}`));
                }
            };
            reader.readAsDataURL(blob);
        })
        .catch(E => rej(E));
    });
}


/**
 * Image fetching hook with CACHE.
 * STATUS constants are exported above
 * * status: one of the STATUS vars
 * * data: base64 string of the image once loaded
 * @param url Url of image
 * @returns [status, data]
 */
const useImg = (url: string) => {
    const [status, setStatus] = useState<string>(STATUS.INIT);
    const [data, setData] = useState<string | undefined>();    
    useEffect(()=>{        
        fetchFile(url)
        .then( result =>{
            setStatus(STATUS.LOADED);
            setData(result);
        })
        .catch( error =>{
            console.error(`fetch error: ${error}`)
            setStatus(STATUS.FAILED);
        });
    }, [url]);        
    return [status, data]
}

export default useImg