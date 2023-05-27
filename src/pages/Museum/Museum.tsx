import Styled from './Museum.styles'
import { motion } from 'framer-motion'
import { fadeInOut } from '../../utils/motion'
import { Helmet } from 'react-helmet-async'
import Frame from './3dObjects/Frame'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CubeTextureLoader } from 'three'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new CubeTextureLoader()
  // Set the scene background property to the resulting texture.
  scene.background = loader.load([
    '/images/sky.png',
    '/images/black-brick-wall.jpg',
    '/images/black-brick-wall.jpg',
    '/images/black-brick-wall.jpg',
    '/images/black-brick-wall.jpg',
    '/images/black-brick-wall.jpg',
  ])
  return null
}
const Museum = () => {
  return (
    <motion.section {...fadeInOut}>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Your favourite WebDev' />
        <link rel='canonical' href='/' />
      </Helmet>
      <Styled.Museum camera={{ fov: 90, position: [0, 7, 14] }}>
        <SkyBox />
        <OrbitControls />
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
        <spotLight position={[10, 10, 10]} />
        <ambientLight intensity={0.5} />
        <Frame position={[-8, 4, 6]} rotation={[0, 0.6, 0]} />
        <Frame position={[-5, 4, 0]} rotation={[0, 0.4, 0]} />
        <Frame position={[8, 4, 6]} rotation={[0, -0.6, 0]} />
        <Frame position={[6, 4, 0]} rotation={[0, -0.4, 0]} />
        <Frame position={[0, 4, -4]} rotation={[0, 0, 0]} />
      </Styled.Museum>
    </motion.section>
  )
}

export default Museum
