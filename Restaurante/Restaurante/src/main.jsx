import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Usuarios from "./componets/usuarios/usuarios.jsx";
import Productos from "./componets/productos/Productos.jsx";
import Ventas from "./componets/ventas/Ventas.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/usuarios",
		element: <Usuarios />,
	},
	{
		path: "/productos",
		element: <Productos />,
	},
	{
		path: "/ventas",
		element: <Ventas />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</>
);
