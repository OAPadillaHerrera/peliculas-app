

/*
Define la ruta para las operaciones relacionadas con los usuarios. Utiliza Express Router y conecta el controlador correspondiente:

- `GET /`: Obtiene todos los usuarios usando `userController.getAllUsers`.

Este router se exporta para ser utilizado en el enrutador principal.
*/

const {Router} = require ("express"); 

const userController = require ("../controllers/userController");

const userRouter = Router ();

userRouter.get ("/", userController.getAllUsers);

module.exports = userRouter;
