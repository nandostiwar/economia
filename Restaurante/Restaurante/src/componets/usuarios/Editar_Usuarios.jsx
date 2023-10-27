import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editar_Usuarios = ({ usuario }) => {
	const navigate = useNavigate(); //
	const [nombre, setNombre] = useState(usuario.nombre);
	const [tipo_usuario, setTipoUsuario] = useState(usuario.tipo_usuario); // Valor predeterminado "user"
	const [correo, setCorreo] = useState(usuario.correo);

	const updateUsuario = async () => {
		try {
			const body = { nombre, correo, tipo_usuario };
			const response = await fetch(
				`http://localhost:5000/usuarios/${usuario.usuario_id}`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				}
			);
			window.location = "/usuarios";
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
				data-target={`#id${usuario.usuario_id}`}
			>
				Editar
			</button>

			<div className="modal" id={`id${usuario.usuario_id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Editar Usuario</h4>
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
							<select
								className="form-control"
								value={tipo_usuario}
								onChange={(e) => setTipoUsuario(e.target.value)}
							>
								<option value="user">Usuario</option>
								<option value="admin">Administrador</option>
							</select>
							<input
								type="text"
								className="form-control"
								placeholder="Correo"
								value={correo}
								onChange={(e) => setCorreo(e.target.value)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={updateUsuario}
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
};

export default Editar_Usuarios;
