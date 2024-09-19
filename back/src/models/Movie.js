

/*
Define el modelo `Movie` para MongoDB utilizando mongoose. El esquema incluye campos 
como título, año, director, duración, género, calificación y póster. El modelo se exporta 
para interactuar con la colección de películas en la base de datos.
*/

const mongoose = require ("mongoose");

const movieSchema = new mongoose.Schema ({

    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,

});

const Movie = mongoose.model ("Movie", movieSchema);

module.exports = Movie;