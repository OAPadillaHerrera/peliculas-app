

/**
 * Movie Controller
 * ----------------
 * Handles HTTP requests for movies.
 * 
 * - getAllMovies: Fetches and returns all movies.
 * - createMovie: Creates a new movie with the provided data.
 * 
 * Relies on moviesService for business logic.
 * Errors are handled globally via Express error-handling middleware.
 */

const moviesService = require ("../services/moviesService");

module.exports = {

  getAllMovies: async (req, res) => {

    const movies = await moviesService.getMovies ();
    res.status (200).json (movies);

  },

  createMovie: async (req, res) => {

    const movieData = req.body;
    const newMovie = await moviesService.createMovie (movieData);

    res.status (201).json ({

      message: "Movie created successfully",
      data: newMovie,

    });

  },

};

