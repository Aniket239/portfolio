import React, { useState, useEffect } from 'react';

function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);


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

  useEffect(() => {
    // Update scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the effect
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ backgroundColor: scrollPosition > 50 ? '#000' : 'transparent' }}>
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
