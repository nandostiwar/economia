import React, { useState, useEffect } from 'react';
import './css/admin.css';

function TblUsuarios({ cabecera, data }) {
    const [datosTabla, setDatosTabla] = useState(null); // Cambia el estado inicial a null

    console.log(data);
    useEffect(() => {
        if (Array.isArray(data)) {
        const filasTabla = data.map((obj, index) => (
            <tr key={index}>
            <td style={{width:'200px'}}>
                <button onClick={eliminarUser}  id='btn_eliminar'>Eliminar</button>
            </td>
            <td>{obj.usuario}</td>
            <td>{obj.roles}</td>
            </tr>
        ));

        setDatosTabla(filasTabla);
        } else {
        console.error("data no es un array válido");
        setDatosTabla(null); // Restablece el estado a null en caso de error
        }
    }, [data]);


    
    const eliminarUser = () => {
        console.log("entro");
    };

    return (
        <div className="admin-container">
        <div className="buttons-container"></div>
        <table className="data-table">
            <thead>
            <tr>
                {cabecera.map((info, index) => (
                <th key={index}>{info}</th>
                ))}
            </tr>
            </thead>
            <tbody>{datosTabla}</tbody> {/* Renderiza datosTabla aquí */}
        </table>
        </div>
    );
    }

export default TblUsuarios;
