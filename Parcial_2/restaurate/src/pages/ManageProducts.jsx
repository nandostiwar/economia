import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

const ManageProducts = () => {
  return (
    <div>
      <Navbar />
      <h1>Administrar Productos</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default ManageProducts;
