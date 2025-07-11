

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
when new content is added via the backend or user submissions.*/

const carouselGenres = require ('./carouselGenres.js');

function generateMovieElement (movie, index) {

  const genre = carouselGenres [index] || 'No genre';
  const cardDiv = document.createElement ('div');
  cardDiv.classList.add ('card', 'h-100', 'card1');
  cardDiv.style.width = '18rem';
  const poster = document.createElement ('img');
  poster.src = movie.poster;
  poster.alt = `${movie.title} poster`;
  poster.classList.add ('card-img-top', 'poster-hover');
  cardDiv.appendChild (poster);
  const cardBody = document.createElement ('div');
  cardBody.classList.add ('card-body', 'movie');
  const genreBtn = document.createElement ('button');
  genreBtn.className = 'genre-btn';
  genreBtn.textContent = genre;
  genreBtn.addEventListener ('click', () => filterByGenre (genre));
  cardBody.appendChild (genreBtn);
  cardDiv.appendChild (cardBody);
  return cardDiv;

}

function displayMovies (movies) {

  const container = document.getElementById ("dynamic-content");
  container.innerHTML = "";
  const carousel = document.createElement ("div");
  carousel.id = "movieCarousel";
  carousel.classList.add ("carousel", "slide");
  carousel.setAttribute ("data-bs-ride", "carousel");
  const inner = document.createElement ("div");
  inner.classList.add ("carousel-inner");

  for (let i = 0; i < movies.length; i += 3) {
    const item = document.createElement ("div");
    item.classList.add ("carousel-item");
    if (i === 0) item.classList.add ("active");
    const row = document.createElement ("div");
    row.classList.add ("row", "justify-content-center", "gx-3");

    for (let j = i; j < i + 3 && j < movies.length; j++) {

      const col = document.createElement ("div");
      col.classList.add ("col-12", "col-sm-6", "col-md-3", "mb-4", "px-2");
      const card = generateMovieElement (movies [j], j); 
      col.appendChild (card);
      row.appendChild (col);

    }

    item.appendChild (row);
    inner.appendChild (item);

  }

  const prevBtn = document.createElement ("button");
  prevBtn.className = "carousel-control-prev";
  prevBtn.type = "button";
  prevBtn.setAttribute ("data-bs-target", "#movieCarousel");
  prevBtn.setAttribute ("data-bs-slide", "prev");

  prevBtn.innerHTML = `

    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>

  `;

  const nextBtn = document.createElement ("button");
  nextBtn.className = "carousel-control-next";
  nextBtn.type = "button";
  nextBtn.setAttribute ("data-bs-target", "#movieCarousel");
  nextBtn.setAttribute ("data-bs-slide", "next");

  nextBtn.innerHTML = `

    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>

  `;

  carousel.appendChild (inner);
  carousel.appendChild (prevBtn);
  carousel.appendChild (nextBtn);
  container.appendChild (carousel);

}

module.exports = {
  
  displayMovies,
 
};





