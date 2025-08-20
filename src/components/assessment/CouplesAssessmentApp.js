import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import CouplesResultsScreen from './CouplesResultsScreen';
import { calculateDNAType } from '../../data/datingDNAData';
import { checkAssessmentAccess } from '../../utils/auth';
import questions from '../data/questions';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const LoadingCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const LoadingSpinner = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const LoadingText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const LoadingSubtext = styled.p`
  color: #666;
  font-size: 1rem;
`;

const QuestionCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  }
`;

const ProgressBar = styled.div`
  background: #f0f0f0;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border-radius: 4px;
`;

const PartnerIndicator = styled.div`
  font-size: 1.2rem;
  color: #ff6b9d;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const QuestionNumber = styled.div`
  font-size: 0.9rem;
  color: #ff6b9d;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.4;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 2rem;
`;

const OptionButton = styled(motion.button)`
  background: white;
  border: 2px solid ${props => props.selected ? '#ff6b9d' : '#e0e0e0'};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  line-height: 1.4;
  position: relative;
  overflow: hidden;
  color: ${props => props.selected ? '#ff6b9d' : '#333'};
  background: ${props => props.selected ? 'rgba(255, 107, 157, 0.05)' : 'white'};

  &:hover {
    border-color: #ff6b9d;
    background: rgba(255, 107, 157, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const NavButton = styled(motion.button)`
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: #e9ecef;
    border-color: #ff6b9d;
  }
`;

const CompleteButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border: none;
  border-radius: 15px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
  }
`;



export default function CouplesAssessmentApp() {
  const [view, setView] = useState('assessment');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);
  const [partnerResults, setPartnerResults] = useState(null);
  const [currentPartner, setCurrentPartner] = useState('A'); // 'A' or 'B'
  const [accessChecked, setAccessChecked] = useState(false);
  
  const navigate = useNavigate();

  // Check access on component mount
  useEffect(() => {
    const access = checkAssessmentAccess('couples');
    if (!access.canAccess) {
      navigate('/checkout?type=couples');
      return;
    }
    setAccessChecked(true);
  }, [navigate]);

  const handleNext = () => {
    if (currentQuestion < 31) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const sendToSheet = async (data) => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbw5NUCmi4jHYkAXDBAhtFNDWjnw5sNeaTJ9GkuxpDVZ3wh_D0CGtnNi8CyAIJbZkPfB4A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Google Sheet error:', error);
    }
  };

  const handleComplete = () => {
    if (answers.length < 32) {
      alert('Please answer all questions before completing the assessment.');
      return;
    }

    setView('loading');

    setTimeout(() => {
      const results = calculateDNAType(answers);
      
      // Save partner results
      if (currentPartner === 'A') {
        setPartnerResults(prev => ({
          ...prev,
          partnerA: results
        }));
        
        // Switch to partner B
        setCurrentPartner('B');
        setCurrentQuestion(0);
        setAnswers([]);
        setView('assessment');
      } else {
        // Both partners completed
        setPartnerResults(prev => ({
          ...prev,
          partnerB: results
        }));
        
        // Send both results to Google Sheets
        const partnerAData = {
          email: localStorage.getItem('userEmail'),
          userType: partnerResults.partnerA.dnaCode,
          assessmentType: 'Couples_PartnerA',
          scores: partnerResults.partnerA.percentages.reduce((acc, percentage) => {
            acc[percentage.strand] = percentage.percentage;
            return acc;
          }, {})
        };
        
        const partnerBData = {
          email: localStorage.getItem('userEmail'),
          userType: results.dnaCode,
          assessmentType: 'Couples_PartnerB',
          scores: results.percentages.reduce((acc, percentage) => {
            acc[percentage.strand] = percentage.percentage;
            return acc;
          }, {})
        };
        
        sendToSheet(partnerAData);
        sendToSheet(partnerBData);
        
        setView('results');
      }
    }, 2000);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setPartnerResults(null);
    setCurrentPartner('A');
    setView('assessment');
  };

  const handleAnswerSelect = (value) => {
    const questionId = currentQuestion;
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = { questionId, value };
    } else {
      newAnswers.push({ questionId, value });
    }
    
    setAnswers(newAnswers);
  };

  const canProceed = () => {
    return answers.some(a => a.questionId === currentQuestion);
  };

  // Show loading while checking access
  if (!accessChecked) {
    return (
      <LoadingContainer>
        <LoadingCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LoadingSpinner>⚡</LoadingSpinner>
          <LoadingText>Verifying Access</LoadingText>
          <LoadingSubtext>Checking your purchase status...</LoadingSubtext>
        </LoadingCard>
      </LoadingContainer>
    );
  }

  if (view === 'loading') {
    return (
      <LoadingContainer>
        <LoadingCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LoadingSpinner>⚡</LoadingSpinner>
          <LoadingText>Analyzing Your Dating DNA</LoadingText>
          <LoadingSubtext>
            We're processing your responses to reveal your unique dating personality...
          </LoadingSubtext>
        </LoadingCard>
      </LoadingContainer>
    );
  }

  if (view === 'results') {
    return (
      <CouplesResultsScreen
        partnerResults={partnerResults}
        onRestart={resetAssessment}
      />
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / 32) * 100;
  const selectedAnswer = answers.find(a => a.questionId === currentQuestion)?.value;

  return (
    <AppContainer>
      <QuestionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProgressBar>
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </ProgressBar>
        
        <PartnerIndicator>
          Partner {currentPartner}'s Assessment
        </PartnerIndicator>
        
        <QuestionNumber>
          Question {currentQuestion + 1} of 32
        </QuestionNumber>
        
        <QuestionText>
          {currentQuestionData.question}
        </QuestionText>
        
        <OptionsContainer>
          {currentQuestionData.options.map((option, index) => (
            <OptionButton
              key={index}
              selected={selectedAnswer === option.value}
              onClick={() => handleAnswerSelect(option.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.text}
            </OptionButton>
          ))}
        </OptionsContainer>
        
        <NavigationContainer>
          <NavButton
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            whileHover={currentQuestion > 0 ? { scale: 1.05 } : {}}
            whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}}
          >
            Previous
          </NavButton>
          
          {currentQuestion === 31 ? (
            <CompleteButton
              onClick={handleComplete}
              disabled={!canProceed()}
              whileHover={canProceed() ? { scale: 1.05 } : {}}
              whileTap={canProceed() ? { scale: 0.95 } : {}}
            >
              Complete Assessment
            </CompleteButton>
          ) : (
            <NavButton
              onClick={handleNext}
              disabled={!canProceed()}
              whileHover={canProceed() ? { scale: 1.05 } : {}}
              whileTap={canProceed() ? { scale: 0.95 } : {}}
            >
              Next
            </NavButton>
          )}
        </NavigationContainer>
      </QuestionCard>
    </AppContainer>
  );
} 