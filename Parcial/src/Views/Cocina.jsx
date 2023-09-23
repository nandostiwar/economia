import React, { useState } from "react";
import "./Cocina.css";
import PedidoItem from "../components/PedidoItem";

function Cocina() {
	const [comidaSeleccionada, setComidaSeleccionada] = useState("");
	const [mesaSeleccionada, setMesaSeleccionada] = useState("");
	const [meseroSeleccionado, setMeseroSeleccionado] = useState("");
	const [turno, setTurno] = useState(1);
	const [pedidos, setPedidos] = useState([]);

	const comidas = ["Pizza", "Hamburguesa", "Tacos", "Sushi", "Hot Dog"];
	const numerosDeMesa = [...Array(10).keys()].map((num) => num + 1);
	const meseros = ["Juan", "Ana", "Carlos", "Luisa"];

	const hacerPedido = () => {
		if (comidaSeleccionada && mesaSeleccionada && meseroSeleccionado) {
			const nuevoPedido = {
				turno,
				comida: comidaSeleccionada,
				mesa: mesaSeleccionada,
				mesero: meseroSeleccionado,
				pendiente: true,
			};
			setPedidos([...pedidos, nuevoPedido]);
			setTurno(turno + 1);
		}
	};

	const marcarPedidoComoEntregado = (pedidoTurno) => {
		const nuevosPedidos = pedidos.map((pedido) => {
			if (pedido.turno === pedidoTurno) {
				return { ...pedido, pendiente: false };
			}
			return pedido;
		});
		setPedidos(nuevosPedidos);
	};

	const regresarAInicio = () => {
		window.location.href = "/";
	};

	return (
		<div className="cocina-container">
			<div className="pedido-form">
				<h2>Hacer Pedido</h2>
				<label htmlFor="comida">Comida:</label>
				<select
					id="comida"
					onChange={(e) => setComidaSeleccionada(e.target.value)}
					value={comidaSeleccionada}
				>
					<option value="">Selecciona una comida</option>
					{comidas.map((comida, index) => (
						<option key={index} value={comida}>
							{comida}
						</option>
					))}
				</select>

				<label htmlFor="mesa">Mesa:</label>
				<select
					id="mesa"
					onChange={(e) => setMesaSeleccionada(e.target.value)}
					value={mesaSeleccionada}
				>
					<option value="">Selecciona una mesa</option>
					{numerosDeMesa.map((mesa, index) => (
						<option key={index} value={mesa}>
							{mesa}
						</option>
					))}
				</select>

				<label htmlFor="mesero">Mesero:</label>
				<select
					id="mesero"
					onChange={(e) => setMeseroSeleccionado(e.target.value)}
					value={meseroSeleccionado}
				>
					<option value="">Selecciona un mesero</option>
					{meseros.map((mesero, index) => (
						<option key={index} value={mesero}>
							{mesero}
						</option>
					))}
				</select>

				<button onClick={hacerPedido}>Hacer Pedido</button>
			</div>

			<div className="pedidos-list">
				{pedidos.map((pedido) => (
					<PedidoItem
						key={pedido.turno}
						pedido={pedido}
						marcarComoEntregado={marcarPedidoComoEntregado}
					/>
				))}
			</div>

			<button onClick={regresarAInicio} className="regresar-button">
				Regresar
			</button>
		</div>
	);
}

export default Cocina;
