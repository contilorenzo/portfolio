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
import { FilterFramesSharp, LocalDrinkSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const renderSignals = () => {
  const navigate = useNavigate()

  return (
    <Styled.Signals>
      <Signal
        direction={Direction.Left}
        icon={<FilterFramesSharp />}
        text='Museum'
        transitionDelay={4.2}
        onClick={() => {
          navigate('/museum')
        }}
      />
      <Signal
        direction={Direction.Right}
        icon={<LocalDrinkSharp />}
        text='Bar'
        transitionDelay={4.3}
        onClick={() => {
          navigate('/bar')
        }}
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
          animation={{ duration: 2000 }}
          cursorColor={theme.colors.textHover}
        />
        <AnimatedText
          text='Wanna hang out?'
          textColor={theme.colors.textHover}
          animation={{ duration: 2000, delay: 2100 }}
          cursorColor={theme.colors.textHover}
          keepCursor
        />
        {renderSignals()}
      </Styled.Homepage>
    </motion.section>
  )
}

export default Homepage
