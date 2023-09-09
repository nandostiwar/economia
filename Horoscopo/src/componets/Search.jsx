import horoscopo from '../data.js/horoscopo';
import Login from './login';
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import './search.css';

function Search() {

    const [opcion, setOpcion] = useState("");
    const [descripcion, setDescripcion] = useState('');
    const [op, setOp] = useState(false);
    // const history = useHistory(); // Obtiene el objeto history

    const buscar = (event) =>{
        if(opcion){
            const desc = horoscopo.find((signo) => signo.id == opcion);
            setDescripcion(desc.descripcion);
            setOp(false);
        }else{
            setDescripcion("");
            setOp(true);
        } 
    };

    const atras = () => {
        // Redirige al usuario a la ruta de inicio de sesión
        // history.push("/login");
    };

    return (
    <div className="search-container">
        <select id="options" value={opcion} onChange={(e) => setOpcion(e.target.value)}>
            <option value="">Selecciona una opción</option>

            {horoscopo.map((d) => (
            <option key={d.id} value={d.id}>
                {d.nombre}
            </option>
            ))}
            
        </select>
        <textarea value={descripcion} placeholder="Escribe algo aquí..."></textarea>

        <button onClick={buscar}>Buscar</button>
        <button onClick={atras}>Atras</button>
        {op && <p>Debe selccionar una opcion</p>}
    </div>
    );
}

export default Search;