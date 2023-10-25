import React, { useEffect,useState } from 'react';
import './Ver.css'

function Ver() {

  const[usuarios, setUsuarios] = useState([]);

  useEffect(()=>
  {
    fetch('http://localhost:5000/users') //solicito los datos del servidor
    .then(response => response.json()) //la respuesta la convierte en un objeto de JS
    .then(data => {setUsuarios(data)}) //seteo el array
    .catch(error => console.error('no funca', error));
  }, );//no le pongo [] para que la actualización en editar sea en tiempo real y no tenga que recargar el componente

  return (
    <div>
<table className='mi-tabla'>
     <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de usuario</th>
              <th>Rol</th>
            </tr>
      </thead>
      <tbody>
        {usuarios.map((dato, index) => (
            <tr key={index}>

              <td>{dato.user_id}</td>
              <td>{dato.username}</td>
              <td>{dato.user_role}</td>
   
            </tr>

        ))}

      </tbody>
    </table>     

    </div>
  );
}

export default Ver;
