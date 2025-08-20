import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const HomeContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  color: #111827;
`;

const ReadingProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  z-index: 1000;
  transition: width 0.1s;
`;

const HeroSection = styled.section`
  position: relative;
  background-image: url('/hero-bored-date.jpg');
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
  isolation: isolate;
  color: white;
  height: 388px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  /* Fallback background color in case image fails to load */
  background-color: #8b5cf6;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.65) 0%, rgba(196, 69, 105, 0.65) 50%, rgba(139, 92, 246, 0.65) 100%);
    z-index: 0;
