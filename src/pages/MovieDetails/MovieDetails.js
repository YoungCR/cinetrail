import React from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player'

function MovieDetails() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    // in eed to show info about a specific movie
    //what movie?
    //movieId is in params of the url

    const {movieId} = useParams();

    const [videoLink, setVideoLink] = React.useState("")
    const [movie, setMovie] = React.useState()

    //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

    React.useEffect(
        ()=>{
            //call api to get video info
            axios.get(`${baseURL}/movie/${movie_id}/videos?api_key=${apiKey}`)
            .then(res =>{
                console.log(res.data.results)
                //i need the one with youtube and trailer
                //filter to find this
                const youTubeLinks = res.data.results.filter(
                    item => item.site === "YouTube" && item.type === "Trailer"
                )
                console.log(youTubeLinks)
                //store the first one in state
                setVideoLink(youTubeLinks[0].key)
                console.log(youTubeLinks[0].key)
            })
            .catch(err => console.log(err))
            //male a[o ca;; tp get all movie info
            axios.get(`${baseURL}/movie/${movie_id}?api_key=${apiKey}`)
            .then(res =>{
                console.log(res.data)
                setMovie(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className='details-container'>
        {
            videoLink ?
            <div className='trailer-container'>
                <ReactPlayer className='trailer-player' url={`https://youtube.com/watch?v=${videoLink}`} width='100%' height='100%'/>
            </div>
            :
            <div className='trailer-container-blank' style={
                {
                  backgroundImage:`url("${imageBase}/${movie?.backdrop_path}")`,
                  backgroundPosition:"center",
                  backgroundSize:"cover"
                 }}>
                <p>No Trailer Found</p>
            </div>
        }
        <div className='title-container'>
            <h2>{movie?.title}</h2>
        </div>
        <div className='info-container'>
            <img src={`${imageBase}/${movie?.poster_path}`} alt={{movie?.title} Poster} className="details-poster"/>
            <div className='movie-details-info'>
                <h2>{movie?.tagline}</h2>
                <h4>{movie?.overview}</h4>
                <h4>Status: <span>{movie?.status}</span></h4>
                <h4>Runtime: <span>{movie?.runtime}</span></h4>
                <h4>Budget: <span>{movie?.budget}</span></h4>
            </div>
        </div>
        <div className='review-container'>
            Reviews
        </div>
    </div>
  )
}

export default MovieDetails