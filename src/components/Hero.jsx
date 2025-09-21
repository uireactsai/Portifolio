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
          opacity: showImage ? 1 : 0,
        }}
      >
        <img
          // src="https://static.vecteezy.com/system/resources/previews/005/972/881/original/business-team-employees-user-icon-free-vector.jpg"
          src='/saiPhoto.jpeg'
          alt="profile picture"
          style={{
            width:'40%',
            height: '40%',
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
        <h2>
          I'm a MERN Stack developer with a passion for creating useful and functional web Applications.
          Technofile and a quick learner. 
        </h2>
      </div>
      </div>
    </div>
  );
};

export default Hero;
