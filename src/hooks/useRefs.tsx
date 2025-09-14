import { useRef } from 'react'

const useRefs = () => {
    const refsByKey = useRef<Record<string, HTMLElement | undefined>>({});
    const setRef = (element: HTMLElement | undefined, key: string )=> refsByKey.current[key] = element
    return { refsByKey: refsByKey.current, setRef }
}

export default useRefs