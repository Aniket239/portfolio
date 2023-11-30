import React, { useState, useEffect } from 'react';

function AboutMe() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Web Developer'; // Text to be typed
  const typingSpeed = 150; // Milliseconds

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
    }
  }, [typedText, fullText]);

  const whatsappNumber = "6290034904"; // Your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="about" className="about-me-section">
      {/* Your existing content */}
      <div className='introduction'>
        <h1>Hi, I am a </h1>
        <h1 className="typing-effect">{typedText}</h1>
      </div>
      <div className="ball" hidden></div>
        <h2>Freelancer Expert in Web Development</h2>
        <p>1+ years of experience in Web development. My mission is to design and develop a website that you and your audience love.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Let's Chat on WhatsApp</a>
      <div className="about-me-image">
      </div>  
        </section>
  );
}

export default AboutMe;
