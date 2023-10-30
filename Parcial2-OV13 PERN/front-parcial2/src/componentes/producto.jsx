import React, { useState } from 'react'
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
import MostrarProducto from './mostrarProducto'



function Producto(info) {

  const [llaveMostrarPd,setLlavemostrarPd]=useState(false);

  return (
    <div>
  <div className="container mt-4">
    <h2>Crear Producto</h2>
    <div className="form-group">
      <label>Producto</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => info.chpd(e.target.value)}
        value={info.vlpd}
      />
    </div>
    <div className="form-group">
      <label>Precio</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => info.chpc(e.target.value)}
        value={info.vlpc}
      />
    </div>
    <button
      type="button"
      className="btn btn-primary"
      onClick={info.crear}
    >
      Crear Producto
    </button>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => setLlavemostrarPd(!llaveMostrarPd)}
    >
      Mostrar Usuario
    </button>
  </div>
  <div>
    <Modal isOpen={llaveMostrarPd} toggle={() => setLlavemostrarPd(!llaveMostrarPd)}>
      <ModalHeader>
        <h2>Mostrar Producto</h2>
      </ModalHeader>
      <ModalBody>
        <MostrarProducto
          mostrar={info.clickMostrar}
          clickBorrar={info.clickBorrar}
        />
      </ModalBody>
      <ModalFooter>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setLlavemostrarPd(!llaveMostrarPd)}
        >
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  </div>
</div>

  )
}

export default Producto