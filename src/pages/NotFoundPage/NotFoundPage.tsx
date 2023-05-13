import Styled from './NotFoundPage.styles'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const [countDown, setCountDown] = useState<number>(10)

  useEffect(() => {
    window.scrollTo(0, 0)

    setInterval(() => {
      setCountDown((current) => {
        return current - 1
      })
    }, 1000)

    setTimeout(() => {
      navigate('/')
    }, 10000)
  }, [])

  return (
    <motion.section {...fadeInOut}>
      <Helmet>
        <title>Whoopsie | 404</title>
        <meta name='description' content='404 - Page not found ' />
        <link rel='canonical' href='/' />
      </Helmet>
      <Styled.NotFound>
        <Styled.Title>Whoopsie | Error 404</Styled.Title>
        <span>Seems that you landed</span>
        <Styled.StarWars>
          <span>in a galaxy far, far away</span>
        </Styled.StarWars>
        <span>You will be redirected in {countDown} seconds</span>
      </Styled.NotFound>
    </motion.section>
  )
}

export default NotFoundPage
