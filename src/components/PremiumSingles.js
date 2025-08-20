import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { hasPremiumAccess } from '../utils/auth';
import { getPremiumContent } from '../data/premiumData';
import { DATING_DNA_TYPES } from '../data/datingDNAData';

const PremiumContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const PremiumCard = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 3rem 2rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const InsightCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
`;

const InsightTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const InsightList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InsightItem = styled.li`
  padding: 0.5rem 0;
  color: #666;
  font-size: 1rem;
  
  &::before {
    content: '✨';
    margin-right: 0.5rem;
  }
`;



const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const Button = styled(motion.button)`
  background: ${props => props.primary ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.primary ? 'white' : '#667eea'};
  border: ${props => props.primary ? 'none' : '2px solid #667eea'};
  border-radius: 25px;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const AccessDenied = styled.div`
  text-align: center;
  padding: 3rem;
`;

const AccessDeniedTitle = styled.h2`
  font-size: 2rem;
  color: #dc2626;
  margin-bottom: 1rem;
`;

const AccessDeniedMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export default function PremiumSingles() {
  const navigate = useNavigate();

  const [hasAccess, setHasAccess] = useState(false);
  const [dnaCode, setDnaCode] = useState('');
  const [premiumContent, setPremiumContent] = useState(null);

  useEffect(() => {
    // Check if user has premium access
    const access = hasPremiumAccess('single');
    setHasAccess(access);

    if (access) {
      // Get DNA code from localStorage or URL params
      const results = localStorage.getItem('datingDNAResults');
      console.log('PremiumSingles - localStorage results:', results);
      if (results) {
        try {
          const parsedResults = JSON.parse(results);
          console.log('PremiumSingles - parsed results:', parsedResults);
          setDnaCode(parsedResults.dnaCode || parsedResults.dnaType || '');
          setPremiumContent(getPremiumContent(parsedResults.dnaCode || parsedResults.dnaType));
        } catch (error) {
          console.error('Error parsing results:', error);
        }
      }
    }
  }, []);

  if (!hasAccess) {
    return (
      <PremiumContainer>
        <PremiumCard>
          <AccessDenied>
            <AccessDeniedTitle>🔒 Premium Access Required</AccessDeniedTitle>
            <AccessDeniedMessage>
              You need to purchase the Premium Report to access this content.
            </AccessDeniedMessage>
            <ActionButtons>
              <Button
                primary
                onClick={() => navigate('/checkout?type=premium&assessment=single')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Purchase Premium Report - $19
              </Button>
              <Button
                onClick={() => navigate('/assessment')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Assessment
              </Button>
            </ActionButtons>
          </AccessDenied>
        </PremiumCard>
      </PremiumContainer>
    );
  }

  // Show loading state while content is being fetched
  if (!premiumContent && !dnaCode) {
    return (
      <PremiumContainer>
        <PremiumCard>
          <AccessDenied>
            <AccessDeniedTitle>Loading Your Premium Report...</AccessDeniedTitle>
            <AccessDeniedMessage>
              Please wait while we prepare your personalized analysis.
            </AccessDeniedMessage>
          </AccessDenied>
        </PremiumCard>
      </PremiumContainer>
    );
  }


  return (
    <PremiumContainer>
      <PremiumCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <Title>⭐ Premium Singles Report</Title>
          <Subtitle>
            Your comprehensive 16-page personality analysis with detailed insights, 
            personalized strategies, and actionable recommendations.
          </Subtitle>
          {dnaCode && (
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem 2rem', 
              background: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '15px',
              display: 'inline-block'
            }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                fontFamily: 'monospace'
              }}>
                {dnaCode}
              </div>
              <div style={{ 
                fontSize: '1.1rem', 
                opacity: '0.9',
                fontWeight: '500'
              }}>
                {DATING_DNA_TYPES[dnaCode]?.name || 'Your DNA Type'}
              </div>
            </div>
          )}
        </Header>

        <Content>
          {/* Show DNA type info even if premium content is loading */}
          {dnaCode && (
            <Section>
              <SectionTitle>Your DNA Profile: {dnaCode}</SectionTitle>
              <p style={{ textAlign: 'center', color: '#666', fontSize: '1.1rem' }}>
                {DATING_DNA_TYPES[dnaCode]?.name || 'Your unique personality type'}
              </p>
            </Section>
          )}

          {/* Compatibility Analysis */}
          {premiumContent?.compatibilityGuide && (
            <Section>
              <SectionTitle>💕 Detailed Compatibility Analysis</SectionTitle>
              <InsightsGrid>
                <InsightCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <InsightTitle>Your Best Matches</InsightTitle>
                  <InsightList>
                    {premiumContent.compatibilityGuide.bestMatches?.map((match, index) => (
                      <InsightItem key={index}>
                        <strong>{match.name} ({match.type})</strong> - {match.description}
                      </InsightItem>
                    ))}
                  </InsightList>
                </InsightCard>
                
                <InsightCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <InsightTitle>Challenging Matches</InsightTitle>
                  <InsightList>
                    {premiumContent.compatibilityGuide.worstMatches?.map((match, index) => (
                      <InsightItem key={index}>
                        <strong>{match.name} ({match.type})</strong> - {match.description}
                      </InsightItem>
                    ))}
                  </InsightList>
                </InsightCard>
              </InsightsGrid>
            </Section>
          )}

          {/* Development Roadmap */}
          {premiumContent?.developmentRoadmap && (
            <Section>
              <SectionTitle>🚀 Your 12-Month Growth Roadmap</SectionTitle>
              <InsightsGrid>
                {Object.entries(premiumContent.developmentRoadmap).map(([phase, phaseData], index) => (
                  <InsightCard
                    key={phase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <InsightTitle>{phaseData.title}</InsightTitle>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Focus:</strong> {phaseData.focus}
                    </p>
                    <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                      Key Activities:
                    </InsightTitle>
                    <InsightList>
                      {phaseData.activities.map((activity, idx) => (
                        <InsightItem key={idx}>{activity}</InsightItem>
                      ))}
                    </InsightList>
                  </InsightCard>
                ))}
              </InsightsGrid>
            </Section>
          )}

          {/* Communication Strategies */}
          {premiumContent?.communicationStrategies && (
            <Section>
              <SectionTitle>🗣️ Advanced Communication Strategies</SectionTitle>
              <InsightsGrid>
                <InsightCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <InsightTitle>Conflict Resolution</InsightTitle>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    <strong>Your Approach:</strong> {premiumContent.communicationStrategies.conflictResolution.approach}
                  </p>
                  <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                    Steps to Follow:
                  </InsightTitle>
                  <InsightList>
                    {premiumContent.communicationStrategies.conflictResolution.steps.map((step, idx) => (
                      <InsightItem key={idx}>{step}</InsightItem>
                    ))}
                  </InsightList>
                </InsightCard>
                
                <InsightCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <InsightTitle>Emotional Support</InsightTitle>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    <strong>Your Style:</strong> {premiumContent.communicationStrategies.emotionalSupport.yourStyle}
                  </p>
                  <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                    Strategies:
                  </InsightTitle>
                  <InsightList>
                    {premiumContent.communicationStrategies.emotionalSupport.strategies.map((strategy, idx) => (
                      <InsightItem key={idx}>{strategy}</InsightItem>
                    ))}
                  </InsightList>
                </InsightCard>
              </InsightsGrid>
            </Section>
          )}

          {/* Strand Interactions */}
          {premiumContent?.strandInteractions && (
            <Section>
              <SectionTitle>🔍 Deep Dive: How Your Strands Interact</SectionTitle>
              <InsightsGrid>
                {Object.entries(premiumContent.strandInteractions).map(([strand, strandData], index) => (
                  <InsightCard
                    key={strand}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <InsightTitle>{strand.replace('_', ' ')}</InsightTitle>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Dominant:</strong> {strandData.dominant}
                    </p>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Influence:</strong> {strandData.influence}
                    </p>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Relationship Impact:</strong> {strandData.relationshipImpact}
                    </p>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Development Focus:</strong> {strandData.development}
                    </p>
                  </InsightCard>
                ))}
              </InsightsGrid>
            </Section>
          )}

          {/* Long-term Strategy */}
          {premiumContent?.longTermStrategy && (
            <Section>
              <SectionTitle>📈 Long-term Dating Strategy</SectionTitle>
              <InsightsGrid>
                {Object.entries(premiumContent.longTermStrategy).map(([year, yearData], index) => (
                  <InsightCard
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <InsightTitle>Year {year.replace('year', '')}: {yearData.focus}</InsightTitle>
                    <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                      Goals:
                    </InsightTitle>
                    <InsightList>
                      {yearData.goals.map((goal, idx) => (
                        <InsightItem key={idx}>{goal}</InsightItem>
                      ))}
                    </InsightList>
                    <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1rem' }}>
                      Activities:
                    </InsightTitle>
                    <InsightList>
                      {yearData.activities.map((activity, idx) => (
                        <InsightItem key={idx}>{activity}</InsightItem>
                      ))}
                    </InsightList>
                  </InsightCard>
                ))}
              </InsightsGrid>
            </Section>
          )}

          {/* Show message if premium content is still loading */}
          {!premiumContent && dnaCode && (
            <Section>
              <SectionTitle>Loading Your Premium Content...</SectionTitle>
              <p style={{ textAlign: 'center', color: '#666', fontSize: '1.1rem' }}>
                We're preparing your detailed analysis. Please refresh the page in a moment.
              </p>
            </Section>
          )}

          <ActionButtons>
            <Button
              onClick={() => navigate('/assessment')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retake Assessment
            </Button>
            <Button
              primary
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
          </Button>
          </ActionButtons>
        </Content>
      </PremiumCard>
    </PremiumContainer>
  );
}
