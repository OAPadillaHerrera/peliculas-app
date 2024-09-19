

/* 
Este módulo exporta una función controladora para gestionar la petición de obtener todas las publicaciones (POSTS).
La función `getAllPosts` maneja una petición GET, y devuelve una respuesta con estado HTTP 200 y un mensaje 
de texto que indica que es el endpoint para obtener las publicaciones.
 */

module.exports = {

    getAllPosts: (req, res) => {

        res.status (200).send ("Endpoint para obtener POSTS");

    },
    
};
