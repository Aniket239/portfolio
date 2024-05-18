import React from "react";
import { ReactTyped } from "react-typed";
import {Link } from "react-router-dom";
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <div className="about_info">
          <h1>Hi, I'm Aniket Biswas a <span>
            <ReactTyped
              strings={["web developer", "chatbot developer", "video editor"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </span></h1>
          <Link to="/contacts">Contact Now</Link>
          <a href="https://drive.google.com/uc?export=download&id=1jHXQyj7_G-5e5yKWf8RzLxyXBzmiwJVx" class="download-link" download>Download Resume</a>
        </div>
        <div className="about_image">
          <img src="[path_to_your_image_or_gif]" alt="Profile"/>
        </div>
      </div>
    </section>
  );
}

export default About;
