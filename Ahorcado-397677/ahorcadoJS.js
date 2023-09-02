 const palabra_Adivinar = document.getElementById("palabra-adivinar")

 const seleccionar_palabra = document.getElementById("Seleccionar-palabra")

 const Btn_establecer = document.getElementById("Confirmar-palabra")

 const section_adivinar = document.getElementById("Adivinar-palabra-sec")

 const letra_guess = document.getElementById("letra-results")

 const Btn_adivinar = document.getElementById("guess")

 const pon_cajas =document.getElementById("cajas")

 const sec_coras = document.getElementById("sec-coras")

 const sec_well = document.getElementById("sec-well")



 const boy = document.getElementById("boy")

 let vidasSpan = document.getElementById("vidas-jugador")

 let vidas = 5

 let cant_coras =""

 let cant_well='<img src="./sprites/ExportedIcons/Icon_Crown.png" class="hearth">'

 let letras = []

 let num_cajas =""

 let pulsada = []

 Btn_establecer.addEventListener('click', cajas)


 var aud = document.getElementById("sound")

 aud.src=`./sounds/music/mp3/Ambient ${aleatorio(1,10)}.mp3`
 aud.volume = 0.6;
 aud.loop = true;
 aud.play();

 const turn = document.getElementById("turn_music")

 turn.addEventListener('click', music)

 var on = new Audio()

 function sfx(source)
 {
on = new Audio()
    on.src = source
        document.getElementById(on)
        on.volume = 1;
        on.play();
 }


function aleatorio(min, max)
{
    
    return Math.floor(Math.random() * (max - min + 1) + min)
}


 function music()
 {
    console.log("entro")
    
    
    
    if(aud.paused)
    {
        aud.play();
        turn.src="./sprites/ExportedIcons/Icon_SoundOn.png"

        sfx("./sounds/sfx/Casual Fx Shot/Electronic bip 7.wav")
    }
    else{
        aud.pause();
        turn.src="./sprites/ExportedIcons/Icon_SoundOff.png"

        on.src = "./sounds/sfx/Casual Fx Shot/Electronic bip 8.wav"
        document.getElementById(on)
        on.volume = 1;
        on.play();
    }
 }

 


 function cajas()
 {
    if(palabra_Adivinar.value.length >0)
    {
    let contador=0
    num_cajas =""
    pon_cajas.innerHTML= num_cajas

    for (let i = 0; i < palabra_Adivinar.value.length; i++) 
    {
        contador = i
        num_cajas += `<input id=${i} class="casilla" style="width: 10px;" maxlength="1" type="text"  placeholder ="?"readonly>`  
        
    }

    console.log(num_cajas)
    
    pon_cajas.innerHTML += num_cajas

    iniciarJuego()
}
else
{
    sfx("./sounds/sfx/Casual Fx Shot/wind down 1.wav")
    setTimeout(() => {
        console.log("1 Segundo esperado");
        alert("Debes escribir almenos una letra!");
 
      }, 300);
    
}

    
 }

 function iniciarJuego()
 {
    seleccionar_palabra.style.display = 'none'
    section_adivinar.style.display = 'flex'
    section_adivinar.style.flexDirection = 'column'
    sfx("./sounds/sfx/Casual Fx Shot/wind up 3.wav")
    
    vidasSpan.innerHTML = vidas
    

    obtener()

    Btn_adivinar.addEventListener('click', validar)
    
 }

 function obtener()
 {

    for (let i = 0; i < palabra_Adivinar.value.length; i++) 
    {
        
        letras.push(palabra_Adivinar.value.substring(i,i+1))
        
    }
    //console.log(letras)

 }

 

 function validar()
 {
  
    if(letra_guess.value.length>0)
    {
    
        if(pulsada.includes(letra_guess.value)==false)
        {
            
            pulsada.push(letra_guess.value)
            

            if(palabra_Adivinar.value.includes(letra_guess.value))
                {
                //console.log(palabra_Adivinar.value.includes(letra_guess.value))
                sec_well.innerHTML+=cant_well
                sfx("./sounds/sfx/Casual Fx Shot/harp jingle.wav")
            

                    for (let i = 0; i < letras.length; i++) 
                    {

                        for (let j = 0; j < letras.length; j++) 
                        {
                    
                            if(letras[i] == letra_guess.value)
                            {                    
                            document.getElementById(i).value = letra_guess.value
                            
                            }
                    
                        }
        
                    }
                    
                
                }

            else
            {
            console.log(palabra_Adivinar.value.includes(letra_guess.value))
            gestion()
            } 
        
        }
    else{
        alert("Ya habias puesto esta letra!")
    }
    victoria()
}
else
{
    sfx("./sounds/sfx/Casual Fx Shot/wind down 1.wav")
    setTimeout(() => {
        console.log("1 Segundo esperado");
        alert("Debes escribir almenos una letra!");
 
      }, 300);
} 
}

    
 

 function victoria()
 {
    let gana = false
    console.log("vic")
    
    for (let index = 0; index != letras.length; index++) 
    {
        
        if(document.getElementById(index).value != '')
        {
            gana = true
        }
        else
        {
            gana =false
            break;
        }
        
    }
    if(gana)
    {

        sfx("./sounds/sfx/Casual Fx Shot/Orchestra swell 2.wav")
        setTimeout(() => {
            console.log("1 Segundo esperado");
            alert("Ganaste!");
            location.reload();
          }, 3000);
    }
 }

 function gestion()
 {
    vidas--
    sfx("./sounds/sfx/Casual Fx Shot/Electronic down bip.wav")
    vidasSpan.innerHTML = vidas
    condicion()
 }


 
let phase =``
 function condicion()
 {

    switch(vidas)
    {
        case 5: cant_coras = `
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">`
        
        phase = `<img src="./sprites/Boy/0.png">`

        break;
        
        case 4: cant_coras = `
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">`

        phase = `<img src="./sprites/Boy/4.png">`

        break;
        case 3: cant_coras = `
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">`

        phase = `<img src="./sprites/Boy/3.png">`

        break;
        case 2: cant_coras = `
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">`

        phase = `<img src="./sprites/Boy/2.png">`

        break;
        case 1: cant_coras = `
        <img src="./sprites/ExportedIcons/Icon_Heart.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        <img src ="sprites/ExportedIcons/Icon_Ghost.png" class="hearth">
        `
        phase = `<img src="./sprites/Boy/1.png">`
        sfx("./sounds/sfx/Casual Fx Shot/string Thrill.wav")

        break;
        case 0: cant_coras = `
        <img src = "./sprites/ExportedIcons/Icon_Skull.png" class="hearth">
        `
        phase = `<img src="./sprites/Boy/lose.png">`
        break;
      
    }
    sec_coras.innerHTML = cant_coras
    boy.innerHTML = phase
    if(vidas==0)
    {
        sfx("./sounds/sfx/Casual Fx Shot/wind down 2.wav")
        setTimeout(() => {
            console.log("1 Segundo esperado");
            alert("Derrota!");
            location.reload();
          }, 3000);
        
        
        
    }
 }
