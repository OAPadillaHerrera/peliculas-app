

/**
 * Service layer for the Movie model.
 * Exposes functions to interact with the database without handling errors here,
 * allowing them to be managed by asyncHandler or global error middleware.
 */

const Movie = require ("../models/Movie");

const getMovies = async () => {
  return await Movie.find ( { isActive: true });
};

const getAllMovies = async () => {
  return await Movie.find();
};

const createMovie = async (movieData) => {
  return await Movie.create (movieData);
};

const updateMovie = async (id, updateData) => {
  const movie = await Movie.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true } 
  )

  if (!movie) {
    throw new Error("Movie not found");
  }

  return movie;

};

const softDeleteMovie = async (id) => {
  const movie = await Movie.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );

  if (!movie) {
    throw new Error("Movie not found");
  }

  return movie;
};

module.exports = {
  getAllMovies,
  getMovies,
  createMovie,
  updateMovie,
  softDeleteMovie,  
};




