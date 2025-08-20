import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { initializeAffiliateTracking } from './utils/affiliateTracking';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

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
          </Routes>
        </MainContent>
      </AnimatePresence>
      <Footer />
    </AppContainer>
  );
}

export default App;
