//const { default: mongoose } = require("mongoose");

// 1 Traer mongoose
const mongoose = require("mongoose");

// 2 Crear nuestro modelo
const modelName = 'Koders';

// 3 creamos nuestro esquema
const schema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minLength: 2,
        masLength: 100
    },
    lastName: {
        type: String,
        require: false,
        maxLength: 100
    },
    email: {
        type: String,
        require: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: false
    },
    generation: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'generations'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 4 creamos el model
// const koder = mongoose.model(modelName, schema)

// 4 exportamos el model
module.exports = mongoose.model(modelName, schema)

//---------------> de aqui nos vamos al USECASES ESTO ES EL PASO 4