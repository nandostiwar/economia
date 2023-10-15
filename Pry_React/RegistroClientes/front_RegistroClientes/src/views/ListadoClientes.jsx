import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/listadoClientes.css";

function ListadoClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerListClientes = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/regisClientes/getClientes"
        );
        const data = await response.json();
        console.log(data.clientes);
        setClientes(data.clientes);
      } catch (error) {
        console.error("Error al obtener los Clientes:", error);
      }
    };
    obtenerListClientes();
  }, []);
  
  const handleEliminarCliente = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      eliminarCliente(id);
    }
  };
  
  const eliminarCliente = async (id) => {
    try {
      console.log("enviando delete cliente Id = "+id)
      const response = await fetch(
        `http://localhost:3500/v1/regisClientes/eliminarCliente/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("✅ Cliente eliminado exitosamente");
        // Aquí puedes actualizar tu lista de clientes si es necesario
      } else if (response.status === 404) {
        console.log("❌ Cliente no encontrado");
      } else {
        console.log("❌ Error al eliminar el cliente");
      }
    } catch (error) {
      console.error("❌ Error al eliminar el cliente:", error);
    }
  };

  if (clientes.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Listado de Clientes</h1>
      </div>

      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Cédula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Correo</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(({ id, nombre, edad, correo }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{edad}</td>
                <td>{correo}</td>
                <td>
                  <i className="bi bi-pencil-square"></i>
                  <i className="bi bi-trash-fill" onClick={() => handleEliminarCliente(id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/">
          <input className="btn btn-secondary" type="button" value="Regresar" />
        </Link>
      </div>
    </div>
  );
}

export default ListadoClientes;
