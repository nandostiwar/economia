import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const goTo = useNavigate();

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:5000/usuario/${username}`);
			if (response.status === 200) {
				const userData = await response.json();
				const tipoUsuario = userData.tipo_usuario;

				if (tipoUsuario === "admin") {
					goTo("/usuarios");
				} else if (tipoUsuario === "user") {
					goTo("/ventas");
				} else {
					setError("Tipo de usuario no válido");
				}
			} else {
				setError("Credenciales incorrectas. Intente nuevamente.");
			}
		} catch (err) {
			console.error(err.message);
			setError("Error al iniciar sesión. Intente nuevamente.");
		}
	};

	return (
		<>
			<div className="login-container">
				<h2 className="perro">Iniciar Sesión</h2>

				{error && <p className="error">{error}</p>}
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Usuario:</label>
						<input
							className="form-control"
							type="text"
							id="username"
							value={username}
							onChange={handleUsernameChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Iniciar Sesión
					</button>
				</form>
			</div>
		</>
	);
}

export default App;
