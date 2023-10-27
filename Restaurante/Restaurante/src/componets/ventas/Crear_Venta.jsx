import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Crear_Venta() {
	const [producto_id, setProducto_id] = useState("");
	const [cantidad, setCantidad] = useState("");
	const goTo = useNavigate();
	const [productos, setProductos] = useState([]);

	const obtenerProductos = async () => {
		try {
			const response = await fetch("http://localhost:5000/productos");
			if (response.ok) {
				const data = await response.json();
				setProductos(data);
			} else {
				console.error("Error al obtener la lista de productos disponibles");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		obtenerProductos();
	}, []);

	const enviarDatos = async (e) => {
		e.preventDefault();

		try {
			const body = {
				producto_id: producto_id,
				cantidad: cantidad,
			};

			const response = await fetch("http://localhost:5000/ventas", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			if (response.ok) {
				window.location = "/ventas";
				setProducto_id("");
				setCantidad("");
			} else {
				console.error("Error al agregar la venta");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<h1 className="text-light text-center mt-5">Crear Venta</h1>

			<form className="d-flex mt-5" onSubmit={enviarDatos}>
				<select
					className="form-select bg-dark text-light"
					value={producto_id}
					onChange={(e) => setProducto_id(e.target.value)}
				>
					<option value="">Selecciona un producto</option>
					{productos.map((producto) => (
						<option key={producto.producto_id} value={producto.producto_id}>
							{producto.nombre}
						</option>
					))}
				</select>
				<input
					type="text"
					className="form-control bg-dark text-light" // Cambiamos el color del input
					placeholder="Cantidad"
					value={cantidad}
					onChange={(e) => setCantidad(e.target.value)}
				/>
				<button className="btn btn-success" type="submit">
					Crear Venta
				</button>
			</form>
		</>
	);
}

export default Crear_Venta;
