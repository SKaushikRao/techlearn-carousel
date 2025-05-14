import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Carousel from './components/Carousel';
import slideData from './data/slideData';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(135deg, #6e8efb, #a777e3, #f06292);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -1px;
  text-shadow: 0 0 20px rgba(110, 142, 251, 0.3);
`;

const CarouselWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  height: 600px;
  border-radius: 25px;
  box-shadow: 0 20px 100px rgba(0, 0, 0, 0.4), 0 0 60px rgba(110, 142, 251, 0.15);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(135deg, rgba(110, 142, 251, 0.4), rgba(167, 119, 227, 0.4), rgba(240, 98, 146, 0.4));
    z-index: -1;
    border-radius: 30px;
    filter: blur(10px);
  }
`;

function App() {
  return (
    <AppContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        HTML Concepts
      </Title>
      <CarouselWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <Carousel slides={slideData} />
      </CarouselWrapper>
    </AppContainer>
  );
}

export default App;