import React from 'react'
import {Link } from "react-router-dom";
import './Header.sass'

const Header = () => {
    return (
      <header className="header-wrapper">
        <h2>Star DB</h2>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/people" className='nav-link' >People</Link>
          </li>
          <li className="nav-item">
              <Link to="/planets" className='nav-link' >Planets</Link>
          </li>
          <li className="nav-item">
              <Link to="/starships" className='nav-link' >Starships</Link>
          </li>
        </ul>
      </header>
    )
}

export default Header
