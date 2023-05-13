import Styled from './Layout.styles'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from '../../pages/Homepage/Homepage'
import { AnimatePresence } from 'framer-motion'
import Header from '../Header/Header'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

const Layout = () => {
  const location = useLocation()
  return (
    <Styled.Layout>
      <Header />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Styled.Layout>
  )
}

export default Layout
