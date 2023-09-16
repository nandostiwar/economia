import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './views/login'
import Juego from './views/juego'
import Cocina from './views/cocina'
import './index.css'


const router = createBrowserRouter([{
  path:"/",
  element : <Login/> ,
},
{
  path:"/juego",
  element : <Juego/> ,
},
{
  path:"/cocina",
  element : <Cocina/> ,
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
