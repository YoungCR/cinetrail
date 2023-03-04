import React from 'react'
import "./MovieCard.css"
import Rating from '../Rating/Rating';
import {Link} from 'react-router-dom'

function MovieCard({movie, imageUrl, imgHeight, radius, cardStyle}) {
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    const imageStyle={
        // height: "300px",
        height: imgHeight,
        width: "200px",
        // backgroundImage: `url("${imageBase}${movie?.poster_path}")`,
        backgroundImage: `url("${imageBase}${imageUrl}")`,
        // borderRadius: "16px",
        borderRadius: radius,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"  //needed in order to use absolute on other stuff
    }
  return (
    // <div className="movie-card">
    <Link className={cardStyle} 
         to={`/moviedetails/${movie?.id}`}>
    {/* // <div className={cardStyle}> */}
        <div style={imageStyle}>
            <div className="movie-info-top">
                <p>{movie.vote_average}</p>
            </div>
            <div className="movie-info-bottom">
                <p>{movie.title}</p>
                <Rating stars={movie?.vote_average/2}/>
            </div>
        </div>
        {
                cardStyle==="top-rated-card"?
                <p>{movie.title}</p>
                :
                null
            }
    {/* // </div> */}
    </Link>
  )
}

export default MovieCard