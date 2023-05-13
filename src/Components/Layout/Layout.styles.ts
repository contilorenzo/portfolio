import styled from 'styled-components'

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`

export default {
  Layout,
}
