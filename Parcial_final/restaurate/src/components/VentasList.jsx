import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VentasList.css';

const VentasList = () => {
  const [ventas, setVentas] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      const response = await axios.get('http://localhost:3001/api/ventas/mostrar');
      setVentas(response.data);
    };

    const fetchProductos = async () => {
      const response = await axios.get('http://localhost:3001/api/productos/mostrar');
      setProductos(response.data);
    };

    fetchVentas();
    fetchProductos();
  }, []);

  const getProductName = (id) => {
    const producto = productos.find(product => product.id === id);
    return producto ? producto.nombre : 'Producto no encontrado';
  };

  return (
    <div className="ventasListContainer">
      <h2 className="ventasListTitle">Lista de Ventas</h2>
      <ul className="ventasList">
        {ventas.map((venta, index) => (
          <li key={index} className="ventaItem">
            Venta ID: {venta.id} - Usuario ID: {venta.userId}
            <ul className="productosList">
              {venta.productos.map((producto, index) => (
                <li key={index} className="productoItem">
                  Producto: {getProductName(producto.id)} - Cantidad: {producto.cantidad}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default VentasList;
