import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import Navbar from '../components/Navbar';

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Administración de Usuarios</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserPage;
