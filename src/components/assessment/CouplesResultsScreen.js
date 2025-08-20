import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DATING_DNA_TYPES, DNA_STRANDS } from '../../data/datingDNAData';
import GraceAICoach from '../GraceAICoach';

const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const ResultsCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
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
`;

const PartnerTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const DNACode = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ff6b9d;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const TypeName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 1rem;
`;

const TypeDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
`;

const CompatibilitySection = styled.div`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 3rem;
`;

const CompatibilityTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CompatibilityScore = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CompatibilityDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InsightCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #ff6b9d;
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
  font-size: 0.95rem;
  
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
`;



// New styled components for core tier content
const FrictionPointsSection = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #eee;
`;

const FrictionPointsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const FrictionPointsContent = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const FrictionPointsList = styled.div`
  margin-top: 1rem;
`;

const FrictionPoint = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #ff6b9d;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const QuickWinSection = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #eee;
`;

const QuickWinTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const QuickWinContent = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const QuickWinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const QuickWinCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const QuickWinCardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const QuickWinCardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const PremiumTeaserSection = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #eee;
`;

const PremiumTeaserTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const PremiumTeaserDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: left;
  max-width: 800px;
  margin: 0 auto 1.5rem;
`;

const PremiumTeaserFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: left;
  max-width: 800px;
  margin: 0 auto 1.5rem;
`;

const PremiumTeaserFeature = styled.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.3rem;
`;

const PremiumTeaserCTA = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }
`;

const Button = styled(motion.button)`
  background: ${props => props.primary ? 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)' : 'white'};
  color: ${props => props.primary ? 'white' : '#8b5cf6'};
  border: ${props => props.primary ? 'none' : '2px solid #8b5cf6'};
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

const calculateCompatibility = (partnerA, partnerB) => {
  // Simple compatibility calculation based on DNA strands
  let compatibility = 0;
  const strands = ['SOCIAL_ENERGY', 'ATTRACTION_STYLE', 'DECISION_FILTER', 'RELATIONSHIP_PACE'];
  
  strands.forEach(strand => {
    const aValue = partnerA.percentages.find(p => p.strand === strand)?.dominant;
    const bValue = partnerB.percentages.find(p => p.strand === strand)?.dominant;
    
    if (aValue === bValue) {
      compatibility += 25; // Perfect match for this strand
    } else {
      // Check for complementary pairs
      const strandInfo = DNA_STRANDS[strand];
      const aOption = strandInfo.options[aValue];
      const bOption = strandInfo.options[bValue];
      
      if (aOption && bOption && aOption.complementary === bValue) {
        compatibility += 20; // Complementary match
      } else {
        compatibility += 10; // Different but not complementary
      }
    }
  });
  
  return Math.min(100, compatibility);
};

const getCompatibilityDescription = (score) => {
  if (score >= 80) return "Exceptional Compatibility";
  if (score >= 60) return "Strong Compatibility";
  if (score >= 40) return "Good Compatibility";
  return "Growing Compatibility";
};

// Removed unused getCompatibilityColor function to fix ESLint warning

