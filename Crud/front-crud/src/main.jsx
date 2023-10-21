import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from './components/Admin.jsx';
import App from './App.jsx'

const routes = [
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  }
];

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
