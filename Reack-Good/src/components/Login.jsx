import React, { useState } from "react";
import "./Login.css";
// import User from "./Users";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobación simple de credenciales en el lado del cliente
		if (username === "admin" && password === "admin123") {
			window.location.href = "/admin";
		} else if (username === "user" && password === "user123") {
			window.location.href = "/User";
		} else {
			setError("Credenciales incorrectas. Intente nuevamente.");
		}
	};

	return (
		<div className="login-container">
			<h2 className="perro">Iniciar Sesión</h2>

			{error && <p className="error">{error}</p>}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Usuario:</label>
					<input
						className="pirobo"
						type="password"
						id="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Contraseña:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<button type="submit">Iniciar Sesión</button>
			</form>
		</div>
	);
}

export default Login;
