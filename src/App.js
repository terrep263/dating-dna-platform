import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { initializeAffiliateTracking } from './utils/affiliateTracking';

// Import your actual components
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import SinglesAssessmentApp from './components/assessment/SinglesAssessmentApp';
import CouplesAssessmentApp from './components/assessment/CouplesAssessmentApp';
import Results from './components/Results';
import HowItWorks from './components/HowItWorks';
import DNATypes from './components/DNATypes';
import Premium from './components/Premium';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled(motion.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    initializeAffiliateTracking();
  }, []);

  return (
    <AppContainer>
      <Header />
      <AnimatePresence mode="wait">
        <MainContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dna-types" element={<DNATypes />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/assessment" element={<SinglesAssessmentApp />} />
            <Route path="/assessment/couples" element={<CouplesAssessmentApp />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </MainContent>
      </AnimatePresence>
      <Footer />
    </AppContainer>
  );
}

export default App;
