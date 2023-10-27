import React, { Fragment } from "react";
import Listar_Usuarios from "./Listar_Usuarios";
import Agregar_Usuarios from "./Agregar_Usuarios";
import { NavBar } from "../NavBar";

function Usuarios() {
	return (
		<>
			<NavBar />
			<div className="container">
				<Agregar_Usuarios />
				<Listar_Usuarios />
			</div>
		</>
	);
}

export default Usuarios;
