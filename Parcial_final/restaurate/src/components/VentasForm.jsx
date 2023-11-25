import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VentasForm.css'; 


const AgregarVenta = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState('');
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await axios.get('http://localhost:3001/api/productos/mostrar');
      setProductos(response.data);
    };
    
    fetchProductos();
  }, []);

  const handleAgregarProducto = () => {
    const productoToAdd = productos.find(producto => producto.id === parseInt(selectedProducto));
    if (productoToAdd) {
      setCarrito([...carrito, { ...productoToAdd, cantidad }]);
    }
  };

  const handleConfirmarVenta = async () => {
    const ventaData = {
      userId: 1,
      productos: carrito.map(producto => ({ id: producto.id, cantidad: producto.cantidad }))
    };

    const response = await axios.post('http://localhost:3001/api/ventas/crear', ventaData);
    console.log(response.data);
  };

  return (
    <div className="agregarVentaContainer">
      <h2 className="agregarVentaTitle">Agregar Venta</h2>
      <select className="agregarVentaSelect" onChange={e => setSelectedProducto(e.target.value)}>
        <option value="">Seleccione un producto</option>
        {productos.map(producto => (
          <option key={producto.id} value={producto.id}>
            {producto.nombre}
          </option>
        ))}
      </select>
      <input className="agregarVentaInput" type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} />
      <button className="agregarVentaButton" onClick={handleAgregarProducto}>Agregar Producto</button>

      <h3 className="carritoTitle">Carrito</h3>
      <ul className="carritoList">
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - Cantidad: {producto.cantidad}
          </li>
        ))}
      </ul>

      <button className="agregarVentaButton" onClick={handleConfirmarVenta}>Confirmar Venta</button>
    </div>
  );
};

export default AgregarVenta;
