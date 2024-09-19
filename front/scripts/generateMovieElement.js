

/*Método con API y BOOTSTRAP:*/

/*
Este archivo define las funciones para generar dinámicamente elementos HTML 
que muestran películas utilizando Bootstrap. Incluye:
- `generateMovieElement`: genera la estructura HTML de una película como una tarjeta de Bootstrap.
- `displayMovies`: organiza las tarjetas en una cuadrícula y las añade al contenedor principal.
*/

function generateMovieElement (movie) {

  /*Crear el div de la columna*/
  const colDiv = document.createElement ('div');
  colDiv.classList.add ('col');
  
  /*Crear la tarjeta principal*/
  const cardDiv = document.createElement ('div');
  cardDiv.classList.add ('card', 'h-100', 'card1');/*'h-100' para que todas las tarjetas tengan la misma altura*/
    
  /*Crear el cuerpo de la tarjeta*/
  const cardBody = document.createElement ('div');
  cardBody.classList.add ('card-body', 'movie');
  
  /*Crear el título con enlace*/
  const titleLink = document.createElement ('a');
  titleLink.href = `#${movie.title.replace (/\s+/g, '-').toLowerCase ()}`;
  const title = document.createElement ('h4'); 
  title.classList.add ('card-title');
  title.textContent = movie.title;
  titleLink.appendChild (title);
  cardBody.appendChild (titleLink);
  
  /*Crear la imagen de la película (poster) dentro de la tarjeta*/
  const poster = document.createElement ('img');
  poster.src = movie.poster;
  poster.alt = `${movie.title} poster`;
  poster.classList.add ('card-img-top');
  cardBody.appendChild (poster);
  
  const year = document.createElement ('p');
  year.classList.add ('moviecolorp', 'card-text');
  year.innerHTML = `<strong>Año:</strong> ${movie.year}`;
  cardBody.appendChild (year);

  const director = document.createElement('p');
  director.classList.add ('moviecolorp', 'card-text');
  director.innerHTML = `<strong>Director:</strong> ${movie.director}`;
  cardBody.appendChild (director);
  
  const duration = document.createElement ('p');
  duration.classList.add ('moviecolorp', 'card-text');
  duration.innerHTML = `<strong>Duración:</strong> ${movie.duration}`;
  cardBody.appendChild (duration);
  
  const genre = document.createElement('p');
  genre.classList.add ('moviecolorp', 'card-text');
  genre.innerHTML = `<strong>Géneros:</strong> ${movie.genre.join(', ')}`;
  cardBody.appendChild (genre);
  
  const rate = document.createElement ('p');
  rate.classList.add ('moviecolorp', 'card-text');
  rate.innerHTML = `<strong>Rating:</strong> ${movie.rate}`;
  cardBody.appendChild (rate);
  
  /*Añadir el cuerpo de la tarjeta a la tarjeta*/
  cardDiv.appendChild (cardBody);
  
  /*Añadir la tarjeta a la columna*/
  colDiv.appendChild (cardDiv);

  return colDiv;/*Devolver la columna que contiene la tarjeta*/
    
}
  
  
function displayMovies(movies) {
  
  /*Obtener el contenedor principal*/
  const contenedor = document.getElementById ("dynamic-content");
  
  /*Crear la fila principal*/
  const row = document.createElement ('div');
  row.classList.add ('row', 'row-cols-1', 'row-cols-md-3', 'g-3');
  
  /*Generar los elementos de las películas y añadirlos a la fila*/
  movies.forEach (movie => {

      const movieElement = generateMovieElement (movie);
      row.appendChild (movieElement);

  });
  
  /*Añadir la fila completa al contenedor*/
  contenedor.appendChild (row);

  /*Log de verificación.

  console.log ("Todas las tarjetas renderizadas correctamente");*/

}

module.exports = {

  generateMovieElement,
  displayMovies

};




