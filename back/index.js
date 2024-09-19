

/*
Este archivo inicializa el servidor y establece la conexión a la base de datos.
- `dbCon`: función para conectar con la base de datos.
- Si la conexión es exitosa, el servidor empieza a escuchar en el puerto 3000.
- En caso de error, se muestra un mensaje de error en la consola.
*/

const app = require ("./src/server"); 

const dbCon = require ("./src/config/dbCon"); 

dbCon ().then (() => {

  app.listen (3000, () => {

    console.log ("SERVIDOR ESCUCHANDO EN EL PUERTO 3000! ...");

  });

}).catch (err => {

  console.error ("ERROR AL CONECTAR CON LA BASE DE DATOS: ", err);
  
});
