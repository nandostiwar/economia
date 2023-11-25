import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';


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
    <div className="productFormContainer">
      <input
        className="productFormInput"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Nombre del producto"
      />
      <input
        className="productFormInput"
        type="text"
        value={productValue}
        onChange={(e) => setProductValue(e.target.value)}
        placeholder="Valor del producto"
      />
      <button onClick={handleCreateProduct} className="createProductButton">Crear Producto</button>
    </div>
  );
};


export default ProductForm;
