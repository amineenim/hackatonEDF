import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled component pour les images
const ImageContainer = styled.div`
  position: relative;
  width: 282px; // ajusté pour une largeur fixe
  height: 282px; // ajusté pour une hauteur fixe
  overflow: hidden; // pour s'assurer que les images ne débordent pas du conteneur

  img {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    max-width: none;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }
`;

const TransitionImage = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 500); // Durée de l'intervalle pour chaque image

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Transition image ${index}`}
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        />
      ))}
    </ImageContainer>
  );
};

export default TransitionImage;