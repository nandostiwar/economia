import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState('');
  const goTo = useNavigate();

  const validateUser = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente.

    if (username !== '') {
      try {
        const response = await fetch(
          `http://localhost:3500/v1/restaurante/validarLogin/${username}`
        );
        const data = await response.json();
        console.log("data json:", data);
        if (data.rol === "1") {
          // El usuario tiene el rol de administrador
          goTo("/Admin");
        } else if (data.rol === "2") {
          // El usuario tiene el rol de mesero
          goTo("/CrearVenta");
        } else {
          console.log("Usuario no válido");
        }
        
      } catch (error) {
        console.error("Error al validar usuario Login:", error);
      }
    } else {
      console.log("Debe diligenciar el campo usuario");
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={validateUser}>
        <input
          id="input"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <button id="iniciar" type="submit">Iniciar</button>
      </form>
    </div>
  );
};

export default App;



// import "./App.css";
// import { useState } from "react";
// //import { useNavigate } from "react-router-dom";

// const App = () => {
//   const [username, setUsername] = useState(null);
//   //const goTo = useNavigate();

//   function validateUser() {
//     if (username !== null) {
//       try {
//         const response = fetch(
//           `http://localhost:3500/v1/restaurante/validarLogin/${username}`
//         );
//         const data = response.json();
//         console.log("data json:" + data);
//         // if (data === "1"){
//         //   goTo("/Admin")
//         // } if (data === "2") {
//         //   goTo("/CrearVenta")
//         // } else {
//         //   console.log("Usuario no válido")
//         // }
//       } catch (error) {
//         console.error("Error al validar usuario Login:", error);
//       }
//     } else {
//       console.log("Debe diligenciar el campo usuario");
//     }
//     // if (username === "juego" && password === "juego123") {
//     //   goTo("/Juego");
//     // } else if (username === "cocina" && password === "cocina123") {
//     //   goTo("/Cocina");
//     // } else {
//     //   alert("¡Usuario Incorrecto! Inténtalo de nuevo");
//     // }
//   }

//   return (
//     // <div>
//     //   <input id="input" type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)}/>
//     //   <button id="iniciar" onClick={validateUser}>Iniciar</button>
//     // </div>
//     <div className="App">
//       <h1>Login</h1>

//       <form onSubmit={validateUser}>
//         <input
//           id="input"
//           type="text"
//           placeholder="Usuario"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         <button id="iniciar" type="submit">Iniciar</button>
//       </form>
//     </div>
//   );
// };

// export default App;
