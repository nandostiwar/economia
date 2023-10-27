import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Editar_Producto({ producto }) {
	const navigate = useNavigate(); //
	const [nombre, setNombre] = useState(producto.nombre);
	const [precio, setPrecio] = useState(producto.precio);

	const updateProducto = async () => {
		try {
			const body = { nombre, precio };
			const response = await fetch(
				`http://localhost:5000/productos/${producto.producto_id}`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				}
			);
			navigate("/productos");
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target={`#id${producto.producto_id}`}
			>
				Editar
			</button>

			<div className="modal" id={`id${producto.producto_id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Editar Producto</h4>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre"
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								placeholder="Correo"
								value={precio}
								onChange={(e) => setPrecio(e.target.value)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={updateProducto}
							>
								Editar
							</button>
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Editar_Producto;
