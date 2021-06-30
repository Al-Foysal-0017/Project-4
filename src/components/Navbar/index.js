import React, {useState} from 'react'
import Navbar from './navbar/Navbar'
import ToggleBar from './toggleBar/ToggleBar'

const MainNavbarFuction = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <ToggleBar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle} />
        </>
    )
}

export default MainNavbarFuction

