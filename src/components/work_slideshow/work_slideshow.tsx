import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './work_slideshow.module.css'
import { AnimatePresence, motion, useScroll, useTransform, useMotionTemplate, easeOut, useInView, useMotionValueEvent } from 'motion/react';
import useParallax from '@/hooks/useParalax';
import useLoadImg, {LoadImage, SlideImage} from '@/hooks/useLoadImg';
import useInterval from '@/hooks/useInterval';

type SlideState = {
    progress: number;
    is_playing: boolean;
    play_speed: number;
    images?: LoadImage[];
    current_image?: LoadImage | undefined;
}

const WorkSlideShow = ({images, children}: { children: ReactNode, images: SlideImage[] }) => {
    const container_ref = useRef<HTMLElement>(null);    
    const isInView = useInView(container_ref, { amount: 0.25 });
    const { screenY, textY, contY, contO } = useParallax({ ref: container_ref as React.RefObject<HTMLElement> });    
    const { imagesLoaded, loadAllImages } = useLoadImg(images);    
    const [slideState, setSlideState] = useState<SlideState>({
        progress: 0,
        is_playing: true, 
        play_speed: 2000 
    });

    const { clear, reset, start, stop } = useInterval(Tick,  slideState.play_speed, false);

    function Tick(){
        console.log('tick', slideState.play_speed);
        //const 
        setSlideState( (s) =>{
            const next_index = (s.progress + 1) % (s.images?.length || 1);
            const next_image = s.images?.[next_index]
            return {
                ...s,
                progress: next_index,
                current_image: next_image
            };
        })
    };
    
    const InView = useEffect( ()=> {
        if (container_ref.current) {
            if (isInView) {
                if ( imagesLoaded.length == 0 ){
                    loadAllImages();
                }else{
                    start()
                }
                container_ref.current.classList.add(styles.active);
            } else {                
                stop();
                setSlideState( state => ({ ...state, is_playing: false }));
                container_ref.current.classList.remove(styles.active);
            }
        }
    }, [isInView]);

    const ImageLoaded = useEffect( ()=> {
        if ( imagesLoaded.length ){
            setSlideState( s => ({
                ...s, 
                images: imagesLoaded,
                current_image: imagesLoaded[0]
            }))
        }        
    }, [imagesLoaded, isInView]);

    const aspect_ratio = slideState?.current_image?.dimensions 
        ? (slideState.current_image.dimensions[1] / slideState.current_image.dimensions[0]) 
        : 1

    return (
        <section className={styles.main_container} ref={container_ref}>
            <motion.div className={styles.container} style={{ z: contY, opacity: contO }}>
                
                { slideState.current_image && (
                    <motion.div 
                        className={styles.image_container}                     
                        style={{ y: screenY, paddingTop: `${aspect_ratio * 100}%`, }}
                    >
                        <AnimatePresence>
                            { slideState.current_image 
                                ? (<motion.img                                
                                    key={slideState.current_image.id}
                                    initial={{ opacity: 0, x: -30}}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{    opacity: 0, x: 30 }}
                                    transition={{ duration: 0.4, ease: 'easeOut', type: 'tween' }}
                                    className={`${styles.hero_image}`}                        
                                    alt={`Active theme image: ${slideState.current_image.alt}`}      
                                    src={slideState.current_image.src}
                                    width={1000}
                                    height={600}
                                    />)
                                : (<div>Loading</div>)
                            }
                        </AnimatePresence>
                        { imagesLoaded.length > 1 
                            ? ( <SlideControls             
                                _slideState={slideState}
                                onSlideUpdate={setSlideState}
                                />) 
                            : (<div>|</div>) 
                        }
                    </motion.div>) 
                }

                <motion.div className={styles.child_container} style={{ y: textY }} >
                    {children}           
                <motion.div className={styles.cta} >
                    <button className='button active'>Click</button>
                    <button className='button'>Click</button>
                </motion.div>

                </motion.div>

                <div style={{ opacity: 0.3 }}></div>
            </motion.div>
        </section>
    )
}


const SlideControls = ({ _slideState, onSlideUpdate}: { _slideState: SlideState, onSlideUpdate:Function }) => {
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const name = target.name;     
        let value: any = target.value;
        
        switch(target.type){
            case 'checkbox': 
                value = target.checked;
                if (name == 'is_playing'){
                    // change play mode
                }
            break;
            case 'radio':
                if (name == 'current_image'){
                    value = _slideState.images?.filter( i => i.id == value )[0];
                }
            break;
            case 'range':
                
            break;
        }

        // set main state[name] = value
        if (_slideState.hasOwnProperty(name)){
            onSlideUpdate( (s: SlideState) => ({ ...s, [name]:value }) );
            console.log(`change: ${name} - ${value}`);
        }else{
            console.error(`slideState has no prop: ${name}\n${JSON.stringify(_slideState)}`)
        }
    }

    return (
        <form className={styles.controls}>            
            <label htmlFor="is_playing">Auto-play slides</label>
            <input 
                id="is_playing"
                name="is_playing" 
                type="checkbox" 
                checked={_slideState.is_playing} 
                onChange={onChange} 
                title="Toggle automatic slide playback"
            />

            <fieldset>
                <legend>Slide Selection</legend>
                {_slideState.images?.map((slide, index) => (
                    <label key={slide.id}>
                        <input
                            type="radio"
                            name="current_image"
                            value={slide.id}                           
                            onChange={onChange}
                            checked={_slideState.current_image?.id == slide.id}
                        />
                        Slide {index + 1}
                    </label>
                ))}
            </fieldset>

            <label htmlFor="play_speed">Play Speed</label>
            <input
                id="play_speed"
                name="play_speed"
                type="range"
                min="1000"
                max="6000"
                step="1000"
                value={_slideState.play_speed ?? 1000}
                onChange={onChange}
                title="Adjust slide playback speed"
            />
            <span>{(_slideState.play_speed ?? 1000)}x</span>

        </form>
    )
}

export default WorkSlideShow