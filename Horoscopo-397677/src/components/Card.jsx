import React from 'react'
import './Card.css'

function Card({title, image, text}) {
  return (
    <div className='card'>    

        <p><h2>{title}</h2></p>

        <img className='image' src={image}></img>

        <p>{text}</p>

    </div>
  )
}

export default Card