import React from 'react'
import './PopularMovies.css'
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';

function PopularMovies() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseURL = process.env.REACT_APP_BASE_URL;

    // create stat to hold popular movies
    const [newPopularMovies, setNewPopularMovies] = React.useState([]);
    //this component shows all the popular movies
    //what is the end point? https://api.themoviedb.org/3/movie/popular?api_key=f73c99ddf681dc35edb8e0cdecd28731&page=1

    React.useEffect(
        ()=>{
            //call api to get upcoming movie data
            axios.get(`${baseURL}/movie/popular?api_key=${apiKey}&page=1`)
            .then(res=>{
                console.log(res.data.results)
                //store date in state
                setNewPopularMovies(res.data.results)
            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className='popular-container'>
        <h3>Popular Movies</h3>
        <div className='popular-wrapper'>
            {newPopularMovies.map(item => <MovieCard key={item.id} movie={item} imageURL={item.poster_path} imgHeight='300px' radius='16px' cardStyle='popular-card'/>)}
        </div>
        <div className='page-numbers'>
            Page Numbers goe here
        </div>
    </div>
  )
}

export default PopularMovies