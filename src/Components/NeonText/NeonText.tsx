import Styled from './NeonText.styles'

const randomNumbersArray = (length: number, max: number): number[] =>
  [...Array(length)].map(() => ~~(Math.random() * max))

const NeonText = ({ color, fontSize, text }: Props) => {
  return (
    <Styled.NeonText $fontSize={fontSize}>
      {text.split('').map((letter, index) => (
        <Styled.NeonLetter
          key={`${letter}${index}`}
          $keyframes={randomNumbersArray(50, 100)}
          $index={index}
          $color={color}
        >
          {letter}
        </Styled.NeonLetter>
      ))}
    </Styled.NeonText>
  )
}

export interface Props {
  color: string
  fontSize: string
  text: string
}

export default NeonText
