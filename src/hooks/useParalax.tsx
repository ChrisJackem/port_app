import { useScroll, useTransform } from "motion/react";

export default function useParallax(
    distance: number[], 
    ref?: React.RefObject<HTMLElement | null>, 
    offset?:any, 
    inputs?:number[]
) {
    const {scrollYProgress} = useScroll( ref && offset && { target: ref, offset: offset });
      
    return useTransform(scrollYProgress, inputs || [0, 1], [...distance], {clamp: true} );
}