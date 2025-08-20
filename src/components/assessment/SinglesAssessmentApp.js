import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import SinglesResultsScreen from './SinglesResultsScreen';
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

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
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

const ActionButton = styled(motion.button)`
  background: ${props => props.variant === 'pdf' ? '#3b82f6' : props.variant === 'premium' ? '#f59e0b' : 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

export default function SinglesAssessmentApp() {
  const [view, setView] = useState('assessment');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);
  const [email, setEmail] = useState('');
  const [accessChecked, setAccessChecked] = useState(false);
  
  const navigate = useNavigate();

  const checkAccess = useCallback(() => {
    const access = checkAssessmentAccess('single');
    if (!access.canAccess) {
      navigate('/checkout?type=single');
      return;
    }
    setAccessChecked(true);
  }, [navigate]);

  // Check access on component mount
  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  const handleAnswerSelect = (answer) => {
    setAnswers(prev => [...prev.slice(0, currentQuestion), answer]);
  };

  const handleNext = () => {
    if (currentQuestion < 31) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(prev => Math.max(prev - 1, 0));
  };

  const sendToSheet = async (data) => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyUUkQ3hRjOqaU_6RFHbzMLvB2KN-BmfMSgUNAnk2QHD0b9LQb7Qh0oXHHSYzLardiJ/exec', {
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
    setIsLoading(true);
    
    setTimeout(() => {
      const assessmentResults = calculateDNAType(answers);
      setResults(assessmentResults);
      setView('results');
      setIsLoading(false);
      
      // Save results to localStorage for the results page
      localStorage.setItem('datingDNAResults', JSON.stringify(assessmentResults));
      
      // Send data to Google Sheets
      const scores = assessmentResults.percentages.reduce((acc, percentage) => {
        acc[percentage.strand] = percentage.percentage;
        return acc;
      }, {});
      
      sendToSheet({
        email: email || 'no-email-provided',
        userType: assessmentResults.dnaCode,
        assessmentType: 'Singles',
        scores
      });
      
      // Redirect to results page
      navigate('/results');
    }, 2000);
  };

  const resetAssessment = () => {
    setView('assessment');
    setCurrentQuestion(0);
    setAnswers([]);
    setResults(null);
    setEmail('');
  };

  const handleDownloadPDF = () => {
    if (!results) return;
    
    // Import Dating DNA types to get proper type names
    import('../../data/datingDNAData').then(({ DATING_DNA_TYPES }) => {
      const dnaType = DATING_DNA_TYPES[results.dnaCode];
      
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h1 style="color: #ff6b9d; text-align: center; margin-bottom: 30px;">🧠 My Dating DNA™ – Singles Report</h1>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b9d; padding-bottom: 10px;">Your Dating DNA Profile</h2>
            <div style="text-align: center; margin-top: 20px;">
              <p style="font-size: 32px; font-weight: bold; color: #ff6b9d; margin: 10px 0;">${results.dnaCode}</p>
              <p style="color: #8b5cf6; font-size: 18px; font-weight: 600; margin: 5px 0;">${dnaType ? dnaType.name : 'Dating DNA Type'}</p>
              <p style="color: #666; margin: 15px 0; line-height: 1.6;">${dnaType ? dnaType.description : 'Your unique dating personality profile'}</p>
            </div>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b9d; padding-bottom: 10px;">Your DNA Strands</h2>
            <div style="margin-top: 20px;">
              ${results.percentages.map(percentage => `
                <div style="margin-bottom: 15px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="color: #333; font-weight: 600;">${percentage.strand.replace(/_/g, ' ')}</span>
                    <span style="color: #ff6b9d; font-weight: 600;">${percentage.dominant}</span>
                  </div>
                  <div style="background: #f0f0f0; height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #ff6b9d 0%, #8b5cf6 100%); height: 100%; width: ${percentage.percentage}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          ${email ? `<div style="margin-bottom: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b9d; padding-bottom: 10px;">Contact Information</h2>
            <p style="color: #666; margin-top: 10px;">Email: <strong>${email}</strong></p>
          </div>` : ''}
          
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 14px;">Generated by My Dating DNA™ Platform</p>
            <p style="color: #999; font-size: 12px;">${new Date().toLocaleDateString()}</p>
          </div>
        </div>
      `;

      // Create a temporary container to hold the content
      const container = document.createElement('div');
      container.appendChild(element);
      document.body.appendChild(container);

      // Use html2canvas to create PDF (if available) or fallback to print
      if (window.html2canvas) {
        import('html2canvas').then(html2canvas => {
          html2canvas.default(container, {
            scale: 2,
            useCORS: true,
            allowTaint: true
          }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new window.jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }

            pdf.save('singles-assessment-report.pdf');
            document.body.removeChild(container);
          });
        });
      } else {
        // Fallback to print functionality
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <html>
            <head>
              <title>Singles Assessment Report</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        document.body.removeChild(container);
      }
    });
  };

  const handlePremiumUpsell = () => {
    navigate('/checkout?type=premium&assessment=single');
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

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingSpinner>🧠</LoadingSpinner>
          <LoadingText>Processing Your Results...</LoadingText>
          <LoadingSubtext>
            Calculating your unique Dating DNA profile...
          </LoadingSubtext>
        </LoadingCard>
      </LoadingContainer>
    );
  }

  if (view === 'results' && results) {
    return (
      <>
        <SinglesResultsScreen
          results={results}
          email={email}
          onEmailChange={setEmail}
          onRestart={resetAssessment}
        />
        <ActionButtonsContainer>
          <ActionButton
            variant="pdf"
            onClick={handleDownloadPDF}
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
              📄 Download PDF Report
            </motion.span>
          </ActionButton>
          <ActionButton
            variant="premium"
            onClick={handlePremiumUpsell}
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
              🔒 Upgrade to Premium Report
            </motion.span>
          </ActionButton>
        </ActionButtonsContainer>
      </>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / 32) * 100;
  const selectedAnswer = answers[currentQuestion];

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
            >
              <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block" }}>
                {option.text}
              </motion.span>
            </OptionButton>
          ))}
        </OptionsContainer>
        
        <NavigationContainer>
          <NavButton
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <motion.span whileHover={currentQuestion > 0 ? { scale: 1.05 } : {}} whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}} style={{ display: "inline-block" }}>
              Previous
            </motion.span>
          </NavButton>
          
          {currentQuestion === 31 ? (
            <CompleteButton
              onClick={handleComplete}
              disabled={!selectedAnswer}
            >
              <motion.span whileHover={selectedAnswer ? { scale: 1.05 } : {}} whileTap={selectedAnswer ? { scale: 0.95 } : {}} style={{ display: "inline-block" }}>
                Complete Assessment
              </motion.span>
            </CompleteButton>
          ) : (
            <NavButton
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              <motion.span whileHover={selectedAnswer ? { scale: 1.05 } : {}} whileTap={selectedAnswer ? { scale: 0.95 } : {}} style={{ display: "inline-block" }}>
                Next
              </motion.span>
            </NavButton>
          )}
        </NavigationContainer>
      </QuestionCard>
    </AppContainer>
  );
} 
