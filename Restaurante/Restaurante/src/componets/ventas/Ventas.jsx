import React from "react";
import Listar_Ventas from "./Listar_Ventas";
import Crear_Venta from "./Crear_Venta";
import { NavBar } from "../NavBar";
function Ventas() {
	return (
		<>
			<NavBar />
			<Crear_Venta />
			<Listar_Ventas />
		</>
	);
}

export default Ventas;
