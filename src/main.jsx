import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Layout from './layouts/Layout.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "team",
        element: <Team />
      }
    ]
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)