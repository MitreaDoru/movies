

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d329c9c7d67f3a237c50b4cdb4556d40";

async function getMovies() {
    return fetch(API_URL).then(response => response.json()).then(data => data.results)

}

const HomeInfo = {
    getMovies
}

export default HomeInfo