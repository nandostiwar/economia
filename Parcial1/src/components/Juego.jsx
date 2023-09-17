import React from 'react'
import Buttons from './buttons';

function Juego() {

let vidas = 1
let win = 0
  const handleClick = (event) =>
        {

        const elementoClickeado = event.target;
        
        if(elementoClickeado.id == numero1 || elementoClickeado.id == numero2)
        {
            elementoClickeado.style.backgroundColor = "red"
            vidas--
        }
        else{

            elementoClickeado.style.backgroundColor = "green"
            win++
        }
        if(win==3)
        {
          alert("Ganaste")
          setTimeout(() => {
              location.reload();
            }, 1000);
        }
        if(vidas == 0)
        {
            alert("Perdiste")
            setTimeout(() => {
                location.reload();
              }, 1000);
        }
      
 
      }
const reload = (e) =>
{
    location.reload()
}

const Back = (e) =>
{
    window.location.href = "/";
}

 let numero1, numero2;

  do {
    numero1 = Math.floor(Math.random() * 5) + 1;
    numero2 = Math.floor(Math.random() * 5) + 1;
  } while (numero1 === numero2);

  

  return (
    <div>

        Juego

     
            <Buttons id="1" texto="1" funcion={handleClick}/>
            <Buttons id="2" texto="2" funcion={handleClick}/>
            <Buttons id="3" texto="3" funcion={handleClick}/>
            <Buttons id="4" texto="4" funcion={handleClick}/>
            <Buttons id="5" texto="5" funcion={handleClick}/>
        
        

            <Buttons id="replay" texto="Volver a jugar" funcion={reload}/>
            <Buttons id="back" texto="Regresar" funcion={Back}/>
        
    </div>
  )
}


export default Juego