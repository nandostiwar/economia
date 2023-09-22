import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Juego from './Juego.jsx';
import Login from './Login.jsx';
import Cocina from './Cocina.JSX';
import Pedidos from './componets/Pedidos';
import Card from './componets/Card';
const routes = [
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/juego",
    element: <Juego/>,
  },
  {
    path: "/cocina",
    element: <Cocina/>,
  }
  ,
  {
    path: "/pedido",
    element: <Pedidos/>,
  }
  ,
  {
    path: "/  ",
    element: <Card/>,
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
