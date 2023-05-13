import { type Route } from './types'
import Homepage from '../pages/Homepage/Homepage'
import { Home } from '@mui/icons-material'

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    component: <Homepage />,
    icon: <Home />,
  },
]
