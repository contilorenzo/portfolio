import Styled from './Bar.styles'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import NeonText from '../../Components/NeonText/NeonText'
import { useTheme } from 'styled-components'
import { type ThemeType } from '../../theme'

const neonAnimation = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 0.5,
  },
  transition: {
    duration: 1,
    delay: 2,
  },
}

const contentAnimation = {
  initial: {
    y: window.innerHeight,
    height: 0,
    width: 0,
  },
  animate: {
    y: 0,
    height: '100%',
    width: '100%',
  },
  transition: {
    duration: 1.6,
    delay: 2,
  },
}

const Bar = () => {
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
      <Styled.Bar>
        <Styled.Header as={motion.div} {...neonAnimation}>
          <NeonText text='Foo-Bar' color={theme.colors.neon} fontSize='14rem' />
        </Styled.Header>
        <Styled.Content as={motion.div} {...contentAnimation}></Styled.Content>
      </Styled.Bar>
    </motion.section>
  )
}

export default Bar
