/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/carouselGenres.js":
/*!***********************************!*\
  !*** ./scripts/carouselGenres.js ***!
  \***********************************/
/***/ ((module) => {

eval("{\r\n\r\nconst carouselGenres = [\r\n\r\n  'Action',\r\n  'Animation',\r\n  'Adventure',\r\n  'Science Fiction',\r\n  'Comedy',\r\n  'Crime',\r\n  'Drama',\r\n  'Fantasy',\r\n  'Romance',\r\n  'Horror'\r\n\r\n];\r\n\r\nmodule.exports = carouselGenres;\n\n//# sourceURL=webpack://front/./scripts/carouselGenres.js?\n}");

/***/ }),

/***/ "./scripts/carouselMovies.js":
/*!***********************************!*\
  !*** ./scripts/carouselMovies.js ***!
  \***********************************/
/***/ ((module) => {

eval("{\r\n\r\nconst carouselMovies = [\r\n\r\n  {\r\n\r\n    title: 'Kill Bill Volume I',\r\n    poster: '/assets/Kill_Bill_VolumeI.webp',\r\n    genre: ['Action']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'Toy Story',\r\n    poster: '/assets/Toy_Story.webp',\r\n    genre: ['Animation']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',\r\n    poster: '/assets/Pirates_Of_The_Caribbean.jpg',\r\n    genre: ['Adventure']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: '2001: A Space Odyssey',\r\n    poster: '/assets/2001_A_Space_Odyssey.webp',\r\n    genre: ['Science Fiction']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'As Good As It Gets',\r\n    poster: '/assets/As_Good_As_It_Gets.jpg',\r\n    genre: ['Comedy']\r\n\r\n  },\r\n\r\n  {\r\n    title: 'Heat',\r\n    poster: '/assets/Heat.webp',\r\n    genre: ['Crime']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'Shindlers List',\r\n    poster: '/assets/Schindlers_List.webp',\r\n    genre: ['Drama']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'Pans Labyrinth',\r\n    poster: '/assets/Pans_Labyrinth.webp',\r\n    genre: ['Fantasy']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'Pride & Prejudice',\r\n    poster: '/assets/Pride_&_Prejudice.webp',\r\n    genre: ['Romance']\r\n\r\n  },\r\n\r\n  {\r\n\r\n    title: 'The Shining',\r\n    poster: '/assets/The_Shining.webp',\r\n    genre: ['Horror']\r\n\r\n  }\r\n\r\n];\r\n\r\nmodule.exports = carouselMovies;\n\n//# sourceURL=webpack://front/./scripts/carouselMovies.js?\n}");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{\r\n\r\n/* \r\nThis JavaScript file manages the core functionality of the \"Cine de Culto\" portal.\r\n\r\nIt includes functions to fetch movies from a local API, dynamically display them,\r\nand handle the creation of new movies through an interactive form. \r\nIt also provides a feature to reset the form fields easily.\r\n\r\nThe code structure follows best development practices: asynchronous functions \r\nfor HTTP requests, robust error handling, and input validation to ensure a smooth \r\nand secure user experience.\r\n\r\nAxios is used for backend communication, and the external module \r\n`generateMovieElement.js` is used to render movie elements.\r\n\r\nThis script is designed to integrate seamlessly with a responsive interface\r\nand a sleek dark-themed visual style, consistent with the overall portal aesthetics.\r\n*/\r\n\r\nconst { displayCarousel, displayGrid, filterMoviesByGenre } = __webpack_require__(/*! ./movieRenderer.js */ \"./scripts/movieRenderer.js\");\r\nconst carouselMovies = __webpack_require__(/*! ./carouselMovies.js */ \"./scripts/carouselMovies.js\");\r\n\r\ndocument.getElementById('delete')?.addEventListener('click', function (event) {\r\n\r\n  event.preventDefault();\r\n\r\n  const inputs = document.querySelectorAll('#movieForm input');\r\n\r\n  inputs.forEach(input => {\r\n    input.value = '';\r\n  });\r\n\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  displayCarousel(carouselMovies);\r\n});\r\n\r\ndocument.addEventListener(\"click\", function (e) {\r\n\r\n  if (e.target.classList.contains(\"genre-btn\")) {\r\n    const genre = e.target.dataset.genre;\r\n    handleGenreClick(genre);\r\n  }\r\n\r\n});\r\n\r\nasync function handleGenreClick(genre) {\r\n\r\n  try {\r\n\r\n    const res = await fetch(\"http://localhost:3000/api/movies\");\r\n    const allMovies = await res.json();\r\n    const filtered = filterMoviesByGenre(genre, allMovies);\r\n\r\n    displayGrid(filtered, genre);\r\n\r\n  } catch (err) {\r\n\r\n    console.error(\"Error ...:\", err);\r\n\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?\n}");

/***/ }),

/***/ "./scripts/movieRenderer.js":
/*!**********************************!*\
  !*** ./scripts/movieRenderer.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\r\n\r\n/* \r\nThis JavaScript module defines the visual generation and dynamic rendering of movie elements \r\nfor the \"Cine de Culto\" portal.\r\n\r\nIt includes:\r\n- `generateMovieElement (movie)`: Creates a fully styled Bootstrap card for each movie, \r\n  using DOM manipulation to include title, poster, year, director, duration, genre, and rating.\r\n- `displayMovies(movies)`: Injects all generated movie cards into the main content area in a responsive grid layout.\r\n\r\nThese functions are designed to integrate with Bootstrap’s grid system and card components, \r\nproviding a clean, elegant, and user-friendly display consistent with the portal’s dark-themed design.\r\n\r\nAll movie data is received dynamically, allowing seamless updates and modular rendering \r\nwhen new content is added via the backend or user submissions.*/\r\n\r\nconst carouselGenres = __webpack_require__ (/*! ./carouselGenres.js */ \"./scripts/carouselGenres.js\");\r\n\r\nfunction generateCarouselCard (movie, index) {\r\n\r\n  const genre = carouselGenres [index] || 'No genre';\r\n  const cardDiv = document.createElement ('div');\r\n  cardDiv.classList.add ('card', 'h-100', 'card1');\r\n  cardDiv.style.width = '18rem';\r\n  const poster = document.createElement ('img');\r\n  poster.src = movie.poster;\r\n  poster.alt = `${movie.title} poster`;\r\n  poster.classList.add ('card-img-top', 'poster-hover');\r\n  cardDiv.appendChild (poster);\r\n  const cardBody = document.createElement ('div');\r\n  cardBody.classList.add ('card-body', 'movie');\r\n  const genreBtn = document.createElement ('button');\r\n  genreBtn.className = 'genre-btn';\r\n  genreBtn.textContent = genre;\r\n  genreBtn.dataset.genre = genre;\r\n  cardBody.appendChild (genreBtn);\r\n  cardDiv.appendChild (cardBody);\r\n  return cardDiv;\r\n\r\n}\r\n\r\nfunction displayCarousel (movies) {\r\n\r\n  const container = document.getElementById (\"dynamic-content\");\r\n  container.innerHTML = \"\";\r\n  const carousel = document.createElement (\"div\");\r\n  carousel.id = \"movieCarousel\";\r\n  carousel.classList.add (\"carousel\", \"slide\");\r\n  carousel.setAttribute (\"data-bs-ride\", \"carousel\");\r\n  const inner = document.createElement (\"div\");\r\n  inner.classList.add (\"carousel-inner\");\r\n\r\n  for (let i = 0; i < movies.length; i += 3) {\r\n\r\n    const item = document.createElement (\"div\");\r\n    item.classList.add (\"carousel-item\");\r\n    if (i === 0) item.classList.add (\"active\");\r\n    const row = document.createElement (\"div\");\r\n    row.classList.add (\"row\", \"justify-content-center\", \"gx-3\");\r\n\r\n    for (let j = i; j < i + 3 && j < movies.length; j++) {\r\n\r\n      const col = document.createElement (\"div\");\r\n      col.classList.add (\"col-12\", \"col-sm-6\", \"col-md-3\", \"mb-4\", \"px-2\");\r\n      const card = generateCarouselCard (movies [j], j); \r\n      col.appendChild (card);\r\n      row.appendChild (col);\r\n\r\n    }\r\n\r\n    item.appendChild (row);\r\n    inner.appendChild (item);\r\n\r\n  }\r\n\r\n  const prevBtn = document.createElement (\"button\");\r\n  prevBtn.className = \"carousel-control-prev\";\r\n  prevBtn.type = \"button\";\r\n  prevBtn.setAttribute (\"data-bs-target\", \"#movieCarousel\");\r\n  prevBtn.setAttribute (\"data-bs-slide\", \"prev\");\r\n\r\n  prevBtn.innerHTML = `\r\n\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Anterior</span>\r\n\r\n  `;\r\n\r\n  const nextBtn = document.createElement (\"button\");\r\n  nextBtn.className = \"carousel-control-next\";\r\n  nextBtn.type = \"button\";\r\n  nextBtn.setAttribute (\"data-bs-target\", \"#movieCarousel\");\r\n  nextBtn.setAttribute (\"data-bs-slide\", \"next\");\r\n\r\n  nextBtn.innerHTML = `\r\n\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Siguiente</span>\r\n\r\n  `;\r\n\r\n  carousel.appendChild (inner);\r\n  carousel.appendChild (prevBtn);\r\n  carousel.appendChild (nextBtn);\r\n  container.appendChild (carousel);\r\n\r\n}\r\n\r\nfunction filterMoviesByGenre (genre, allMovies) {\r\n\r\n  return allMovies.filter (movie => movie.genre.includes (genre));\r\n\r\n}\r\n\r\nfunction generateGridCard (movie) {\r\n\r\n  const cardDiv = document.createElement ('div');\r\n  cardDiv.classList.add ('card', 'h-100', 'card1');\r\n  cardDiv.style.width = '16rem';\r\n  const poster = document.createElement ('img');\r\n  poster.src = movie.poster;\r\n  poster.alt = `${movie.title} poster`;\r\n  poster.classList.add ('card-img-top', 'poster-hover');\r\n  cardDiv.appendChild (poster);\r\n  const cardBody = document.createElement ('div');\r\n  cardBody.classList.add ('card-body', 'movie');\r\n  const title = document.createElement ('h5');\r\n  title.className = 'movie-title text-warning';\r\n  title.textContent = movie.title;\r\n  const rate = document.createElement ('p');\r\n  rate.className = 'movie-rating';\r\n  rate.textContent = `Rating: ${movie.rate}`;\r\n  cardBody.appendChild (title);\r\n  cardBody.appendChild (rate);\r\n  cardDiv.appendChild (cardBody);\r\n  cardDiv.addEventListener ('click', () => renderExpandedCard(movie));\r\n\r\n  return cardDiv;\r\n\r\n}\r\n\r\nfunction renderExpandedCard (movie) {\r\n\r\n  const container = document.getElementById ('movie-detail-card');\r\n  const overlay = document.getElementById ('movie-detail-overlay');\r\n  container.innerHTML = ''; \r\n  const closeBtn = document.createElement ('button');\r\n  closeBtn.className = 'btn-close btn-close-white float-end';\r\n  closeBtn.style.fontSize = '1.2rem';\r\n\r\n  closeBtn.addEventListener ('click', () => {\r\n\r\n    container.style.display = 'none';\r\n    overlay.style.display = 'none';\r\n\r\n  });\r\n\r\n  const content = document.createElement ('div');\r\n  content.className = \"d-flex flex-column flex-md-row align-items-center justify-content-center gap-4\";\r\n\r\n  content.innerHTML = `\r\n\r\n    <div class=\"text-center\">\r\n      <img src=\"${movie.poster}\" alt=\"${movie.title} poster\"\r\n          class=\"img-fluid rounded shadow\" style=\"max-height: 400px;\">\r\n    </div>\r\n\r\n    <div class=\"text-white text-center text-md-start\">\r\n\r\n      <h3 class=\"text-warning\">${movie.title}</h3>\r\n      <p><strong>Director:</strong> ${movie.director}</p>\r\n      <p><strong>Year:</strong> ${movie.year}</p>\r\n      <p><strong>Duration:</strong> ${movie.duration}</p>\r\n      <p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>\r\n      <p><strong>Rating:</strong> ${movie.rate}/10</p>\r\n\r\n    </div>\r\n\r\n  `;\r\n\r\n  container.appendChild (closeBtn);\r\n  container.appendChild (content);\r\n  container.style.display = 'block';\r\n  overlay.style.display = 'block';\r\n  \r\n}\r\n\r\nfunction displayGrid (movies, genre) {\r\n\r\n  const container = document.getElementById ('filtered-grid');\r\n  container.innerHTML = '';\r\n  const title = document.createElement ('h2');\r\n  title.classList.add ('text-warning', 'text-center', 'grid-title');\r\n  title.textContent = `Movies in ${genre}`;\r\n  container.appendChild (title);\r\n  const row = document.createElement ('div');\r\n  row.classList.add (\"row\", \"justify-content-center\", \"gx-3\");\r\n\r\n  movies.forEach ((movie) => {\r\n\r\n    const col = document.createElement ('div');\r\n    col.classList.add (\"genre-col\", \"mb-4\");\r\n    const card = generateGridCard (movie);\r\n    col.appendChild (card);\r\n    row.appendChild (col);\r\n\r\n  });\r\n\r\n  container.appendChild (row);\r\n\r\n}\r\n\r\nmodule.exports = {\r\n  \r\n  displayCarousel,\r\n  filterMoviesByGenre,\r\n  displayGrid,\r\n \r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/movieRenderer.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;