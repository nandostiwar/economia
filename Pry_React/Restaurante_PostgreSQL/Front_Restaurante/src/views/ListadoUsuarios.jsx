import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerListUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/restaurante/usuarios/getUsuarios"
        );
        const data = await response.json();
        setUsuarios(data.usuarios);
        console.log("listado usuarios:" ,data.usuarios);
      } catch (error) {
        console.error("Error al obtener los Usuarios:", error);
      }
    };
    obtenerListUsers();
  }, []);

  if (usuarios.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Listado de Usuarios</h1>
        <h3>Restaurante</h3>
      </div>

      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(({ usuario, nombre, rol }) => (
              <tr key={usuario}>
                <td>{usuario}</td>
                <td>{nombre}</td>
                <td>{rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Admin">
          <button className="btn btn-secondary">Regresar</button>
        </Link>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
