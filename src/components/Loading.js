// LoadingAnimation.js
import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingAnimation = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Rectangle for main content */}
      <rect x="0" y="0" rx="3" ry="3" width="400" height="100" />

      {/* Lines for additional content */}
      <rect x="0" y="110" rx="3" ry="3" width="250" height="10" />
      <rect x="0" y="130" rx="3" ry="3" width="180" height="10" />
      <rect x="0" y="150" rx="3" ry="3" width="200" height="10" />
    </ContentLoader>
  );
};

export default LoadingAnimation;
