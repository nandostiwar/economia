import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import definitios from './data/definitions.js'
import VistaSignos from './views/VistaSignos.jsx'
import VistaHome from './views/VistaHome.jsx'

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "VistaHome",
    element: <VistaHome />
  }
]

definitios.forEach((definitions) => {
  routes.push({
    path: "/VistaHome/"+definitions.name,
    element: <VistaSignos definitions={definitions}/>
  })
})

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
