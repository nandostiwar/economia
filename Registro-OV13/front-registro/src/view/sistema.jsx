import React, { useEffect, useState } from 'react'
import './sistema.css'
import {Modal,ModalHeader,ModalFooter,ModalBody} from 'reactstrap'




function Sistema() {

    const [registro,setRegistros]=useState(
        {id:0,
        nombre:"",
        edad:"",
        cedula:"",
        correo:""
    });
    const [datos,setDatos] = useState([])
    const [mostra,setmostrar] = useState(false)
    const [reload,setReload] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:4000/v1/registro`)
        .then(response => response.json())
        .then(ResponseData => {
        setDatos(ResponseData)
        console.log(ResponseData)
      })
      .catch((error)=>{
        console.error("Error",error)
      })

      setReload(false)

    },[reload])

    const cambio = (e)=>{
        const {name , value} = e.target
        setRegistros({...registro, [name]:value})
    }

    const llaveModal = ()=>{
       if(datos===""){
        alert("No hay registros")
       }else{
        setmostrar(!mostra)
        console.log(mostra)
       }  
    }


    const registrar = ()=>{
        if(registro.nombre === "" || registro.cedula === "" || registro.correo === ""){
            return alert("llenar todos los campos")
        }
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "datos": registro}) 
          };

          fetch(`http://localhost:4000/v1/registro/${registro.id}`, requestOptions)
            .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud PATCH');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setRegistros({id:0,
                nombre:"",
                edad:"",
                cedula:"",
                correo:""
            })
            setReload(true)
        }

  return (
   <div className='cuerpo-registro'>
        
        <h1>Zona de registro</h1>

        <div>
            <h4>Nombre</h4>
            <input type="text" name='nombre'
            value={registro.nombre}
            onChange={cambio} />
        </div>
        <div>
            <h4>Edad</h4>
            <input type="number" name='edad'
            value={registro.edad}
            onChange={cambio} />
        </div>
        <div>
            <h4>Cedula</h4>
            <input type="number" name='cedula'
            value={registro.cedula}
            onChange={cambio} />
        </div>
        <div>
            <h4>Correo</h4>
            <input type="Correo" name='correo'
            value={registro.correo}
            onChange={cambio} />
        </div>

        
        <div>
            <button onClick={registrar}>Registrar</button>
            <button onClick={llaveModal}>Mostrar</button>
        </div>
        <div className='Modal'> 
            <Modal isOpen={mostra} toggle={llaveModal} 
            style={{background:"#d8ecea", borderRadius:"20px", marginLeft:"10px", padding:"20px"}}>
                <ModalHeader>{<h1>Lista de registros</h1>}</ModalHeader>
                <ModalBody>
                    <table border={"1"}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>CEDULA</th>
                                <th>CORREO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((e)=>(
                                <tr>
                                    <th>{e.id}</th>
                                    <th>{e.nombre}</th>
                                    <th>{e.cedula}</th>
                                    <th>{e.correo}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </ModalBody>
                <ModalFooter>
                    <button type="button" onClick={llaveModal}>Cerrar</button>
                </ModalFooter>
            </Modal>
        </div>
        
   </div>
  )
}

export default Sistema