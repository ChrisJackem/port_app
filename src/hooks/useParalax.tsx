import { MotionValue, useScroll, useTransform } from "motion/react";
import { RefObject } from "react";


export default function useParallax({ ref }: { ref: RefObject<HTMLElement> } ){    
    // Scroll
    const { scrollYProgress } = useScroll({target: ref, offset: ['end start', 'end center']});
    const { scrollYProgress: master } = useScroll({target: ref, offset: ['start center', 'end center']});
    // Transform scroll
    const screenY = useTrans(master, [-30, 30]);
    const textY = useTrans(master, [-60, 60]);
    const contY = useTrans(scrollYProgress,[-100, 0] );
    const contO = useTrans(scrollYProgress, [0, 1] );
    return { screenY, textY, contY, contO }
}

export function useTrans( value: MotionValue<number>, distance: number[] ) {
    return useTransform(value, [0, 1], [distance[0], distance[1]], {clamp: true} );
}