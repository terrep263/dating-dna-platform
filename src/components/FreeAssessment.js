import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FreeBadge = styled.div`
  background: #ffd700;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
`;

const QuestionCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const OptionsGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const OptionButton = styled(motion.button)`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  font-size: 1rem;
  
  &:hover {
    background: #e9ecef;
    border-color: #ff6b9d;
  }
  
  &.selected {
    background: #ff6b9d;
    color: white;
    border-color: #ff6b9d;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #ffd700;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const UpgradePrompt = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
`;

const UpgradeButton = styled(motion.button)`
  background: #ffd700;
  color: #333;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 0.5rem;
  
  &:hover {
    background: #ffed4e;
  }
`;

const FreeQuestions = [
  {
    id: 1,
    question: "How do you typically approach new social situations?",
    options: [
      { text: "I dive in enthusiastically and introduce myself to everyone", value: "E" },
      { text: "I observe quietly and wait for others to approach me", value: "I" },
      { text: "I look for familiar faces or find a comfortable corner", value: "S" },
      { text: "I analyze the room and plan my social strategy", value: "T" }
    ]
  },
  {
    id: 2,
    question: "When making decisions about relationships, you tend to:",
    options: [
      { text: "Follow your heart and go with your gut feeling", value: "F" },
      { text: "Weigh the pros and cons logically", value: "T" },
      { text: "Consider how it affects your future plans", value: "N" },
      { text: "Focus on practical, real-world factors", value: "S" }
    ]
  },
  {
    id: 3,
    question: "In your ideal relationship, you value:",
    options: [
      { text: "Deep emotional connection and understanding", value: "F" },
      { text: "Intellectual stimulation and shared goals", value: "T" },
      { text: "Adventure and new experiences together", value: "N" },
      { text: "Stability and shared daily routines", value: "S" }
    ]
  }
];

function FreeAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / FreeQuestions.length) * 100;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion < FreeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const getBasicResults = () => {
    const answerValues = Object.values(answers);
    const eCount = answerValues.filter(v => v === 'E').length;
    const iCount = answerValues.filter(v => v === 'I').length;
    const sCount = answerValues.filter(v => v === 'S').length;
    const nCount = answerValues.filter(v => v === 'N').length;
    const tCount = answerValues.filter(v => v === 'T').length;
    const fCount = answerValues.filter(v => v === 'F').length;

    const firstLetter = eCount > iCount ? 'E' : 'I';
    const secondLetter = sCount > nCount ? 'S' : 'N';
    const thirdLetter = tCount > fCount ? 'T' : 'F';
    const fourthLetter = 'X'; // Neutral for free version

    return {
      code: `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`,
      firstLetter,
      secondLetter,
      thirdLetter,
      fourthLetter
    };
  };

  const handleUpgrade = () => {
    navigate('/checkout?type=single');
  };

  const handleViewFreeResults = () => {
    navigate('/free-results', { 
      state: { 
        results: getBasicResults(),
        answers: answers
      }
    });
  };

  if (isComplete) {
    return (
      <Container>
        <ContentWrapper>
          <Header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>🎉 Assessment Complete!</Title>
            <Subtitle>
              You've completed your free Dating DNA preview. Here's what you discovered:
            </Subtitle>
          </Header>

          <QuestionCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '2rem' }}>
              Your Basic DNA Type: {getBasicResults().code}
            </h2>
            
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
              This is a preview of your Dating DNA type. For your complete analysis including detailed insights, 
              compatibility guide, and personalized strategies, upgrade to the full assessment.
            </p>

            <div style={{ textAlign: 'center' }}>
              <UpgradeButton
                onClick={handleUpgrade}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Full Assessment - $49
              </UpgradeButton>
              
              <UpgradeButton
                onClick={handleViewFreeResults}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: '#6c757d', color: 'white' }}
              >
                View Free Results
              </UpgradeButton>
            </div>
          </QuestionCard>

          <UpgradePrompt>
            <h3 style={{ marginBottom: '1rem' }}>🚀 Ready for the Full Experience?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Your free preview shows just the beginning. Unlock your complete Dating DNA profile with:
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
              <li>✅ Complete 4-letter DNA type</li>
              <li>✅ Detailed personality insights</li>
              <li>✅ Compatibility analysis</li>
              <li>✅ Personal development roadmap</li>
              <li>✅ Grace AI Relationship Coach</li>
            </ul>
            <UpgradeButton
              onClick={handleUpgrade}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upgrade Now - $49
            </UpgradeButton>
          </UpgradePrompt>
        </ContentWrapper>
      </Container>
    );
  }

  const question = FreeQuestions[currentQuestion];

  return (
    <Container>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FreeBadge>🎁 FREE PREVIEW</FreeBadge>
          <Title>Free Dating DNA Assessment</Title>
          <Subtitle>
            Discover your basic personality type in just 3 questions. 
            Get a taste of what the full Dating DNA experience offers.
          </Subtitle>
        </Header>

        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>

        <QuestionCard
          key={question.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QuestionText>
            Question {currentQuestion + 1} of {FreeQuestions.length}: {question.question}
          </QuestionText>
          
          <OptionsGrid>
            {question.options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => handleAnswer(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.text}
              </OptionButton>
            ))}
          </OptionsGrid>
        </QuestionCard>

        <UpgradePrompt>
          <h3 style={{ marginBottom: '1rem' }}>💡 Want More Insights?</h3>
          <p style={{ marginBottom: '1rem' }}>
            This free preview shows just 3 questions. The full assessment includes 20+ questions for accurate results.
          </p>
          <UpgradeButton
            onClick={handleUpgrade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Full Assessment - $49
          </UpgradeButton>
        </UpgradePrompt>
      </ContentWrapper>
    </Container>
  );
}

export default FreeAssessment;
