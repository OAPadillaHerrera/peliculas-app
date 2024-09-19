

/* 
 Este módulo exporta una función controladora para gestionar la petición de obtener todos los usuarios.
 La función `getAllUsers` maneja una petición GET, llama a la función `getUsers()` para recuperar la lista 
 de usuarios y devuelve una respuesta en formato JSON con un estado HTTP 200 (OK).
*/

module.exports = {

    getAllUsers: (req, res) => {

        const users = getUsers ();
        res.status (200).json (users);
    },

};
