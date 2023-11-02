import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerListProduct = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/restaurante/productos/getProductos"
        );
        const data = await response.json();
        console.log(data.productos);
        setProductos(data.productos);
        console.log("listado productos:" ,data.productos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    obtenerListProduct();
  }, []);

  if (productos.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Listado de Productos</h1>
        <h3>Restaurante</h3>
      </div>

      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Descripción Producto</th>
              <th scope="col">Valor $</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(({ id_producto, producto, precio }) => (
              <tr key={id_producto}>
                <td>{producto}</td>
                <td>$ {precio}</td>
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

export default ListadoProductos