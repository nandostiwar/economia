import React from "react";
import Agregar_Producto from "./Agregar_Producto";
import Listar_Producto from "./Listar_Producto";
import { NavBar } from "../NavBar";
function Productos() {
	return (
		<>
			<NavBar />
			<Agregar_Producto />
			<Listar_Producto />
		</>
	);
}

export default Productos;
