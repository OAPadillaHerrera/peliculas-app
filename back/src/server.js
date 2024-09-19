

/*
Este archivo configura y expone el servidor Express:
- Incluye los middleware `morgan` para registro de solicitudes y `cors` para permitir peticiones entre dominios.
- Permite el manejo de solicitudes en formato JSON.
- Define un enrutador para gestionar las rutas principales de la aplicación.
*/

const express = require ("express");
const router = require ("./routes/index");

const app = express ();

const morgan = require ("morgan");
const cors = require ("cors");

app.use (morgan ("dev"));
app.use (cors ());
app.use (express.json ());

/* Utilizar middleware propio/"customizado":*/
/*app.use ((req, res, next) => {

    console.log (".¡ESTAMOS PASANDO POR MI PROPIO MIDDLEWARE! ...");
    next ();

});*/

app.use (router);

module.exports = app;
