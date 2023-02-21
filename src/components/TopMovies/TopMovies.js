import React from 'react'
import './TopMovies.css'
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';

function TopMovies() {
    // https://api.themoviedb.org/3/movie/top_rated?api_key=f73c99ddf681dc35edb8e0cdecd28731&language=en-US&page=1

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseURL = process.env.REACT_APP_BASE_URL;

    // create stat to hold popular movies
    const [newTopMovies, setNewTopMovies] = React.useState([]);
    //this component shows all the popular movies
    //what is the end point? https://api.themoviedb.org/3/movie/popular?api_key=f73c99ddf681dc35edb8e0cdecd28731&page=1

    React.useEffect(
        ()=>{
            //call api to get upcoming movie data
            axios.get(`${baseURL}/movie/top_rated?api_key=${apiKey}`)
            .then(res=>{
                console.log(res.data.results)
                //store date in state
                setNewTopMovies(res.data.results)
            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className='top-rated-container'>
        <h3>Top Rated Movies</h3>
        <div className='top-rated-wrapper'>
            {newTopMovies.map(item =><MovieCard key={item.id} movie={item} imageURL={item.backdrop_path} imgHeight='100px' radius='8px' cardStyle='top-rated-card'/>)}
        </div>
    </div>
  )
}

export default TopMovies