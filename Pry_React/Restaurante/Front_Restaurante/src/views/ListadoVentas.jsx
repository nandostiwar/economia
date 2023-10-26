import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoVentas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const obtenerListVentas = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/restaurante/getVentas"
        );
        const data = await response.json();
        console.log(data.ventas);
        setVentas(data.ventas);
      } catch (error) {
        console.error("Error al obtener las ventas:", error);
      }
    };
    obtenerListVentas();
  }, []);

  if (ventas.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>Listado de Ventas</h1>
        <h3>Restaurante</h3>
      </div>

      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Valor Unidad</th>
              <th scope="col">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map(({ id, producto, cantidad, valorUnitario, vTotalVenta }) => (
              <tr key={id}>
                <td>{producto}</td>
                <td>{cantidad}</td>
                <td>$ {valorUnitario}</td>
                <td>$ {vTotalVenta}</td>
               </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Admin">
          <button>Regresar</button>
        </Link>
      </div>
    </div>
  );
};

export default ListadoVentas