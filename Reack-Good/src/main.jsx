import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import User from "./components/Users.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/Login",
		element: <Login />,
	},
	{
		path: "/Admin",
		element: <Admin />,
	},
	{
		path: "/User",
		element: <User />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</>
);
