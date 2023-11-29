import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="about-me-section">
      <div className="about-me-content">
        <h1 className="typing-effect">Hi, I am a <span className="highlight">Designer</span> & <span className="highlight">Webflow Expert</span></h1>
        <h2 className="typing-effect">Freelancer Expert in Webflow Development</h2>
        <p>1+ years of experience in Webflow development. My mission is to design and develop a website that you and your audience love.</p>
        <button className="whatsapp-btn">Let's Chat on WhatsApp</button>
      </div>
      <div className="about-me-image">
        {/* Include your image here */}
      </div>
    </section>
  );
}

export default AboutMe;
