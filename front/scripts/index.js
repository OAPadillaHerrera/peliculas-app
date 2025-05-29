

/*
Este archivo contiene la lógica principal de la aplicación:
- Carga de películas desde una API mediante una solicitud asíncrona.
- Manejo del formulario para la creación de nuevas películas, con validaciones y envío de datos al servidor.
- Funcionalidad para limpiar los campos del formulario con un botón de "Borrar".
*/

/*Método con asincronismo:*/

const { displayMovies } = require ('./generateMovieElement.js');

const axios = require ("axios");

const fetchPeliculas = async () => {

  try {

  console.log ("CARGANDO Peliculas ..." );
  const data = await axios.get ("http://localhost:3000/api/movies"/*"https://students-api.up.railway.app/movies"*/);
  const movies = data.data;
  console.log (movies);
  /*console.log (data.data);*/
  console.log ("¡PELÍCULAS CARGADAS CON ÉXITO!");

  displayMovies (movies);

  } catch (err) {

    console.log ("Hubo un error");
    console.log (err.message);

  }
  
};

fetchPeliculas ();

/*--------------*/


/*Función para manejar el envío del formulario*/
document.getElementById ('movieForm')?.addEventListener ('submit', async function(event) {

  event.preventDefault ();

  const title = document.getElementById ('title').value;
  const year = document.getElementById ('year').value;
  const director = document.getElementById ('director').value;
  const duration = document.getElementById ('duration').value;
  const genre = document.getElementById ('genre').value.split (',');
  const rate = document.getElementById ('rate').value;
  const poster = document.getElementById ('poster').value;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {

    alert ('POR FAVOR, COMPLETA TODOS LOS CAMPOS.');

    return;

  }

  if (year.length > 4) {
    
    alert ('EL CAMPO DE AÑO NO PUEDE TENER MAS DE 4 DÍGITOS.');

    return;

  }

  try {

    const response = await axios.post ('http://localhost:3000/api/movies', {

      title: title,
      year: Number (year),/*Asegurarse de que sea un número*/
      director: director,
      duration: duration,
      genre: genre,/*El género debe ser un array*/
      rate: Number (rate),
      poster: poster

    });

    alert ('PELÍCULA CREADA EXITOSAMENTE.');
    
  } catch (error) {

    console.error ('ERROR AL CREAR LA PELÍCULA:', error);
    alert ('HUBO UN PROBLEMA AL CREAR LA PELÍCULA. INTÉNTALO NUEVAMENTE.');
    
  }

});

/*-----------------------------------------------------------------------*/


/*Manejador de eventos para el botón de "Borrar"*/
document.getElementById ('borrar')?.addEventListener ('click', function(event) {

  event.preventDefault ();
  
  const inputs = document.querySelectorAll ('#movieForm input');

  inputs.forEach (input => {

      input.value = '';

  });
  
/*Agregar más lógica ...*/

});