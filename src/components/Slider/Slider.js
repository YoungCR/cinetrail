import React from 'react'
import './Slider.css'
import axios from 'axios';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

function Slider() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    // create state for upcoming movies
    const [upcomingMovies, setUpcomingMovies] = React.useState([])
    //create state to move through the movies 
    const [index, setIndex] = React.useState(0)

    // https://api.themoviedb.org/3/movie/upcoming?api_key=f73c99ddf681dc35edb8e0cdecd28731

    // use effect hook used for loading on page load

    React.useEffect(
        ()=>{
            //call api to get upcoming movie data
            axios.get(`${baseURL}/movie/upcoming?api_key=${apiKey}`)
            .then(res=>{
                console.log(res.data.results)
                //store date in state
                setUpcomingMovies(res.data.results)
            })
            .catch(err => console.log(err))
        }, []
    )

    const sliderStyle={
        height: "60vh",
        width: "100%",
        backgroundImage: `url("${imageBase}${upcomingMovies[index]?.backdrop_path}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative"
    }

    const handleRight = () =>{
        console.log('right arrow')
        //check if at the end of the array
        index === upcomingMovies.length-1 ?
        setIndex(0)
        :
        setIndex(index+1)
    }

    const handleLeft = () =>{
        console.log('right arrow')
        //check if at zero already
        index === 0 ?
        setIndex(upcomingMovies.length-1)
        :
        setIndex(index-1)
    }

  return (
    <div className='slider-container'
    style={sliderStyle}>
        <div className='slider-overlay'></div>
        <MdKeyboardArrowLeft className='left-arrow'onClick={handleLeft}/>
        <MdKeyboardArrowRight className='right-arrow' onClick={handleRight}/>
        <div className='slider-movie-info'>
            <h1>{upcomingMovies[index]?.original_title}</h1>
            <p>{upcomingMovies[index]?.overview?.slice(0, 120)}</p>
            <p>Genre:</p>
            <p>Release Date: {upcomingMovies[index]?.release_date}</p>
            <p>Rating: {upcomingMovies[index]?.vote_average}</p>
            <p>See Details</p>
        </div>
    </div>
  )
}

export default Slider