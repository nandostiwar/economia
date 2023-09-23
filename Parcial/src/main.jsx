import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Juego from "./Views/Juego.jsx";
import Cocina from "./Views/Cocina.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/juego",
		element: <Juego />,
	},
	{
		path: "/cocina",
		element: <Cocina />,
	},
	// {
	// 	path: "/User",
	// 	element: <User />,
	// },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</>
);
