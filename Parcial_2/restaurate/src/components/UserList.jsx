import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/usuarios/mostrar');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al cargar usuarios', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.post(`http://localhost:3001/api/usuarios/borrar/${id}`);
      fetchUsers(); // Recargar la lista de usuarios
    } catch (error) {
      console.error('Error al eliminar usuario', error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre}. {user.rol} <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>    
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
