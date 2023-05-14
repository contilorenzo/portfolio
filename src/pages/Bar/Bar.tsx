import Styled from './Bar.styles'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import NeonText from '../../Components/NeonText/NeonText'
import { useTheme } from 'styled-components'
import { type ThemeType } from '../../theme'

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
        <NeonText text='Foo-Bar' color={theme.colors.neon} fontSize='14rem' />
      </Styled.Bar>
    </motion.section>
  )
}

export default Bar
