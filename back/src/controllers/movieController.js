

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

  getMovies: async (req, res) => {

    const movies = await moviesService.getMovies ();
    res.status (200).json (movies);

  },

  getAllMovies: async (req, res) => {
    const movies = await moviesService.getAllMovies();
    res.json(movies);
  },

  createMovie: async (req, res) => {

    const movieData = req.body;
    const newMovie = await moviesService.createMovie (movieData);

    res.status (201).json ({

      message: "Movie created successfully",
      data: newMovie,

    });

  },

  updateMovie: async (req, res) => {

    const { id } = req.params;
    const updateData = req.body;

    const updateMovie = await moviesService.updateMovie(id, updateData);

    res.status(200).json({

      message: "Movie updated succesfully",
      data: updateMovie,

    })

  },

   softDeleteMovie: async (req, res) => {
    const { id } = req.params;

    const deleteMovie = await moviesService.softDeleteMovie(id);

    res.status(200).json({
      message: "Movie disabled succesfully",
      data: deleteMovie,
    });
  },

};



