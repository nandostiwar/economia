import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tabla from './components/Tabla.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tabla",
    element: <Tabla />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
