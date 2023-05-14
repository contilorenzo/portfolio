import Styled from './Layout.styles'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from '../Header/Header'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import { routes } from '../../utils/routes'

const Layout = () => {
  const location = useLocation()
  return (
    <Styled.Layout>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Styled.Layout>
  )
}

export default Layout
