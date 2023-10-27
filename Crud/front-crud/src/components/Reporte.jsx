import React, { useState, useEffect } from 'react';
import './css/admin.css';

function Reporte() {
    
    return (
        <div className="admin-container">
        <div className="buttons-container"></div>
        <table className="data-table">
            <thead>
            <tr>
                <th></th>
            </tr>
            </thead>
            <tbody>{datosTabla}</tbody> {/* Renderiza datosTabla aquí */}
        </table>
        </div>
    );
    }

export default Reporte;
