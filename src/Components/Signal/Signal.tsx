import Styled from './Signal.styles'
import { Direction } from './types'
import React from 'react'
import { motion } from 'framer-motion'

const Signal = ({ direction, icon, onClick, text, transitionDelay }: Props) => {
  const signalsAnimation = {
    whileHover: {
      scale: 1.15,
      rotate: '6deg',
      transition: {
        rotate: { duration: 2, type: 'spring', stiffness: 50 },
      },
    },
    initial: {
      opacity: 0,
      x: '-1rem',
      y: window.innerHeight,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        opacity: {
          delay: transitionDelay,
          duration: 0.8,
        },
        x: {
          delay: transitionDelay,
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          type: 'spring',
        },
        y: {
          delay: transitionDelay,
          duration: 1,
          type: 'spring',
          stiffness: 50,
        },
      },
    },
  }

  return (
    <motion.div {...signalsAnimation} onClick={onClick}>
      <Styled.Signal $direction={direction}>
        {direction === Direction.Right && icon}
        {text}
        {direction === Direction.Left && icon}
      </Styled.Signal>
    </motion.div>
  )
}

export interface Props {
  direction: Direction
  icon: React.ReactElement
  onClick?: () => void
  text: string
  transitionDelay: number
}

export default Signal
