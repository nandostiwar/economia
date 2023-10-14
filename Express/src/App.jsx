import React, { useState } from "react";
import "./App.css";

function App() {
	const [formData, setFormData] = useState({
		nombre: "",
		edad: "",
		cedula: "",
		correo: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/guardarDatos", {
				method: "POST", // Usa el método POST
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert("Datos enviados exitosamente.");
				setFormData({
					nombre: "",
					edad: "",
					cedula: "",
					correo: "",
				});
			} else {
				alert("Hubo un error al enviar los datos.");
			}
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};

	return (
		<div className="App">
			<h1>Formulario</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Nombre:
					<input
						type="text"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Edad:
					<input
						type="text"
						name="edad"
						value={formData.edad}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Cedula:
					<input
						type="text"
						name="cedula"
						value={formData.cedula}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Correo:
					<input
						type="text"
						name="correo"
						value={formData.correo}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default App;
