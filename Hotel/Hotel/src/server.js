import React, { useState, useEffect } from "react";
import "./App.css";
import Hotel from "./components/Hotel";
import axios from "axios";

function App() {
	const [habitaciones, setHabitaciones] = useState([]);

	useEffect(() => {
		// Obtén los datos iniciales desde el servidor cuando se carga la página
		obtenerHabitaciones();
	}, []);

	const obtenerHabitaciones = async () => {
		try {
			const response = await axios.get("http://localhost:3000/habitaciones"); // Ajusta la URL según tu configuración de servidor
			setHabitaciones(response.data);
		} catch (error) {
			console.error("Error al obtener los datos:", error);
		}
	};

	const handleHotelClick = async (index) => {
		const updatedHabitaciones = [...habitaciones];
		updatedHabitaciones[index].ocupada = !updatedHabitaciones[index].ocupada;
		setHabitaciones(updatedHabitaciones);

		try {
			// Envía una solicitud POST al servidor para actualizar el archivo JSON
			await axios.post(
				"http://localhost:3000/habitaciones",
				updatedHabitaciones
			); // Ajusta la URL según tu configuración de servidor
			console.log("Archivo JSON actualizado con éxito en el servidor");
		} catch (error) {
			console.error("Error al actualizar el archivo JSON:", error);
		}
	};

	return (
		<div>
			<h1>Lista de Habitaciones</h1>
			<div className="habitaciones-container">
				{habitaciones.map((habitacion, index) => (
					<Hotel
						key={index}
						numero={habitacion.nombre}
						ocupada={habitacion.ocupada}
						calidad={habitacion.calidad}
						onClick={() => handleHotelClick(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
