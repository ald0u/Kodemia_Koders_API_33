// 1 Usamos Mongoose
const mongoose = require('mongoose');

// 2 Destructuramos la url
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

// 3 Creamos una constatnte que contendra la destructuracion
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// 4 Nos conectamos con la URL
const connect = () => mongoose.connect(URI);

// 5 Exportamos connect
module.exports = { connect }

//Nos vamos a express TODO ESTO ES EL PASO 1