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
      <span className={`material-symbols-outlined ${isMobileNavVisible ? 'rotate' : ''}`}>
        {isMobileNavVisible ? <span class="material-symbols-outlined">close</span> :<span class="material-symbols-outlined">menu</span> }
        </span>
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
          <li>
          <div class="container">
              <label class="toggle" for="switch">
                  <input id="switch" class="input" type="checkbox"></input>
                  <div class="icon icon--moon">
                      <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                      </svg>
                  </div>
              
                  <div class="icon icon--sun">
                      <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                      </svg>
                  </div>
              </label>
          </div>
          </li>
        </ul>
      </nav>
      <div className='mobile-theme'>
      <div class="container">
              <label class="toggle" for="switch">
                  <input id="switch" class="input" type="checkbox"></input>
                  <div class="icon icon--moon">
                      <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                      </svg>
                  </div>
              
                  <div class="icon icon--sun">
                      <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                      </svg>
                  </div>
              </label>
          </div>
          </div>
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
