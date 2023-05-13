import Styled from './AnimatedText.styles'
import { type Animation } from './types'
import { useEffect, useState } from 'react'

const AnimatedText = ({
  animation,
  cursorColor = 'orange',
  keepCursor = false,
  text,
  textColor = 'white',
}: Props) => {
  const [renderedText, setRenderedText] = useState<string>('')
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true)

  const characterDelay = animation.duration / text.length

  const typeCharacter = () => {
    setRenderedText((prevText) => text.slice(0, prevText.length + 1))
  }

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        typeCharacter()
      }, characterDelay)
      setTimeout(() => {
        setIsCursorVisible(keepCursor)
      }, animation.duration)
    }, animation.delay)
  }, [])

  return (
    <Styled.Text
      $cursorColor={cursorColor}
      $isCursorVisible={isCursorVisible}
      $textColor={textColor}
    >
      <h2>{renderedText}</h2>
    </Styled.Text>
  )
}

export interface Props {
  animation: Animation
  cursorColor?: string
  keepCursor?: boolean
  text: string
  textColor?: string
}

export default AnimatedText
