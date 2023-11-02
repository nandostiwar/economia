import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerListUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/restaurante/getUsuarios"
        );
        const data = await response.json();
        console.log(data.usuarios);
        setUsuarios(data.usuarios);
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
            {usuarios.map(({ user, nombre, rol }) => (
              <tr key={user}>
                <td>{user}</td>
                <td>{nombre}</td>
                <td>{rol==1 ? "Administrador" : "Mesero"}</td>
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
