

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

function generateCarouselCard (movie, index) {

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
  genreBtn.dataset.genre = genre;
  cardBody.appendChild (genreBtn);
  cardDiv.appendChild (cardBody);
  return cardDiv;

}

function displayCarousel (movies) {

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
      const card = generateCarouselCard (movies [j], j); 
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

function filterMoviesByGenre (genre, allMovies) {

  return allMovies.filter (movie => movie.genre.includes (genre));

}

function generateGridCard (movie) {

  const cardDiv = document.createElement ('div');
  cardDiv.classList.add ('card', 'h-100', 'card1');
  cardDiv.style.width = '16rem';
  const poster = document.createElement ('img');
  poster.src = movie.poster;
  poster.alt = `${movie.title} poster`;
  poster.classList.add ('card-img-top', 'poster-hover');
  cardDiv.appendChild (poster);
  const cardBody = document.createElement ('div');
  cardBody.classList.add ('card-body', 'movie');
  const title = document.createElement ('h5');
  title.className = 'movie-title text-warning';
  title.textContent = movie.title;
  const rate = document.createElement ('p');
  rate.className = 'movie-rating';
  rate.textContent = `Rating: ${movie.rate}`;
  cardBody.appendChild (title);
  cardBody.appendChild (rate);
  cardDiv.appendChild (cardBody);
  cardDiv.addEventListener ('click', () => renderExpandedCard(movie));

  return cardDiv;

}

function renderExpandedCard (movie) {

  const container = document.getElementById ('movie-detail-card');
  const overlay = document.getElementById ('movie-detail-overlay');
  container.innerHTML = ''; 
  const closeBtn = document.createElement ('button');
  closeBtn.className = 'btn-close btn-close-white float-end';
  closeBtn.style.fontSize = '1.2rem';

  closeBtn.addEventListener ('click', () => {

    container.style.display = 'none';
    overlay.style.display = 'none';

  });

  const content = document.createElement ('div');
  content.className = "d-flex flex-column flex-md-row align-items-center justify-content-center gap-4";

  content.innerHTML = `

    <div class="text-center">
      <img src="${movie.poster}" alt="${movie.title} poster"
          class="img-fluid rounded shadow" style="max-height: 400px;">
    </div>

    <div class="text-white text-center text-md-start">

      <h3 class="text-warning">${movie.title}</h3>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Year:</strong> ${movie.year}</p>
      <p><strong>Duration:</strong> ${movie.duration}</p>
      <p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>
      <p><strong>Rating:</strong> ${movie.rate}/10</p>

    </div>

  `;

  container.appendChild (closeBtn);
  container.appendChild (content);
  container.style.display = 'block';
  overlay.style.display = 'block';
  
}

function displayGrid (movies, genre) {

  const container = document.getElementById ('filtered-grid');
  container.innerHTML = '';
  const title = document.createElement ('h2');
  title.classList.add ('text-warning', 'text-center', 'grid-title');
  title.textContent = `Movies in ${genre}`;
  container.appendChild (title);
  const row = document.createElement ('div');
  row.classList.add ("row", "justify-content-center", "gx-3");

  movies.forEach ((movie) => {

    const col = document.createElement ('div');
    col.classList.add ("genre-col", "mb-4");
    const card = generateGridCard (movie);
    col.appendChild (card);
    row.appendChild (col);

  });

  container.appendChild (row);

}

module.exports = {
  
  displayCarousel,
  filterMoviesByGenre,
  displayGrid,
 
};


