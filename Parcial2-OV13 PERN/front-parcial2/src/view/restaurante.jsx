import React, { useState,useEffect } from 'react'
import Ventas from '../componentes/ventas';
import 'bootstrap/dist/css/bootstrap.css';

function Restaurante() {

  const [opciones,setOpciones]=useState({})
  const [datosOpcion,setdatosOpcion] = useState()
  const [datosCanti,setdatosCanti] = useState()

  const [reload,setReload]=useState(true)
  const [contador,setContador]=useState(0)
    
  
  useEffect(()=>{
      if (contador < 5) {
        fetch(`http://localhost:3000/venta`)
          .then((response) => response.json())
          .then((responseData) => {
            setOpciones(responseData);
          });
  
        setContador(contador + 1);
      } else {
        setReload(false);
      }
    },[reload,contador]);

    const crearVenta = ()=>{
      if(datosCanti==="" && datosOpcion===""){
        alert("Debe ingresar una opcion y la cantidad de producto a comprar");
      }else{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "producto": datosOpcion, "cantidad":datosCanti}) 
        };
        fetch(`http://localhost:3000/venta`, requestOptions)
        .then(response => {
              return response.json();
          })
        .then(ResponseData=>{
            console.log(ResponseData)
          })
        .catch(error => {
              console.error('Error:', error);
          });
        
          alert("La venta fue exitosa")
      }
      setdatosCanti("")
      setdatosOpcion("")
    }

  return (
    <div>
        {<Ventas 
          opci={opciones}
          setOpci={setdatosOpcion}
          vlop={datosOpcion}
          setcant={setdatosCanti}
          vlca={datosCanti}
          click={crearVenta}
        />}
        <div>
          <button className="btn btn-danger m-2" onClick={() => window.location.href = "/"}>
          Volver
          </button>
        </div>
    </div>
  )
}

export default Restaurante