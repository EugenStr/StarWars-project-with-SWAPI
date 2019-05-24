import React, { useState } from 'react'
import {Link } from "react-router-dom";
import './Header.sass'

const Header = () => {
  const [active, setActive] = useState('');

    return (
      <header className="header-wrapper">
        <h2>Star DB</h2>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/people" className={active === 0 ? 'nav-link active' : 'nav-link'} onClick={() => setActive(0)}>People</Link>
          </li>
          <li className="nav-item">
              <Link to="/planets" className={active === 1 ? 'nav-link active' : 'nav-link'} onClick={() => setActive(1)}>Planets</Link>
          </li>
          <li className="nav-item">
              <Link to="/starships" className={active === 2 ? 'nav-link active' : 'nav-link'} onClick={() => setActive(2)}>Starships</Link>
          </li>
        </ul>
      </header>
    )
}

export default Header
