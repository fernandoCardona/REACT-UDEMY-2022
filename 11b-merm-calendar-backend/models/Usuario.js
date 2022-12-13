//Creamos el modelo Usuario para la Db
//21.0-Importamos mongosser
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});


module.exports = model('Usuario', UsuarioSchema );
