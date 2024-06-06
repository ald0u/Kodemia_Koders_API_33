require('dotenv').config(); // 0 Este SIEMPE VA AL PRINCIPIO 

// 1 Levantamos el server
const server = require('./src/server');

// 2 LA DB
const db = require('./src/lib/db');

// 3 PORT
const PORT = process.env.PORT || 8080;

// 4 Conectamos a la BD
db.connect()
    .then(() => {
        console.log('DB Connected')
        server.listen(PORT, () => { // 5 Le pasamos el PORT
            console.log(`Server runing  on port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log('DB conenection: ', error)
    })

//-------------------->Antes de Ejecutar Modificar el script package.json
//-------------------->Llenar el .env

//--------------------> ESTE ES EL PASO 3 de aqui nos vamos a MODELS

