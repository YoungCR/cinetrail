import React from 'react'
import './Slider.css'
import axios from 'axios'
import {MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md'
import Rating from '../Rating/Rating';
import {Link} from 'react-router-dom'
import Genres from '../Genres/Genres';


function Slider() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    //create state for upcoming movies
    const [upcomingMovies, setUpcomingMovies] = React.useState([])
    //create state to move through the movies
    const [index, setIndex] = React.useState(0)

    //create state for rating
    const [currentRating, setCurrentRating] = React.useState(0)

    //https://api.themoviedb.org/3/movie/upcoming?api_key=c315ba96d8b132c0836df2e55986edc6

    React.useEffect(
        ()=>{
            //call api to get upcoming movie data
            axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
            .then(res =>{
                //console.log(res.data.results)
                //store data in state
                setUpcomingMovies(res.data.results)
                //set the first rating
                setCurrentRating((res.data.results[0]?.vote_average)/2)
            })
            .catch(err => console.log(err))

        }, []  //empty means it runs once when page loads
    )

    //this useEffect runs whenever index changes
    //so that I can reset rating
    React.useEffect(
        ()=>{
            console.log(index)
            if(index > 0){
                setCurrentRating((upcomingMovies[index]?.vote_average)/2)
            }

        }, [index]
    )

    const sliderStyle={
        height: "60vh",
        width: "100%",
        backgroundImage: `url("${imageBase}${upcomingMovies[index]?.backdrop_path}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"  //needed in order to use absolute on other stuff
    }
    const handleRight = () =>{
        console.log("right")
        //check if at the end of the array
        index === upcomingMovies.length-1 ?
        setIndex(0)
        :
        setIndex(index+1)
    }

    const handleLeft = () =>{
        //check if on first element
        index === 0 ?
        setIndex(upcomingMovies.length-1)
        :
        setIndex(index-1)
    }

  return (
    <div className="slider-container"
         style={sliderStyle}>
        <div className="slider-overlay"></div>
        <MdKeyboardArrowLeft className="left-arrow" 
        onClick={handleLeft} />
        <MdKeyboardArrowRight className="right-arrow" 
                onClick={handleRight} />
        <div className="slider-movie-info">
            <h1>{upcomingMovies[index]?.original_title}</h1>
            <p>{upcomingMovies[index]?.overview?.slice(0, 120)} ...</p>
            <Genres movieGenres={upcomingMovies[index]?.genre_ids}/>
            <p>Release Date: {upcomingMovies[index]?.release_date}</p>
            <Rating stars={currentRating}/>
            <p>Rating: {upcomingMovies[index]?.vote_average}</p>
            <Link to={`/moviedetails/${upcomingMovies[index]?.id}`}
            className="movie-link">
                See Details
            </Link>

        </div>
        
    </div>
  )
}

export default Slider