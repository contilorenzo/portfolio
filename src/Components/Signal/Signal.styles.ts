import styled, { css } from 'styled-components'
import { type Direction } from './types'

const Signal = styled.div<{ $direction: Direction }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 0.4rem solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  gap: 1rem;
  height: 6rem;
  justify-content: center;
  margin-top: 3rem;
  position: relative;
  width: 16rem;

  & > svg {
    font-size: 2.8rem;
  }

  &::after {
    border-style: solid;
    border-width: 3.1rem;
    content: '';
    height: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }

  &::before {
    border-style: solid;
    border-width: 4rem;
    content: '';
    height: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }

  ${({ $direction }) =>
    $direction === 'right' &&
    css`
      border-right: 0;
      margin-right: 2rem;

      &::after {
        border-color: transparent transparent transparent
          ${({ theme }) => theme.colors.backgroundSecondary};
        left: 99%;
      }

      &::before {
        border-color: transparent transparent transparent
          ${({ theme }) => theme.colors.text};
        left: calc(98% + 0.2rem);
      }
    `}
  ${({ $direction }) =>
    $direction === 'left' &&
    css`
      border-left: 0;
      margin-left: 2rem;

      &::after {
        border-color: transparent
          ${({ theme }) => theme.colors.backgroundSecondary} transparent
          transparent;
        right: 99%;
      }

      &::before {
        border-color: transparent ${({ theme }) => theme.colors.text}
          transparent transparent;

        right: calc(98% + 0.2rem);
      }
    `}
`

export default {
  Signal,
}
