import { useRef } from 'react'

const useRefs = () => {
    const refsByKey = useRef<Record<string, HTMLElement | undefined>>({});
    const setRef = (element: HTMLElement | undefined, key: string )=> refsByKey.current[key] = element
    return { refsByKey: refsByKey.current, setRef }
}

export default useRefs

/** Snippet
 * 
 * const {refsByKey, setRef} = useRefs();
 * 
 * { React.Children.toArray(children).map((child, i) => {
        if (!child) return null;
        return <div
            className={styles.scroll_container}                    
            ref={el => { if (el) setRef(el, i.toString()); }}
            key={i}
        >{child}</div>
    } ) }
 */