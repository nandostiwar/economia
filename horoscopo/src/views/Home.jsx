import React, { useState } from 'react'
import Tarjeta from "../componentes/tarjeta"
import horoscopo from '../data/horoscopo'
import "./Home.css"


function Home() {
  const [open,setOpen]=useState(true)
  
  const handleClose = () => {
    setOpen(false);}

  const zodiacList = horoscopo.map (v =>{
    return <Tarjeta img={v.Simbolo} titulo={v.Titulo}
    fecha={v.fecha} info={v.Informacion} />
  })

  

  return (
    <div className='home'>
      <h1>Horoscopo</h1>
      <div className='tarjetas'>
        {zodiacList}
      </div>
    </div>

    
    
  )
}

export default Home