import Styled from './Homepage.styles'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'
import { useTheme } from 'styled-components'
import { type ThemeType } from '../../theme'

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const theme = useTheme() as ThemeType

  console.log(theme)

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
          text='Wanna hang out ?'
          textColor={theme.colors.textHover}
          animation={{ duration: 2500, delay: 2600 }}
          cursorColor={theme.colors.textHover}
          keepCursor
        />
      </Styled.Homepage>
    </motion.section>
  )
}

export default Homepage
