import React, { useState, useEffect } from 'react';
import './css/admin.css'
import ModalUser from './modals/ModalUser';
import TblDatos from './TblDatos';
import ModalProducto from './modals/ModalProducto';

function Admin() {

    const [activeTab, setActiveTab] = useState(0);// Estado del tab
    const [isModalOpenUser, setIsModalOpenUser] = useState(false);// Estado modal USUARIOS
    const [isModalOpenPro, setIsModalOpenPro] = useState(false);// Estado modal PRODUCTOS
    const arrayHederUsu = ['', 'Usuario','Rol'];// Array de cabecera de USUARIOS
    const arrayHederProd = ['', 'Producto','Precio'];// Array de cabecera de Productos
    const [dataUsu, setDataUsu] = useState({ datos: [] }); // Array datos USUARIOS
    const [dataprod, setDataProd] = useState({ datos: [] }); // Array datos PRODUCTOS

    //Funciones de modal User
    const openModalUser = () => {
        setIsModalOpenUser(true);
    };

    const closeModalUser = () => {
        setIsModalOpenUser(false);
    };


    //Funciones de modal productos
    const openModalProduct = () => {
        setIsModalOpenPro(true);
    };

    const closeModalPro = () => {
        setIsModalOpenPro(false);
    };


    // Función que se ejecuta para consultar los datos de USUARIOS
    const getUsuario = () => {
        // useEffect(() => {
        fetch(`http://localhost:3000/usuario/getUserAll`)
            .then(res => res.json())
            .then(data => {
                setDataUsu(data);
            });
        // }, []);
    }

        // Función que se ejecuta para consultar los datos de PRODUCTOS
        const getProducto = () => {
            // useEffect(() => {
            fetch(`http://localhost:3000/producto/getProduAll`)
                .then(res => res.json())
                .then(data => {    
                    setDataProd(data);    
                });
            // }, []);
        }
    
    //activa el tab
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    useEffect(() => {
        getUsuario();
        getProducto();
    }, []);

    return (
    <div className="admin-container">
        <h1>Admin</h1>
        <div className="buttons-container">
            <button onClick={openModalUser}>Crear Usuario</button>
            
            <button onClick={openModalProduct}>Crear Producto</button>


            <div className="tab-buttons">
                <button onClick={() => handleTabClick(0)} className={`tab-button ${activeTab === 0 ? 'active' : ''}`}>Tabla Usuario</button>
                <button onClick={() => handleTabClick(1)} className={`tab-button ${activeTab === 1 ? 'active' : ''}`}>Tabla Producto</button>
            </div>

            {/* Modal de usuario */}
            <ModalUser
            isOpen={isModalOpenUser}
            onClose={closeModalUser}
            title="Usuarios"
            />

            {/* Modal de Productos */}
            <ModalProducto
            isOpen={isModalOpenPro}
            onClose={closeModalPro}
            title="Productos"
            />
        
        </div>
        
        <div className="tab-content">
            {activeTab === 0 &&
                <TblDatos
                    cabecera={arrayHederUsu}
                    data={dataUsu}
                    estado={'usuarios'}
                />           
            }
            {activeTab === 1 && 
                <TblDatos
                    cabecera={arrayHederProd}
                    data={dataprod}
                    estado={'producto'}
                />      
            }
        </div>


    </div>
    );
}

export default Admin;
