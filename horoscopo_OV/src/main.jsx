import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './views/login.jsx';
import Home from './views/Home.jsx'
import Admin from './views/AdminView'
import Horoscopo from './data/horoscopo';


function Main(){
  
  const [data,setData]=useState(Horoscopo)

  

  const router = createBrowserRouter([{
    path:"/",
    element : <Login/> ,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/admin-view",
    element: <Admin />
  }
  ])


  return (<React.StrictMode>
          <RouterProvider router = {router} />
          </React.StrictMode>
          )
}





ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)

