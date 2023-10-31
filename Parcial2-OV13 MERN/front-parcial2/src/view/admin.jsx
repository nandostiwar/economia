import React from 'react'
import { useState,useEffect } from "react"
import {Modal,ModalBody,ModalHeader,ModalFooter,Button} from 'reactstrap'
import Usuario from '../componentes/usario'
import Producto from '../componentes/producto'
import 'bootstrap/dist/css/bootstrap.css';
import MostrarVentas from '../componentes/mostrarVentas'

function Admin() {
  //usuario
  const [datosOp,setDatoOp] = useState()//rol
  const [datosUs,setDatoUs] = useState()//username
  const [usuarios,setUsuarios] = useState({})
  //Reacstrap
  const [llaveUsuario,setLlaveUsuario]=useState(false)
  const [llaveProducto,setLlaveProducto]=useState(false)
  const [llaveVenta,setLlaveVenta]=useState(false)
  const [productos,setProductos]=useState({})
  const [venta,setVenta]=useState({})
  const [total,setTotal]=useState({})
  //usuario############################################################
  const [reload,setReload]=useState(true)
  const [contador,setContador]=useState(0)
    useEffect(()=>{


      if (contador < 5) {
        fetch(`http://localhost:3000/usuario`)
          .then((response) => response.json())
          .then((responseData) => {
            setUsuarios(responseData);
            console.log(usuarios);
          });
  
        fetch(`http://localhost:3000/producto`)
          .then((response) => response.json())
          .then((responseData) => {
            setProductos(responseData);
            console.log(productos);
          });

        fetch(`http://localhost:3000/venta/total`)
          .then((response) => response.json())
          .then((responseData) => {
            setVenta(responseData);
            console.log(responseData);
          });

        fetch(`http://localhost:3000/venta/totalventas`)
          .then((response) => response.json())
          .then((responseData) => {
            setTotal(responseData);
            console.log(responseData);
          });
  
        setContador(contador + 1);
      } else {
        setReload(false);
      }
    },[reload,contador]);
    

  const crearUsuario = ()=>{
    
    if(datosUs==="" && datosOp===""){
      alert("llenar todos los campos")
    }else{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "user": datosUs, "role":datosOp}) 
      };
      fetch(`http://localhost:3000/usuario`, requestOptions)
      .then(response => {
            return response.json();
        })
      .then(ResponseData=>{
          console.log(ResponseData)
        })
      .catch(error => {
            console.error('Error:', error);
        });
        alert("Se creo exitosamente")
    }
    setContador(0)
    setReload(true)
    setDatoUs("")
    setDatoOp("")
  }
  
  const eliminarUsuario = (id)=>{
    let dato = id
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({}) 
      };
      fetch(`http://localhost:3000/usuario/${dato}`, requestOptions)
      .then(response => {
            return response.json();
        })
      .then(ResponseData=>{
          console.log(ResponseData)
        })
      .catch(error => {
            console.error('Error:', error);
        });
        setContador(0)
        setReload(true)
  }
  const ventallave = ()=>{
    setLlaveVenta(!llaveVenta)
    setContador(0)
    setReload(true)
  }
  //##########################################################################
  //producto
  const [datoPd,setDatoPd] = useState()//producto
  const [datoPc,setDatoPc] = useState()//precio

  const crearProducto = ()=>{
    
    if(datoPd==="" && datoPc===""){
      alert("llenar todos los campos")
    }else{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "producto": datoPd, "precio":datoPc}) 
      };
      fetch(`http://localhost:3000/producto`, requestOptions)
      .then(response => {
            return response.json();
        })
      .then(ResponseData=>{
          
          console.log(ResponseData)
        })
      .catch(error => {
            console.error('Error:', error);
        });

        alert("Se creo exitosamente")
    }
    setContador(0)
    setReload(true)
    setDatoPd("")
    setDatoPc("")
  }

  const eliminarProducto = (id)=>{
    let dato = id
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({}) 
      };
      fetch(`http://localhost:3000/producto/${dato}`, requestOptions)
      .then(response => {
            return response.json();
        })
      .then(ResponseData=>{
          console.log(ResponseData)
        })
      .catch(error => {
            console.error('Error:', error);
        });
        setContador(0)
        setReload(true)
  }

  //###########################################################################

  return (
    <div className="container mt-5">
      <div className='d-flex justify-content-center'>
        <h1>Ventana Admin</h1>

        {/* Modal de Modulo Usuario */}
        <Modal isOpen={llaveUsuario} toggle={() => setLlaveUsuario(!llaveUsuario)}>
          <ModalHeader>
            <h1>Modulo Usuario</h1>
          </ModalHeader>
          <ModalBody>
            <Usuario
              chUs={setDatoUs}
              vlUs={datosUs}
              chOp={setDatoOp}
              vlOp={datosOp}
              datos={usuarios}
              clickCrear={crearUsuario}
              clickMostrar={eliminarUsuario}
              />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setLlaveUsuario(!llaveUsuario)}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

        {/* Modal de Modulo Producto */}
        <Modal isOpen={llaveProducto} toggle={() => setLlaveProducto(!llaveProducto)}>
          <ModalHeader>
            <h1>Modulo Producto</h1>
          </ModalHeader>
          <ModalBody>
            <Producto
                chpd={setDatoPd}
                vlpd={datoPd}
                chpc={setDatoPc}
                vlpc={datoPc}
                crear={crearProducto}
                clickMostrar={productos}
                clickBorrar={eliminarProducto}
              />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setLlaveProducto(!llaveProducto)}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={llaveVenta} toggle={()=>setLlaveVenta(!llaveVenta)}>
          <ModalHeader>{<h1>Ventas totales</h1>}</ModalHeader>
          <ModalBody>
            <MostrarVentas 
              mostrar={venta}
              totalVendido={total}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setLlaveVenta(!llaveVenta)}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

      </div>
      <div className='d-flex m-2 justify-content-center'>

        <Button className='m-2' color="primary" onClick={() => setLlaveUsuario(true)}>
          Modulo Usuario
        </Button>
        <Button className='m-2' color="primary" onClick={() => setLlaveProducto(true)}>
          Modulo Producto
        </Button>
      </div>

      <div className='d-flex m-2 justify-content-center'> 
        <Button className='m-2' color="danger" onClick={() => window.location.href = "/"}>
          Volver
        </Button>
        <Button className='m-2' color="success" onClick={()=>ventallave()}>Ventas</Button>
      </div>
    </div>
  )
}

export default Admin