import styled from 'styled-components'

const Header = styled.div`
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  position: fixed;
  top: 0;
`

const NavigationItem = styled.div`
  & > a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`

export default {
  Header,
  NavigationItem,
}
