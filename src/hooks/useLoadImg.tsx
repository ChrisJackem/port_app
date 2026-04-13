import React, { useRef, useState } from 'react'

export type SlideImage = {
    src: string,
    alt: string,
    text?:string
}

export type LoadImage = SlideImage & {
    id: number,
    dimensions: [number, number],
} 


const useLoadImg = ( imagesInput:SlideImage[] ) => {
    const loading = useRef<Map<number, LoadImage>>(new Map());
    const [imagesLoaded, setImagesLoaded] = useState<LoadImage[]>([]);

    const loadImage = (img: SlideImage): Promise<LoadImage> => {        
        const new_loading:LoadImage = {
            id: loading.current.size,          
            src: img.src,
            alt: img.alt,
            text: img.text,
            dimensions:[0,0]
        }
        loading.current.set( new_loading.id, new_loading )
        return new Promise<LoadImage>((resolve, reject) => {    
            const image = new Image();
            image.onload = (e) => {
                const i = e.target as HTMLImageElement;
                resolve({
                    ...new_loading,
                    dimensions: [i.naturalWidth, i.naturalHeight]
                })
            };                        
            image.onerror = () => reject(`Failed to load image: ${JSON.stringify(new_loading)}` );
            image.src = img.src;
        })
    };
    
    // Triggered by consumer
    async function loadAllImages (){
        const proms = imagesInput.map(slideImage => loadImage(slideImage));

        try {
            const image = await Promise.race(proms);
            //console.log('RACE', JSON.stringify(image));
            if (image) setImagesLoaded([image]);        
       
            const images = await Promise.all(proms);
            setImagesLoaded(images);
        } catch (e) {
            console.error(e);
        }
    }
    
    return { imagesLoaded, loadAllImages }
}

export default useLoadImg