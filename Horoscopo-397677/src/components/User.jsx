import React from 'react'
import signo from './signos'
import Card from './card';

function User() {

  const lista = signo.map(signo => {
    return <Card title={signo.Nombre} image={signo.Imagen} text={signo.Mensaje} />
  });

  return (
    <div>

        <h1>Bienvenido a Horoscopo-App</h1>
        <p>{lista}</p>
        

    </div>

  )
}

export default User

   

