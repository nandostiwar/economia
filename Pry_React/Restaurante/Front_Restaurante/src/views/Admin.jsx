import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Admin = () => {
  const [user, setUser] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [producto, setProducto] = useState("");
  const [valor, setValor] = useState("");
  const [mensajeRespuesta, setMensajeRespuesta] = useState("");

  // función Crear user
  const crearUsuario = async (e) => {
    e.preventDefault();

    if (user !== "" && (rol !== "" || rol > 0)) {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/restaurante/crearUsuario",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user,
              nombre,
              rol,
            }),
          }
        );
        console.log(response.body);
        if (response.ok) {
          setMensajeRespuesta("✅ Registro creado exitosamente");
          // Limpia los campos del formulario
          setUser("");
          setNombre("");
          setRol("");
        } else {
          setMensajeRespuesta("❌ Error al registrar el Usuario");
        }
      } catch (error) {
        console.error("❌ Error al enviar el formulario:", error);
        setMensajeRespuesta("❌ Error al registrar el Usuario");
      }
    } else {
      setMensajeRespuesta("❌ Faltan campos por diligenciar");
    }
  };

  // función Crear producto
  const crearProducto = async (e) => {
    e.preventDefault();

    if (producto !== "" && valor !== "") {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/restaurante/crearProducto",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              producto,
              valor,
            }),
          }
        );
        console.log(response.body);
        if (response.ok) {
          setMensajeRespuesta("✅ Registro creado exitosamente");
          // Limpia los campos del formulario
          setProducto("");
          setValor("");
        } else {
          setMensajeRespuesta("❌ Error al registrar el Producto");
        }
      } catch (error) {
        console.error("❌ Error al enviar el formulario:", error);
        setMensajeRespuesta("❌ Error al registrar el Producto");
      }
    } else {
      setMensajeRespuesta("❌ Faltan campos por diligenciar");
    }
  };

  // función Eliminar user
  const eliminarUsuario = async () => {
    try {
      console.log("enviando delete Usuario = ", user);
      const response = await fetch(
        `http://localhost:3500/v1/restaurante/eliminarUsuario/${user}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("✅ Usuario eliminado exitosamente");
      } else if (response.status === 404) {
        console.log("❌ Usuario no encontrado");
      } else {
        console.log("❌ Error al eliminar el Usuario");
      }
    } catch (error) {
      console.error("❌ Error al eliminar el Usuario:", error);
    }
  };

  // función Eliminar Producto
  const eliminarProducto = async () => {
    try {
      console.log("enviando delete Producto = " + producto);
      const response = await fetch(
        `http://localhost:3500/v1/restaurante/eliminarProducto/${producto}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("✅ Producto eliminado exitosamente");
        // Aquí puedes actualizar tu lista de clientes si es necesario
      } else if (response.status === 404) {
        console.log("❌ Producto no encontrado");
      } else {
        console.log("❌ Error al eliminar el Producto");
      }
    } catch (error) {
      console.error("❌ Error al eliminar el Producto:", error);
    }
  };

  return (
    <div className="card">
      <h1>Módulo Admin</h1>
      <h2>Restaurante</h2>
      <div className="card">
        <h3>Gestión de Usuarios</h3>
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          placeholder="ingresa el Usuario..."
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          placeholder="ingresa el Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        {/* <input
          className="form-control"
          type="number"
          name=""
          id=""
          placeholder="ingresa el Rol"
          onChange={(e) => setRol(e.target.value)}
        /> */}
        <select
          className="form-select"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="0">Selecciona un Rol</option>
          <option value="1">Administrador</option>
          <option value="2">Mesero</option>
        </select>
        <div>
          <button className="btn btn-success" onClick={crearUsuario}>
            Crear Nuevo
          </button>
          <Link to="/ListadoUsuarios">
            <button className="btn btn-info">Ver Usuarios</button>
          </Link>
          <button className="btn btn-danger" onClick={eliminarUsuario}>
            Eliminar
          </button>
        </div>
      </div>
      <br />
      <div className="card">
        <h3>Gestión de Productos</h3>
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          placeholder="ingresa el Producto..."
          onChange={(e) => setProducto(e.target.value)}
        />
        <input
          className="form-control"
          type="number"
          name=""
          id=""
          placeholder="ingresa el valor..."
          onChange={(e) => setValor(e.target.value)}
        />
        <div>
          <button className="btn btn-success" onClick={crearProducto}>
            Crear Nuevo
          </button>
          <Link to="/ListadoProductos">
            <button className="btn btn-info">Ver Productos</button>
          </Link>
          <button className="btn btn-danger" onClick={eliminarProducto}>
            Eliminar
          </button>
        </div>
      </div>
      <br />
      {mensajeRespuesta && <p>{mensajeRespuesta}</p>}
      <br />
      <div>
        <Link to="/">
          <button className="btn btn-secondary" type="button">
            Regresar
          </button>
        </Link>
        <Link to="/ListadoVentas">
          <button className="btn btn-info" type="button">
            Ver Ventas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
