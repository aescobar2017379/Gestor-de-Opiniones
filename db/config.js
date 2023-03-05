
const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('conectado a base de datos');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la DB');
    }
}

module.exports = {
    dbConection
}