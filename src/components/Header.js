import React, { useState } from 'react';

function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header>
      <div className="logo">
        {/* Logo content */}
      </div>

      <div className="menu-icon" onClick={toggleNav}>
        {isMobileNavVisible ? <span>✖</span> : <span>☰</span>} {/* Toggle between close and hamburger icon */}
      </div>

      <nav className="desktop-nav">
        <ul>
          <li>
            <a className="fancy" href="https://google.com">
              <span className="top-key"></span>
              <span className="text">About</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
          </li>
          <li>
            <a className="fancy" href="https://google.com">
              <span className="top-key"></span>
              <span className="text">Projects</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
          </li>
          <li>
            <a className="fancy" href="https://google.com">
              <span className="top-key"></span>
              <span className="text">Contact</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
          </li>
        </ul>
      </nav>

      {isMobileNavVisible && (
        <nav className="mobile-nav">
          {/* Mobile navigation items */}
          <ul>
            <li><a href="https://www.google.com">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
