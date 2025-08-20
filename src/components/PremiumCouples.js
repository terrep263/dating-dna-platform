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

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 107, 157, 0.2);
  text-align: center;
`;

const PartnerTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const DNACode = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 0.5rem;
`;

const TypeName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #8b5cf6;
  margin-bottom: 1rem;
`;

const TypeDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
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

export default function PremiumCouples() {
  const navigate = useNavigate();

  const [hasAccess, setHasAccess] = useState(false);
  const [partnerResults, setPartnerResults] = useState(null);
  const [premiumContent, setPremiumContent] = useState(null);

  useEffect(() => {
    // Check if user has premium access
    const access = hasPremiumAccess('couples');
    setHasAccess(access);

    if (access) {
      // Get couples results from localStorage
      const results = localStorage.getItem('couplesDNAResults');
      if (results) {
        const parsedResults = JSON.parse(results);
        setPartnerResults(parsedResults);
        // For couples, we'll show content based on both partners' types
        setPremiumContent(getPremiumContent(parsedResults.partnerA?.dnaCode));
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
              You need to purchase the Premium Couples Report to access this content.
            </AccessDeniedMessage>
            <ActionButtons>
              <Button
                primary
                onClick={() => navigate('/checkout?type=premium&assessment=couples')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Purchase Premium Couples Report - $19
              </Button>
              <Button
                onClick={() => navigate('/assessment/couples')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Couples Assessment
              </Button>
            </ActionButtons>
          </AccessDenied>
        </PremiumCard>
      </PremiumContainer>
    );
  }

  if (!partnerResults || !premiumContent) {
    return (
      <PremiumContainer>
        <PremiumCard>
          <AccessDenied>
            <AccessDeniedTitle>No Couples Assessment Results Found</AccessDeniedTitle>
            <AccessDeniedMessage>
              Please complete the couples assessment first to view your premium report.
            </AccessDeniedMessage>
            <ActionButtons>
              <Button
                primary
                onClick={() => navigate('/assessment/couples')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Couples Assessment
              </Button>
            </ActionButtons>
          </AccessDenied>
        </PremiumCard>
      </PremiumContainer>
    );
  }

  const { partnerA, partnerB } = partnerResults;
  const dnaTypeA = DATING_DNA_TYPES[partnerA.dnaCode];
  const dnaTypeB = DATING_DNA_TYPES[partnerB.dnaCode];

  return (
    <PremiumContainer>
      <PremiumCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <Title>⭐ Premium Couples Report</Title>
          <Subtitle>
            Your comprehensive 20-page couples analysis with detailed compatibility insights, 
            personalized strategies, and relationship growth recommendations.
          </Subtitle>
          {partnerResults && (
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem 2rem', 
              background: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '15px',
              display: 'inline-block'
            }}>
              <div style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                opacity: '0.9'
              }}>
                Your Relationship DNA
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    fontFamily: 'monospace'
                  }}>
                    {partnerA.dnaCode}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    opacity: '0.9'
                  }}>
                    Partner A
                  </div>
                </div>
                <div style={{ 
                  fontSize: '1.5rem', 
                  opacity: '0.7',
                  fontWeight: '300'
                }}>
                  +
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    fontFamily: 'monospace'
                  }}>
                    {partnerB.dnaCode}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    opacity: '0.9'
                  }}>
                    Partner B
                  </div>
                </div>
              </div>
            </div>
          )}
        </Header>

        <Content>
          {/* Partner Profiles */}
          <Section>
            <SectionTitle>👫 Your Relationship Profile</SectionTitle>
            <PartnersGrid>
              <PartnerCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PartnerTitle>Partner A</PartnerTitle>
                <DNACode>{partnerA.dnaCode}</DNACode>
                <TypeName>{dnaTypeA.name}</TypeName>
                <TypeDescription>{dnaTypeA.description}</TypeDescription>
              </PartnerCard>

              <PartnerCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <PartnerTitle>Partner B</PartnerTitle>
                <DNACode>{partnerB.dnaCode}</DNACode>
                <TypeName>{dnaTypeB.name}</TypeName>
                <TypeDescription>{dnaTypeB.description}</TypeDescription>
              </PartnerCard>
            </PartnersGrid>
          </Section>

          {/* Advanced Compatibility Analysis */}
          {premiumContent.compatibilityGuide && (
            <Section>
              <SectionTitle>💕 Advanced Compatibility Analysis</SectionTitle>
              <InsightsGrid>
                <InsightCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <InsightTitle>Your Best Matches as a Couple</InsightTitle>
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
                  <InsightTitle>Potential Challenges</InsightTitle>
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

          {/* Advanced Communication Strategies */}
          {premiumContent.communicationStrategies && (
            <Section>
              <SectionTitle>🗣️ Advanced Communication Strategies for Couples</SectionTitle>
              <InsightsGrid>
                <InsightCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <InsightTitle>Conflict Resolution as a Couple</InsightTitle>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    <strong>Your Combined Approach:</strong> {premiumContent.communicationStrategies.conflictResolution.approach}
                  </p>
                  <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                    Steps to Follow Together:
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
                  <InsightTitle>Supporting Each Other</InsightTitle>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    <strong>How to Support Each Other:</strong> Learn to balance your different support styles
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

          {/* Relationship Growth Roadmap */}
          {premiumContent.developmentRoadmap && (
            <Section>
              <SectionTitle>🚀 Your Couples Growth Roadmap</SectionTitle>
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
                      Activities to Do Together:
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

          {/* Advanced Strand Interactions for Couples */}
          {premiumContent.strandInteractions && (
            <Section>
              <SectionTitle>🔍 Deep Dive: How Your Combined Strands Work Together</SectionTitle>
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
                      <strong>Partner A:</strong> {partnerA.dnaCode[Object.keys(premiumContent.strandInteractions).indexOf(strand)]} 
                      ({strandData.dominant})
                    </p>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Partner B:</strong> {partnerB.dnaCode[Object.keys(premiumContent.strandInteractions).indexOf(strand)]} 
                      ({strandData.dominant})
                    </p>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Combined Impact:</strong> {strandData.relationshipImpact}
                    </p>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                      <strong>Growth Focus:</strong> {strandData.development}
                    </p>
                  </InsightCard>
                ))}
              </InsightsGrid>
            </Section>
          )}

          {/* Long-term Couples Strategy */}
          {premiumContent.longTermStrategy && (
            <Section>
              <SectionTitle>📈 Long-term Relationship Strategy</SectionTitle>
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
                      Shared Goals:
                    </InsightTitle>
                    <InsightList>
                      {yearData.goals.map((goal, idx) => (
                        <InsightItem key={idx}>{goal}</InsightItem>
                      ))}
                    </InsightList>
                    <InsightTitle style={{ fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1rem' }}>
                      Activities to Do Together:
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

          <ActionButtons>
            <Button
              onClick={() => navigate('/assessment/couples')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retake Couples Assessment
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
