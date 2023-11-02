import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';

function ModalUser(props) {

    const [user, setUser] = useState('');
    const [rol, setRol] = useState('');

    const guardar = () => {
        if(user !="" && rol !=""){
            fetch(`http://localhost:3000/usuario/createUser`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({user, rol})
                })
                .then(res => res.json())
                .then(responseData => {

                    // if(responseData.message == 'ok'){ //validacion posgres
                    if(responseData.status == 'ok'){ //validacion mongo
                        alert("Usuario agregado");
                        props.onClose(); // Cierra el modal
                        props.user(); 
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
                <label htmlFor="email">Usuario:</label>
                <input
                type="email"
                id="email"
                onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Rol:</label>
                <select onChange={(e) =>setRol(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Admin</option>
                    <option value="2">Mesero</option>
                </select>
            </div>
        
        <button onClick={props.onClose}>Cerrar</button>
        <button type="button" onClick={guardar}>Guardar</button>
    </div>
    </Modal>
    );
}

export default ModalUser;

