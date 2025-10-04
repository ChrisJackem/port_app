import { stagger } from "motion"

export const PageVariants = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}

////////////////////////// Slam Animation
export const SlamVariantsContainer = {   
    seen: { opacity: 1 },
    unseen: { opacity: 0 },
    /* transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) }, */ // Put this right on the elem or it doesn't work
}
export const SlamVariantsLeft = {
    seen: { x: 0, opacity: 1 },
    unseen: { x: -200, opacity: 0 }
}
export const SlamVariantsRight = {
    seen: { x: 0, opacity: 1 },
    unseen: { x: 200, opacity: 0 }
}

/////////////////// Typewriter
export const TypeVariant = {
    container: {
        initial: {  },
        animate: {  },
    },
    child: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
    /* child: {
        initial: { y: '100%' },
        animate: { y: 0 },
    } */
}