import React from 'react'
import { useState } from 'react'
import Ver from './Ver';
import Crear from './Crear';
import Editar from './Editar';
import Borrar from './Borrar';
import { useNavigate } from 'react-router-dom';
import VerP from './VerP';
import CrearP from './CrearP';
import EditarP from './EditarP';
import BorrarP from './BorrarP';
import'./Admins.css'
import Venta from '../venta';

function Admin() {

    const [ver,setVer] = useState(false);
    const [crear,setCrear] = useState(false);
    const [editar,setEditar] = useState(false);
    const [borrar,setBorrar] = useState(false);

    const nav = useNavigate();

    const [verP,setVerP] = useState(false);
    const [crearP,setCrearP] = useState(false);
    const [editarP,setEditarP] = useState(false);
    const [borrarP,setBorrarP] = useState(false);
    const [VerV, setVenta] = useState(false);
    
    const putVer = () =>
    {

        if(ver)
        {
            return <Ver />
        }
        else
        {
            if(crear)
        {
            return <Crear />
        }
        else{
            if(editar)
            {
                return <Editar />
            }
            else{
                if(borrar)
                {
                   return <Borrar />
                }
                else{
                    if(verP)
                    {
                        return <VerP />
                    }
                    else{
                        if(crearP)
                        {
                            return <CrearP />
                        }
                        else
                        {
                            if(editarP)
                            {
                                return <EditarP />
                            }
                            else{
                                if(borrarP)
                                {
                                    return <BorrarP />
                                }
                                else
                                {
                                    if(VerV)
                                    {
                                        return <Venta />
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
           
    }

    const handleclick = (e) => 
    {
        console.log(e.target.id)
        
        switch (e.target.id) {
            case "ver": 
                    setVer(true);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(false);   
                    
                    setVerP(false);
                    setCrearP(false);
                    setEditarP(false);
                    setVenta(false); 
                    setBorrarP(false); 
                      
                break;
         case "crear": 
                    setVer(false);
                    setCrear(true);
                    setEditar(false);
                    setBorrar(false);  
                    
                    setVerP(false);
                    setCrearP(false);
                    setVenta(false); 
                    setEditarP(false);
                    setBorrarP(false); 
            break;
         case "editar": 
                    setVer(false);
                    setCrear(false);
                    setEditar(true);
                    setBorrar(false);  
                    
                    setVerP(false);
                    setCrearP(false);
                    setEditarP(false);
                    setBorrarP(false); 
                    setVenta(false); 
            break;
         case "borrar": 
                    setVer(false);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(true);  
                    
                    setVerP(false);
                    setCrearP(false);
                    setEditarP(false);
                    setBorrarP(false); 
                    setVenta(false); 
            break;
        case "verP": 
                    setVerP(true);
                    setCrearP(false);
                    setEditarP(false);
                    setBorrarP(false);   
                    
                    setVer(false);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(false); 
                    setVenta(false); 
                      
                break;
         case "crearP": 
                    setVerP(false);
                    setCrearP(true);
                    setEditarP(false);
                    setBorrarP(false);   
                    
                    setVer(false);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(false); 
                    setVenta(false); 
            break;
         case "editarP": 
                    setVerP(false);
                    setCrearP(false);
                    setEditarP(true);
                    setBorrarP(false);   
                    
                    setVer(false);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(false); 
                    setVenta(false); 
            break;
         case "borrarP": 
                    setVerP(false);
                    setCrearP(false);
                    setEditarP(false);
                    setBorrarP(true);  

                     setVer(false);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(false);  
                    setVenta(false);   
            break;
        case "VerV":
                setVerP(false);
                    setCrearP(false);
                    setEditarP(false);
                    setBorrarP(false);  

                     setVer(false);
                    setCrear(false);
                    setEditar(false);
                    setBorrar(false);  
                    setVenta(true);
                    break;

        
            default: alert("intente de nuevo")
                break;
        }
       
    }

    const handleBack = () => 
    {
        nav('/')
    }

  return (
    <div className='grid-container'>

    <div className='header'>

    <h1>Bienvenido</h1>

    </div>
    

    <div className='menu'>
        <button id='ver' onClick={handleclick}>Ver usuarios</button>
        <button id='crear' onClick={handleclick}>Crear usuarios</button>
        <button id='editar' onClick={handleclick}>Editar usuarios</button>
        <button id='borrar' onClick={handleclick}>Borrar usuarios</button>
        
    </div>

    <div className='menu2'>
        <button id='verP' onClick={handleclick}>Ver productos</button>
        <button id='crearP' onClick={handleclick}>Crear productos</button>
        <button id='editarP' onClick={handleclick}>Editar productos</button>
        <button id='borrarP' onClick={handleclick}>Borrar productos</button>
       
    </div>

    <div className='back'>
    <button id='VerV' onClick={handleclick}>Ver Ventas</button>
    <hr style={{width:'100%'}} />
        <button id='regresa' onClick={handleBack}>Regresar al login</button>
    </div>

    <div className='right'>

        {/*DIV DE COMPONENTES*/}
        {putVer()}




    </div>

    </div>
  )
}

export default Admin