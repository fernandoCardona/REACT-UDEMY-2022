const dotenv = require('dotenv');
//20.0- Importamos mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbConnection = async() => {

    try {
        await mongoose.connect(
            process.env.DB_CNN, {
               //userNewUrlParser: true, 
               useUnifiedTopology: true, 
               //getuseCreayeIndex: true
            }
        );

        console.log('DB Online')


    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la Db');
    }



}

module.exports = {
    dbConnection
};