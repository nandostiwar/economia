import React, { useEffect, useState } from "react";
import Editar_Usuarios from "./Editar_Usuarios";
const Listar_Usuarios = () => {
	const [usuarios, setUsuarios] = useState([]);

	const traerUsuarios = async () => {
		try {
			const traer = await fetch("http://localhost:5000/usuarios");
			const jsonData = await traer.json();
			setUsuarios(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	const deleteUsuario = async (usuario_id) => {
		try {

			const response = await fetch(
				`http://localhost:5000/usuarios/${usuario_id}`,
				{
					method: "DELETE",
				}
			);

			if (response.ok) {
				console.log("Usuario eliminado");
				// Actualiza la lista de clientes después de eliminar con éxito
				setUsuarios(
					usuarios.filter((usuario) => usuario.usuario_id !== usuario_id)
				);
			} else {
				console.error("Error al eliminar el usuario");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		traerUsuarios();
	}, []);

	return (
		<>
			<h1>Lista de Usuarios</h1>
			<table className="table table-striped table-bordered mt-5 text-center">
				<thead className="thead-dark">
					<tr>
						<th>Id</th>
						<th>Nombre</th>
						<th>Tipo de Usuario</th>
						<th>Correo</th>
						<th>Editar</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>
					{usuarios.map((usuario) => (
						<tr key={usuario.usuario_id}>
							<td>{usuario.usuario_id}</td>
							<td>{usuario.nombre}</td>
							<td>{usuario.tipo_usuario}</td>
							<td>{usuario.correo}</td>
							<td>
								<Editar_Usuarios usuario={usuario} />
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() => deleteUsuario(usuario.usuario_id)}
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

export default Listar_Usuarios;
