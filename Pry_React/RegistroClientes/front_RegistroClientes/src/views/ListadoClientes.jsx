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

  if (clientes.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Listado de Clientes</h1>
      </div>

      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(({ id, nombre, edad, correo }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{edad}</td>
                <td>{correo}</td>
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
