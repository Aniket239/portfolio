import React from "react";
import './About.css'
const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <div className="about_container_about">
        <h1><div className="about_logo"></div>About Me</h1>
        </div>
        <div>
          <div className="about_items">
          <div className="about_item1">
            <h1>Portfolio</h1>
          </div>
            <div className="contact">Contact</div>
            <div className="projects">Projects</div>
            <div className="resume">resume</div>
            <div className="about_item5">right</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;