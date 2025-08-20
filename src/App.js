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

  return React.createElement(AppContainer, null,
    React.createElement(Header),
    React.createElement(AnimatePresence, { mode: "wait" },
      React.createElement(MainContent, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 }
      },
        React.createElement(Routes, null,
          React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
          React.createElement(Route, { path: "/how-it-works", element: React.createElement(HowItWorks) }),
          React.createElement(Route, { path: "/dna-types", element: React.createElement(DNATypes) }),
          React.createElement(Route, { path: "/premium", element: React.createElement(Premium) }),
          React.createElement(Route, { path: "/assessment", element: React.createElement(SinglesAssessmentApp) }),
          React.createElement(Route, { path: "/assessment/couples", element: React.createElement(CouplesAssessmentApp) }),
          React.createElement(Route, { path: "/results", element: React.createElement(Results) })
        )
      )
    ),
    React.createElement(Footer)
  );
}

export default App;
