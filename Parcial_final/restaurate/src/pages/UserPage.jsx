import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UserPage = () => {
  return (
    <div>
      <h1>Administración de Usuarios</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserPage;
