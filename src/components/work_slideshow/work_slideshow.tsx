import React, { ReactNode, useEffect, useRef, useReducer } from 'react'
import styles from './work_slideshow.module.css'
import { AnimatePresence, motion, useInView } from 'motion/react';
import useParallax from '@/hooks/useParalax';
import useLoadImg, {LoadImage, SlideImage} from '@/hooks/useLoadImg';
import useInterval from '@/hooks/useInterval';
import SlideControls from './work_slideshow_controls';

export type SlideState = {
    progress: number;
    is_playing: boolean;
    play_speed: number;
    images?: LoadImage[];
    current_image?: LoadImage | undefined;
}

type SlideAction = 
    | { type: 'TICK'; }
    | { type: 'SET_IMAGES'; payload: LoadImage[] }
    | { type: 'SET_PLAYING'; payload: boolean }
    | { type: 'GO_TO_SLIDE'; payload: number }
    | { type: 'SET';        payload: { key:any, val:any} };

function slideReducer(state: SlideState, action: SlideAction): SlideState {
    
    switch (action.type) {
        case 'TICK':
            if (state.is_playing) {
                const next_index = (state.progress + 1) % (state.images?.length || 1);
                const next_image = state.images?.[next_index];
                return {
                    ...state,
                    progress: next_index,
                    current_image: next_image
                };            
            }
            return state;
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.payload,
                current_image: action.payload[state.progress || 0]
            };
        case 'SET_PLAYING':
            return {
                ...state,
                is_playing: action.payload
            };
        case 'GO_TO_SLIDE':
            return {
                ...state,
                progress: Number(action.payload),
                is_playing: false,
                current_image: state.images?.[action.payload]
            };
        case 'SET':
            if (!state.hasOwnProperty(action.payload.key)){
                console.error(`SET error not found:\n ${action.payload.key}:${action.payload.val}`)
                return state
            }
            return {
                ...state,
                [action.payload.key]: action.payload.val
            }
        default:
            return state;
    }
}

const WorkSlideShow = ({images, children}: { children: ReactNode, images: SlideImage[] }) => {
    const container_ref = useRef<HTMLElement>(null);    
    const isInView = useInView(container_ref, { amount: 0.25 });
    const { screenY, textY, contY, contO } = useParallax({ ref: container_ref as React.RefObject<HTMLElement> });    
    const { imagesLoaded, loadAllImages } = useLoadImg(images);    
    const [slideState, dispatch] = useReducer(slideReducer, {
        progress: 0,
        is_playing: true, 
        play_speed: 2000 
    });

    const { start, stop, enabled } = useInterval(Tick,  slideState.play_speed );

    function Tick(){
        if (slideState.is_playing){
            dispatch({ type: 'TICK' });
        }
    };
    
    // Effects
    const InView = useEffect( ()=> {
        console.log('view', isInView)
        if (isInView) {
            if ( imagesLoaded.length == 0 ){
                loadAllImages();
            }
            if (slideState.is_playing && !enabled) start();
        } else {                
            if (enabled) stop();            
        }
    }, [isInView]);

    const ImageLoaded = useEffect( ()=> {
        if ( imagesLoaded.length ){
            dispatch({ type: 'SET_IMAGES', payload: imagesLoaded });
        }        
    }, [imagesLoaded]);

    // is_playing controls the interval
    //const PlayerEffect = useEffect( ()=> {
        /* if ( !slideState.is_playing && enabled.current ){
            stop()
        }else if (slideState.is_playing && !enabled.current){
            start()
        } */
    //}, [slideState.is_playing]);

    // helper var
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
                                slideDispatch={dispatch}
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

export default WorkSlideShow