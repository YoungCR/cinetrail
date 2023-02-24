import React from 'react'
import Rating from '../Rating/Rating';
import './MovieCard.css'
import { Link } from 'react-router-dom';

function MovieCard({movie, imageURL, imgHeight, radius, cardStyle}) {
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    const imageStyle={
        height: imgHeight,
        width: "200px",
        backgroundImage: `url("${imageBase}${imageURL}")`,
        borderRadius: radius,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative"
    }

  return (
    <Link className={cardStyle} to={`/moviedetails/${movie?.id}`}>
        <div style={imageStyle}>
            <div className='movie-info-top'>
                <p>Rating: {movie.vote_average/2}</p>
            </div>
            <div className='movie-info-bottom'>
                <p>{movie.title}</p>
                <Rating />
            </div>
            {
                cardStyle==='top-rated-card'?
                <p>{movie.title}</p>
                :
                null
            }
        </div>
    </Link>
  )
}

export default MovieCard