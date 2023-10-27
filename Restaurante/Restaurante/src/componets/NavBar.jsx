import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<Link className="navbar-brand text-light" to="/">
					Cerrar Sesión
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link text-light" to="/usuarios">
								Usuarios
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-light" to="/productos">
								Productos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-light" to="/ventas">
								Ventas
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const App = () => {
	return (
		<div className="container">
			<h1>Inicio</h1>
		</div>
	);
};

const Usuarios = () => {
	return (
		<div className="container">
			<h1>Usuarios</h1>
		</div>
	);
};

const Productos = () => {
	return (
		<div className="container">
			<h1>Productos</h1>
		</div>
	);
};

const Ventas = () => {
	return (
		<div className="container">
			<h1>Ventas</h1>
		</div>
	);
};

const Routes = [
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
];

export { NavBar, Outlet, Routes };
