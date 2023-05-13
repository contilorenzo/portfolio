import styled from 'styled-components'

const NotFound = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  gap: 1.6rem;
  height: 100vh;
  justify-content: center;
  perspective: 10px;
`

const StarWars = styled.div`
  color: #ff6;
  font-family: 'Star Jedi', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  perspective: 100px;
  text-transform: uppercase;
  transform: rotateX(4deg);
`

const Title = styled.h1`
  font-size: 3rem;
`

export default {
  NotFound,
  StarWars,
  Title,
}
