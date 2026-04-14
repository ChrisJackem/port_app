import { motion } from 'motion/react';
import { SlideState } from "./work_slideshow";
import styles from './work_slideshow_controls.module.css';
import { CSSProperties } from 'react';


const SlideControls = ({ name, _slideState, slideDispatch}: { name: string,  _slideState: SlideState, slideDispatch:Function }) => {
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const name = target.name;     
        let value: any = target.value;
        
        switch(target.type){
            case 'checkbox': 
                value = target.checked;
                if ( name.includes('is_playing') ){
                    // change play mode
                    slideDispatch({type: 'SET_PLAYING', payload:value });
                    return;
                }
            break;
            case 'radio':
                if ( name.includes('current_image') ){
                    // change slide in master
                    slideDispatch({type: 'GO_TO_SLIDE', payload:value });
                    return;
                }
            break;
            case 'range':
                
            break;
        }
        // set main state[name] = value
        if (_slideState.hasOwnProperty(name)){            
            slideDispatch({type: 'SET', payload:{ key:name, val:value }});
        }else{
            console.error(`slideState has no prop: ${name}\n${JSON.stringify(_slideState)}`)
        }
    }

    // Helpers
    /* const play_style = { backgroundImage: _slideState.is_playing 
                        ? "url('/static/images/icons/icon_pause.svg')" 
                        : "url('/static/images/icons/icon_play.svg')" 
                        } as React.CSSProperties */

    const progress_duration = (_slideState.play_speed ?? 1000) / 1000;

    return (
        <form className={`flex-column-left ${styles.form}`}>
            
            <div className={`flex flex-align-center p-rel ${styles.control_container}`}>
                
                <input
                    id={`${name}is_playing`}
                    className={`${styles.play_check}`}                    
                    name="is_playing" 
                    type="checkbox" 
                    checked={_slideState.is_playing}
                    onChange={onChange} 
                    title="Toggle automatic slide playback"
                />
                <label 
                    htmlFor={`${name}is_playing`}                    
                    className={styles.label}
                    style={{ backgroundImage: _slideState.is_playing 
                        ? "url('/static/images/icons/icon_pause.svg')" 
                        : "url('/static/images/icons/icon_play.svg')" 
                        } as React.CSSProperties}
                ></label>

                <fieldset className={`flex flex-align-center ${styles.fieldset}`}>
                    {/* <legend > Title </legend> */}
                    {_slideState.images?.map((slide, index) => {
                        const id = `${name}-${slide.id}-${index}`
                        const is_checked = _slideState.current_image?.id == slide.id;
                        const bg_color = `var(${is_checked ? '--accent' : '--text'}, #FFF)`;
                        return (
                        <div key={`${id}-radio-container`}>
                            <input
                                id={`${id}-radio`}
                                className={styles.radio}
                                type="radio"
                                name="current_image"
                                value={slide.id}
                                onChange={onChange}
                                checked={is_checked}
                                style={{ backgroundColor: bg_color }}
                            />                            
                            <label 
                                htmlFor={`${id}-radio`} 
                                className={`${styles.label}`}
                               /*  style={{ "--bg": bg_color } as CSSProperties} */
                            >&nbsp;</label>
                            
                        </div>                        
                    )})}
                </fieldset>
                
                <div className={`flex-grow p-rel flex flex-align-center ${styles.bar_container}`}>
                    <motion.div
                        key={`${name}-progress-${_slideState.current_image?.id}`}
                        initial={{ width: 0 }}
                        animate={{ width: _slideState.is_playing ? '30%' : 0 }}
                        transition={{ duration: progress_duration, ease: 'linear' }}
                        style={{ height: '2px', backgroundColor: 'var(--accent)' }}
                    ></motion.div>
                </div>

            </div>
            <div className={`flex flex-grow flex-nowrap ${styles.control_container}`} style={{ gap: '0.5rem'}}>
                <label htmlFor="play_speed"><small>speed</small></label>
                <input
                    id={`${name}play_speed`}
                    name="play_speed"
                    className={styles.range}
                    type="range"
                    min="1000"
                    max="6000"
                    step="1000"
                    list="ticks"
                    value={_slideState.play_speed ?? 1000}
                    onChange={onChange}
                    title="Adjust slide playback speed"
                />
                <small>{(_slideState.play_speed ?? 1000)}x</small>
            </div>

            

        </form>
    )
}

export default SlideControls