import Styled from './Bar.styles'
import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
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
    delay: 1.5,
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
    delay: 1.5,
  },
}

const personAnimation = {
  initial: {
    y: window.innerHeight,
  },
  animate: {
    y: 0,
  },
  transition: {
    duration: 1.6,
    delay: 2.5,
    type: 'spring',
  },
}

const balloonVariants = {
  hidden: {
    opacity: 0,
    rotateY: 0,
    scale: 0,
    transformOrigin: 'bottom',
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
}

const messages = [
  '',
  'Hello',
  'Hi!',
  'How are you?',
  'I am fine, thanks',
  'What are you doing?',
  'I am working',
  'What are you working on?',
  'I am working on a website',
  'What kind of website?',
  'A website for a friend',
]

const Bar = () => {
  const [messageIndex, setMessageIndex] = useState(0)

  const theme = useTheme() as ThemeType

  const rightControls = useAnimationControls()
  const leftControls = useAnimationControls()

  useEffect(() => {
    leftControls
      .start('hidden')
      .then(() => null)
      .catch(() => null)
    rightControls
      .start('hidden')
      .then(() => null)
      .catch(() => null)
  }, [])

  const handleClick = async () => {
    const isIndexEven = (i: number) => i % 2 === 0
    await (isIndexEven(messageIndex) ? leftControls : rightControls).start(
      'hidden'
    )
    setMessageIndex(messageIndex + 1)
    await (isIndexEven(messageIndex + 1) ? leftControls : rightControls).start(
      'visible'
    )
  }

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
        <Styled.Content
          as={motion.div}
          {...contentAnimation}
          onClick={handleClick}
        >
          <Styled.Person
            as={motion.div}
            {...personAnimation}
            $color='green'
          ></Styled.Person>
          <Styled.Balloons>
            <Styled.Balloon
              as={motion.div}
              variants={balloonVariants}
              animate={leftControls}
            >
              {messages[messageIndex]}
            </Styled.Balloon>
            <Styled.BalloonLeft
              as={motion.div}
              variants={balloonVariants}
              animate={rightControls}
            >
              {messages[messageIndex]}
            </Styled.BalloonLeft>
          </Styled.Balloons>
          <Styled.Person
            as={motion.div}
            {...personAnimation}
            $color='yellow'
          ></Styled.Person>
        </Styled.Content>
      </Styled.Bar>
    </motion.section>
  )
}

export default Bar
