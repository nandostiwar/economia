import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card.jsx'
import LoginPage from './pages/LoginPage.jsx';
import PedidoForm from './pages/PedidoForm.jsx';
import Minas from "./pages/Minas.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css'
import "./index.css"

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/pedido",
    element: <PedidoForm />,
  },
  {
  path: "/card",
  element: <Minas />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
