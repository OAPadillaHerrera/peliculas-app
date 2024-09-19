

/*
Define las rutas para las operaciones relacionadas con las películas. Utiliza Express Router y conecta 
los controladores y middlewares correspondientes:

- `GET /`: Obtiene todas las películas usando `movieController.getAllMovies`.
- `POST /`: Crea una nueva película, validando los datos con `validateMovieData` antes de llamar a `movieController.createMovie`.

Este router se exporta para ser usado en el enrutador principal.
*/

const {Router} = require ("express"); 

const movieController = require ("../controllers/movieController");
const validateMovieData = require ("../middlewares/validateMovieData");

const movieRouter = Router ();

movieRouter.get ("/", movieController.getAllMovies);
movieRouter.post ("/", validateMovieData, movieController.createMovie);

module.exports = movieRouter;