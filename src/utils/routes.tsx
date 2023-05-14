import { type Route } from './types'
import Homepage from '../pages/Homepage/Homepage'
import Bar from '../pages/Bar/Bar'
import { Home, LocalDrinkSharp } from '@mui/icons-material'

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    component: <Homepage />,
    icon: <Home />,
  },
  {
    path: '/bar',
    label: 'Home',
    component: <Bar />,
    icon: <LocalDrinkSharp />,
  },
]
