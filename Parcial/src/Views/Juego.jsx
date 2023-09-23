import React, { useState } from "react";
import "./Juego.css";
import MinaItem from "../components/MinaItem";

function Juego() {
	const totalCajas = 5;
	const totalMinas = 2;

	const [cajas, setCajas] = useState(Array(totalCajas).fill("blue"));
	const [mensaje, setMensaje] = useState("");
	const [gameOver, setGameOver] = useState(false);

	const indicesMinas = obtenerIndicesAleatorios(totalCajas, totalMinas);

	function obtenerIndicesAleatorios(max, cantidad) {
		const indices = new Set();
		while (indices.size < cantidad) {
			const indiceAleatorio = Math.floor(Math.random() * max);
			indices.add(indiceAleatorio);
		}
		return Array.from(indices);
	}

	const manejarClickCaja = (indice) => {
		if (gameOver) return;

		if (indicesMinas.includes(indice)) {
			setCajas(
				cajas.map((caja, i) => (indicesMinas.includes(i) ? "red" : caja))
			);
			setMensaje("¡Perdiste! Hiciste clic en una mina.");
			setGameOver(true);
		} else {
			const cajaSeleccionada = cajas[indice];
			if (cajaSeleccionada === "blue") {
				const nuevasCajas = [...cajas];
				nuevasCajas[indice] = "green";
				setCajas(nuevasCajas);

				const cajasVerdes = nuevasCajas.filter((caja) => caja === "green");
				if (cajasVerdes.length === totalCajas - totalMinas) {
					setMensaje("¡Ganaste! Has encontrado todas las casillas sin mina.");
					setGameOver(true);
				}
			}
		}
	};

	const reiniciarJuego = () => {
		setCajas(Array(totalCajas).fill("blue"));
		setMensaje("");
		setGameOver(false);
	};

	const volverAInicio = () => {
		window.location.href = "/";
	};

	return (
		<div className="juego-container">
			<h1>Buscaminas</h1>
			<div className="cajas-container">
				{cajas.map((caja, index) => (
					<MinaItem
						key={index}
						color={caja}
						onClick={() => manejarClickCaja(index)}
					/>
				))}
			</div>
			<button onClick={volverAInicio} className="volver-button">
				Volver a Inicio
			</button>
			<p>{mensaje}</p>
			{gameOver && (
				<button onClick={reiniciarJuego} className="reiniciar-button">
					Volver a Jugar
				</button>
			)}
		</div>
	);
}

export default Juego;
