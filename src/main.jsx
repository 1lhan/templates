import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Header from './Header.jsx'
import './style.css'
import './styles/CustomSelectStyle.css'
import './styles/lineChartStyle.css'
import FilterPage from './FilterPage.jsx'

const router = createBrowserRouter([
    {
        element: <><Header /><Outlet /></>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/filter-page',
                element: <FilterPage />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)