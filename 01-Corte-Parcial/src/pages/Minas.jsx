import { useEffect ,useState } from 'react';
import '../styles/App.css'
import CardMina from "../components/Card"
import CardTwo from '../components/CardTwo';

const Minas = () => {
    const numeros = [1, 2, 3, 4, 5];
    const [perdiste, setPerdiste] = useState(false);
    const [minas, setMinas] = useState([]);

    const noGanaste = (mina) => {
        if (mina) {
            setPerdiste(true);
        }
    };

    useEffect(() => {
        // Función para generar aleatoriamente las posiciones de las minas
        const generarMinas = () => {
            const indicesAleatorios = [];
            while (indicesAleatorios.length < 2) {
                const randomIndex = Math.floor(Math.random() * numeros.length);
                if (!indicesAleatorios.includes(randomIndex)) {
                    indicesAleatorios.push(randomIndex);
                }
            }
            setMinas(indicesAleatorios);
        };

        // Llamar a la función de generación de minas cuando se monta el componente
        generarMinas();
    }, []); // El arreglo vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

    const cartas = numeros.map((num, idx) => {
        const tieneMina = minas.includes(idx);
        return <CardMina key={idx} numero={num} mine={tieneMina} funcionExplotar={noGanaste} />;
    });

    return (
        <div className="contenedor-cartas">
            <h2> Busca Minas </h2>
            <div>
                {cartas}
            </div>
            
            {perdiste && (
                <>
                    <h2>Perdiste</h2>
                    <button onClick={() => setPerdiste(false)}>Intenta Nuevamente</button>
                </>
            )}
        </div>
    )
}

export default Minas


{/*let meseros = [
    { nombre: "Javier", apellido: "Hernandez", edad: 20 },
    { nombre: "David", apellido: "Guzman", edad: 20 },
    { nombre: "Jhon", apellido: "Garcia", edad: 20 },
]
*/}
{/*{meseros.map((mesero, idx) => <CardTwo key={idx}  index={idx} nombre={mesero.nombre} apellido={mesero.apellido} />)}*/}





{/*const numeros = [1, 2, 3, 4, 5];
const [perdiste, setPerdiste] = useState(false);

const noGanaste = (mina) => {
    if (mina) {
        setPerdiste(true);
    }
};

// Crear un arreglo de índices aleatorios
const indicesAleatorios = [];
while (indicesAleatorios.length < 2) {
    const randomIndex = Math.floor(Math.random() * numeros.length);
    if (!indicesAleatorios.includes(randomIndex)) {
        indicesAleatorios.push(randomIndex);
    }
}

const cartas = numeros.map((num, idx) => {
    const tieneMina = indicesAleatorios.includes(idx);
    return <CardMina key={idx} numero={num} mine={tieneMina} funcionExplotar={noGanaste} />;
});*/}



{/*
----------------------------------------------------------------------------------------------------------------------------------------

Funcional por jonathan jazpi Pendiente modificaciones

const numeros = [1, 2, 3, 4, 5];
const [perdiste, setPerdiste] = useState(false)

const noGanaste = (mina) => {
    if (mina) {
        setPerdiste(true)
    }
}

const cartas = numeros.map((num, idx) => {
    let randomNumber = Math.floor(Math.random() * numeros.length)
    console.log(   ` los numeros son: ${num}
                     los numeros que tienen mina son: ${randomNumber}`)
    let tieneMina;
    if (randomNumber % 2 === 1) tieneMina = true
    else tieneMina = false
    return <CardMina key={idx} numero={num} mine={tieneMina} funcionExplotar={noGanaste} />
})

----------------------------------------------------------------------------------------------------------------------------------------
*/}



{/*

const numeros = [1, 2, 3, 4, 5];
    const [perdiste, setPerdiste] = useState(false);
    const [minas, setMinas] = useState([]);

    const noGanaste = (mina) => {
        if (mina) {
            setPerdiste(true);
        }
    };

    useEffect(() => {
        // Función para generar aleatoriamente las posiciones de las minas
        const generarMinas = () => {
            const indicesAleatorios = [];
            while (indicesAleatorios.length < 2) {
                const randomIndex = Math.floor(Math.random() * numeros.length);
                if (!indicesAleatorios.includes(randomIndex)) {
                    indicesAleatorios.push(randomIndex);
                }
            }
            setMinas(indicesAleatorios);
        };

        // Llamar a la función de generación de minas cuando se monta el componente
        generarMinas();
    }, []); // El arreglo vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

    const cartas = numeros.map((num, idx) => {
        const tieneMina = minas.includes(idx);
        return <CardMina key={idx} numero={num} mine={tieneMina} funcionExplotar={noGanaste} />;
    });

*/}







