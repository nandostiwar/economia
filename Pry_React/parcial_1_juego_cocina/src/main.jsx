import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Juego from './Juego.jsx'
import Cocina from './Cocina.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Juego",
    element: <Juego />,
  },
  {
    path: "/Cocina",
    element: <Cocina />,
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
