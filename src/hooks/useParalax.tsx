import { MotionValue, useScroll, useTransform } from "motion/react";

export default function useParallax(distance: number[], ref?: React.RefObject<HTMLElement | null>, offset?:any) {
    const {scrollYProgress} = useScroll( ref && offset && { target: ref, offset: offset });    
    return useTransform(scrollYProgress, [0, 1], [distance[0], distance[1]], {clamp: true} )
}