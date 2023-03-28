import React, {useState} from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div classname = "navbar-container">
            {/* putting the logo in the navbar - could also use 'a' tag */}

            <img className="logo" src="RS-logo.png" height={100}></img>
            
            <div className="menu-icon">
                {/* not clicked: hamburge3r menu */}
                {/* i className = {click ? 'fas fa-times' : 'fas fa-bars'} */}
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
