import React, { useEffect } from 'react'
import './sistema.css'
import { useState } from 'react'
import HabJunior from '../componentes/HabJunior'
import HabSuite from '../componentes/HabSuite'
import HabPresindecial from '../componentes/HabPresidencial'

function Sistema() {

    
  const [hb,setHb]=useState([])
  const [efect,setEfect]=useState(true)

  useEffect(()=>{
    fetch(`http://localhost:4000/v1/habitaciones`)
      .then(response => response.json())
      .then(ResponseData => {
        setHb(ResponseData)
        console.log("Servidor",ResponseData)
      })
      .catch((error)=>{
        console.error("Error",error)
      })

      setEfect(false)

  },[efect])

  const cambio = (indicador) => {
    const textoEditar = hb[indicador].estado === "Disponible" ? "Ocupada" : "Disponible";
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "texto": textoEditar}) 
    };
  
    fetch(`http://localhost:4000/v1/habitaciones/${indicador}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud PATCH');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
      });

      setEfect(true)

  };
  

  return (
    <div className='container'>
        <h2>Servicio de habitaciones</h2>
        <br />
        <h4>Habitaciones Junior:</h4>
        <div className='habitaciones' > 
            
            {
              hb.map((e, indicador)=>{
                if(e.tipo === "junior"){
                return(
                  <div className='botns' key={indicador}>
                    <HabJunior est={e.estado} 
                    habit={e.habitacion}  
                    click={()=>cambio(indicador)}
                    color={e.estado==="Disponible"? {background:"green"} : {background:"red"}}
                    />
                  </div>
              )}
              })
            }

        </div>
        <h4>Habitaciones suites:</h4>
        <div className='habitaciones' > 
            
            {hb.map((e, indicador)=>{
              if(e.tipo === "suite"){
              return(
                <div className='botns' key={indicador}>
                  <HabSuite est={e.estado} 
                  habit={e.habitacion}  
                  click={()=>cambio(indicador)}
                  color={e.estado==="Disponible"? {background:"green"} : {background:"red"}}
                  />
                </div>
            )}
            })}

        </div>
        <h4>Habitaciones presidenciales:</h4>
        <div className='habitaciones' > 
            
            {hb.map((e, indicador)=>{
              if(e.tipo === "presi"){
              return(
                <div className='botns' key={indicador}>
                  <HabPresindecial est={e.estado} 
                  habit={e.habitacion}  
                  click={()=>cambio(indicador)}
                  color={e.estado==="Disponible"? {background:"green"} : {background:"red"}}
                  />
                </div>
            )}
            })}

        </div>
    </div>
  )
}

export default Sistema