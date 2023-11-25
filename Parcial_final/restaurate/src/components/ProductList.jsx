import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

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
    <div className="productListContainer">
      <h1 className="productListTitle">Lista de Productos</h1>
      <ul className="productList">
        {products.map(product => (
          <li key={product.id} className="productItem">
            {product.nombre} - {product.valor}
            <button onClick={() => handleDeleteProduct(product.id)} className="deleteButton">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
