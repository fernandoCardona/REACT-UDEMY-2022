//30.3-Importamos response de express:
const { response } = require('express');

//Controller obtener eventos:
const getEventos = (req, res = response ) => {
    res.json({
        ok: true, 
        msg:'getEventos'    
    })
}

//Controller crear evento:
const crearEventos = (req, res) => {
   res.json({
        ok: true, 
        msg:'crearEventos'
    }) 
}

//Controller acualizar evento:
const actualizarEvento = (req, res) => {
    res.json({
        ok: true, 
        msg:'actualizarEventos'
    })        
}

//Controller eliminar evento:
const eliminarEvento = (req, res) => {
    res.json({
        ok: true, 
        msg:'eliminarEventos'
    })
}

module.exports = {
    getEventos,
    crearEventos,
    actualizarEvento,
    eliminarEvento
};