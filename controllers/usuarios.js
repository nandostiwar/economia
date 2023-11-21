const { response, request } = require ('express');
const bcryptjs = require ('bcryptjs');


const Usuario = require ('../models/usuario');


const usuariosGet = (req=request, res=response) => {

    const {query} = req.query;

    res.json({
        msg: 'Get Api'
    });
}

const usuariosPost = async (req, res=response) => {

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario ({nombre, correo, password, rol});

    //Encriptar contraseña
    //Esta funcion permite encryptar la contraseña
    //genSaltSync() son las vueltas que deben de dar para desencriptar
    //por defecto viene en 10 se puede agrandar pero se demora mas en resolver
    const salt = bcryptjs.genSaltSync();
    //Aqui la encrypto
    //hashSync sirve para encryptar en una sola via 
    // y me pide la contraseña y el numero de vueltas
    usuario.password = bcryptjs.hashSync( password, salt );

    //Guardo el usuario
    await usuario.save();

    res.status(201).json({
        msg: 'post Api',
        usuario
    });
}

const usuariosPut = async(req, res=response) => {
    
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos 
    if ( password) {
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate (id, resto);
    
    res.json(usuario);
}

const usuariosPatch = (req, res=response) => {
    res.json({
        msg: 'Patch Api'
    });
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'delete Api'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
