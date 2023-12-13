// StarBackground.js
import React, { useEffect } from 'react';

const StarBackground = () => {
  useEffect(() => {
    const starsContainer = document.getElementById('stars-container');
    const shootingStarsContainer = document.getElementById('shooting-stars-container');

    let shootingStarCount = 0; // Track the number of shooting stars

    const generateStars = (container, className, numStars) => {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = className;
        star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        container.appendChild(star);
      }
    };

    const generateShootingStar = () => {
      if (shootingStarCount < 30) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';

        const initialX = window.innerWidth; // Start from the rightmost edge
        const initialY = Math.random() * window.innerHeight; // Random Y position

        shootingStar.style.left = `${initialX}px`;
        shootingStar.style.top = `${initialY}px`;

        shootingStarsContainer.appendChild(shootingStar);

        animateShootingStar(shootingStar);
        shootingStarCount++;
      }
    };

    const animateShootingStar = (shootingStar) => {
      const speed = Math.random() * 4 + 8; // Adjusted speed
      const angle = 180; // Move horizontally from right to left
      const radians = (angle * Math.PI) / 180;

      const deltaX = Math.cos(radians) * speed;
      const deltaY = Math.sin(radians) * speed;

      const updateStarPosition = () => {
        const rect = shootingStar.getBoundingClientRect();
        const newX = rect.left - deltaX; // Move to the left
        const newY = rect.top + deltaY; // Keep the same Y position

        // Check if shooting star is out of the screen
        if (newX + rect.width < 0) {
          // Remove shooting star
          shootingStar.remove();
          shootingStarCount--;
          generateShootingStar();
        } else {
          shootingStar.style.left = `${newX}px`;
          shootingStar.style.top = `${newY}px`;
          requestAnimationFrame(updateStarPosition);
        }
      };

      requestAnimationFrame(updateStarPosition);
    };

    const numNormalStars = window.innerWidth < 768 ? 150 : 300;
    const numShootingStars = 10; // Adjust as needed
    generateStars(starsContainer, 'star', numNormalStars);
    generateStars(shootingStarsContainer, 'shooting-star', numShootingStars);

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const cursorRadius = 50;

      const stars = document.querySelectorAll('.star, .shooting-star');
      stars.forEach((star) => {
        const starX = star.offsetLeft + star.offsetWidth / 2;
        const starY = star.offsetTop + star.offsetHeight / 2;

        const deltaX = mouseX - starX;
        const deltaY = mouseY - starY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < cursorRadius) {
          const repelStrength = 100;
          const repelX = (repelStrength / distance) * deltaX;
          const repelY = (repelStrength / distance) * deltaY;

          star.style.transform = `translate(${repelX}px, ${repelY}px)`;
        } else {
          star.style.transform = 'translate(0, 0)';
        }
      });
    };

    const handleMouseLeave = () => {
      const stars = document.querySelectorAll('.star, .shooting-star');
      stars.forEach((star) => {
        star.style.transform = 'translate(0, 0)';
      });
    };

    starsContainer.addEventListener('mousemove', handleMouseMove);
    starsContainer.addEventListener('mouseleave', handleMouseLeave);

    // Periodically generate shooting stars
    const shootingStarInterval = setInterval(() => {
      generateShootingStar();
    }, 1000); // Adjusted interval

    return () => {
      starsContainer.removeEventListener('mousemove', handleMouseMove);
      starsContainer.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div className="background-container">
      <div id="stars-container" className="stars-container"></div>
      <div id="shooting-stars-container" className="shooting-stars-container"></div>
    </div>
  );
};

export default StarBackground;
