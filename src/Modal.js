import styled from './Modal.module.css'

const API_IMG = "https://image.tmdb.org/t/p/w500/"

const Modal = ({ close, original_title, overview, release_date, vote_average, poster_path }) => {
    const imgPath = API_IMG + poster_path

    return (
        <div className={styled.test} >

            <div onClick={(e) => e.stopPropagation()} className={styled.modal}>
                {!poster_path ? <p>No image for this movie</p> : <img src={imgPath} alt='img'></img>}
                <div className={styled.content}>
                    <h2>{original_title}</h2>
                    <h3>{release_date}</h3>
                    <h4>{vote_average}</h4>
                    <h5>{overview}</h5>
                </div>
                <div className={styled.button}>
                    <button onClick={close}>Close</button>

                </div>
            </div>
        </div>
    )
}

export default Modal