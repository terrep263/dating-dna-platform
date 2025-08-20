import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DATING_DNA_TYPES } from '../../data/datingDNAData';

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

const DNACode = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #ff6b9d;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const TypeName = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 1rem;
`;

const TypeDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const StrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StrandCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 107, 157, 0.2);
`;

const StrandName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StrandValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 1rem;
`;

const PercentageBar = styled.div`
  background: #f0f0f0;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.percentage}%;
    background: linear-gradient(135deg, #ff6b9d 0%, #8b5cf6 100%);
    transition: width 0.3s ease;
  }
`;

const StrandDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const StrandInsights = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const StrandInsight = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
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

const EmailSection = styled.div`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 107, 157, 0.2);
`;

const EmailTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const EmailInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const EmailButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PremiumUpgradeSection = styled(motion.div)`
  margin: 3rem 0;
`;

const PremiumUpgradeCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
`;

const PremiumIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const PremiumTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PremiumDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const PremiumFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const PremiumFeature = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const PremiumPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const PremiumButton = styled(motion.button)`
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

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

const TypeSnapshotSection = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #eee;
`;

const TypeSnapshotTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const TypeSnapshotContent = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }
`;

const getStrandDescription = (strand, dominant) => {
  const strandMap = {
    'SOCIAL_ENERGY': {
      'C': {
        description: 'You naturally connect with many people and enjoy building broad social networks. Your outgoing nature makes you approachable and helps you meet potential partners in various social settings. You thrive in group environments and can easily strike up conversations with strangers.',
        keyStrength: 'Natural networking ability and social confidence',
        keyChallenge: 'May spread yourself too thin across many connections',
        actionStep: 'Focus on deepening 2-3 meaningful connections rather than maintaining many surface-level ones'
      },
      'F': {
        description: 'You prefer deeper connections with fewer people and value meaningful relationships. You take time to truly get to know someone before considering them a potential partner. Quality over quantity defines your approach to relationships.',
        keyStrength: 'Ability to form deep, meaningful connections',
        keyChallenge: 'May miss opportunities by being too selective',
        actionStep: 'Push yourself to attend at least one social event per month to expand your network'
      }
    },
    'ATTRACTION_STYLE': {
      'P': {
        description: 'You are drawn to people who are present-focused and practical in their approach. You appreciate what you can see and experience in the moment, rather than getting lost in future possibilities. This makes you grounded and realistic about relationships.',
        keyStrength: 'Practical and realistic approach to dating',
        keyChallenge: 'May miss potential in people who are still developing',
        actionStep: 'Try to see beyond current circumstances and recognize growth potential in others'
      },
      'T': {
        description: 'You are attracted to people with potential and vision for the future. You can see what someone could become and are inspired by their dreams and aspirations. This makes you optimistic and forward-thinking in relationships.',
        keyStrength: 'Ability to see and inspire potential in others',
        keyChallenge: 'May idealize partners and ignore present reality',
        actionStep: 'Balance future vision with present reality by asking about current goals and plans'
      }
    },
    'DECISION_FILTER': {
      'L': {
        description: 'You make relationship decisions based on logic, compatibility, and practical considerations. You carefully analyze situations and weigh pros and cons before committing. This approach brings stability and thoughtful decision-making to your relationships.',
        keyStrength: 'Logical and analytical approach to relationships',
        keyChallenge: 'May overthink and miss emotional cues',
        actionStep: 'Practice listening to your gut feelings alongside logical analysis'
      },
      'E': {
        description: 'You follow your heart and intuition when making relationship choices. You trust your feelings and emotional responses to guide you. This brings passion and authenticity to your relationships.',
        keyStrength: 'Strong emotional intelligence and intuition',
        keyChallenge: 'May make impulsive decisions without considering consequences',
        actionStep: 'Take 24 hours to reflect before making major relationship decisions'
      }
    },
    'RELATIONSHIP_PACE': {
      'S': {
        description: 'You prefer structured, intentional relationship development with clear milestones. You like to know where things are heading and appreciate partners who share this approach. This brings clarity and direction to your relationships.',
        keyStrength: 'Clear relationship vision and goal-setting ability',
        keyChallenge: 'May rush through important relationship phases',
        actionStep: 'Practice patience and enjoy the journey, not just the destination'
      },
      'O': {
        description: 'You enjoy organic, natural relationship growth that unfolds at its own pace. You prefer to let relationships develop naturally without forcing timelines or milestones. This brings flexibility and authenticity to your approach.',
        keyStrength: 'Natural, authentic relationship development',
        keyChallenge: 'May lack direction and clear relationship goals',
        actionStep: 'Set at least one relationship goal for the next 3 months'
      }
    }
  };
  
  return strandMap[strand]?.[dominant] || {
    description: 'This strand influences how you approach relationships.',
    keyStrength: 'Adaptability in different situations',
    keyChallenge: 'May need to develop consistency',
    actionStep: 'Focus on understanding how this trait affects your dating style'
  };
};

export default function SinglesResultsScreen({ results, email, onEmailChange, onRestart }) {
  const navigate = useNavigate();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleEmailSubmit = async () => {
    if (!email || emailSubmitted) return;
    
    setIsSubmitting(true);
    
    try {
      // Send email update to Google Sheets
      const scores = results.percentages.reduce((acc, percentage) => {
        acc[percentage.strand] = percentage.percentage;
        return acc;
      }, {});
      
      await sendToSheet({
        email: email,
        userType: results.dnaCode,
        assessmentType: 'Singles',
        scores
      });
      setEmailSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!results) {
    return (
      <ResultsContainer>
        <ResultsCard>
          <Title>Results Not Available</Title>
          <Subtitle>Please complete the assessment to view your results.</Subtitle>
          <ActionButtons>
            <Button onClick={() => navigate('/assessment')}>
              Take Assessment
            </Button>
          </ActionButtons>
        </ResultsCard>
      </ResultsContainer>
    );
  }

  const dnaType = DATING_DNA_TYPES[results.dnaCode];
  const strandMap = {
    'SOCIAL_ENERGY': 'Social Energy',
    'ATTRACTION_STYLE': 'Attraction Style',
    'DECISION_FILTER': 'Decision Filter',
    'RELATIONSHIP_PACE': 'Relationship Pace'
  };

  return (
    <ResultsContainer>
      <ResultsCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <Title>Your Dating DNA Results</Title>
          <Subtitle>
            Discover your unique dating personality and unlock insights for better relationships.
          </Subtitle>
        </Header>

        <DNACode>{results.dnaCode}</DNACode>
        <TypeName>{dnaType ? dnaType.name : 'Dating DNA Type'}</TypeName>
        <TypeDescription>
          {dnaType ? dnaType.description : 'Your unique dating personality profile'}
        </TypeDescription>

        <StrandsGrid>
          {results.percentages.map((percentage, index) => {
            const strandInfo = getStrandDescription(percentage.strand, percentage.dominant);
            return (
              <StrandCard
                key={percentage.strand}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StrandName>{strandMap[percentage.strand]}</StrandName>
                <StrandValue>{percentage.dominant}</StrandValue>
                <PercentageBar percentage={percentage.percentage} />
                <StrandDescription>
                  {strandInfo.description}
                </StrandDescription>
                <StrandInsights>
                  <StrandInsight>
                    <strong>💪 Key Strength:</strong> {strandInfo.keyStrength}
                  </StrandInsight>
                  <StrandInsight>
                    <strong>🎯 Key Challenge:</strong> {strandInfo.keyChallenge}
                  </StrandInsight>
                  <StrandInsight>
                    <strong>🚀 Action Step:</strong> {strandInfo.actionStep}
                  </StrandInsight>
                </StrandInsights>
              </StrandCard>
            );
          })}
        </StrandsGrid>

        {/* Type Snapshot Section */}
        <TypeSnapshotSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeSnapshotTitle>🔍 Your Type Snapshot</TypeSnapshotTitle>
          <TypeSnapshotContent>
            <p>
              As a <strong>{dnaType ? dnaType.name : 'Dating DNA Type'}</strong>, your unique combination of traits creates a distinctive approach to relationships. 
              Your {results.percentages.find(p => p.strand === 'SOCIAL_ENERGY')?.dominant === 'C' ? 'natural social energy' : 'preference for deeper connections'} 
              combines with your {results.percentages.find(p => p.strand === 'ATTRACTION_STYLE')?.dominant === 'P' ? 'present-focused attraction style' : 'future-oriented vision'} 
              to create a dating approach that's uniquely yours.
            </p>
            <p>
              Your {results.percentages.find(p => p.strand === 'DECISION_FILTER')?.dominant === 'L' ? 'logical decision-making' : 'emotional intuition'} 
              helps you navigate relationship choices, while your {results.percentages.find(p => p.strand === 'RELATIONSHIP_PACE')?.dominant === 'S' ? 'structured approach' : 'organic pace'} 
              determines how you build connections over time. Understanding these dynamics is key to leveraging your strengths and addressing your growth areas.
            </p>
          </TypeSnapshotContent>
        </TypeSnapshotSection>

        <InsightsGrid>
          <InsightCard
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InsightTitle>💪 Your Dating Strengths</InsightTitle>
            <InsightList>
              {dnaType ? dnaType.strengths.map((strength, index) => (
                <InsightItem key={index}>{strength}</InsightItem>
              )) : [
                'Natural ability to connect with compatible people',
                'Clear understanding of your relationship needs',
                'Authentic approach to dating and relationships',
                'Strong sense of self in romantic contexts'
              ].map((strength, index) => (
                <InsightItem key={index}>{strength}</InsightItem>
              ))}
            </InsightList>
          </InsightCard>

          <InsightCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InsightTitle>🎯 Growth Opportunities</InsightTitle>
            <InsightList>
              {dnaType ? dnaType.challenges.map((challenge, index) => (
                <InsightItem key={index}>{challenge}</InsightItem>
              )) : [
                'Developing communication strategies for your type',
                'Understanding how to leverage your natural strengths',
                'Building confidence in your unique dating approach',
                'Learning to recognize compatible partners'
              ].map((challenge, index) => (
                <InsightItem key={index}>{challenge}</InsightItem>
              ))}
            </InsightList>
          </InsightCard>
        </InsightsGrid>

        <EmailSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <EmailTitle>📧 Get Your Full Report</EmailTitle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <EmailInput
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              disabled={emailSubmitted}
            />
            <EmailButton
              onClick={handleEmailSubmit}
              disabled={!email || emailSubmitted || isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {emailSubmitted ? '✓ Submitted' : isSubmitting ? 'Submitting...' : 'Submit'}
            </EmailButton>
          </div>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
            {emailSubmitted 
              ? 'Thank you! We\'ll send you a detailed report with personalized insights and recommendations.'
              : 'We\'ll send you a detailed report with personalized insights and recommendations.'
            }
          </p>
        </EmailSection>

        {/* Premium Upgrade Section */}
        <PremiumUpgradeSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PremiumUpgradeCard>
            <PremiumIcon>⭐</PremiumIcon>
            <PremiumTitle>Upgrade to Premium Report</PremiumTitle>
            <PremiumDescription>
              Get a comprehensive 16-page personality analysis with detailed insights, personalized strategies, and actionable recommendations.
            </PremiumDescription>
            <PremiumFeatures>
              <PremiumFeature>✓ Complete personality breakdown</PremiumFeature>
              <PremiumFeature>✓ Detailed compatibility insights</PremiumFeature>
              <PremiumFeature>✓ Personalized dating strategies</PremiumFeature>
              <PremiumFeature>✓ Communication tips for your type</PremiumFeature>
              <PremiumFeature>✓ Relationship growth roadmap</PremiumFeature>
            </PremiumFeatures>
            <PremiumPrice>$19</PremiumPrice>
            <PremiumButton
              onClick={() => navigate('/checkout?type=premium&assessment=single')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upgrade Now
            </PremiumButton>
          </PremiumUpgradeCard>
        </PremiumUpgradeSection>

        {/* Premium Teaser Section */}
        <PremiumTeaserSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PremiumTeaserTitle>⭐ Want the Full Roadmap?</PremiumTeaserTitle>
          <PremiumTeaserDescription>
            Your core assessment reveals the foundation of your dating personality. 
            Unlock the complete roadmap with our Premium Report to discover:
          </PremiumTeaserDescription>
          <PremiumTeaserFeatures>
            <PremiumTeaserFeature>🎯 Your best and worst matches — and how to handle them</PremiumTeaserFeature>
            <PremiumTeaserFeature>📊 Detailed compatibility analysis with specific personality types</PremiumTeaserFeature>
            <PremiumTeaserFeature>💬 Advanced communication strategies tailored to your type</PremiumTeaserFeature>
            <PremiumTeaserFeature>🚀 Your detailed growth roadmap for the next 12 months</PremiumTeaserFeature>
            <PremiumTeaserFeature>💡 Advanced partner communication tips and conflict resolution</PremiumTeaserFeature>
            <PremiumTeaserFeature>🔍 Deep dive analysis of how your strands interact and influence each other</PremiumTeaserFeature>
          </PremiumTeaserFeatures>
          <PremiumTeaserCTA
            onClick={() => navigate('/premium-singles')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Unlock Premium Report - $19
          </PremiumTeaserCTA>
        </PremiumTeaserSection>

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