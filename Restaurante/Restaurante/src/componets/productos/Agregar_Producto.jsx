import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Agregar_Producto() {
	const [nombre, setNombre] = useState("");
	const [precio, setPrecio] = useState("");
	const goTo = useNavigate();

	const enviarDatos = async (e) => {
		e.preventDefault();

		try {
			const body = {
				nombre: nombre,
				precio: precio,
			};
			const response = await fetch("http://localhost:5000/productos", {
				method: "POST",
				headers: { "Content-Type": "application/json" }, // Corrección aquí
				body: JSON.stringify(body),
			});
			if (response.ok) {
				window.location = "/productos";
			} else {
				console.error("Error al agregar el producto");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<h1 className="text-center mt-5">Agregar Producto</h1>

			<form className="d-flex mt-5" onSubmit={enviarDatos}>
				<input
					type="text"
					className="form-control"
					value={nombre}
					placeholder="Nombre"
					onChange={(e) => setNombre(e.target.value)}
				></input>
				<input
					type="text"
					className="form-control"
					value={precio}
					placeholder="Precio"
					onChange={(e) => setPrecio(e.target.value)}
				></input>
				<button className="btn btn-success">Agregar</button>
			</form>
		</>
	);
}

export default Agregar_Producto;
