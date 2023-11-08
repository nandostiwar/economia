import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './css/admin.css'
import TblDatos from './TblDatos';
import ModalVenta from './modals/ModalVenta';
import Modal from 'react-modal'; // Importa react-modal

function Mesero() {

    const arrayHederVenta = ['Producto','Cantidad'];// Array de cabecera de USUARIOS
    const [dataVenta, setDataVentas] = useState({ datos: [] }); // Array datos PRODUCTOS
    const [isModalOpenVenta, setIsModalOpenVenta] = useState(false);// Estado modal VENTAS

    const navigate = useNavigate();

    Modal.setAppElement('#root');

    //Funciones de modal venta
    const openModalVenta = () => {
        setIsModalOpenVenta(true);
    };

    const closeModalVenta = () => {
        setIsModalOpenVenta(false);
    };

    // Función que se ejecuta para consultar los datos de VENTAS
    const getVentas = () => {
        fetch(`http://localhost:3000/venta/getVentaAll`)
            .then(res => res.json())
            .then(data => {    
                setDataVentas(data);    
            });
    }

    const salir = () => {
        navigate("/");
    };

    useEffect(() => {
        getVentas();
    }, []);
    
    return (
    <div className="admin-container">
        <h1>Mesero</h1>
        <div className="buttons-container">
            <button onClick={openModalVenta}>Crear Venta</button>
            <button onClick={salir} className='btn_volver'>Salir</button>

            {/* Modal de ventas */}
            <ModalVenta
                isOpen={isModalOpenVenta}
                onClose={closeModalVenta}
                title="Ventas"
                ventas={getVentas}
                appElement="#root"
            />

            <TblDatos
                    cabecera={arrayHederVenta}
                    data={dataVenta}
                    estado={'venta'}
                />                     

        </div>
    </div>
    );
}

export default Mesero;
