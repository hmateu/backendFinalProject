const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.DEV_API_PORT;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Servidor levantado y a la escucha en el puerto ${PORT}`);
});