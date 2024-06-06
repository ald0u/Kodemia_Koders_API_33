// 1 Necesitamos Express
const express = require('express');
const cors = require('cors');
const koderRouter = require('./routes/koders.router');
const mentorsRouter = require('./routes/mentors.router');
const authRouter = require('./routes/auth.router');
const generationsRouter = require('./routes/generations.router');

// 2 Ejecutamos express dentro de una constante
const app = express();

// 3 Midleware Guards
app.use(cors());
app.use(express.json())

//IMPORTANTE QUE ESTE DEBAJO DEL JSON
app.use('/koders', koderRouter);
app.use('/mentors', mentorsRouter);
app.use('/generations', generationsRouter);
app.use('/auth', authRouter);

// 4 Creamos rutas
app.get('/',(request, response)=>{
    response.json({
        message: 'Koders API v1'
    });
});


// 5 Exportamos la app
module.exports = app

//Nos vamos a index ESTO ES EL PASO 2