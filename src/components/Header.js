import React, { useState, useEffect } from 'react';

function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMobileNavVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavVisible]);

  return (
    <header>
      <div className="logo">
      </div>
      <h2 className='name-mobile-view'>Aniket Biswas</h2>
      <div className="menu-icon" onClick={toggleNav}>
        {isMobileNavVisible ? <span>✖</span> : <span>☰</span>}
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
      )}
    </header>
  );
}

export default Header;
