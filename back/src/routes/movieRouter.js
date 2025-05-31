

/**
 * Movie Routes
 * ------------
 * Defines the routes for handling movie-related operations using Express Router.
 * 
 * Routes:
 * - GET /         → Fetch all movies (movieController.getAllMovies)
 * - POST /        → Create a new movie (validate input first using validateMovieData)
 * 
 * Uses:
 * - asyncHandler to catch asynchronous errors and forward them to Express error middleware.
 * 
 * This router is exported to be used in the main server application.
 */

const { Router } = require ("express");
const asyncHandler = require ("express-async-handler");
const movieController = require ("../controllers/movieController");
const validateMovieData = require ("../middlewares/validateMovieData");
const movieRouter = Router ();
movieRouter.get  ("/", asyncHandler (movieController.getAllMovies));
movieRouter.post ("/", validateMovieData, asyncHandler (movieController.createMovie));
module.exports = movieRouter;
