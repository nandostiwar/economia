Text_box = document.getElementById("entradaJS")

Btn = document.getElementById("botonJS")

Text_result = document.getElementById("SalidaJS")



let newCadena = ""

Btn.addEventListener('click', Encriptar)

function Encriptar()
{
    
    let Cadena = Text_box.value
    console.log(Cadena[1])
    console.log(Cadena.length)
    
    for (let i = 0; i < Cadena.length; i++) 
    {
        
        switch(Cadena[i])
    {
        //#region 
        case "a": 
            newCadena += "x"
            break;
        case "b": 
            newCadena += "p"
            break;
        case "c":
            newCadena += "t"
            break;
        case "d":
            newCadena += "k"
            break;
        case "e":
            newCadena += "e"
            break;
        case "f":
            newCadena += "h"
            break;
        case "g":
            newCadena += "g"
            break;
        case "h":
            newCadena += "l"
            break;
        case "i":
            newCadena += "b"
            break;
        case "j":
            newCadena += "q"
            break;
        case "k":
            newCadena += "r"
            break;
        case "l":
            newCadena += "w"
            break;
        case "m":
            newCadena += "d"
            break;
        case "n":
            newCadena += "z"
            break;
        case "ñ":
            newCadena += "v"
            break;
        case "o":
            newCadena += "m"
            break;
        case "p":
            newCadena += "j"
            break;
        case "q":
            newCadena += "u"
            break;
        case "r":
            newCadena += "a"
            break;
        case "s":
            newCadena += "y"
            break;
        case "t":
            newCadena += "c"
            break;
        case "u":
            newCadena += "f"
            break;
        case "v":
            newCadena += "i"
            break;
        case "w":
            newCadena += "n"
            break;
        case "x":
            newCadena += "ñ"
            break;
        case "y":
            newCadena += "o"
            break;
        case "z":
            newCadena += "s"
            break;


        }
         //#endregion
        Text_result.innerHTML=newCadena
    
    }
    newCadena=""
}