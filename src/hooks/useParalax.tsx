import { MotionValue, useScroll, useTransform } from "motion/react";

export default function useParallax(
    value: MotionValue<number>,
    distance: number[],    

) {
    //const {scrollYProgress} = useScroll( ref && offset && { target: ref, offset: offset });
      
    return useTransform(value, [0, 1], [distance[0], distance[1]], {clamp: true} );
}