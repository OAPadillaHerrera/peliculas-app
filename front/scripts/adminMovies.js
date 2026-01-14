

console.log("adminMovies.js cargado correctamente");

document.getElementById('movieForm')?.addEventListener('submit', async (event) => {
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
        alert('El campo año no puede tener más de 4 dígitos.');
        return;
    }

    try {
        await axios.post('http://localhost:3000/api/movies/admin', {
            title,
            year: Number(year),
            director,
            duration,
            genre,
            rate: Number(rate),
            poster
        });

        alert('Película creada exitosamente.');
        loadMoviesForAdmin();
    } catch (error) {
        console.error(error);
        alert('Error al crear la película.');
    }
});

document.addEventListener("DOMContentLoaded", loadMoviesForAdmin);

async function loadMoviesForAdmin() {
    try {
        const response = await axios.get("http://localhost:3000/api/movies/admin");
        renderMovieTable(response.data);
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

    tableContainer.innerHTML = `
        <table class="table table-dark table-striped mt-3">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Rate</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${movies.map(movie => `
                    <tr data-id="${movie._id}">
                        <td class="title-cell">${movie.title}</td>
                        <td class="year-cell">${movie.year}</td>
                        <td class="director-cell">${movie.director}</td>
                        <td class="rate-cell">${movie.rate}</td>
                        <td>${movie.isActive ? "Active" : "Disabled"}</td>
                        <td>
                            <button class="btn btn-warning btn-sm edit-btn">Edit</button>
                            <button class="btn btn-success btn-sm save-btn d-none">Save</button>
                            <button class="btn btn-secondary btn-sm cancel-btn d-none">Cancel</button>
                            <button class="btn btn-danger btn-sm delete-btn" data-id="${movie._id}">
                                Delete
                            </button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const movieId = event.target.dataset.id;

        if (!confirm("Are you sure you want to disable this movie?")) return;

        try {
            await axios.delete(`http://localhost:3000/api/movies/${movieId}`);
            alert("Movie disabled successfully");
            loadMoviesForAdmin();
        } catch (error) {
            console.error(error);
            alert("Error disabling movie");
        }
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
        const row = event.target.closest("tr");

        const original = {
            title: row.querySelector(".title-cell").textContent,
            year: row.querySelector(".year-cell").textContent,
            director: row.querySelector(".director-cell").textContent,
            rate: row.querySelector(".rate-cell").textContent,
        };

        row.dataset.original = JSON.stringify(original);

        row.querySelector(".title-cell").innerHTML = `<input class="form-control form-control-sm" value="${original.title}">`;
        row.querySelector(".year-cell").innerHTML = `<input type="number" class="form-control form-control-sm" value="${original.year}">`;
        row.querySelector(".director-cell").innerHTML = `<input class="form-control form-control-sm" value="${original.director}">`;
        row.querySelector(".rate-cell").innerHTML = `<input type="number" step="0.1" class="form-control form-control-sm" value="${original.rate}">`;

        row.querySelector(".edit-btn").classList.add("d-none");
        row.querySelector(".save-btn").classList.remove("d-none");
        row.querySelector(".cancel-btn").classList.remove("d-none");
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-btn")) {
        const row = event.target.closest("tr");
        const original = JSON.parse(row.dataset.original);

        row.querySelector(".title-cell").textContent = original.title;
        row.querySelector(".year-cell").textContent = original.year;
        row.querySelector(".director-cell").textContent = original.director;
        row.querySelector(".rate-cell").textContent = original.rate;

        row.querySelector(".edit-btn").classList.remove("d-none");
        row.querySelector(".save-btn").classList.add("d-none");
        row.querySelector(".cancel-btn").classList.add("d-none");
    }
});

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("save-btn")) {
        const row = event.target.closest("tr");
        const movieId = row.dataset.id;

        const title = row.querySelector(".title-cell input").value;
        const year = row.querySelector(".year-cell input").value;
        const director = row.querySelector(".director-cell input").value;
        const rate = row.querySelector(".rate-cell input").value;

        try {
            await axios.put(`http://localhost:3000/api/movies/${movieId}`, {
                title,
                year: Number(year),
                director,
                rate: Number(rate),
            });

            alert("Movie updated successfully");
            loadMoviesForAdmin();
        } catch (error) {
            console.error(error);
            alert("Error updating movie");
        }
    }
});

