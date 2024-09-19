

/*
Este archivo contiene la configuración para la conexión a la base de datos MongoDB
utilizando el módulo mongoose. La función `dbCon` es asíncrona y maneja la conexión
a través de un URI proporcionado. En caso de una conexión exitosa, se imprime un 
mensaje en la consola. Si la conexión falla, se captura el error y se detiene el 
proceso del servidor.
*/

const mongoose = require ("mongoose");

const dbCon = async () => {

  try {

    await mongoose.connect (

      "mongodb+srv://oscarpadillaha:Omongodb2024@prueba.o9nyp.mongodb.net/movies",

    );

    console.log ("CONEXIÓN EXITOSA A LA BASE DE DATOS MongoDB");

  } catch (error) {

    console.error ("ERROR AL CONECTAR A LA BASE DE DATOS:", error);
    process.exit (1); /*Finaliza el proceso si hay un error de conexión*/

  }
  
};

module.exports = dbCon;

