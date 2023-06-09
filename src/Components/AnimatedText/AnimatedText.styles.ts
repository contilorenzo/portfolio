import styled, { css } from 'styled-components'

const Text = styled.div<{
  $cursorColor: string
  $isCursorVisible?: boolean
  $gradient?: string
  $textColor: string
}>`
  & > h2 {
    color: ${({ $textColor }) => $textColor};
    ${({ $gradient }) =>
      $gradient &&
      css`
        background: ${$gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `}
    margin: 0 auto;
    overflow: hidden;
    padding: 0 0.6rem;
    position: relative;
    user-select: none;
    white-space: nowrap;

    &::after {
      animation: blink 0.6s steps(10) infinite;
      background-color: ${({ $cursorColor }) => $cursorColor};
      border-radius: 0.1rem;
      content: '';
      display: ${({ $isCursorVisible }) =>
        $isCursorVisible ? 'block' : 'none'};
      height: 80%;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0.5rem;
    }
  }

  @keyframes blink {
    from,
    to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`

export default {
  Text,
}
