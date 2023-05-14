import Styled from './Signal.styles'
import { Direction } from './types'
import React from 'react'
import { motion } from 'framer-motion'

const Signal = ({ direction, icon, text, transitionDelay }: Props) => {
  const signalsAnimation = {
    whileHover: {
      scale: 1.15,
      rotate: '6deg',
      transition: {
        rotate: { duration: 2, type: 'spring', stiffness: 50 },
      },
    },
    initial: {
      x: '-1rem',
      y: window.innerHeight,
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        y: {
          delay: transitionDelay,
          duration: 1,
          type: 'spring',
          stiffness: 50,
        },
        x: {
          delay: transitionDelay,
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          type: 'spring',
        },
      },
    },
  }

  return (
    <motion.div {...signalsAnimation}>
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
