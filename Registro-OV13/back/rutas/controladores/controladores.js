const fs = require('fs/promises');
const path = require('path');



const getDatos = async(req,res)=>{
    const dat = await fs.readFile(path.join(__dirname,'../../db/datos.json'));
    const datJson = JSON.parse(dat);
    res.json(datJson);
}

const registrar = async(req,res)=>{
    const dat = await fs.readFile(path.join(__dirname,'../../db/datos.json'));
    const datJson = JSON.parse(dat);
    res.json(datJson);
    let ultimoId = 0;
        datJson.forEach((obj) => {
            const id = parseInt(obj.id);
            if (!isNaN(id) && id > ultimoId) {
                ultimoId = id;
            }
        });
    const {datos} = req.body
    datos.id = (ultimoId+1)
    datJson.push(datos);
    console.log(datos)
    const nuevoContenidoJSON = JSON.stringify(datJson, null, 2);
    await fs.writeFile(path.join(__dirname, '../../db/datos.json'), nuevoContenidoJSON);
    
}

module.exports={
    getDatos,
    registrar
}