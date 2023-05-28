import {
  OrbitControls,
  Plane,
  SpotLight,
  useDepthBuffer,
} from '@react-three/drei'
import Frame from '../../pages/Museum/3dObjects/Frame'
import { MeshStandardMaterial, TextureLoader, Vector3 } from 'three'
import { type ReactElement, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import wallImg from '../../../public/images/black-brick-wall.jpg'
import floorImg from '../../../public/images/carpet.jpg'

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)

  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    )
    light.current.target.updateMatrixWorld()
  })

  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={0.2}
      distance={12}
      angle={0.4}
      attenuation={5}
      anglePower={2}
      intensity={8}
      {...props}
    />
  )
}

const renderSpotLights = (): ReactElement[] => {
  const depthBuffer = useDepthBuffer({ frames: 1 })

  const spotlights: Spotlight[] = [
    {
      position: new Vector3(3, 7, 4),
      color: 'white',
    },
    {
      position: new Vector3(-3, 7, 4),
      color: 'white',
    },
    {
      position: new Vector3(7, 7, 4),
      color: 'white',
    },
    {
      position: new Vector3(-7, 7, 4),
      color: 'white',
    },
  ]

  return spotlights.map((light: Spotlight) => (
    <MovingSpot
      key={light.position.x}
      depthBuffer={depthBuffer}
      color={light.color}
      position={light.position}
    />
  ))
}

interface Spotlight {
  position: Vector3
  color: string
}

const Scene3D = () => {
  const wallTexture = useLoader(TextureLoader, wallImg)
  const floorTexture = useLoader(TextureLoader, floorImg)

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.05} />
      {renderSpotLights()}
      <Frame position={[0, 3, 0]} rotation={[-0.2, 0, 0]} />
      <Frame position={[5, 3, 0]} rotation={[-0.2, -0.2, 0]} />
      <Frame position={[-5, 3, 0]} rotation={[-0.2, 0.2, 0]} />
      <Frame position={[10, 3, 1]} rotation={[-0.2, -0.4, 0]} />
      <Frame position={[-10, 3, 1]} rotation={[-0.2, 0.4, 0]} />
      {[-24, -12, 0, 12, 24].map((x) => (
        <Plane
          args={[12, 12]}
          position={[x, 4, -4]}
          material={new MeshStandardMaterial({ map: wallTexture })}
          receiveShadow
        />
      ))}
      {[-20, -10, 0, 10, 20].map((x) => (
        <>
          <Plane
            args={[16, 16]}
            position={[x, -1, 2]}
            rotation={[-Math.PI / 2, 0, 0]}
            material={new MeshStandardMaterial({ map: floorTexture })}
            receiveShadow
          />
        </>
      ))}
    </>
  )
}

export default Scene3D
