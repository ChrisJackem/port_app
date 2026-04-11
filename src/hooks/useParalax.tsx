import { MotionValue, useScroll, useTransform } from "motion/react";
import { RefObject } from "react";


export default function useParallax({ ref }: { ref: RefObject<HTMLElement> } ){    
    // Scroll
    const { scrollYProgress } = useScroll({target: ref, offset: ['end start', 'end center']});
    const { scrollYProgress: master } = useScroll({target: ref, offset: ['start center', 'end center']});
    // Transform scroll
    const paralaxScreen = useTrans(master, [-30, 30]);
    const paralaxText = useTrans(master, [-60, 60]);
    const moveContainerZ = useTrans(scrollYProgress,[-100, 0] );
    const opacContainer = useTrans(scrollYProgress, [0, 1] );
    return { paralaxScreen, paralaxText, moveContainerZ, opacContainer }
}

export function useTrans( value: MotionValue<number>, distance: number[] ) {
    return useTransform(value, [0, 1], [distance[0], distance[1]], {clamp: true} );
}