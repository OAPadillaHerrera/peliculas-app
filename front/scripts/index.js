

/*
Este archivo contiene la lógica principal de la aplicación:
- Carga de películas desde una API mediante una solicitud asíncrona.
- Manejo del formulario para la creación de nuevas películas, con validaciones y envío de datos al servidor.
- Funcionalidad para limpiar los campos del formulario con un botón de "Borrar".
*/

const { displayMovies } = require ('./generateMovieElement.js');
const axios = require ("axios");

const fetchPeliculas = async () => {

  try {

  console.log ("Cargando Peliculas ..." );
  const data = await axios.get ("http://localhost:3000/api/movies");
  const movies = data.data;
  console.log (movies);
  console.log ("¡Películas cargadas con Exito!");
  displayMovies (movies);

  } catch (err) {

    console.log ("Hubo un error");
    console.log (err.message);

  }
  
};

fetchPeliculas ();

document.getElementById ('movieForm')?.addEventListener ('submit', async function (event) {

  event.preventDefault ();

  const title = document.getElementById ('title').value;
  const year = document.getElementById ('year').value;
  const director = document.getElementById ('director').value;
  const duration = document.getElementById ('duration').value;
  const genre = document.getElementById ('genre').value.split (',');
  const rate = document.getElementById ('rate').value;
  const poster = document.getElementById ('poster').value;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {

    alert ('Por favor, completa todos los campos.');

    return;

  }

  if (year.length > 4) {
    
    alert ('El campo de año no puede tener mas de 4 dígitod.');

    return;

  }

  try {

    const response = await axios.post ('http://localhost:3000/api/movies', {

      title: title,
      year: Number (year),
      director: director,
      duration: duration,
      genre: genre,
      rate: Number (rate),
      poster: poster

    });

    alert ('Película creada exitosamente.');
    
  } catch (error) {

    console.error ('Error al crear la película:', error);
    alert ('Hubo un problema al crear la película. Inténtalo nuevamente.');
    
  }

});

document.getElementById (`delete`)?.addEventListener ('click', function (event) {

  event.preventDefault ();
  
  const inputs = document.querySelectorAll ('#movieForm input');

  inputs.forEach (input => {

      input.value = '';

  });

});