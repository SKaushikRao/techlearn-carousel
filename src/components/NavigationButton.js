import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 1.75rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const PrevButton = styled(Button)`
  left: 30px;
  &::after {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    z-index: -1;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    pointer-events: none;
  }
`;

const NextButton = styled(Button)`
  right: 30px;
  &::after {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    z-index: -1;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    pointer-events: none;
  }
`;

const NavigationButton = ({ direction, onClick, disabled }) => {
  const isNext = direction === 'next';
  
  return isNext ? (
    <NextButton
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      &rarr;
    </NextButton>
  ) : (
    <PrevButton
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      &larr;
    </PrevButton>
  );
};

export default NavigationButton;