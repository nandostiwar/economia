import React, { useState } from "react";
import signos from "./signos"; // Importa los datos iniciales
import "./Admin.css";

function Admin() {
	const [signosData, setSignosData] = useState(signos);
	const [editedSigno, setEditedSigno] = useState(null);

	const handleEditSigno = (signo) => {
		setEditedSigno(signo);
	};

	const handleSaveChanges = () => {
		// Encuentra el índice del signo a editar
		const signoIndex = signosData.findIndex(
			(objeto) => objeto.nombre === editedSigno.nombre
		);

		if (signoIndex !== -1) {
			// Actualiza el objeto del signo en el estado local
			const updatedSignos = [...signosData];
			updatedSignos[signoIndex] = editedSigno;
			setSignosData(updatedSignos);

			// Limpia el formulario de edición
			setEditedSigno(null);
		}
	};

	return (
		<div>
			<h1>Administrar Signos Zodiacales</h1>
			<ul>
				{signosData.map((objeto, index) => (
					<li key={index}>
						{objeto.nombre}
						<button onClick={() => handleEditSigno(objeto)}>Editar</button>
					</li>
				))}
			</ul>

			{editedSigno && (
				<div>
					<h2>Editar {editedSigno.nombre}</h2>
					<label>Nombre:</label>
					<input
						type="text"
						value={editedSigno.nombre}
						onChange={(e) =>
							setEditedSigno({ ...editedSigno, nombre: e.target.value })
						}
					/>
					<label>Descripción:</label>
					<textarea
						value={editedSigno.descripcion}
						onChange={(e) =>
							setEditedSigno({ ...editedSigno, descripcion: e.target.value })
						}
					/>
					<button onClick={handleSaveChanges}>Guardar cambios</button>
				</div>
			)}
		</div>
	);
}

export default Admin;
