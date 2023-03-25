const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=d329c9c7d67f3a237c50b4cdb4556d40&query='

async function getMovies(searchMovie) {

    const url = `${API_SEARCH}${searchMovie}`;
    return fetch(url).then(res => res.json()).then(data => data.results)
}

const SearchMovie = {
    getMovies
}

export default SearchMovie

