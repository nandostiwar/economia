import horoscopo from '../data.js/horoscopo';
import React, { useState } from "react";
import './admin.css';

function Admin() {
    const [opcion, setOpcion] = useState("");
    const [descripcion, setDescripcion] = useState('');
    const [op, setOp] = useState(false);

    const buscar = (event) => {
        if (opcion) {
            const desc = horoscopo.find((signo) => signo.id == opcion);
            setDescripcion(desc.descripcion);
            setOp(false);
        } else {
            setDescripcion("");
            setOp(true);
        }
    };

    const guardar = () => {
        // Encuentra el índice del signo del horóscopo correspondiente en el array
        const signoIndex = horoscopo.findIndex((signo) => signo.id == opcion);

        if (signoIndex !== -1) {
            // Crea una copia del array horoscopo para evitar mutaciones directas
            const horoscopoActualizado = [...horoscopo];

            // Actualiza la descripción del signo en la copia
            horoscopoActualizado[signoIndex].descripcion = descripcion;

            setDescripcion("");
        } else {
            // Maneja el caso donde no se encuentra un signo correspondiente
            setDescripcion("No se encontró el signo correspondiente.");
        }
    };

    return (
        <div className="search-container">
            <select
                id="options"
                value={opcion}
                onChange={(e) => setOpcion(e.target.value)}>
                <option value="">Selecciona una opción</option>

                {horoscopo.map((d) => (
                    <option key={d.id} value={d.id}>
                        {d.nombre}
                    </option>
                ))}

            </select>
            <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)} // Agregamos el onChange para permitir la edición del textarea
                placeholder="Escribe algo aquí..."
            ></textarea>

            <button onClick={buscar}>Buscar</button>

            <button onClick={guardar}>Guardar</button>

            {op && <p>Debe seleccionar una opcion</p>}
        </div>
    );
}

export default Admin;
