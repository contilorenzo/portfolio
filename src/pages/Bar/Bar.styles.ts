import styled from 'styled-components'

const Bar = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 3rem;
`

const Content = styled.div`
  background-color: #111111;
  border-radius: 4px;
  clip-path: polygon(1% 1%, 97% 4%, 97% 96%, 4% 100%);
  height: 100%;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  height: 8rem;
  justify-content: center;
  width: 100%;
`

export default {
  Bar,
  Content,
  Header,
}
