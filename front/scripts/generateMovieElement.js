

/* 
This JavaScript module defines the visual generation and dynamic rendering of movie elements 
for the "Cine de Culto" portal.

It includes:
- `generateMovieElement (movie)`: Creates a fully styled Bootstrap card for each movie, 
  using DOM manipulation to include title, poster, year, director, duration, genre, and rating.
- `displayMovies(movies)`: Injects all generated movie cards into the main content area in a responsive grid layout.

These functions are designed to integrate with Bootstrap’s grid system and card components, 
providing a clean, elegant, and user-friendly display consistent with the portal’s dark-themed design.

All movie data is received dynamically, allowing seamless updates and modular rendering 
when new content is added via the backend or user submissions.
*/


function generateMovieElement (movie) {

  const colDiv = document.createElement ('div');
  colDiv.classList.add ('col');  
  const cardDiv = document.createElement ('div');
  cardDiv.classList.add ('card', 'h-100', 'card1');
  const cardBody = document.createElement ('div');
  cardBody.classList.add ('card-body', 'movie');
  const titleLink = document.createElement ('a');
  titleLink.href = `#${movie.title.replace (/\s+/g, '-').toLowerCase ()}`;
  const title = document.createElement ('h4'); 
  title.classList.add ('card-title');
  title.textContent = movie.title;
  titleLink.appendChild (title);
  cardBody.appendChild (titleLink);
  const poster = document.createElement ('img');
  poster.src = movie.poster;
  poster.alt = `${movie.title} poster`;
  poster.classList.add ('card-img-top');
  cardBody.appendChild (poster);  
  const year = document.createElement ('p');
  year.classList.add ('moviecolorp', 'card-text');
  year.innerHTML = `<strong>Año:</strong> ${movie.year}`;
  cardBody.appendChild (year);
  const director = document.createElement ('p');
  director.classList.add ('moviecolorp', 'card-text');
  director.innerHTML = `<strong>Director:</strong> ${movie.director}`;
  cardBody.appendChild (director);  
  const duration = document.createElement ('p');
  duration.classList.add ('moviecolorp', 'card-text');
  duration.innerHTML = `<strong>Duración:</strong> ${movie.duration}`;
  cardBody.appendChild (duration);  
  const genre = document.createElement ('p');
  genre.classList.add ('moviecolorp', 'card-text');
  genre.innerHTML = `<strong>Géneros:</strong> ${movie.genre.join (', ')}`;
  cardBody.appendChild (genre);  
  const rate = document.createElement ('p');
  rate.classList.add ('moviecolorp', 'card-text');
  rate.innerHTML = `<strong>Rating:</strong> ${movie.rate}`;
  cardBody.appendChild (rate);
  cardDiv.appendChild (cardBody);
  colDiv.appendChild (cardDiv);
  return colDiv;
    
}  
  
function displayMovies (movies) {
  
  const contenedor = document.getElementById ("dynamic-content");  
  const row = document.createElement ('div');
  row.classList.add ('row', 'row-cols-1', 'row-cols-md-3', 'g-3');

  movies.forEach (movie => {

      const movieElement = generateMovieElement (movie);
      row.appendChild (movieElement);

  });
  
  contenedor.appendChild (row);

}

module.exports = {

  generateMovieElement,
  displayMovies

};




