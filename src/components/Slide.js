import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SlideContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  box-sizing: border-box;
  color: white;
  background: ${props => `linear-gradient(135deg, ${props.bgColor || '#333'}, ${props.secondaryColor || '#111'})`};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
  }
`;

const SlideTitle = styled(motion.h2)`
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SlideContent = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const CodeBlock = styled(motion.pre)`
  background: rgba(0, 0, 0, 0.25);
  padding: 1.75rem;
  border-radius: 12px;
  font-family: 'Fira Code', 'Courier New', monospace;
  width: 100%;
  max-width: 800px;
  overflow-x: auto;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`;

const Slide = ({ data, isActive }) => {
 
  const getSecondaryColor = (primaryColor) => {
   
    const themeColors = {
     
      '#FF6B6B': '#8A4FFF', 
      '#4ECDC4': '#004E92',
      '#FFD166': '#FF5E62', 
      
 
      '#6A0572': '#EC38BC', 
      '#5D2A42': '#F3A183', 
      '#247BA0': '#70F570'  
    };
    
    return themeColors[primaryColor] || '#222222';
  };

  return (
    <SlideContainer
      bgColor={data.color}
      secondaryColor={getSecondaryColor(data.color)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.8,
        filter: isActive ? 'blur(0px)' : 'blur(5px)'
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SlideTitle
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        {data.title}
      </SlideTitle>
      <SlideContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        {data.content}
      </SlideContent>
      <CodeBlock
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        {data.code}
      </CodeBlock>
    </SlideContainer>
  );
};

export default Slide;
