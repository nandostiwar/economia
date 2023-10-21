import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/productos/crear', {
        nombre: productName,
        valor: productValue,
      });
      if (response.data) {
        setProductName('');
        setProductValue('');
      }
    } catch (error) {
      console.error('Error al crear producto', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Nombre del producto"
      />
      <input
        type="text"
        value={productValue}
        onChange={(e) => setProductValue(e.target.value)}
        placeholder="Valor del producto"
      />
      <button onClick={handleCreateProduct}>Crear Producto</button>
    </div>
  );
};

export default ProductForm;
