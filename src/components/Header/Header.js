import React from 'react'
import './Header.css'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function Header() {
    const darkMode = true;
//copy dark mode state
    const handleTheme = () => {
        console.log('togggle')
        //toggle darkmode
        setDarkMode(!darkMode)
        //save in local storage, saved as opposite initially to avoid errors
        localStorage.setItem('darkmode', !darkMode)
    }
  return (
    <div className={darkMode?'header-container':'header-container header-light'}>
        <a href='/' className='logo'>CineTrail</a>
        <div className='search-container'>
            <input placeholder='Search Movies' />
        </div>
        <div className='header-buttons-container'>
            {
                darkMode?
                <div className='theme-buttons'>
                    <MdOutlineLightMode className='theme-icon' onClick={handleTheme}/>
                    <MdOutlineDarkMode  className='theme-icon theme-icon-active'/>
                </div>
                :
                <div className='theme-buttons'>
                    <MdOutlineLightMode className='theme-icon theme-icon-active'/>
                    <MdOutlineDarkMode className='theme-icon' onClick={handleTheme}/>
                </div>
            }
            <MdOutlineLightMode />
            <MdOutlineDarkMode />
            <button className='create-account-btn'>Create an Account</button>
        </div>
    </div>
  )
}

export default Header