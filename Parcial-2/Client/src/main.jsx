import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Admin from './components/Admin.jsx'
import Waiter from './Waiter.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Admin",
    element: <Admin /> ,
  },
  {
    path: "/Waiter",
    element: <Waiter />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
