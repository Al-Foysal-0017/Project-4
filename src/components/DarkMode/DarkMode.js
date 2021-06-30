import React, { useEffect, useState } from 'react';
import "./DarkMode.css"
import { setTheme } from './Themes';
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";

export default function DarkMode() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        window.location.reload(true);
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="container--toggle">

        <div className="ModeSet">
                    {togClass === "light" ? 
                    <FaRegMoon onClick={handleOnClick}
                    className="FaRegMoon"
                    />
                    : 
                    <ImSun 
                    className="ImSun"
                    onClick={handleOnClick}/>}    
        </div>

        <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
        </label>
    </div>
    )
}


