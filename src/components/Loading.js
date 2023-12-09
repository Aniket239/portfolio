import React, { useState, useEffect } from 'react';

function Loading() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fullText = ['Portfolio', 'Aniket Biswas'];
    const typingSpeed = 150; // Milliseconds

    const typeNextLetter = () => {
      if (typedText.length < fullText[index].length) {
        setTimeout(() => {
          setTypedText(fullText[index].substring(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          if (index === fullText.length - 1) {
            setLoadingComplete(true);
          } else {
            setIndex((prevIndex) => prevIndex + 1);
            setTypedText('');
          }
        }, 200);
      } 
    };    
    typeNextLetter();
    return () => {
      clearTimeout(typeNextLetter);
    };
  }, [typedText, index]);

  return (
    <div className={`loading-screen ${loadingComplete ? 'fade-out' : ''}`}>
      <h1 className="loading-typing-effect">{typedText}</h1>
    </div>
  );
}

export default Loading;
