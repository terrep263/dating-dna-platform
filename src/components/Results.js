import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DATING_DNA_TYPES } from '../data/datingDNAData';
import GraceAICoach from './GraceAICoach';

const ResultsContainer = styled.div`
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

const ResultsCard = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
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

const DNACode = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
  }
`;

const TypeName = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TypeDescription = styled.p`
  font-size: 1.1rem;
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
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
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
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '•';
    color: #667eea;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const CompatibilitySection = styled.div`
  margin-bottom: 3rem;
`;

const CompatibilityTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CompatibilityGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CompatibilityBadge = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const Button = styled(motion.button)`
  background: ${props => props.className === 'primary' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.className === 'primary' ? 'white' : '#667eea'};
  border: 2px solid ${props => props.className === 'primary' ? 'transparent' : '#667eea'};
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const DownloadButton = styled(motion.button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
  }
`;

const PremiumUpsellSection = styled.div`
  background: #f8f9fa;
  padding: 3rem 2rem;
  margin-top: 3rem;
  border-radius: 15px;
  text-align: center;
`;

const PremiumUpsellTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const PremiumUpsellDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem auto;
`;

const PremiumFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const PremiumFeature = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    color: #667eea;
    font-weight: bold;
  }
`;

const PremiumUpgradeButton = styled(Button)`
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
  }
