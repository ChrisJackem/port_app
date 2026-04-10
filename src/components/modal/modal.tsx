import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ModalVariants } from '@/app/config/variants'

interface ModalProps {
  children: ReactNode
  id: string
  isOpen?: boolean
  className?: string
  styles?: React.CSSProperties
}


const Modal = ({ id, isOpen = true, className, styles, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          style={styles}
          className={`fixed-modal ${className ? className : ''}`}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={ModalVariants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal