import React, { useState } from 'react'
import Venta from './venta';
import { useNavigate } from 'react-router-dom';
import './Waiter.css'



function Waiter() {

    const nav = useNavigate();

    const [id, setID] = useState("");
    const [cantidad, setCantidad] = useState("");
    // const [productoVenta, setProductoVenta] = useState([]);
    
    


    const handleChangeID = (e) =>
    {
        setID(e.target.value);
    }
    const handleChangeCant = (e) =>
    {
        setCantidad(e.target.value);
    }

    


    const upload = async (e) =>
    {

        e.preventDefault();
        
        try {
            await fetch(`http://localhost:5000/create_order`,
            {
                method:'POST',
                headers:
                {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(
                    {
                        ID:id,
                        amount:cantidad           
                    }
                )
            })
            .then(response => {if(response.ok){console.log("Venta hecha")}else{alert("Algo ha salido mal")}})

        } catch (error) {
            
        }
    }

    
    const handleBack = () => 
    {
        nav('/')
    }

  return (
    <div className='grid-containing'>

        <div className='header'>

        <h1>Bienvenido</h1>

        </div>

    <div className='menu4'>

        <button id='venta'>Nueva venta</button>
        
    </div>

    <div className='menu3'>
        <button id='cancela'>Cancelar venta</button>
    </div>

    <div className='back'>
    <button id='regresa' onClick={handleBack}>Regresar al login</button>
    </div>

    <div className='right'>


        {/*DIV DE COMPONENTES*/}
        <Venta />

        <br></br>
        
        <form onSubmit={upload}>
        
        <label>ID</label>
        <input type='number' onChange={handleChangeID}></input>
        <br></br>
        <label>cantidad</label>
        <input type='number' onChange={handleChangeCant}></input>
        <br></br>
        <button type='submit'>Añadir producto</button>
    <br></br>

        {/* <label>{`${productoVenta.product_id}`}</label> */}
        
        </form>

    </div>
       

        
    </div>
  )
}

export default Waiter