`;

function Results() {
  const [results, setResults] = useState(null);
  // const [isUnlocked] = useState(true); // Changed to true - show full results immediately
  const navigate = useNavigate();

  useEffect(() => {
    const savedResults = localStorage.getItem('datingDNAResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      navigate('/assessment');
    }
  }, [navigate]);

  const handleDownloadPDF = () => {
    // Create a comprehensive PDF download with personalized content
    const content = `
      Dating DNA Assessment Results
      
      Your DNA Type: ${results?.dnaCode}
      Type Name: ${DATING_DNA_TYPES[results?.dnaCode]?.name}
      Description: ${DATING_DNA_TYPES[results?.dnaCode]?.description}
      
      EXECUTIVE SUMMARY
      ${DATING_DNA_TYPES[results?.dnaCode]?.description}
      
      DETAILED STRENGTHS ANALYSIS
      ${DATING_DNA_TYPES[results?.dnaCode]?.strengths.join('\n')}
      
      GROWTH OPPORTUNITIES
      ${DATING_DNA_TYPES[results?.dnaCode]?.challenges.join('\n')}
      
      COMPATIBILITY ANALYSIS
      Best Matches:
      ${DATING_DNA_TYPES[results?.dnaCode]?.compatibility.map(type => DATING_DNA_TYPES[type]?.name).join(', ')}
      
      STRATEGIC DATING INSIGHTS
      Where to Meet Matches:
      ${dnaType.datingInsights?.whereToMeet?.join('\n')}
      
      How to Spot Matches:
      ${dnaType.datingInsights?.howToSpotMatches?.join('\n')}
      
      Conversation Starters:
      ${dnaType.datingInsights?.conversationStarters?.join('\n')}
      
      ADVANCED DATING STRATEGY
      Relationship Timeline:
      ${dnaType.relationshipStrategy?.timeline?.join('\n')}
      
      Red Flags to Watch For:
      ${dnaType.relationshipStrategy?.redFlags?.join('\n')}
      
      PROFESSIONAL RECOMMENDATIONS
      Recommended Reading:
      ${dnaType.recommendations?.readingList?.join('\n')}
      
      Development Areas:
      ${dnaType.recommendations?.developmentAreas?.join('\n')}
      
      90-Day Action Plan:
      ${dnaType.recommendations?.actionPlan?.join('\n')}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dating-dna-results-${results?.dnaCode}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!results) {
    return <div>Loading...</div>;
  }

  const dnaType = DATING_DNA_TYPES[results.dnaCode];

  return (
    <ResultsContainer>
      <ResultsCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <DNACode>{results.dnaCode}</DNACode>
          <TypeName>Your Dating Personality Type: {dnaType.name}</TypeName>
          <TypeDescription>{dnaType.description}</TypeDescription>
        </Header>

        <Content>
          {/* Executive Summary Section */}
          <Section>
            <SectionTitle>📋 Executive Summary</SectionTitle>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
              {dnaType.description}
            </p>
          </Section>

          {/* Detailed Strengths Analysis */}
          <Section>
            <SectionTitle>💪 Detailed Strengths Analysis</SectionTitle>
            <InsightsGrid>
              <InsightCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <InsightTitle>Your Superpowers</InsightTitle>
                <InsightList>
                  {dnaType.strengths.map((strength, index) => (
                    <InsightItem key={index}>{strength}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
            </InsightsGrid>
          </Section>

          {/* Growth Opportunities */}
          <Section>
            <SectionTitle>🎯 Growth Opportunities</SectionTitle>
            <InsightsGrid>
              <InsightCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <InsightTitle>Areas for Development</InsightTitle>
                <InsightList>
                  {dnaType.challenges.map((challenge, index) => (
                    <InsightItem key={index}>{challenge}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
            </InsightsGrid>
          </Section>

          {/* Strategic Dating Insights */}
          <Section>
            <SectionTitle>🎯 Strategic Dating Insights</SectionTitle>
            <InsightsGrid>
              <InsightCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <InsightTitle>Where to Meet Matches</InsightTitle>
                <InsightList>
                  {dnaType.datingInsights?.whereToMeet?.map((place, index) => (
                    <InsightItem key={index}>{place}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
              
              <InsightCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <InsightTitle>How to Spot Matches</InsightTitle>
                <InsightList>
                  {dnaType.datingInsights?.howToSpotMatches?.map((tip, index) => (
                    <InsightItem key={index}>{tip}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
              
              <InsightCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <InsightTitle>Conversation Starters</InsightTitle>
                <InsightList>
                  {dnaType.datingInsights?.conversationStarters?.map((starter, index) => (
                    <InsightItem key={index}>{starter}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
            </InsightsGrid>
          </Section>

          {/* Advanced Dating Strategy */}
          <Section>
            <SectionTitle>🚀 Advanced Dating Strategy</SectionTitle>
            <InsightsGrid>
              <InsightCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <InsightTitle>Relationship Timeline</InsightTitle>
                <InsightList>
                  {dnaType.relationshipStrategy?.timeline?.map((step, index) => (
                    <InsightItem key={index}>{step}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
              
              <InsightCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <InsightTitle>Red Flags to Watch For</InsightTitle>
                <InsightList>
                  {dnaType.relationshipStrategy?.redFlags?.map((flag, index) => (
                    <InsightItem key={index}>{flag}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
            </InsightsGrid>
          </Section>

          {/* Compatibility Analysis */}
          <CompatibilitySection>
            <CompatibilityTitle>💕 Compatibility Analysis</CompatibilityTitle>
            <CompatibilityGrid>
              {dnaType.compatibility.map((type, index) => (
                <CompatibilityBadge
                  key={type}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {DATING_DNA_TYPES[type].name}
                </CompatibilityBadge>
              ))}
            </CompatibilityGrid>
          </CompatibilitySection>

          {/* Professional Recommendations */}
          <Section>
            <SectionTitle>📚 Professional Recommendations</SectionTitle>
            <InsightsGrid>
              <InsightCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <InsightTitle>Recommended Reading</InsightTitle>
                <InsightList>
                  {dnaType.recommendations?.readingList?.map((book, index) => (
                    <InsightItem key={index}>{book}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
              
              <InsightCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <InsightTitle>Development Areas</InsightTitle>
                <InsightList>
                  {dnaType.recommendations?.developmentAreas?.map((area, index) => (
                    <InsightItem key={index}>{area}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
              
              <InsightCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <InsightTitle>90-Day Action Plan</InsightTitle>
                <InsightList>
                  {dnaType.recommendations?.actionPlan?.map((step, index) => (
                    <InsightItem key={index}>{step}</InsightItem>
                  ))}
                </InsightList>
              </InsightCard>
            </InsightsGrid>
          </Section>

          {/* Premium Upgrade Upsell */}
          <PremiumUpsellSection>
            <PremiumUpsellTitle>⭐ Upgrade Your Results</PremiumUpsellTitle>
            <PremiumUpsellDescription>
              Get a comprehensive 16-page detailed personality analysis with personalized strategies, 
              deeper insights, and actionable recommendations to transform your dating life.
            </PremiumUpsellDescription>
            <PremiumFeatures>
              <PremiumFeature>📊 Detailed personality breakdown</PremiumFeature>
              <PremiumFeature>🎯 Personalized dating strategies</PremiumFeature>
              <PremiumFeature>💡 Advanced compatibility insights</PremiumFeature>
              <PremiumFeature>📈 Progress tracking tools</PremiumFeature>
              <PremiumFeature>🔍 Deep dive analysis</PremiumFeature>
            </PremiumFeatures>
            <PremiumUpgradeButton
              onClick={() => navigate('/checkout?type=premium&assessment=' + dnaType.code)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upgrade to Premium Report - $19
            </PremiumUpgradeButton>
          </PremiumUpsellSection>

          {/* Grace AI Coach */}
          <Section>
            <SectionTitle>💬 Chat with Grace, Your AI Relationship Coach</SectionTitle>
            <GraceAICoach dnaType={dnaType.code} />
          </Section>

          <ActionButtons>
            <DownloadButton
              onClick={handleDownloadPDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Report
            </DownloadButton>
            <Button
              className="secondary"
              onClick={() => navigate('/assessment')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retake Assessment
            </Button>
            <Button
              className="primary"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </Button>
          </ActionButtons>
        </Content>
      </ResultsCard>
    </ResultsContainer>
  );
}

export default Results; 