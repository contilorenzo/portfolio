import { type Route } from './types'
import Homepage from '../pages/Homepage/Homepage'
import Bar from '../pages/Bar/Bar'
import { FilterFramesSharp, Home, LocalDrinkSharp } from '@mui/icons-material'
import Museum from '../pages/Museum/Museum'

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    component: <Homepage />,
    icon: <Home />,
  },
  {
    path: '/bar',
    label: 'Bar',
    component: <Bar />,
    icon: <LocalDrinkSharp />,
  },
  {
    path: '/museum',
    label: 'Museum',
    component: <Museum />,
    icon: <FilterFramesSharp />,
  },
]
