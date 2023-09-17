import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='container'>

        <h2>{props.title}</h2>
        <img src={props.image}></img>
        <p>{props.text}</p>


    </div>
  )
}

export default Card