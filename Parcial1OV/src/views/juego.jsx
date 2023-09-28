import React,{useState,useEffect} from 'react'
import Mina from '../Comp/mina';
import "./juego.css"
import explo from "../recursos/explosion.png"
import mono from "../recursos/mono.png"
import botonJuego from "../recursos/boton.png"

function Juego() {

    const [mensaje, setMensaje] = useState("")
    const [botones, setBotones] = useState([])
    const[color,setColor] = useState(false)

    
    const botonesArray = [
      {valor: 0, color:"red",img:explo},
      {valor: 1, color:"green",img:mono },
      {valor: 1, color:"green",img:mono },
      {valor: 1, color:"green",img:mono },
      {valor: 0, color:"red",img:explo },
    ]

      useEffect(() => {
        const botonesAleatorios = [...botonesArray].sort(() => Math.random() - 0.5)
        setBotones(botonesAleatorios)
      }, []);

    const regresar =()=>{
        window.location="/"
    } 
    const volverAJugar = () => { 
        setColor(false); 
        const botonesAleatorios = [...botonesArray].sort(() => Math.random() - 0.5)
        setBotones(botonesAleatorios)
        setMensaje("");
      };
    const handleClick = (valor) => {
        setColor(true);
        if (valor === 0) {
          setMensaje("¡Perdiste!")
        } else {
          setMensaje("¡Ganaste!")
        }
      };



  return (
    <div className='juegoView'>
      
      <div>

          <h1>Juego de Busca minas</h1>
          <h3>Posición aleatoria de minas entre: 1 y 5</h3>
          <div>
              {botones.map((boton) => (
                <Mina btn={()=>handleClick(boton.valor)} 
                img={color===false?botonJuego:boton.img}
                color={color===false?{background:"grey"}:{background:boton.color}}/>
            ))}
           
          </div>

          <div>
              <p>{mensaje}</p>
          </div>

          <button type="button" onClick={volverAJugar}>Volver a jugar</button>
          <button type="button" onClick={regresar}>Regresar</button>
        
      </div>
    </div>
  )
}

export default Juego