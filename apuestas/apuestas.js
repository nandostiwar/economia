document.addEventListener("DOMContentLoaded", function () {
    let nick = document.getElementById("usuario");
    let dinero = document.getElementById("dinero");
    //let carga = parseInt(document.getElementById("InsertDiner").value);
    let btnCarga = document.getElementById("btnCarga");
  
   
    let usuario = {
        nick: "OV13",
         dinero: 0,
        };
        
        nick.textContent = "Usuario: " + usuario.nick;
        dinero.textContent = "Dinero: " + usuario.dinero;
    

    function InsertarDinero(){
        const saldoActual = usuario.dinero
        const recarga = parseInt(document.getElementById("InsertDiner").value);
        operacion = saldoActual + recarga
        usuario.dinero =  operacion;
        dinero.textContent = "Dinero: " + usuario.dinero;
    }
    function sorteo(){
        return Math.floor(Math.random() * 1000);
    }
    function apuesta(){
        const valApuesta = parseInt(document.getElementById("ValApuesta"))
    }


    btnCarga.addEventListener('click',InsertarDinero)



  });