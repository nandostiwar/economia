import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './view/login';
import Admin from './view/admin';
import Restaurante from './view/restaurante';
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/admin",
    element: <Admin/>
  },
  {
    path:"/restaurante",
    element:<Restaurante/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
