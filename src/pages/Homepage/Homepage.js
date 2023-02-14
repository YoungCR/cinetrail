import React from 'react'
import './Homepage.css'

function Homepage() {
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log({apiKey});
  return (
    <div className='homepage-container'>Homepage {apiKey}</div>
  )
}

export default Homepage