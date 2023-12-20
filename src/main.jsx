import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Header from './Header.jsx'
import './style.css'

const router = createBrowserRouter([
    {
        element: <><Header /><Outlet /></>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)