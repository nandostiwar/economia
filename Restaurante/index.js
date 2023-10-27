const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./conexion");

app.use(cors());
app.use(express.json());

//registrar usuario
app.post("/usuarios", async (req, res) => {
	try {
		const { nombre } = req.body;
		const { correo } = req.body;
		const { tipo_usuario } = req.body;

		const newClietne = await pool.query(
			"INSERT INTO usuarios (nombre,tipo_usuario,correo) VALUES($1,$2,$3) RETURNING *",
			[nombre, tipo_usuario, correo]
		);
		res.json(newClietne.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//traer usuarios
app.get("/usuarios", async (req, res) => {
	try {
		const allUsuarios = await pool.query("SELECT * FROM usuarios");
		res.json(allUsuarios.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//traer un usuario
app.get("/usuarios/:usuario_id", async (req, res) => {
	try {
		const { usuario_id } = req.params;
		const usuario = await pool.query(
			"SELECT * FROM usuarios WHERE usuario_id=$1",
			[usuario_id]
		);
		res.json(usuario.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//traer un usuario por nombre
app.get("/usuario/:nombre", async (req, res) => {
	try {
		const { nombre } = req.params;

		// Validación de entrada
		if (!nombre) {
			return res.status(400).json("El nombre no puede estar vacío.");
		}

		const usuario = await pool.query(
			"SELECT tipo_usuario FROM usuarios WHERE nombre = $1",
			[nombre]
		);

		// Comprobar si se encontró un usuario
		if (usuario.rows.length > 0) {
			res.json(usuario.rows[0]);
		} else {
			res
				.status(404)
				.json("No se encontró un usuario con el nombre especificado.");
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).json("Error al buscar el usuario.");
	}
});

//actualizar usuario

app.put("/usuarios/:usuario_id", async (req, res) => {
	try {
		const { usuario_id } = req.params;
		const { nombre } = req.body;
		const { tipo_usuario } = req.body;
		const { correo } = req.body;

		const upUsuario = await pool.query(
			"UPDATE usuarios SET nombre=$1, tipo_usuario=$4,correo=$2 where usuario_id=$3",
			[nombre, correo, usuario_id, tipo_usuario]
		);

		res.json("Usuario actualizado");
	} catch (err) {
		console.error(err.message);
	}

	//eliminar usuario

	app.delete("/usuarios/:usuario_id", async (req, res) => {
		try {
			const { usuario_id } = req.params;

			const deleteUsuario = await pool.query(
				"DELETE FROM usuarios WHERE usuario_id = $1",
				[usuario_id]
			);
			if (deleteUsuario.rowCount === 1) {
				res.json("Usuario eliminado");
			} else {
				res
					.status(404)
					.json("No se encontró el cliente con el ID especificado");
			}
		} catch (err) {
			console.error(err.message);
		}
	});
});

//registrar producto
app.post("/productos", async (req, res) => {
	try {
		const { nombre } = req.body;
		const { precio } = req.body;

		const newClietne = await pool.query(
			"INSERT INTO productos (nombre,precio) VALUES($1,$2) RETURNING *",
			[nombre, precio]
		);
		res.json(newClietne.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//traer productos
app.get("/productos", async (req, res) => {
	try {
		const allProductos = await pool.query(
			"SELECT * FROM productos where estado=1"
		);
		res.json(allProductos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//traer un producto
app.get("/productos/:producto_id", async (req, res) => {
	try {
		const { producto_id } = req.params;
		const usuario = await pool.query(
			"SELECT * FROM productos WHERE producto_id=$1",
			[producto_id]
		);
		res.json(usuario.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//actualizar producto

app.put("/productos/:producto_id", async (req, res) => {
	try {
		const { producto_id } = req.params;
		const { nombre } = req.body;
		const { precio } = req.body;

		const upUsuario = await pool.query(
			"UPDATE productos SET nombre=$1,precio=$2 where producto_id=$3",
			[nombre, precio, producto_id]
		);

		res.json("Producto actualizado");
	} catch (err) {
		console.error(err.message);
	}
});

//eliminar producto

app.put("/productos/desc/:producto_id", async (req, res) => {
	try {
		const { producto_id } = req.params;

		const updateProducto = await pool.query(
			"UPDATE productos SET estado = 0 WHERE producto_id = $1",
			[producto_id]
		);
		if (updateProducto.rowCount === 1) {
			res.json("Producto desactivado (estado cambiado a 0)");
		} else {
			res.status(404).json("No se encontró el producto con el ID especificado");
		}
	} catch (err) {
		console.error(err.message);
	}
});

app.post("/ventas", async (req, res) => {
	// try {
	// 	const { producto_id } = req.params;

	// 	const producto = await pool.query(
	// 		"SELECT producto_id, nombre FROM producto where estado=1 ",
	// 		[producto_id]
	// 	);
	// } catch (err) {
	// 	console.error(err.message, "asdasda");
	// }
	try {
		const { producto_id, cantidad } = req.body;

		// Obtener el precio del producto
		const producto = await pool.query(
			"SELECT precio FROM productos WHERE producto_id = $1",
			[producto_id]
		);

		if (producto.rows.length === 0) {
			return res
				.status(404)
				.json("No se encontró el producto con el ID especificado");
		}

		const precio = producto.rows[0].precio;
		const total = precio * cantidad;

		const newVenta = await pool.query(
			"INSERT INTO ventas (producto_id, cantidad, total) VALUES($1, $2, $3) RETURNING *",
			[producto_id, cantidad, total]
		);

		res.json(newVenta.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.status(500).json("Error al agregar la venta");
	}
});

app.get("/ventas", async (req, res) => {
	try {
		const allVentas = await pool.query(
			"SELECT v.venta_id , p.nombre as Nombre, p.precio as Precio, v.cantidad as Cantidad, v.total as Total FROM ventas v, productos p WHERE v.producto_id=p.producto_id"
		);
		res.json(allVentas.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/totalventas", async (req, res) => {
	try {
		const allProductos = await pool.query(
			"SELECT SUM(total) as Total_Ventas from ventas"
		);
		res.json(allProductos.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("server god en el puerto 5000");
});
