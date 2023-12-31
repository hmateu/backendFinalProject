const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./db');
const PORT = process.env.DEV_API_PORT;

app.use(express.json());

db.then(
    () => {
        app.listen(PORT, () => {
            console.log(`Servidor levantado correctamente y a la escucha en el puerto ${PORT}`);
        });
    }
)
    .catch(
        error => console.error(`Ha habido un error conectándose a la base de datos`, error)
    );