import React, { useState } from 'react'
import Tarjeta from "../componentes/tarjeta"
import horoscopo from '../data/horoscopo'
import "./Home.css"
import {  Table,Button,Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'



function Home() {
  
  const [openHor,setOpenHor]=useState(false)
  const [datoSelec,setDatosSelec]=useState()
  
  const llaveHor = (elemento)=>{
    setOpenHor(!openHor)
    setDatosSelec(elemento)
  }

  const zodiacList = horoscopo.map (v =>{
    return <Tarjeta img={v.Simbolo} titulo={v.Titulo}
    fecha={v.fecha} click={()=>llaveHor(v)} />
  })

  

  return (
    <div className='home'>
      <h1>Horoscopo</h1>
      <div className='tarjetas'>
        {zodiacList}
      </div>
      <Modal isOpen={openHor} toggle={llaveHor}>
        <ModalBody>
          <FormGroup style={{textAlign:"center"}}>
            <h3>{datoSelec?datoSelec.Titulo:""}</h3>
            <img src={datoSelec.Simbolo}/>
            <h5>{datoSelec?datoSelec.fecha:""}</h5>
            <p>{datoSelec?datoSelec.Informacion:""}</p>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <button type="button" onClick={llaveHor}>Cerrar</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Home