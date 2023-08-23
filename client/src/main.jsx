import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'
import Finder from './pages/Finder.jsx'
import Reviews from './pages/Reviews.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/finder',
        element: <Finder />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      }
    ],
  },
])

      


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
