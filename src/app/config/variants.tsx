// Variants for motion plugin

import { easeIn, easeOut } from "motion"
/* import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js" HUH ?? */ 

export const PageVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}

export const BannerVariants = {
    hidden: { opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}

export const ModalVariants = {
    hidden: { opacity: 0, x: -80 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
}

////////////////////////// Slam Animation
export const SlamVariantsContainer = {   
    /* seen: { opacity: 1 },
    unseen: { opacity: 0 }, */
    /* transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) }, */ // Put this right on the elem or it doesn't work
}
export const SlamVariantsLeft = {
    seen: { x: 0, opacity: 1 },
    unseen: { x: -20, opacity: 0 }
}
export const SlamVariantsRight = {
    seen: { x: 0, opacity: 1 },
    unseen: { x: 20, opacity: 0 }
}

/////////////////// Typewriter
export const TypeVariant = {
    container: {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },
    child: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
}

////////////////// Gallery
export const GalleryVariants = {
    hidden: { opacity: 0, x: -350, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 350, y: 0, transition: {duration: 0.15, easeIn: 1}},
}
export const GalleryContainerVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition:{ staggerChildren: 1, easeOut: 1, duration: 0.2 } },
    exit: { opacity: 0 },    
}