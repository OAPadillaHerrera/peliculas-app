

/* 
This JavaScript file manages the core functionality of the "Cine de Culto" portal.

It includes functions to fetch movies from a local API, dynamically display them,
and handle the creation of new movies through an interactive form. 
It also provides a feature to reset the form fields easily.

The code structure follows best development practices: asynchronous functions 
for HTTP requests, robust error handling, and input validation to ensure a smooth 
and secure user experience.

Axios is used for backend communication, and the external module 
`generateMovieElement.js` is used to render movie elements.

This script is designed to integrate seamlessly with a responsive interface
and a sleek dark-themed visual style, consistent with the overall portal aesthetics.
*/

/*fetchPeliculas ();

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

});*/

const { displayCarousel, displayGrid, filterMoviesByGenre} = require ('./movieRenderer.js');
const carouselMovies = require ('./carouselMovies.js');

document.addEventListener ('DOMContentLoaded', () => {

  displayCarousel (carouselMovies);

});

document.addEventListener ("click", function (e) {

  if (e.target.classList.contains ("genre-btn")) {

    const genre = e.target.dataset.genre;
    handleGenreClick (genre);

  }
});

async function handleGenreClick (genre) {

  try {

    const res = await fetch ("http://localhost:3000/api/movies");
    const allMovies = await res.json ();
    const filtered = filterMoviesByGenre (genre, allMovies);
    displayGrid (filtered, genre);

  } catch (err) {

    console.error("Error ...:", err);

  }

}