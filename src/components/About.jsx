import React, { useState, useEffect } from 'react';

function About() {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const fullText = ['Web Developer', 'Chatbot Creator', 'Prompt Engineer', 'Video Editor', 'Photographer'];
  const typingSpeed = 100; // Milliseconds
  useEffect(() => {
    if (typedText.length < fullText[index].length) {
      setTimeout(() => {
        setTypedText(fullText[index].substring(0, typedText.length + 1));
      }, typingSpeed);
    } else {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % fullText.length);
        setTypedText('');
      }, 3000);
    }
  }, [typedText, index, fullText]);
  
  const openWhatsApp = () => {
    const whatsappNumber = "6290034904"; // Your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="about" className="about-me-section">
      <div className='profile-pic'>
      </div>
      <div className='introduction'>
        <div className='intro'>
          <h1>Hi, I am a </h1>
          <h1 className="typing-effect">{typedText}</h1>
        </div>
        <div className="ball" hidden></div>
        <h2>Freelancer Expert in Web Development</h2>
        <p>1+ years of experience in Web development. My mission is to design and develop a website that you and your audience love.</p>        
        <button  onClick={openWhatsApp} className="whatsapp-btn">Chat on WhatsApp</button>
        <div className="about-me-image">
        </div>
      </div>
    </section>
  );
}
export default About;
