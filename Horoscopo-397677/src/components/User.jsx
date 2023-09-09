import React from 'react'
import Card from './card.jsx'
import signos from "./signos"
import './User.css'


function User() {

 
  const signosList =signos.map((signos) => {
    return <Card title={signos.name} image={signos.image} text={signos.message} />;
  });

  return (

    <div>
      <h1>Horoscopo</h1>

      <div className='targets'>
        {signosList}
      </div>

      </div>
  );
}

export default User