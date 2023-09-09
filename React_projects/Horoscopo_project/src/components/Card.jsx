import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card({ name="Horoscopo", dateRange="Rango de fechas", img}) {
    return (
        <div className='Card'>
            <Link to={name}> <h2>{name}</h2></Link>
            <p>{dateRange}</p>
            <img src={img} alt="Imagen del signo sodiacal"/>
        </div>
    )
}

export default Card