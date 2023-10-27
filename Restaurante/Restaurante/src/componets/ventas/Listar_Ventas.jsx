import React, { useState, useEffect } from "react";

function Listar_Ventas() {
	const [ventas, setVentas] = useState([]);
	const [total, setTotal] = useState({ Total_Ventas: 0 });

	const traerVentas = async () => {
		try {
			const traer = await fetch("http://localhost:5000/ventas");
			const jsonData = await traer.json();
			setVentas(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	const traerTotal = async () => {
		try {
			const traer = await fetch("http://localhost:5000/totalventas");
			const jsonData = await traer.json();
			console.log(jsonData); // Agrega esta línea para verificar los datos en la consola
			setTotal(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		traerVentas();
		traerTotal();
	}, []);

	return (
		<>
			<h1 className="mt-5 text-light">Lista de Ventas</h1>
			<table className="table table-dark table-striped table-bordered mt-3 text-center">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nombre Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{ventas.map((venta) => (
						<tr key={venta.venta_id}>
							<td>{venta.venta_id}</td>
							<td>{venta.nombre}</td>
							<td>{venta.precio}</td>
							<td>{venta.cantidad}</td>
							<td>{venta.total}</td>
						</tr>
					))}
				</tbody>
			</table>
			<h1 className="text-light">Total Ventas</h1>
			<h2 className="text-primary font-weight-bold">{total.total_ventas}</h2>
		</>
	);
}

export default Listar_Ventas;
