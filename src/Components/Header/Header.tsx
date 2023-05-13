import Styled from './Header.styles'
import { NavLink } from 'react-router-dom'
import { routes } from '../../utils/routes'
import { type Route } from '../../utils/types'

const Header = () => {
  return (
    <Styled.Header className='header'>
      <div>
        {routes.map((route: Route) => (
          <Styled.NavigationItem key={route.path}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navigation-item active' : 'navigation-item'
              }
              to={route.path}
            >
              {route.icon}
            </NavLink>
          </Styled.NavigationItem>
        ))}
      </div>
    </Styled.Header>
  )
}

export default Header
