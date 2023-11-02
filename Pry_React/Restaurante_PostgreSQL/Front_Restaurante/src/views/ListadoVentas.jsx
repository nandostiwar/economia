import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [valorTotalTodasLasVentas, setValorTotalTodasLasVentas] = useState(0);

  useEffect(() => {
    const obtenerListVentas = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/restaurante/ventas/getVentas"
        );
        const data = await response.json();
        console.log(data.ventas);
        setVentas(data.ventas);

        // Calcular el valor total de todas las ventas
        const valorTotal = data.ventas.reduce((total, venta) => {
          return total + venta.valor_venta;
        }, 0);

        setValorTotalTodasLasVentas(valorTotal);
      } catch (error) {
        console.error("❌ Error al obtener las ventas:", error);
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
              <th scope="col">No.</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Valor Unidad</th>
              <th scope="col">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map(
              ({ id_venta, producto, cantidad, precio, valor_venta }) => (
                <tr key={id_venta}>
                  <td>{id_venta}</td>
                  <td>{producto}</td>
                  <td>{cantidad}</td>
                  <td>$ {precio}</td>
                  <td>$ {valor_venta}</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <p>Valor total de ventas: <strong>$ {valorTotalTodasLasVentas}</strong></p> 

        <Link to="/Admin">
          <button className="btn btn-secondary">Regresar</button>
        </Link>
      </div>
    </div>
  );
};

export default ListadoVentas;
