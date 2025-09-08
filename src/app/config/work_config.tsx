
export type Slide = {
    dir: string;
    images: string[]
}

const config: { [key: string]: Slide } = {
    test: {
        dir: 'static/images/work/test/',
        images: [
            'test1.png',
            
        ]
    },
    test2: {
        dir: 'static/images/work/test/',
        images: [
            'test1.png',
            'test2.png',
            'test3.png'
        ]
    }
}
export default config;