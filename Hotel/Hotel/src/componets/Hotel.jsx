import React from "react";
import "./Hotel.css";

function Hotel({ numero, ocupada, calidad, onClick }) {
	const estadoClase = ocupada ? "ocupada" : "libre";

	const handleClick = () => {
		onClick(); // Llama al controlador de eventos onClick del padre
	};

	return (
		<div className={`hotel ${estadoClase}`} onClick={handleClick}>
			<h2>{numero}</h2>
			<p>Estado: {ocupada ? "Ocupada" : "Libre"}</p>
			<p>Calidad: {calidad}</p>
		</div>
	);
}

export default Hotel;
