import styled from './Movie.module.css'


const API_IMG = "https://image.tmdb.org/t/p/w500/"

const MovieImage = ({ poster_path }) => {
    const imgPath = API_IMG + poster_path
    return (
        <div className={styled.movie}>
            {!poster_path ? <p>No image</p> : <img src={imgPath} alt="movie"></img>}
        </div>
    )
}

export default MovieImage