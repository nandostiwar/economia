import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css';

function ModalVenta(props) {

    const [opciones, setOpciones] = useState(null); // Cambia el estado inicial a null
    const [cantidad, setCantidad] = useState('');// Almacena la cantidad 
    const [productoId, setProductoId] = useState('');// Almacena el id del producto

    // Función que se ejecuta para consultar los datos de PRODUCTOS
    const getProducto = () => {
        fetch(`http://localhost:3000/venta/getProdAll`)
            .then(res => res.json())
            .then(data => {   
                
                //crea las opciones para el select de PRODUCTOS
                const opcionSelect = data.map((obj, index) => (
                    <option key={index} value={obj.id_producto}>{obj.producto}</option>
                ));  
                setOpciones(opcionSelect);
            });
    };

    //Funcion que guarda las VENTAS
    const guardar = () => {
        if(cantidad !="" && productoId !=""){
            fetch(`http://localhost:3000/venta/createVenta`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({cantidad, productoId})
                })
                .then(res => res.json())
                .then(responseData => {
                    if(responseData.message == 'ok'){
                        alert("Usuario agregado");
                        props.onClose(); // Cierra el modal
                        props.ventas();
                    }
                });
            }else{
                alert("Hay campos vacios");
            }
        }

    useEffect(() => {
        getProducto();
    }, []);
        
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            className="react-modal" // Aplica la clase de estilos al modal
            overlayClassName="react-modal-overlay" // Aplica la clase de estilos al fondo del modal
        >

            <h2 style={{textAlign:'center'}} >{props.title}</h2>
            <div className="login-form">

                <div className="form-group">
                    <label htmlFor="email">Cantidad:</label>
                    <input
                    type="number"
                    id="cantidad"
                    onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto">Producto:</label>
                    <select onChange={(e) => setProductoId(e.target.value)}>
                        <option value="">Selecciona una opción</option>
                        {opciones}
                    </select>
                </div>
            
            <button onClick={props.onClose}>Cerrar</button>
            <button type="button" onClick={guardar}>Guardar</button>
        </div>
        </Modal>
        );
}

export default ModalVenta;

