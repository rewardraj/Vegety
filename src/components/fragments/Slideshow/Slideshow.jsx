import React, { useState, useEffect } from 'react';

const Slideshow = (props) => {
  const images = [
    '/src/assets/images/Chef_-_image-removebg.png',
    '/src/assets/images/female-chef.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, images.length]);

  return (
    <img src={images[currentImageIndex]} alt="Slideshow" 
        style={{
            width: props.width || '100',
            height: props.height || 'auto',
            border: props.border || 'none',
            borderRadius: props.borderRadius || '50%',
            margin: props.margin || '0 auto',
        }}
    />
  );
};

export default Slideshow;