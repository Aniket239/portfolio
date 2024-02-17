import React, { useState, useEffect } from 'react';
import './App.css';
import './light-theme.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import LoadingAnimation from './components/Loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
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
          <Router>
          <Header />
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/portfolio" element={<About />} />
              <Route exact path="/projects" element={<Projects />}/>
              <Route exact path="/contacts" element={<Contact />} />
            </Routes>
          <Footer />
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
