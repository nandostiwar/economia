import React, { useState, useEffect } from 'react';
import './css/admin.css';

function TblDatos({ cabecera, data, estado }) {
    const [datosTabla, setDatosTabla] = useState(null); // Cambia el estado inicial a null

    useEffect(() => {
        if(estado == 'usuarios'){
            //Array de datos para llenar la tabla USUARIOS
            if (Array.isArray(data)) {
            const filasTabla = data.map((obj, index) => (
                <tr key={index}>
                    <td style={{width:'200px'}}>
                        {/* <button onClick={() => eliminarDato('usuario',obj.id)} id='btn_eliminar'>Eliminar</button> campo de posgres */}
                        <button onClick={() => eliminarDato('usuario',obj._id)} id='btn_eliminar'>Eliminar</button>
                    </td>
                    <td>{obj.usuario}</td>
                    <td>{obj.rol}</td>
                </tr>
            ));
            // Filtra elementos nulos o indefinidos
            const filasFiltradas = filasTabla.filter((fila) => fila);

            setDatosTabla(filasFiltradas);
            } else {
                console.log("data no es un array válido");
                setDatosTabla(null); // Restablece el estado a null en caso de error
            }
        }else if(estado == 'producto'){
            //Array de datos para llenar la tabla PRODUCTOS
            if (Array.isArray(data)) {
            const filasTabla = data.map((obj, index) => (
                <tr key={index}>
                    <td style={{width:'200px'}}>
                        {/* <button onClick={() => eliminarDato('producto',obj.id)} id='btn_eliminar'>Eliminar</button> campo de posgres */}
                        <button onClick={() => eliminarDato('producto',obj._id)} id='btn_eliminar'>Eliminar</button>
                    </td>
                    <td>{obj.producto}</td>
                    <td>{obj.precio}</td>
                </tr>
            ));

            // Filtra elementos nulos o indefinidos
            const filasFiltradas = filasTabla.filter((fila) => fila);
            setDatosTabla(filasFiltradas);
            } else {
                console.log("data no es un array válido");
                setDatosTabla(null); // Restablece el estado a null en caso de error
            }
        }else if(estado == 'venta'){
            //Array de datos para llenar la tabla VENTAS
            if (Array.isArray(data)) {
            const filasTabla = data.map((obj, index) => (
                <tr key={index}>
                    <td>{obj.producto}</td>
                    <td>{obj.cantidad}</td>
                </tr>
            ));

            // Filtra elementos nulos o indefinidos
            const filasFiltradas = filasTabla.filter((fila) => fila);
            setDatosTabla(filasFiltradas);
            } else {
                console.log("data no es un array válido");
                setDatosTabla(null); // Restablece el estado a null en caso de error
            }
        }
    }, [data,estado]);
    
    // Función genérica para eliminar un registros
    const eliminarDato = (tipo, id) => {
        const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar este ${tipo}?`);

        if (confirmacion) {
            fetch(`http://localhost:3000/${tipo}/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(responseData => {
                    if (responseData.estado === 'ok') {
                        alert(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} Eliminado`);
                        window.location.reload();
                    }
                });
        } else {
            console.log(`No se realizó la eliminación de ${tipo}.`);
        }
    };

    return (
        <div className="admin-container">
            <table className="data-table">
                <thead>
                <tr>
                    {cabecera.map((info, index) => (
                    <th key={index}>{info}</th>
                    ))}
                </tr>
                </thead>
                <tbody>{datosTabla}</tbody>
            </table>
        </div>
    );
    }

export default TblDatos;
