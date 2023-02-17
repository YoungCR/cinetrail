import React, { useContext } from 'react'
import Slider from '../../components/Slider/Slider';
import './Homepage.css'
import { ThemeContext } from '../../contexts/ThemeContext';

//finish theme context

function Homepage() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

  return (
    <div className={darkMode?"homepage-container":"homepage-container homepage-light"}>
      <Slider />
        Homepage
    </div>
  )
}

export default Homepage