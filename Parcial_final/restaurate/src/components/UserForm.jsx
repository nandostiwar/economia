import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css'; 

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/usuarios/crear', { nombre: username, rol: role });
      if (response.data) {
        setUsername('');
        setRole('user'); 
      }
    } catch (error) {
      console.error('Error al crear usuario', error);
    }
  };

  return (
    <div className="userFormContainer">
      <input
        className="userFormInput"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre de usuario"
      />
      <select
        className="userFormSelect"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleCreateUser} className="createUserButton">Crear Usuario</button>
    </div>
  );
};


export default UserForm;
