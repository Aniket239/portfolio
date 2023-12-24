import React, { useState, useEffect } from 'react';
import { Link as Element } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingAnimation from './components/Loading';
// import StarBackground from './components/StarBackground';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clear the timeout on component unmount (cleanup)
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/* <StarBackground /> */}
          <Header />
          <Element name="about" className="element">
            <AboutMe />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
