import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const {click, setClick} = useState(false)
    // reverses what click is
    const handleClick = () => setClick(!click)
    return (
    <>
    <nav className="navbar">
    <Link to="/" className="Navbar-logo">
             RS ACADEMY
             </Link>
        <div classname = "navbar-container">
            {/* putting the logo in the navbar - could also use 'a' tag */}

            <img className="logo" src="RS-logo.png" height={100}></img>
            
            <div className="menu-icon" onClick={handleClick}>
                {/* not clicked: hamburger menu */}
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
