

/*
Define las rutas principales de la aplicación utilizando Express. Las rutas disponibles son:

- `/users`: Gestiona las solicitudes relacionadas con los usuarios.
- `/posts`: Gestiona las solicitudes relacionadas con los posts.
- `/movies`: Gestiona las solicitudes relacionadas con las películas (agregado en la tarea EXPRESS II).

Se importa cada conjunto de rutas desde su respectivo archivo y se conecta al enrutador principal.
*/

/* Aquí vamos a definir las "rutas" a través de las cuales nos podemos comunicar.*/

/* Tengo definida la solicitud a GET /users => controlador*/

const {Router} = require ("express");

const userRouter = require ("./userRouter");
const postRouter = require ("./postRouter");
const movieRouter = require ("./movieRouter"); /*Agregado para tarea EXPRESS II.*/

const router = Router ();

router.use ("/users", userRouter);
router.use ("/posts", postRouter);
router.use ("/movies", movieRouter); /*Agregado para tarea EXPRESS II.*/

module.exports = router;

