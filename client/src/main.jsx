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
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

import Dashboard from './pages/Dashboard.jsx'

import Profile from './pages/DashPages/Profile.jsx'
import ReviewPage from './pages/DashPages/ReviewPage.jsx'
import StatusPage from './pages/DashPages/StatusPage.jsx'
import MakeReviewPage from './pages/DashPages/MakeReviewPage.jsx'
import MakeStatusPage from './pages/DashPages/MakeStatusPage.jsx'
import AllPostsPage from './pages/DashPages/AllPostsPage.jsx'
import AchievementsPage from './pages/DashPages/AchievementsPage.jsx'
import AllUsers from './pages/DashPages/AllUsers.jsx'

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
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/profile',
            element: <Profile />,
          },
          {
            path: '/dashboard/review',
            element: <ReviewPage />,
          },
          {
            path: '/dashboard/status',
            element: <StatusPage />,
          },
          {
            path: '/dashboard/make-review',
            element: <MakeReviewPage />,
          },
          {
            path: '/dashboard/make-status',
            element: <MakeStatusPage />,
          },
          {
            path: '/dashboard/all-posts',
            element: <AllPostsPage />,
          },
          {
            path: '/dashboard/achievements',
            element: <AchievementsPage />,
          },
          {
            path: '/dashboard/all-users',
            element: <AllUsers />,
          },
        ],
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
