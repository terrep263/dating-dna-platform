import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { generateFollowUpQuestion, generatePersonalizedInsight, checkOpenAIConfig } from '../services/openai';

const AssessmentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const QuestionCard = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  text-align: center;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const AnswerOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const AnswerButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const AIInsightCard = styled(motion.div)`
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
`;

const InsightTitle = styled.h3`
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const InsightText = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  background: #fee;
  color: #c53030;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #c53030;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

export default function AIEnhancedAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [aiInsights, setAiInsights] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConfigured, setIsConfigured] = useState(false);


  // Sample assessment questions
  const questions = useMemo(() => [
    {
      id: 'social_energy',
      text: 'How do you typically feel in social situations?',
      options: [
        "I feel energized and love meeting new people",
        "I prefer smaller, intimate gatherings",
        "I'm comfortable in both settings",
        "I need time to recharge after social events"
      ],
      dnaStrand: 'SOCIAL_ENERGY'
    },
    {
      id: 'attraction_style',
      text: 'What initially attracts you to someone?',
      options: [
        "Their current personality and how they treat me now",
        "Their potential and what they could become",
        "A combination of both present and future",
        "I'm not sure, it varies"
      ],
      dnaStrand: 'ATTRACTION_STYLE'
    },
    {
      id: 'decision_filter',
      text: 'How do you make important relationship decisions?',
      options: [
        "I analyze facts and think logically",
        "I go with my gut feeling and emotions",
        "I consider both logic and feelings",
        "I seek advice from others"
      ],
      dnaStrand: 'DECISION_FILTER'
    },
    {
      id: 'relationship_pace',
      text: 'What pace feels right for relationship development?',
      options: [
        "I prefer clear milestones and structure",
        "I like things to develop naturally",
        "I'm flexible and adapt to the situation",
        "I take things very slowly"
      ],
      dnaStrand: 'RELATIONSHIP_PACE'
    }
  ], []);

  useEffect(() => {
    // Check if OpenAI is configured
    try {
      const config = checkOpenAIConfig();
      setIsConfigured(config.isConfigured);
    } catch (err) {
      setIsConfigured(false);
      setError('OpenAI not configured. Please add your API key to .env file.');
    }
  }, []);

  const generateFinalInsights = useCallback(async (finalAnswers) => {
    if (!isConfigured) return;
    
    setIsLoading(true);
    try {
      // Generate personalized insights for each strand
      const insights = {};
      for (const [questionId, answer] of Object.entries(finalAnswers)) {
        const question = questions.find(q => q.id === questionId);
        if (question) {
          const insight = await generatePersonalizedInsight(
            answer,
            question.dnaStrand,
            question.text
          );
          insights[questionId] = insight;
        }
      }
      
      setAiInsights(insights);
    } catch (err) {
      console.error('Failed to generate final insights:', err);
      setError('Failed to generate final insights. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [isConfigured, questions]);

  const handleAnswer = useCallback(async (answer) => {
    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
    
    // Generate AI insight for this answer
    if (isConfigured) {
      setIsLoading(true);
      try {
        const insight = await generateFollowUpQuestion(
          answer,
          question.dnaStrand,
          question.text
        );
        
        setAiInsights(prev => ({
          ...prev,
          [question.id]: insight
        }));
      } catch (err) {
        console.error('Failed to generate AI insight:', err);
        setError('Failed to generate AI insight. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    // Move to next question or complete assessment
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Assessment complete - generate final insights
      generateFinalInsights(newAnswers);
    }
  }, [currentQuestion, answers, questions, isConfigured, generateFinalInsights]);



  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!isConfigured) {
    return (
      <AssessmentContainer>
        <ErrorMessage>
          <h3>OpenAI Configuration Required</h3>
          <p>To use AI-enhanced features, please add your OpenAI API key to the .env file:</p>
          <code>REACT_APP_OPENAI_API_KEY=your_api_key_here</code>
        </ErrorMessage>
      </AssessmentContainer>
    );
  }

  if (currentQuestion >= questions.length) {
    return (
      <AssessmentContainer>
        <QuestionCard>
          <h2>🎉 Assessment Complete!</h2>
          <p>Here are your AI-generated insights:</p>
        </QuestionCard>
        
        {Object.entries(aiInsights).map(([questionId, insight]) => {
          const question = questions.find(q => q.id === questionId);
          return (
            <AIInsightCard key={questionId}>
              <InsightTitle>{question?.text}</InsightTitle>
              <InsightText>{insight}</InsightText>
            </AIInsightCard>
          );
        })}
      </AssessmentContainer>
    );
  }

  const question = questions[currentQuestion];

  return (
    <AssessmentContainer>
      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>
      
      <QuestionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <QuestionText>{question.text}</QuestionText>
        
        <AnswerOptions>
          {question.options.map((option, index) => (
            <AnswerButton
              key={index}
              onClick={() => handleAnswer(option)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {option}
            </AnswerButton>
          ))}
        </AnswerOptions>
      </QuestionCard>

      {/* Show AI insight for previous answer */}
      {aiInsights[questions[currentQuestion - 1]?.id] && (
        <AIInsightCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InsightTitle>🤖 AI Insight</InsightTitle>
          <InsightText>
            {aiInsights[questions[currentQuestion - 1]?.id]}
          </InsightText>
        </AIInsightCard>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <LoadingSpinner />
          <p>Generating AI insight...</p>
        </div>
      )}

      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
    </AssessmentContainer>
  );
}
