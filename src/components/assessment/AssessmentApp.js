import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { calculateDNAType } from '../../data/datingDNAData';
import questions from '../data/questions';
import { checkAssessmentAccess } from '../../utils/auth';
import { media, spacing, fontSizes } from '../../utils/responsive';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xl};
  
  ${media.maxMd} {
    width: 95%;
    padding: ${spacing.md};
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xl};
  
  ${media.maxMd} {
    width: 95%;
    padding: ${spacing.md};
  }
`;

const LoadingCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: ${spacing.xxl};
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
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
  
  ${media.maxMd} {
    padding: ${spacing.xl};
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #ff6b9d;
  margin-bottom: 1rem;
`;

const LoadingText = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 600;
  color: #2d3748;
  margin-bottom: ${spacing.sm};
  
  ${media.maxMd} {
    font-size: ${fontSizes.lg};
  }
`;

const LoadingSubtext = styled.p`
  color: #4a5568;
  font-size: ${fontSizes.md};
  
  ${media.maxMd} {
    font-size: ${fontSizes.sm};
  }
`;

const IntroCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: ${spacing.xxl};
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  width: 100%;
  
  ${media.maxMd} {
    padding: ${spacing.xl};
  }
`;

const IntroTitle = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${spacing.md};
  
  ${media.maxMd} {
    font-size: ${fontSizes.xxl};
  }
`;

const IntroSubtitle = styled.p`
  font-size: ${fontSizes.lg};
  color: #666;
  margin-bottom: ${spacing.xl};
  line-height: 1.6;
  
  ${media.maxMd} {
    font-size: ${fontSizes.md};
  }
`;

const StartButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
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
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border-radius: 4px;
`;

const QuestionNumber = styled.div`
  font-size: 0.9rem;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const OptionButton = styled(motion.button)`
  background: ${props => props.selected ? 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)' : 'white'};
  color: ${props => props.selected ? 'white' : '#2d3748'};
  border: 2px solid ${props => props.selected ? 'transparent' : '#e2e8f0'};
  border-radius: 16px;
  padding: 1.5rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.selected ? '0 8px 25px rgba(139, 92, 246, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.selected ? '0 12px 35px rgba(139, 92, 246, 0.4)' : '0 4px 15px rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.selected ? 'transparent' : '#8b5cf6'};
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const NavButton = styled(motion.button)`
  background: ${props => props.disabled ? '#e2e8f0' : 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'};
  color: ${props => props.disabled ? '#a0aec0' : 'white'};
  border: none;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.disabled ? 'none' : '0 4px 15px rgba(0, 0, 0, 0.2)'};
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 8px 25px rgba(0, 0, 0, 0.3)'};
  }
`;

const CompleteButton = styled(motion.button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  }
`;

const StrandIndicator = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

export default function AssessmentApp() {
  const [view, setView] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);
  const navigate = useNavigate();

  // Check access on component mount
  useEffect(() => {
    const access = checkAssessmentAccess('single');
    if (!access.canAccess) {
      navigate('/checkout?type=single');
      return;
    }
    setAccessChecked(true);
  }, [navigate]);

  const handleBeginAssessment = () => {
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

  const handleNext = () => {
    if (currentQuestion < 31) { // 32 questions total (0-31)
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

  const handleComplete = async () => {
    if (answers.length < 32) {
      alert('Please answer all questions before completing the assessment.');
      return;
    }

    setIsLoading(true);
    setView('loading');
    
    // Simulate processing time
    setTimeout(() => {
      const assessmentResults = calculateDNAType(answers);
      setResults(assessmentResults);
      
      // Save to localStorage
      localStorage.setItem('datingDNAResults', JSON.stringify(assessmentResults));
      localStorage.setItem('datingDNAAnswers', JSON.stringify(answers));
      
      setIsLoading(false);
      navigate('/results');
    }, 2000);
  };

  const canProceed = () => {
    return answers.some(a => a.questionId === currentQuestion);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResults(null);
    setView('intro');
  };

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.questionId === currentQuestion);
    return answer ? answer.value : null;
  };

  const getStrandName = (strand) => {
    const strandNames = {
      'SOCIAL_ENERGY': 'Social Energy',
      'ATTRACTION_STYLE': 'Attraction Style',
      'DECISION_FILTER': 'Decision Filter',
      'RELATIONSHIP_PACE': 'Relationship Pace'
    };
    return strandNames[strand] || strand;
  };

  // Show loading while checking access
  if (!accessChecked) {
    return (
      <AppContainer>
        <LoadingCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LoadingSpinner>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ marginRight: '1rem', fontSize: '2rem' }}
            >
              ⚡
            </motion.div>
          </LoadingSpinner>
          <LoadingText>Verifying Access</LoadingText>
          <LoadingSubtext>
            Checking your purchase status...
          </LoadingSubtext>
        </LoadingCard>
      </AppContainer>
    );
  }

  if (view === 'intro') {
    return (
      <AppContainer>
        <IntroCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IntroTitle>Dating DNA Assessment</IntroTitle>
          <IntroSubtitle>
            Discover your unique dating personality through 32 carefully crafted questions. 
            This assessment will reveal insights about your relationship style and preferences.
          </IntroSubtitle>
          <StartButton
            onClick={handleBeginAssessment}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Assessment
          </StartButton>
        </IntroCard>
      </AppContainer>
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
          <LoadingSpinner>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ marginRight: '1rem', fontSize: '2rem' }}
            >
              ⚡
            </motion.div>
          </LoadingSpinner>
          <LoadingText>Analyzing Your Dating DNA</LoadingText>
          <LoadingSubtext>
            We're processing your responses to reveal your unique dating personality...
          </LoadingSubtext>
        </LoadingCard>
      </LoadingContainer>
    );
  }

  if (view === 'assessment') {
    const currentQuestionData = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / 32) * 100;
    const selectedAnswer = getCurrentAnswer();

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
          
          <StrandIndicator>
            {getStrandName(currentQuestionData.strand)}
          </StrandIndicator>
          
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

  return null;
}
