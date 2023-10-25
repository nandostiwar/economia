import React, { useState, useEffect } from 'react';
import './css/admin.css'
import ModalUser from './modals/ModalUser';
import TblUsuarios from './TblUsuarios';

function Admin() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const arrayHeder = ['', 'Usuario','Rol'];
    const [responseData, setResponseData] = useState({ datos: [] }); // Inicializa con una propiedad "datos" que es un array vacío

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Función que se ejecuta para consultar los datos
    const getUsuario = () => {
        // useEffect(() => {
        fetch(`http://localhost:3000/usuario/getUserAll`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setResponseData(data);

            });
        // }, []);
    }
    
    
    useEffect(() => {
    getUsuario();
    }, []);

    return (
    <div className="admin-container">
        <h1>Admin</h1>
        <div className="buttons-container">
        <button onClick={openModal}>Crear</button>
        
        <button>Botón 2</button>

        <ModalUser
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Usuario"
        >
        </ModalUser>
        
        </div>
        
        <TblUsuarios
            cabecera={arrayHeder}
            data={responseData}
        >
            
        </TblUsuarios>
    </div>
    );
}

export default Admin;
