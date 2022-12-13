//1.1-IMPORTACION DE EXPRESS:
const express = require('express');

//1.5-IMPORTACION DE Variaables de entorno(.env):
const dotenv = require('dotenv').config();

//IMPORTAMOS BASE DE DATOS:
const { dbConnection } = require('./database/config');

//1.2-CREAR SERVIDOR EXPRESS:
const app = express();

//20.1-Base de datos: desestructuramos
dbConnection();

//1.4.2-DIRECTORIO PUBLICO:
app.use( express.static('public') );

//1.9-Lectura y parseo de body de la peticion:
app.use( express.json() );

//1.4.1-ENDPOINS DE LAS RUTAS:
//auth/crear, login,renew 
app.use('/api/auth/', require('./routes/auth') );
//CRUD: Eventos

//1.3-ESCUCHA DE PETICIONES:
app.listen( process.env.PORT, () => {
   console.log(`Servidor en el puerto: http://localhost:${process.env.PORT}/`);
});

