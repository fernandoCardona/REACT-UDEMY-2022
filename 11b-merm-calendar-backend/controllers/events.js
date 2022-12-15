//30.3-Importamos response de express:
const { response } = require('express');
//33.0-IMPORTAMOS LA REFERENCIA EL MODEL EVENTS:
const Evento = require('../models/Evento');



//Controller obtener eventos:
const getEventos = async(req, res = response ) => {

    //34.1-Pedimos los eventos a la Db: Con la funcion '.populate()' extraemos el nombre del usuario.
    const eventos = await Evento.find().populate('user','name');

    res.json({
        ok: true,
        eventos
    });
}

//Controller crear evento:
const crearEvento = async( req, res = response ) => {

    //33.1-Creamos el evento atraves de nuestro model y habiendo verificado la informacion del mismo
        const evento = new Evento( req.body );

    try {
        //33.3-recogemos el id del usuario: 
        evento.user = req.uid;

        //33.2-Mandamos guardar la info del evento en la Db.
        const eventoGuardado = await evento.save();
        res.json({
            ok: true,
            evento: eventoGuardado
        }) 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

//Controller acualizar evento:
const actualizarEvento = async(req, res = response ) => {
    //35.1-Obtenemos de los params el Id del evento y el uid del user:
    const eventoId = req.params.id;
    const uid = req.uid;
    console.log( req.body )
    try {

        //35.2-Verificar si existe en la Db a traves de nuestro modelo de mongosse
        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

        res.json({
            ok: true,
            evento: eventoActualizado
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
           
}

//Controller eliminar evento:
const eliminarEvento = async(req, res = response ) => {
    //35.3-Obtenemos de los params el Id del evento y el uid del user:
    const eventoId = req.params.id;
    const uid = req.uid;
    console.log( req.body )
    try {

        //35.4-Verificar si existe en la Db a traves de nuestro modelo de mongosse
        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }

       
        await Evento.findByIdAndDelete( eventoId );

        res.json({
            ok: true
        });
 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};