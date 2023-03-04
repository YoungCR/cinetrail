import React from 'react'
import axios from 'axios'

function Genres({movieGenres}) {

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;

    //create state for all genres
    const [allGenres, setAllGenres] = React.useState([])
    //get the list of all genre ids when the page loads
    React.useEffect(
        ()=>{
            axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
            .then(res =>{
                console.log(res.data.genres)
                setAllGenres(res.data.genres)
            })
            .catch(err => console.log(err))
        } ,[]
    )

    const genreList = () =>{
        //walk through movieGenres
        //find the match in all Genres
        //add to an array that I will return
        const glist = []
        movieGenres?.map(id =>{
            //find the name in all Genres that matches this id
            for (let i = 0; i < allGenres.length; i++)
            {
                //check for match
                if (id === allGenres[i].id){
                    //add the name to my array
                    glist.push(allGenres[i].name)
                }
            }
            
        })
        //return this array
        console.log(glist)
        return glist.join(", ")
    }
  return (
    <div>
        <p>Genres: {genreList()}</p>
    </div>
  )
}

export default Genres