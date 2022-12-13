//IMPORTACION DE EXPRESS: desestructuramos la 'response'
const { response } = require('express');

//21.0-IMPORTAMOS bcryptjs PARA ENCRIPTACION DE CONTRASEÑAS:
const bcrypt = require('bcryptjs');

//20.1-IMPORTACION Schema Usuario: (../models/Usuario)
const Usuario = require('../models/Usuario');

//1.8-Controllers AUTH: Son las funciones que controlan las rutas del authaccordion-accordion

//Controller de crearUsuario:
const crearUsuario = async(req, res = response ) =>{

    const { name, email, password } = req.body;


    try {
        //20.2- Verificamos que no exista ese mail ya en la base de datos.
        let usuario = await Usuario.findOne({ email });
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }
        //20.2-Creamos un nuevo usuario con el model que hemos importado y le pasamos 'req.body' con toda la informacion 
        usuario = new Usuario( req.body );

        //21.1-Encriptamos contraseña con bcryptjs
        const salt = bcrypt.genSaltSync();
        usuario.password= bcrypt.hashSync( password, salt );

        //20.1-lo gravamos en la Db con la funcion: .save()
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
            
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hablé con el administrador'
        });
    }
    
}

//Controller de loginUsuario:
const loginUsuario = async(req, res = response) =>{

    const { email, password } = req.body;
    //22.0-Login de usuario
    try {
        //22.1- Verificamos si existe el mail ya en la base de datos.
        let usuario = await Usuario.findOne({ email });
        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario o contraseña no son correctos (email)'
            })
        }
        //22.2-confirmar los password
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if ( !validPassword ){
            res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }
        //22.3- Generamos el JSOn web Token 
        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hablé con el administrador'
        });
    }

    
}

//Controller de revalidarToken:
const revalidarToken = (req, res = response) =>{
    res.json({
        ok: true,
        msg: 'renew'
    });
}




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};