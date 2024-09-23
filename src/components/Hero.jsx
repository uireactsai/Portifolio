import React, { useEffect, useState } from 'react';
import './Hero.css';
const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 2000); 

    return () => {
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <div className='hero-page'>
    
      <div className='image-container'
        style={{
          opacity: showImage ? 1 : 0, // Image fades in
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/972/881/original/business-team-employees-user-icon-free-vector.jpg"
          alt="profile picture"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className='tag-container'>
        
        <div className='tagging'
        style={{
          transform: showText ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <h1>Hey</h1>
        <p>
          I'm a Ui developer with a passion for creating useful and functional websites.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Hero;