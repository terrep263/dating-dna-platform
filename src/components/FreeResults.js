import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
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

const ResultsCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const DNATypeDisplay = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const DNACode = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
`;

const DNATypeName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const BasicInsights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InsightCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid #ff6b9d;
`;

const InsightTitle = styled.h4`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const InsightText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 2px solid rgba(255, 107, 157, 0.1);
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h4`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const LimitedGraceSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 2rem;
`;

const LimitedGraceTitle = styled.h3`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;

const LimitedGraceText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 1.5rem;
`;

function FreeResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (location.state?.results) {
      setResults(location.state.results);
    } else {
      // Fallback for direct navigation
      setResults({
        code: 'XXXX',
        firstLetter: 'X',
        secondLetter: 'X',
        thirdLetter: 'X',
        fourthLetter: 'X'
      });
    }
  }, [location.state]);

  const handleUpgrade = () => {
    navigate('/checkout?type=single');
  };

  const getBasicInsights = () => {
    if (!results) return [];
    
    const insights = [];
    
    if (results.firstLetter === 'E') {
      insights.push({
        title: 'Social Energy',
        text: 'You tend to be outgoing and energized by social interactions. You likely enjoy meeting new people and being in group settings.'
      });
    } else if (results.firstLetter === 'I') {
      insights.push({
        title: 'Social Energy',
        text: 'You tend to be more reserved and prefer intimate conversations. You likely need alone time to recharge after social events.'
      });
    }

    if (results.secondLetter === 'S') {
      insights.push({
        title: 'Information Processing',
        text: 'You prefer concrete, practical information and focus on details. You likely value experience and proven methods.'
      });
    } else if (results.secondLetter === 'N') {
      insights.push({
        title: 'Information Processing',
        text: 'You enjoy abstract concepts and possibilities. You likely focus on patterns and future implications.'
      });
    }

    if (results.thirdLetter === 'T') {
      insights.push({
        title: 'Decision Making',
        text: 'You make decisions based on logic and objective analysis. You likely value fairness and consistency.'
      });
    } else if (results.thirdLetter === 'F') {
      insights.push({
        title: 'Decision Making',
        text: 'You make decisions based on values and how they affect people. You likely prioritize harmony and relationships.'
      });
    }

    return insights;
  };

  if (!results) {
    return (
      <Container>
        <ContentWrapper>
          <Header>
            <Title>Loading Results...</Title>
          </Header>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FreeBadge>🎁 FREE PREVIEW RESULTS</FreeBadge>
          <Title>Your Dating DNA Preview</Title>
          <Subtitle>
            Here's what we discovered from your free assessment. 
            Unlock your complete profile for detailed insights and strategies.
          </Subtitle>
        </Header>

        <ResultsCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <DNATypeDisplay>
            <DNACode>{results.code}</DNACode>
            <DNATypeName>Basic Personality Type</DNATypeName>
            <p style={{ color: '#666', fontSize: '1rem' }}>
              This is a preview based on 3 questions. For your complete 4-letter DNA type, 
              take the full assessment with 20+ questions.
            </p>
          </DNATypeDisplay>

          <BasicInsights>
            {getBasicInsights().map((insight, index) => (
              <InsightCard key={index}>
                <InsightTitle>{insight.title}</InsightTitle>
                <InsightText>{insight.text}</InsightText>
              </InsightCard>
            ))}
          </BasicInsights>

          <div style={{ textAlign: 'center' }}>
            <UpgradeButton
              onClick={handleUpgrade}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Complete Assessment - $49
            </UpgradeButton>
          </div>
        </ResultsCard>

        <Section>
          <SectionTitle>What You're Missing</SectionTitle>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🧬</FeatureIcon>
              <FeatureTitle>Complete DNA Type</FeatureTitle>
              <FeatureDescription>
                Get your full 4-letter DNA code with accurate personality insights
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>💕</FeatureIcon>
              <FeatureTitle>Compatibility Guide</FeatureTitle>
              <FeatureDescription>
                Learn how your type interacts with others and find your ideal matches
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>📅</FeatureIcon>
              <FeatureTitle>Development Roadmap</FeatureTitle>
              <FeatureDescription>
                Personalized growth plan to enhance your dating strengths
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🗣️</FeatureIcon>
              <FeatureTitle>Communication Strategies</FeatureTitle>
              <FeatureDescription>
                Tailored advice for expressing needs and understanding partners
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <LimitedGraceSection>
          <LimitedGraceTitle>🤖 Meet Grace - Your AI Relationship Coach</LimitedGraceTitle>
          <LimitedGraceText>
            Grace is here to help with your relationship questions, but with limited interactions in the free version. 
            Upgrade to unlock unlimited conversations and personalized advice.
          </LimitedGraceText>
          <div style={{ textAlign: 'center' }}>
            <UpgradeButton
              onClick={handleUpgrade}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Unlock Grace - $49
            </UpgradeButton>
          </div>
        </LimitedGraceSection>

        <UpgradePrompt>
          <h3 style={{ marginBottom: '1rem' }}>🚀 Ready for the Complete Experience?</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Your free preview shows just the beginning. Unlock your complete Dating DNA profile with:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            <li>✅ Complete 4-letter DNA type (20+ questions)</li>
            <li>✅ Detailed personality insights for each strand</li>
            <li>✅ Compatibility analysis with other types</li>
            <li>✅ Personal development roadmap</li>
            <li>✅ Unlimited Grace AI Relationship Coach</li>
            <li>✅ Premium report upgrade option ($19)</li>
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

export default FreeResults;
