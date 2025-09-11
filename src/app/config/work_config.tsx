
export type Slide = {
    dir: string;
    link?: string;
    images: string[]
}

const config: { [key: string]: Slide } = {
    test: {
        dir: 'static/images/work/test/',
        link: 'https://www.google.com',
        images: [
            'test1.png',            
        ]
    },
    test2: {
        dir: 'static/images/work/test2/',
        images: [         
            'cat1.jpg',         
            'cat2.jpg',         
            'cat3.jpg',         
        ]
    },
    test3: {
        dir: 'static/images/work/test/',
        images: [
            'test1.png',            
            'test2.png',            
            'test3.png',            
        ]
    },
}
export default config;