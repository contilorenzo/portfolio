import React, { useRef, useState } from 'react'
import { type Vector3 } from '@react-three/fiber'
// import { useFrame } from '@react-three/fiber'

function Frame({ wireframe, position, rotation }: Props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame(() => (ref.current.rotation.x += 0.01))

  return (
    <mesh
      ref={ref}
      position={position}
      rotation={rotation}
      scale={clicked ? 1.2 : 1}
      onClick={() => {
        setClicked(!clicked)
      }}
      onPointerOver={(event) => {
        setHovered(true)
      }}
      onPointerOut={(event) => {
        setHovered(false)
      }}
    >
      <boxGeometry args={[4, 6, 0.5]} />
      <meshStandardMaterial
        wireframe={wireframe}
        color={hovered ? 'pink' : 'gray'}
      />
    </mesh>
  )
}

export interface Props {
  position: Vector3
  rotation: Vector3
  wireframe?: boolean
}

export default Frame
