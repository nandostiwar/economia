import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ManageProducts = () => {
  return (
    <div>
      <h1>Administrar Productos</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default ManageProducts;
