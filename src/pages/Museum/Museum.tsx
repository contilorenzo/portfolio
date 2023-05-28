import Styled from './Museum.styles'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import Scene3D from '../../Components/Scene3D/Scene3D'

const Museum = () => {
  return (
    <motion.section {...fadeInOut}>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Your favourite WebDev' />
        <link rel='canonical' href='/' />
      </Helmet>
      <Styled.Museum camera={{ fov: 70, position: [0, 5, 12] }} shadows>
        <Scene3D />
      </Styled.Museum>
    </motion.section>
  )
}

export default Museum
