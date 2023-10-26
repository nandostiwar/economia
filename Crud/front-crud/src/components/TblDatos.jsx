import React, { useState, useEffect } from 'react';
import './css/admin.css';

function TblUsuarios({ cabecera, data, estado }) {
    const [datosTabla, setDatosTabla] = useState(null); // Cambia el estado inicial a null

    if(estado == 'usuarios'){

        //Array de datos para llenar la tabla USUARIOS
        useEffect(() => {
            if (Array.isArray(data)) {
            const filasTabla = data.map((obj, index) => (
                <tr key={index}>
                <td style={{width:'200px'}}>
                    <button onClick={() => eliminarUser(obj.id)} id='btn_eliminar'>Eliminar</button>
                </td>
                <td>{obj.camp_1}</td>
                <td>{obj.camp_2}</td>
                </tr>
            ));

            setDatosTabla(filasTabla);
            } else {
            console.error("data no es un array válido");
            setDatosTabla(null); // Restablece el estado a null en caso de error
            }
        }, [data]);

    }else if(estado == 'producto'){
            //Array de datos para llenar la tabla PRODUCTOS
            useEffect(() => {
            if (Array.isArray(data)) {
            const filasTabla = data.map((obj, index) => (
                <tr key={index}>
                <td style={{width:'200px'}}>
                    <button onClick={() => eliminarProd(obj.id)} id='btn_eliminar'>Eliminar</button>
                </td>
                <td>{obj.camp_1}</td>
                <td>{obj.camp_2}</td>
                </tr>
            ));

            setDatosTabla(filasTabla);
            } else {
            console.error("data no es un array válido");
            setDatosTabla(null); // Restablece el estado a null en caso de error
            }
        }, [data]);
    }

    //Funcion que elimina un USUARIOS
    const eliminarUser = (id) => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");

        if (confirmacion) {
            fetch(`http://localhost:3000/usuario/delete/${id}`, {
                method: 'DELETE'
                })
                .then(res => res.json())
                .then(responseData => {
                    if(responseData.estado == 'ok'){
                        window.location.reload();
                        alert("Usuario Eliminado");
                    }
            });
        } else {
            console.log("No se realizó la eliminación.");
        }
    };

    //Funcion que elimina un PRODUCTOS
    const eliminarProd = (id) => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");

        if (confirmacion) {
            fetch(`http://localhost:3000/producto/delete/${id}`, {
                method: 'DELETE'
                })
                .then(res => res.json())
                .then(responseData => {
                    if(responseData.estado == 'ok'){
                        window.location.reload();
                        alert("Producto Eliminado");
                    }
            });
        } else {
            console.log("No se realizó la eliminación.");
        }
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
