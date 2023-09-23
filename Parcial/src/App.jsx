import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const goTo = useNavigate();
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === "juego" && password === "juego123") {
			goTo("/juego");
		} else if (username === "cocina" && password === "cocina") {
			goTo("/cocina");
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
					<label htmlFor="username">Aplicacion:</label>
					<input
						className="pirobo"
						type="text"
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

export default App;
