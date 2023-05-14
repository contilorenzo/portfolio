import Styled from './Homepage.styles'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'
import { useTheme } from 'styled-components'
import { type ThemeType } from '../../theme'
import Signal from '../../Components/Signal/Signal'
import { Direction } from '../../Components/Signal/types'
import {
  FilterFrames,
  FilterFramesSharp,
  LocalDrink,
  LocalDrinkSharp,
} from '@mui/icons-material'

const renderSignals = () => {
  return (
    <Styled.Signals>
      <Signal
        direction={Direction.Left}
        icon={<FilterFramesSharp />}
        text='Museum'
        transitionDelay={5.2}
      />
      <Signal
        direction={Direction.Right}
        icon={<LocalDrinkSharp />}
        text='Bar'
        transitionDelay={5.3}
      />
    </Styled.Signals>
  )
}

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const theme = useTheme() as ThemeType

  return (
    <motion.section {...fadeInOut}>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Your favourite WebDev' />
        <link rel='canonical' href='/' />
      </Helmet>
      <Styled.Homepage>
        <AnimatedText
          text='Hi, Lorenzo here!'
          textColor={theme.colors.text}
          animation={{ duration: 2500 }}
          cursorColor={theme.colors.textHover}
        />
        <AnimatedText
          text='Wanna hang out?'
          textColor={theme.colors.textHover}
          animation={{ duration: 2500, delay: 2600 }}
          cursorColor={theme.colors.textHover}
          keepCursor
        />
        {renderSignals()}
      </Styled.Homepage>
    </motion.section>
  )
}

export default Homepage
