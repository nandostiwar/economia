import React,{useState,useEffect} from 'react'

function Juego() {

    const [mensaje, setMensaje] = useState("");
    const [botones, setBotones] = useState([]);
    const[color,setColor] = useState(false)

    useEffect(() => {
        const botonesArray = [
          { id: 1, valor: 0, color:"red" },
          { id: 2, valor: 1, color:"green" },
          { id: 3, valor: 1, color:"green" },
          { id: 4, valor: 1, color:"green" },
          { id: 5, valor: 0, color:"red" },
        ];
        const botonesAleatorios = [...botonesArray].sort(() => Math.random() - 0.5);
    
        setBotones(botonesAleatorios);
      }, []);
    
    
    const regresar =()=>{
        window.location="/";
    } 
    const volverAJugar = () => {
        window.location.reload();
      };
    const handleClick = (valor) => {
        setColor(true);
        if (valor === 0) {
          setMensaje("¡Perdiste!");
        } else {
          setMensaje("¡Ganaste!");
        }
      };



  return (
    <div style={{textAlign:"center"}}>
        <h1>Juego de Busca minas</h1>
        <h3>Posición aleatoria de minas entre: 1 y 5</h3>
        <div>
            {botones.map((boton) => (
                <button
                type="button"
                onClick={() => handleClick(boton.valor)}
                >Mina?</button>
        ))}
        </div>

        <div>
            <p>{mensaje}</p>
        </div>

        <button type="button" onClick={volverAJugar}>Volver a jugar</button>
        <button type="button" onClick={regresar}>Regresar</button>
    </div>
  )
}

export default Juego