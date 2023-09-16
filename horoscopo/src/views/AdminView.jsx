import React from 'react'
import {  Table,Button,Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,} from "reactstrap";
import horoscopo from "../data/horoscopo"
import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';


function AdminView() {

  const [openEdit,setopenEdit]=useState(false)
  
  const [datoSelec,setDatosSelec]=useState()
  
  const llaveModal = (elemento)=>{
    setopenEdit(!openEdit)
    setDatosSelec(elemento)
  }

   

  return (
    <div className='Admin-v'>
     <Container>
      <Table className='Table'>
        <thead><tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Informacion</th>
          <th>Icono</th>
          <th>Fecha</th>
          <th>Accion</th>
        </tr></thead>
        <tBody>
          {horoscopo.map((elemento)=>(
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.Titulo}</td>
              <td>{elemento.Informacion}</td>
              <td>{elemento.Simbolo}</td>
              <td>{elemento.fecha}</td>
              <td><Button onClick={()=>llaveModal(elemento)}>Editar</Button></td>
            </tr>
          ))}
        </tBody>
      </Table>
     </Container>
     
     <Modal isOpen={openEdit} toggle={llaveModal} >
      <ModalHeader>
        Editar {datoSelec ? datoSelec.Titulo : ""}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <p>Informacion:</p>
          <textarea
          onChange={e=>setDatosSelec(...datoSelec.Informacion,e)}
          style={{
            width: '100%',
            height: '100px',
            }}
            value={datoSelec? datoSelec.Informacion:""}
          />
        </FormGroup>
        <FormGroup>
          <p>Fechas</p>
          <input type="text" value={datoSelec? datoSelec.fecha:""}
          onChange={e=>setDatosSelec(...datoSelec.fecha,e)}
          style={{width:"100%"}}/>
        </FormGroup>
        <FormGroup>
          <p>Imagen:</p>
          <textarea
          onChange={e=>setDatosSelec(...datoSelec.Simbolo,e)}
          style={{
            width: '100%',
            height: '100px',
            }}
            value={datoSelec? datoSelec.Simbolo:""}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
            <button type="button" onClick={llaveModal}>Editar</button>
            <button type="button" onClick={llaveModal}>Cerrar</button>
      </ModalFooter>
     </Modal>

    </div>
  )
}

export default AdminView