import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './css/admin.css'
import ModalUser from './modals/ModalUser.jsx';
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

    const navigate = useNavigate();

    //abre el  modal User
    const openModalUser = () => {
        setIsModalOpenUser(true);
    };

    //cierra el modal User
    const closeModalUser = () => {
        setIsModalOpenUser(false);
    };


    //abre el modal producto
    const openModalProduct = () => {
        setIsModalOpenPro(true);
    };

    //cierra el modal producto
    const closeModalPro = () => {
        setIsModalOpenPro(false);
    };


    // Función que consulta los datos de USUARIOS
    const getUsuario = () => {
        fetch(`http://localhost:3000/usuario/getUserAll`)
            .then(res => res.json())
            .then(data => {
                setDataUsu(data);
            });
    }

    // Función que se ejecuta para consultar los datos de PRODUCTOS
    const getProducto = () => {
        fetch(`http://localhost:3000/producto/getProduAll`)
            .then(res => res.json())
            .then(data => {    
                setDataProd(data);    
            });
    }
    
    //activa el tab
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    //funcion de regresar al login
    const atras = () => {
        navigate("/");
    };

    const reporte = () =>{
        navigate("/reporte");
    }

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

            <button className='btn_volver' onClick={atras}>Salir</button>
            <button className='btn_reporte' onClick={reporte}>Ver reporte</button>

            {/* Modal de usuario */}
            <ModalUser
            isOpen={isModalOpenUser}
            onClose={closeModalUser}
            user={getUsuario}
            title="Usuarios"
            />

            {/* Modal de Productos */}
            <ModalProducto
            isOpen={isModalOpenPro}
            onClose={closeModalPro}
            produ={getProducto}
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