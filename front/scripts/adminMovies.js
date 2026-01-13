

console.log("adminMovies.js cargado correctamente");

document.getElementById('movieForm')?.addEventListener('submit', async function (event) {

  event.preventDefault();

  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const director = document.getElementById('director').value;
  const duration = document.getElementById('duration').value;
  const genre = document.getElementById('genre').value.split(',');
  const rate = document.getElementById('rate').value;
  const poster = document.getElementById('poster').value;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (year.length > 4) {
    alert('El campo de año no puede tener mas de 4 dígitod.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/api/movies', {
      title: title,
      year: Number(year),
      director: director,
      duration: duration,
      genre: genre,
      rate: Number(rate),
      poster: poster
    });

    alert('Película creada exitosamente.');

  } catch (error) {

    console.error('Error al crear la película:', error);
    alert('Hubo un problema al crear la película. Inténtalo nuevamente.');

  }

});

document.addEventListener("DOMContentLoaded", () => {
    loadMoviesForAdmin();
});

async function loadMoviesForAdmin() {
    try {
        const response = await axios.get("http://localhost:3000/api/movies");
        const movies = response.data;

        renderMovieTable(movies); 
    } catch (error) {
        console.error("Error loading movies:", error);
    }
}

function renderMovieTable(movies) {
    const tableContainer = document.getElementById("movieTable");

    if (!movies.length) {
        tableContainer.innerHTML = "<p>No movies found.</p>";
        return;
    }

    let tableHTML = `
        <table class="table table-dark table-striped mt-3">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Rate</th>
                    <th>Status</th>
                </tr>
            </thead>
        <tbody>
    `;

    movies.forEach(movie => { 
        tableHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.director}</td>
                <td>${movie.rate}</td>
                <td>${movie.isActive ? "Active" : "Disabled"}</td>
            </tr>
        `;

    });

    tableHTML += `
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
}