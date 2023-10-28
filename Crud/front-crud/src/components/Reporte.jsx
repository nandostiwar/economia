import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './css/admin.css';

function Reporte() {
    const [responseData, setResponseData] = useState([]);
    const [total, setTotal] = useState('');

    const navigate = useNavigate();

    //consulta los datos para el reporte 
    const getReporte = () => {
        fetch(`http://localhost:3000/venta/getReporte`)
            .then(res => res.json())
            .then(data => {
                setTotal(data[0]['total']);
                setResponseData(data);
            });
    }


    const volver = () =>{
        navigate("/admin");
    }

    useEffect(() => {
        getReporte();
    }, []);

    return (
        <div className="admin-container">
            <button className='btn_reporte' onClick={volver}>Volver</button>
            <h1>Reporte</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Sub total</th>
                    </tr>
                </thead>
                <tbody>
                {responseData.map((dato, index) => (
                    <tr key={index}>
                    <td>{dato.producto}</td>
                    <td>{dato.cantidad}</td>
                    <td>{dato.precio}</td>
                    <td>{dato.sub_total}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2 style={{textAlign:'right'}}>Total: {total}</h2>
        </div>
    );
}

export default Reporte;
