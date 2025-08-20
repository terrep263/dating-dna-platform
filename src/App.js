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
import
