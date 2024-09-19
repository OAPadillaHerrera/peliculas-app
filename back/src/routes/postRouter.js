

/*
Define la ruta para las operaciones relacionadas con los posts. Utiliza Express Router y conecta el controlador correspondiente:

- `GET /`: Obtiene todos los posts usando `postController.getAllPosts`.

Este router se exporta para ser utilizado en el enrutador principal.
*/

const {Router} = require ("express"); 

const postController = require ("../controllers/postController");

const postRouter = Router ();

postRouter.get ("/", postController.getAllPosts);

module.exports = postRouter;
