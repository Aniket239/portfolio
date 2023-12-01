import React, { useState } from 'react';

const cardData = [
  {
    id: 1,
    title: 'Web App',
    backgroundImage: 'path-to-web-app-image.jpg',
    details: 'Detailed information about the Web App.'
  },
  {
    id: 2,
    title: 'Chatbot',
    backgroundImage: 'path-to-chatbot-image.jpg',
    details: 'Insights on Chatbot development.'
  },
  {
    id: 1,
    title: 'Web App',
    backgroundImage: 'path-to-web-app-image.jpg',
    details: 'Detailed information about the Web App.'
  },
  {
    id: 2,
    title: 'Chatbot',
    backgroundImage: 'path-to-chatbot-image.jpg',
    details: 'Insights on Chatbot development.'
  },
  {
    id: 1,
    title: 'Web App',
    backgroundImage: 'path-to-web-app-image.jpg',
    details: 'Detailed information about the Web App.'
  },
  {
    id: 2,
    title: 'Chatbot',
    backgroundImage: 'path-to-chatbot-image.jpg',
    details: 'Insights on Chatbot development.'
  },
  {
    id: 1,
    title: 'Web App',
    backgroundImage: 'path-to-web-app-image.jpg',
    details: 'Detailed information about the Web App.'
  },
  {
    id: 2,
    title: 'Chatbot',
    backgroundImage: 'path-to-chatbot-image.jpg',
    details: 'Insights on Chatbot development.'
  },
  // ... more card data as needed
];

function Card({ title, backgroundImage, onClick }) {
  return (
    <div className="card" onClick={onClick} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card-title">{title}</div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <div className="card-scroller">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            backgroundImage={card.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
