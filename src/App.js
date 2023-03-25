
import { useEffect, useState } from "react";
import "./index.css";
import MovieImage from "./MovieImage";
import Modal from "./Modal";
import SearchMovie from "./SearchMovie";
import HomeInfo from "./HomeInfo";
import Header from "./Header";

const App = () => {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [searchMovie, setSearchMovie] = useState('')
  const [home, setHome] = useState(false)
  useEffect(() => {
    HomeInfo.getMovies().then(data => setMovies(data))
  }, [home])

  const handleSearchMovie = async (e) => {
    e.preventDefault()
    setSearchMovie('')
    SearchMovie.getMovies(searchMovie).then(data => setMovies(data));
  }

  const movieCard = movies.map(movie =>
    <div className='movie'>
      <MovieImage key={movie.id} {...movie} />
      <button onClick={() => {
        setShowModal(true)
        setMovie(movie);
      }}>Wiew More</button>
    </div>
  )


  return (
    <div>
      <Header click={() => setHome(!home)} submit={handleSearchMovie} value={searchMovie} change={(e) => setSearchMovie(e.target.value)} />
      <div className="container" onClick={(e) => {
        e.stopPropagation()
        if (showModal) setShowModal(false)
      }}>
        {showModal && <Modal close={() => setShowModal(false)} {...movie} />}
        {movies.length === 0 && <h1>Can't find a movie whit that name.</h1>}
        <div className="grid">
          {movieCard}
        </div>

      </div>
    </div>
  );
};

export default App;