export default function CouplesResultsScreen({ partnerResults, insight, onRestart }) {
  const navigate = useNavigate();
  
  if (!partnerResults || !partnerResults.partnerA || !partnerResults.partnerB) {
    return (
      <ResultsContainer>
        <ResultsCard>
          <Title>Results Not Available</Title>
          <Subtitle>Please complete the couples assessment to view your results.</Subtitle>
          <ActionButtons>
            <Button onClick={() => navigate('/assessment/couples')}>
              Take Assessment
            </Button>
          </ActionButtons>
        </ResultsCard>
      </ResultsContainer>
    );
  }

  const { partnerA, partnerB } = partnerResults;
  const compatibilityScore = calculateCompatibility(partnerA, partnerB);
  const compatibilityDescription = getCompatibilityDescription(compatibilityScore);
  
  const dnaTypeA = DATING_DNA_TYPES[partnerA.dnaCode];
  const dnaTypeB = DATING_DNA_TYPES[partnerB.dnaCode];

  return (
    <ResultsContainer>
      <ResultsCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <Title>Your Couples Compatibility Results</Title>
          <Subtitle>
            Discover how your unique Dating DNA profiles work together and unlock insights for your relationship.
          </Subtitle>
        </Header>

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

        <CompatibilitySection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CompatibilityTitle>💕 Your Compatibility Score</CompatibilityTitle>
          <CompatibilityScore>{compatibilityScore}%</CompatibilityScore>
          <CompatibilityDescription>
            {compatibilityDescription} - {insight || "Your connection is unique. Trust what you've learned and grow together."}
          </CompatibilityDescription>
        </CompatibilitySection>

        <InsightsGrid>
          <InsightCard
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <InsightTitle>💪 Your Shared Strengths</InsightTitle>
            <InsightList>
              <InsightItem>Complementary personality traits that balance each other</InsightItem>
              <InsightItem>Shared values and relationship goals</InsightItem>
              <InsightItem>Different perspectives that enrich your connection</InsightItem>
              <InsightItem>Natural communication patterns that work well together</InsightItem>
              <InsightItem>Mutual understanding of each other's needs</InsightItem>
            </InsightList>
          </InsightCard>

          <InsightCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <InsightTitle>🌱 Growth Opportunities</InsightTitle>
            <InsightList>
              <InsightItem>Understanding each other's different needs and preferences</InsightItem>
              <InsightItem>Developing communication strategies for your unique combination</InsightItem>
              <InsightItem>Leveraging your differences as relationship strengths</InsightItem>
              <InsightItem>Building on your natural compatibility patterns</InsightItem>
              <InsightItem>Creating shared relationship rituals and traditions</InsightItem>
            </InsightList>
          </InsightCard>
        </InsightsGrid>

        {/* Potential Friction Points Section */}
        <FrictionPointsSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FrictionPointsTitle>⚠️ Potential Friction Points</FrictionPointsTitle>
          <FrictionPointsContent>
            <p>
              Every couple has areas where their different approaches can create tension. 
              For your combination of <strong>{dnaTypeA.name}</strong> and <strong>{dnaTypeB.name}</strong>, 
              potential friction points include:
            </p>
            <FrictionPointsList>
              <FrictionPoint>
                <strong>Communication Styles:</strong> {dnaTypeA.name} may prefer {dnaTypeA.description.includes('logical') ? 'structured, logical communication' : 'emotional, intuitive communication'}, 
                while {dnaTypeB.name} may prefer {dnaTypeB.description.includes('logical') ? 'structured, logical communication' : 'emotional, intuitive communication'}
              </FrictionPoint>
              <FrictionPoint>
                <strong>Decision Making:</strong> {dnaTypeA.name} tends to {dnaTypeA.description.includes('logic') ? 'analyze and plan' : 'follow intuition'}, 
                while {dnaTypeB.name} tends to {dnaTypeB.description.includes('logic') ? 'analyze and plan' : 'follow intuition'}
              </FrictionPoint>
              <FrictionPoint>
                <strong>Social Preferences:</strong> {dnaTypeA.name} may prefer {dnaTypeA.description.includes('social') ? 'group activities and networking' : 'intimate gatherings and deep conversations'}, 
                while {dnaTypeB.name} may prefer {dnaTypeB.description.includes('social') ? 'group activities and networking' : 'intimate gatherings and deep conversations'}
              </FrictionPoint>
            </FrictionPointsList>
          </FrictionPointsContent>
        </FrictionPointsSection>

        {/* Quick Win Exercises Section */}
        <QuickWinSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <QuickWinTitle>🚀 Quick Win Exercises</QuickWinTitle>
          <QuickWinContent>
            <p>
              Try these simple exercises this week to strengthen your connection and build on your natural compatibility:
            </p>
            <QuickWinGrid>
              <QuickWinCard>
                <QuickWinCardTitle>🎯 Weekly Check-In</QuickWinCardTitle>
                <QuickWinCardDescription>
                  Set aside 15 minutes each week to share your highs, lows, and relationship goals. 
                  Use this time to practice active listening and emotional validation.
                </QuickWinCardDescription>
              </QuickWinCard>
              <QuickWinCard>
                <QuickWinCardTitle>💬 Communication Practice</QuickWinCardTitle>
                <QuickWinCardDescription>
                  Practice using "I feel" statements when discussing any concerns. 
                  Focus on understanding rather than solving during emotional conversations.
                </QuickWinCardDescription>
              </QuickWinCard>
              <QuickWinCard>
                <QuickWinCardTitle>🌟 Appreciation Ritual</QuickWinCardTitle>
                <QuickWinCardDescription>
                  Each day, share one thing you appreciate about your partner. 
                  Be specific about what they did and how it made you feel.
                </QuickWinCardDescription>
              </QuickWinCard>
            </QuickWinGrid>
          </QuickWinContent>
        </QuickWinSection>

        {/* Premium Teaser Section */}
        <PremiumTeaserSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <PremiumTeaserTitle>⭐ Want the Complete Couples Roadmap?</PremiumTeaserTitle>
          <PremiumTeaserDescription>
            Your core compatibility assessment reveals the foundation of your relationship dynamics. 
            Unlock the complete roadmap with our Premium Couples Report to discover:
          </PremiumTeaserDescription>
          <PremiumTeaserFeatures>
            <PremiumTeaserFeature>💕 Detailed compatibility analysis with specific personality combinations</PremiumTeaserFeature>
            <PremiumTeaserFeature>🗣️ Advanced communication strategies for your unique pairing</PremiumTeaserFeature>
            <PremiumTeaserFeature>⚡ Conflict resolution techniques tailored to your communication styles</PremiumTeaserFeature>
            <PremiumTeaserFeature>📈 Your relationship growth roadmap for the next 12 months</PremiumTeaserFeature>
            <PremiumTeaserFeature>🎯 Personalized date ideas and activities for your types</PremiumTeaserFeature>
            <PremiumTeaserFeature>🔍 Deep dive analysis of how your individual traits interact as a couple</PremiumTeaserFeature>
          </PremiumTeaserFeatures>
          <PremiumTeaserCTA
            onClick={() => navigate('/premium-couples')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Unlock Premium Couples Report - $19
          </PremiumTeaserCTA>
        </PremiumTeaserSection>

        {/* Grace AI Coach */}
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionTitle>💬 Chat with Grace, Your AI Relationship Coach</SectionTitle>
          <GraceAICoach dnaType="couples" />
        </Section>

        <ActionButtons>
          <Button
            onClick={onRestart}
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
      </ResultsCard>
    </ResultsContainer>
  );
} 