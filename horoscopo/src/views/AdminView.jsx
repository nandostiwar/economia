import React from 'react'
import {  Table,Button,Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,} from "reactstrap";
import horoscopo from "../data/horoscopo"
import { useState } from 'react'
import "./AdminView.css"


function AdminView() {

  const [datos,setDatos] = useState({
    id:"",
    Titulo:"",
    Informacion:"",
    Simbolo:"",
    Fecha:""
  })
   

  return (
    <div className='Admin-v'>
     <Container>
      <Table>
        <thead><tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Informacion</th>
          <th>Icono</th>
          <th>Fecha</th>
        </tr></thead>
        <tBody>
          {horoscopo.map((elemento)=>(
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.Titulo}</td>
              <td>{elemento.Informacion}</td>
              <td>{elemento.Simbolo}</td>
              <td>{elemento.fecha}</td>
              <td><Button onClick={""}>Editar</Button></td>
            </tr>
          ))}
        </tBody>
      </Table>
     </Container>
     

    </div>
  )
}

export default AdminView