import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/productos/mostrar');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener productos', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      await axios.post(`http://localhost:3001/api/productos/borrar/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error al borrar producto', error);
    }
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.nombre} - {product.valor}
            <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
