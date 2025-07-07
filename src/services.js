//Método POST
function createMovie(newMovie) {

}

//Método GET
async function getMovies() {
    const response = await fetch("http://localhost:3000/movies", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const movieData = await response.json()
    console.log(movieData)
    return movieData
}

//Método PUT
function updateMovie(id, editedMovie) {

}

//Método DELETE
async function deleteMovie(id) {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log(`Película con ID ${id} eliminada`)
    } else {
        console.error("Error al eliminar la película")
    }
}

//Imprimir
let moviesContainer = document.getElementById("movie-section")

async function printMovies() {
    let listMovies = await getMovies()
    moviesContainer.innerHTML = ""
    const printMovieList = listMovies.map(movie => {
        return moviesContainer.innerHTML += `<h1>${movie.title}</h1>
        <p>${movie.director}</p>
        <p>${movie.description}</p>
        <button onclick="deleteMovie('${movie.id}')">Eliminar</button>`
    })
    return printMovieList
}

getMovies()