import React, { useState } from "react";
import signos from "./signos.js";
import "./Users.css"; // Asegúrate de que el nombre del archivo CSS sea correcto

function User() {
	const [selectedSigno, setSelectedSigno] = useState("");

	const handleChange = (event) => {
		setSelectedSigno(event.target.value);
	};

	return (
		<div className="container">
			<h1>Selecciona un signo zodiacal:</h1>
			<div className="select-box">
				<select value={selectedSigno} onChange={handleChange}>
					<option value="">Selecciona un signo</option>
					{signos.map((objeto, index) => (
						<option key={index} value={objeto.nombre}>
							{objeto.nombre}
						</option>
					))}
				</select>
			</div>
			{selectedSigno && (
				<div className="signo-container">
					{signos.map((objeto, index) => {
						if (objeto.nombre === selectedSigno) {
							return (
								<div key={index}>
									<h2>{objeto.nombre}</h2>
									<p>{objeto.descripcion}</p>
								</div>
							);
						}
						return null;
					})}
				</div>
			)}
		</div>
	);
}

export default User;
