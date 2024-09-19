

/*
Middleware para validar los datos de una película antes de crearla. Verifica que todos los campos 
obligatorios estén presentes y que el campo `year` sea un número de 4 dígitos:

- Si faltan campos, responde con un error 400 y un mensaje indicando que todos los campos son obligatorios.
- Si el campo `year` no tiene un formato válido, responde con un error 400 y un mensaje específico.
- Si los datos son válidos, continúa con el siguiente middleware o controlador.

Este middleware se exporta para ser usado en las rutas correspondientes.
*/

function validateMovieData (req, res, next) {
    
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {

        return res.status (400).json ({

            error: "TODOS LOS CAMPOS (title, year, director, duration, genre, rate, poster) SON OBLIGATORIOS.",

        });

    }

    if (!/^\d{4}$/.test(year)) {

        return res.status(400).json ({
            
            error: "EL CAMPO 'year' DEBE SER UN NÚMERO DE 4 DÍGITOS.",

        });

    }

    next ();

}

module.exports = validateMovieData;