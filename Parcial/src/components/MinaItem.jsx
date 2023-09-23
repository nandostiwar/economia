import React from "react";
import "./MinaItem.css"; // Importa los estilos si es necesario

function MinaItem({ color, onClick }) {
	return <div className={`caja ${color}`} onClick={onClick}></div>;
}

export default MinaItem;
