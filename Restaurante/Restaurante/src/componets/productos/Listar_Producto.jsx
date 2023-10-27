import React, { useEffect, useState } from "react";
import Editar_Producto from "./Editar_Producto";

const Listar_Producto = () => {
	const [productos, setProductos] = useState([]);

	const traerProductos = async () => {
		try {
			const traer = await fetch("http://localhost:5000/productos");
			const jsonData = await traer.json();
			setProductos(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	const deleteProducto = async (producto_id) => {
		try {
			const response = await fetch(
				`http://localhost:5000/productos/desc/${producto_id}`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
				}
			);
			if (response.ok) {
				console.log("Producto eliminado");
				setProductos(
					productos.filter((producto) => producto.producto_id !== producto_id)
				);
			} else {
				console.error("Error al eliminar el cliente");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		traerProductos();
	}, []);

	return (
		<>
			<h1 className="text-light">Lista de Productos</h1>
			<table className="table table-dark table-striped table-bordered mt-5 text-center">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Editar</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>
					{productos.map((producto) => (
						<tr key={producto.producto_id}>
							<td>{producto.producto_id}</td>
							<td>{producto.nombre}</td>
							<td>${producto.precio}</td>
							<td>
								<Editar_Producto producto={producto} />
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() => deleteProducto(producto.producto_id)}
								>
									Borrar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Listar_Producto;
