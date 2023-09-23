// PedidoItem.jsx
import React from "react";
import "./PedidoItem.css";

function PedidoItem({ pedido, marcarComoEntregado }) {
	return (
		<div
			className={`pedido-item ${pedido.pendiente ? "pendiente" : "entregado"}`}
			onClick={() => marcarComoEntregado(pedido.turno)}
		>
			<p>Turno: {pedido.turno}</p>
			<p>Comida: {pedido.comida}</p>
			<p>Mesa: {pedido.mesa}</p>
			<p>Mesero: {pedido.mesero}</p>
			{pedido.pendiente && (
				<button
					onClick={() => marcarComoEntregado(pedido.turno)}
					className="boton-pendiente"
				>
					Entregar
				</button>
			)}
		</div>
	);
}

export default PedidoItem;
