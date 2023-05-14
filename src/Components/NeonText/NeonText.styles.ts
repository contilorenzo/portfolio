import styled from 'styled-components'

const NeonLetter = styled.span<{
  $color: string
  $index: number
  $keyframes: number[]
}>`
  animation: ${({ $index }) => `flicker${$index}`} 1.5s infinite alternate;

  @keyframes ${({ $index }) => `flicker${$index}`} {
    ${({ $keyframes }) => $keyframes.slice(0, 49).join('%,')}% {
      opacity: 1;
      text-shadow: 0 0 1rem ${({ $color }) => $color},
        0 0 3rem ${({ $color }) => $color}, 0 0 6rem ${({ $color }) => $color},
        0 0 10rem ${({ $color }) => $color}, 0 0 14rem ${({ $color }) => $color};
    }
    ${({ $keyframes }) => $keyframes.slice(49, 50).join('%,')}% {
      opacity: 0.8;
      text-shadow: none;
    }
  }
`

const NeonText = styled.div<{ $fontSize: string }>`
  @font-face {
    font-family: 'Neonderthaw';
    src: local('Neonderthaw'), url('/fonts/Neonderthaw/Neonderthaw-Regular.ttf');
  }

  align-items: center;
  color: #fff;
  display: flex;
  font-family: 'Neonderthaw', cursive;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 400;
  user-select: none;
`

export default {
  NeonLetter,
  NeonText,
}
