import React, { useEffect, useState } from 'react'
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
import MostrarUsuario from './mostrarUsuario'

function Usuario(info) {

    const [llaveMostrar,setLlavemostrar]=useState(false)

  return (
    <div>
  <div className="p-3"> 
    <h2>Crear usuario</h2>
    <input
      type="text"
      className="form-control"
      placeholder="Nombre de usuario"
      onChange={e => info.chUs(e.target.value)}
      value={info.vlus}
    />
    <select
      className="form-select"
      onChange={e => info.chOp(e.target.value)}
      value={info.vlOp}
    >
      <option value="">Seleccione un rol</option>
      <option value="admin">admin</option>
      <option value="mesero">mesero</option>
    </select>
    <br />
    <button type="button" className="btn btn-primary" onClick={info.clickCrear}>
      Crear usuario
    </button>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => setLlavemostrar(!llaveMostrar)}
    >
      Mostrar Usuario
    </button>
    <br />
  </div>
  <div>
    <Modal isOpen={llaveMostrar} toggle={() => setLlavemostrar(!llaveMostrar)}>
      <ModalHeader>
        <h2>Mostrar Usuario</h2>
      </ModalHeader>
      <ModalBody>
        <MostrarUsuario mostrar={info.datos} 
          clickMost={info.clickMostrar}  />
      </ModalBody>
      <ModalFooter>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setLlavemostrar(!llaveMostrar)}
        >
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  </div>
</div>

  )
}

export default Usuario