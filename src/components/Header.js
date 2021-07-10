import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper fadeInDown">
          <a href="/" className="logotype">
            <StaticImage
              quality="100"
              src="../images/logo.png"
              alt="logotype"
            />
          </a>

          <nav className={`header-menu ${isOpen ? "toggle-active" : ""}`}>
            <ul>
              <li><Link to="/projects" onClick={toggleNav}>Проекты</Link></li>
              <li><Link to="/notes" onClick={toggleNav}>Заметочки</Link></li>
              <li><Link to="/about" onClick={toggleNav}>Обо мне</Link></li>
            </ul>
          </nav>

          <button
            className={`menu-toggle ${isOpen ? "toggle-active" : ""}`}
            onClick={toggleNav}
          >
            <div className="menu-toggle-icon"><span></span></div>
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header