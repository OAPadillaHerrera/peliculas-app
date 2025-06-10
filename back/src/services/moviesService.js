

/**
 * Service layer for the Movie model.
 * Exposes functions to interact with the database without handling errors here,
 * allowing them to be managed by asyncHandler or global error middleware.
 */

const Movie = require ("../models/Movie");

const getMovies = async () => {

  return await Movie.find ();

};

const createMovie = async (movieData) => {

  return await Movie.create (movieData);

};

module.exports = {

  getMovies,
  createMovie,
  
};




