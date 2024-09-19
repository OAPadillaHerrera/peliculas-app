

/*Con BBDD:*/ 

/*
Este archivo contiene las funciones para interactuar con la base de datos MongoDB 
relacionadas con el modelo `Movie`. Se definen dos funciones asíncronas principales:

- `getMovies`: Obtiene todas las películas almacenadas en la base de datos.
- `createMovie`: Crea una nueva película en la base de datos con los datos proporcionados.

Ambas funciones manejan errores y, en caso de fallo, lanzan una excepción con un 
mensaje descriptivo.
*/

const Movie = require ("../models/Movie");

module.exports = {

  getMovies: async () => {

    try {

      const movies = await Movie.find ();
      return movies;

    } catch (error) {

      throw new Error ("ERROR AL OBTENER LAS PELÍCULAS");

    }

    /*const movies = await Movie.find ();
    return movies;*/

  },

  createMovie: async (movieData) => {

    try {

      const newMovie = await Movie.create (movieData);
      return newMovie;

    } catch (error) {

      throw new Error ("ERROR AL CREAR LA PELÍCULA");

    }

  },

};






