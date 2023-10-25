import React, { useState } from 'react'

function CrearP() {

    const [producto,setProducto] = useState("");
    const [precio,setPrecio] = useState("");
    

    const handleChangeProduct = (e) =>
    {
        setProducto(e.target.value)
    }

    const handleChangePrice = (e) =>
    {
        setPrecio(e.target.value)
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(precio);
        console.log(producto);

        await fetch('http://localhost:5000/create_product',
        {
            method:'POST',
            headers:
            {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(
                {
                    product:producto,
                    price:precio
                }
            )
        }).then(response => {if(response.ok){alert("producto creado con exito!")}else{alert("Algo ha salido mal")}})
        .catch(error => console.error('no funca', error)) 

    }

  return (

    <div>
    
        <form onSubmit={handleSubmit}>

            <h1>Crear producto</h1>

            <label>Nombre de producto</label>
            <p></p>
            <input type='text' onChange={handleChangeProduct} placeholder='Inserte nombre de producto'></input>
            <p></p>
            <label>Precio</label>
            <p></p>
            <input type='number' onChange={handleChangePrice} placeholder='$123'></input>
            <p></p>
            <button type='submit'>Crear</button>
        </form>
        
    </div>

  )
}

export default CrearP