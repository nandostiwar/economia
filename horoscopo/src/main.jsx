import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './views/login.jsx';
import Home from './views/Home.jsx'
import Admin from './views/AdminView'



const router = createBrowserRouter([{
  path:"/",
  element : <Login/> ,
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/admin-view",
    element: <Admin/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
