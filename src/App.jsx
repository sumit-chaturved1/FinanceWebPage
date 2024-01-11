import React from 'react'
import { 
  Route,
  createHashRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom"
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CircularWithValueLabel from './components/CirculatProgress'
const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/" ,
        element: <HomePage />
      },
      {
        path: "1",
        element: <HomePage />
      },
      {
        path: "2",
        element: <HomePage />
      },
      {
        path: "3",
        element: <HomePage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App