import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from './Slide';
import NavigationButton from './NavigationButton';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #121212, #232323);
  border-radius: 20px;
`;

const SlideWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  z-index: 10;
`;

const ProgressDot = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  margin: 0 6px;
  cursor: pointer;
  box-shadow: ${props => props.active ? '0 0 10px rgba(255, 255, 255, 0.7)' : 'none'};
  transition: background 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
  }
`;

const slideVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    };
  }
};

const Carousel = ({ slides }) => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  
  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection;
    
   
    if (newIndex >= 0 && newIndex < slides.length) {
      setPage([newIndex, newDirection]);
    }
  };

  const goToSlide = (index) => {
    const direction = index > currentIndex ? 1 : -1;
    setPage([index, direction]);
  };

  return (
    <CarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <SlideWrapper
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 }
          }}
        >
          <Slide data={slides[currentIndex]} isActive={true} />
        </SlideWrapper>
      </AnimatePresence>

      <NavigationButton 
        direction="prev" 
        onClick={() => paginate(-1)} 
        disabled={currentIndex === 0}
      />
      <NavigationButton 
        direction="next" 
        onClick={() => paginate(1)} 
        disabled={currentIndex === slides.length - 1}
      />

      <ProgressBar>
        {slides.map((_, index) => (
          <ProgressDot 
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </ProgressBar>
    </CarouselContainer>
  );
};

export default Carousel;
