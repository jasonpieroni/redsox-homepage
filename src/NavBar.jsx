import React from 'react'

const NavBar = () => {
    return (
        <header>
        <nav className='nav'>
          <img src="/public/boston-red-sox-logo-transparent.png" className="redsox-image" />
          <h1 className="nav-title">Red Sox Fan Page</h1>
          <h4 className="nav-link">Team Roster</h4>
          <h4 className="nav-link">Team Record</h4>
        </nav>
      </header>
    )
}
export default NavBar;