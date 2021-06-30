import React from 'react'
import "./Hero.css"

const Hero = ({Content}) => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div className="HeroContainer" id="home" >
            <div className="HeroBg" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
            </div>

            <div className="HeroContent" style={{backgroundColor: darkMode ? "#323842" : "#F7F8FD"}}>
            <div className="HeroH1" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>{Content}</div>
            </div>
        </div>
    )
}

export default Hero

