import { SlideState } from "./work_slideshow";


const SlideControls = ({ _slideState, slideDispatch}: { _slideState: SlideState, slideDispatch:Function }) => {
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const name = target.name;     
        let value: any = target.value;
        
        switch(target.type){
            case 'checkbox': 
                value = target.checked;
                if (name == 'is_playing'){
                    // change play mode
                    slideDispatch({type: 'SET_PLAYING', payload:value });
                    return;
                }
            break;
            case 'radio':
                if (name == 'current_image'){
                    slideDispatch({type: 'GO_TO_SLIDE', payload:value });
                    return;
                    //value = _slideState.images?.filter( i => i.id == value )[0];
                }
            break;
            case 'range':
                
            break;
        }

        // set main state[name] = value
        if (_slideState.hasOwnProperty(name)){            
            slideDispatch({type: 'SET', payload:{ key:name, val:value }});
            //console.log(`change: ${name} - ${value}`);
        }else{
            console.error(`slideState has no prop: ${name}\n${JSON.stringify(_slideState)}`)
        }
    }

    return (
        <form style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>            
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

export default SlideControls