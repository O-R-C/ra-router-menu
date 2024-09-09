import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../routes/home-page'
import ErrorPage from '../routes/error-page'
import App from '../App'
import DriftPage from '../routes/drift-page'
import TimeAttackPage from '../routes/time-attack-page'
import ForzaPage from '../routes/forza-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/drift',
        element: <DriftPage />,
      },
      {
        path: '/time',
        element: <TimeAttackPage />,
      },
      {
        path: '/forza',
        element: <ForzaPage />,
      },
    ],
  },
])
