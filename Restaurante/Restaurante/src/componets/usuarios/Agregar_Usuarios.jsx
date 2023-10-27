import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Agregar_Usuarios = () => {
	const [nombre, setNombre] = useState("");
	const [tipoUsuario, setTipoUsuario] = useState("user");
	const [correo, setCorreo] = useState("");
	const goTo = useNavigate();

	const enviarDatos = async (e) => {
		e.preventDefault();

		try {
			const body = {
				nombre: nombre,
				tipo_usuario: tipoUsuario,
				correo: correo,
			};

			const response = await fetch("http://localhost:5000/usuarios", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			if (response.ok) {
				window.location = "/usuarios";
			} else {
				console.error("Error al agregar el usuario");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<h1 className="text-light text-center mt-5">Agregar Usuario</h1>

			<form className="d-flex mt-5" onSubmit={enviarDatos}>
				<input
					type="text"
					className="form-control bg-dark text-light" // Cambiamos el color del input y el fondo
					placeholder="Nombre"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
				<select
					className="form-control bg-dark text-light" // Cambiamos el color del select y el fondo
					value={tipoUsuario}
					onChange={(e) => setTipoUsuario(e.target.value)}
				>
					<option value="user">Usuario</option>
					<option value="admin">Administrador</option>
				</select>
				<input
					type="text"
					className="form-control bg-dark text-light" // Cambiamos el color del input y el fondo
					placeholder="Correo"
					value={correo}
					onChange={(e) => setCorreo(e.target.value)}
				/>
				<button className="btn btn-success">Agregar</button>
			</form>
		</>
	);
};

export default Agregar_Usuarios;
