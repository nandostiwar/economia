import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';

function ModalProducto(props) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const guardar = () => {
        if(nombre !="" && precio !=""){
            fetch(`http://localhost:3000/producto/createProducto`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({nombre, precio})
                })
                .then(res => res.json())
                .then(responseData => {

                    if(responseData.message == 'ok'){
                        alert("Producto agregado");
                        props.onClose(); // Cierra el modal
                    }
                });
            }else{
                alert("Hay campos vacios");
            }
        }

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
                <label htmlFor="email">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="email">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        onChange={(e) => setPrecio(e.target.value)}
                    />
            </div>
        
        <button onClick={props.onClose}>Cerrar</button>
        <button type="button" onClick={guardar}>Guardar</button>
    </div>
    </Modal>
    );
}

export default ModalProducto;

