//31.0-Creamos el modelo Evento para la Db
//Importamos mongosser
const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start:{ 
        type: Date,
        required: true 
    },
    end: { 
        type: Date, 
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    members: { 
        type: [],
    }
});

//33.4-Serializamos el Schema:
EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Evento', EventoSchema );