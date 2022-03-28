import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper fadeInDown">
		  <a href="/" className="logotype" aria-label="webofkarma">

            <svg enableBackground="new 0 0 512 512" overflow="visible" height="100" width="100" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <g className="mini-left">
                <path d="m152.842 208.741 35.491-31.331 28.244-47.565c-45.401-34.461-96.383-56.454-98.53-57.373l-12.937-5.537-6.352 12.557c-1.078 2.133-26.575 52.908-39.04 109.272z" fill="#023E7D" />
              </g>
              <g className="mini-right">
                <path d="m359.158 208.741-35.491-31.331-28.244-47.565c45.401-34.461 96.383-56.454 98.53-57.373l12.937-5.537 6.352 12.557c1.079 2.134 26.576 52.909 39.041 109.272z" fill="#023E7D" />
              </g>
              <g className="large-left">
                <path d="m169.931 445.062h86.069v-30l-83.094-220.567c-23.53-11.337-48.797-17.085-75.098-17.085h-97.808v97.752c0 93.684 76.23 169.9 169.931 169.9z" fill="#056fda" />
              </g>
              <g className="large-right">
                <path d="m342.069 445.062h-86.069v-30l83.094-220.567c23.53-11.337 48.797-17.085 75.098-17.085h97.808v97.752c0 93.684-76.23 169.9-169.931 169.9z" fill="#0353A4" />
              </g>
              <g className="middle">
                <path d="m360 270.365c0 84.47-104 174.7-104 174.7l-9.32-7.4c-4.44-3.52-108.82-87.25-108.82-169.27 0-81.27 103.47-179.28 107.88-183.41l10.26-9.62s104 113.73 104 195z" fill="#1085fa" />
                <path d="m374.14 268.395c0 82.02-104.38 165.75-108.82 169.27l-9.32 7.4v-369.7l10.26 9.62c4.41 4.13 107.88 102.14 107.88 183.41z" fill="#0377eb" />
              </g>
            </svg>

          </a>

          <nav className={`header-menu ${isOpen ? "toggle-active" : ""}`}>
            <ul>
              <li><Link to="/projects" onClick={toggleNav}>Проєкти</Link></li>
              <li><Link to="/notes" onClick={toggleNav}>Нотатки</Link></li>
              <li><Link to="/notes/instruments" onClick={toggleNav}>Інструменти</Link></li>
              <li><Link to="/about" onClick={toggleNav}>Про мене</Link></li>
            </ul>
          </nav>

          <button
            className={`menu-toggle ${isOpen ? "toggle-active" : ""}`}
            onClick={toggleNav}
			aria-label={`${isOpen ? "Закрити меню" : "Відкрити меню"}`}
          >
            <div className="menu-toggle-icon"><span></span></div>
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header