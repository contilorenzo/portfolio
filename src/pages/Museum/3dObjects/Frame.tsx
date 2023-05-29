import React, { useRef, useState } from 'react'
import { type Vector3 } from 'three'
import { RoundedBox } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
// import { useFrame } from '@react-three/fiber'

function Frame({ wireframe, position, rotation, onClickFunction }: Props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <RoundedBox
      args={[4, 6, 0.4]}
      material={new MeshStandardMaterial({ color: 'gray' })}
      radius={0.05}
      smoothness={100}
      position={position}
      rotation={rotation}
      ref={ref}
      onPointerOver={() => {
        setHovered(true)
      }}
      onPointerOut={() => {
        setHovered(false)
      }}
      onClick={() => {
        !!onClickFunction && onClickFunction(position)
        setClicked(!clicked)
      }}
      wireframe={wireframe}
      castShadow
      receiveShadow
    />
  )
}

export interface Props {
  position: Vector3
  rotation: Vector3
  wireframe?: boolean

  onClickFunction?: (position: Vector3) => void
}

export default Frame
