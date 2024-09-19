

/*
Este archivo maneja las solicitudes HTTP para las películas. Define dos controladores:

- `getAllMovies`: Obtiene todas las películas y las devuelve en formato JSON.
- `createMovie`: Crea una nueva película con los datos proporcionados.

Maneja errores de validación con un código 400 y errores del servidor con un código 500.
*/

const moviesService = require ("../services/moviesService");

module.exports = {

    getAllMovies: async (req, res) => {

        try {

            const movies = await moviesService.getMovies(); 
            res.status (200).json (movies); 

        } catch (error) {

            if (error.message.includes ("INVALID INPUT")) {

                /*Error de validación de entrada, enviar 400 Bad Request*/
                res.status (400).json ({ error: error.message });

            } else {

                /*Error general del servidor, enviar 500 Internal Server Error*/
                res.status (500).json ({ error: "ERROR INTERNO DEL SERVIDOR" });

            }

        }

    },

    createMovie: async (req, res) => {

        try {

            const movieData = req.body; 
            const newMovie = await moviesService.createMovie (movieData); 
            res.status (201).json ({message: "Película creada con éxito", data: newMovie});

        } catch (error) {

            if (error.message.includes ("INVALID INPUT")) {

                res.status (400).json ({ error: error.message });

            } else {

                res.status (500).json ({ error: "ERROR INTERNO DEL SERVIDOR" });

            }
        }
    },

};


