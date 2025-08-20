import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FLAGS } from '../config/flags.js';

const DNATypesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const StrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StrandCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
  text-align: center;
`;

const StrandIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StrandTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const StrandCode = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
`;

const StrandDescription = styled.p`
  color: #666;
  line-height: 1.5;
`;

const StrandTraits = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
`;

const TraitItem = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
  
  &::before {
    content: '•';
    color: #8b5cf6;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const TypesSection = styled.section`
  margin-bottom: 4rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CategorySubtitle = styled.p`
  color: #666;
  font-size: 1rem;
`;

const TypeList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const TypeItem = styled(motion.div)`
  background: rgba(139, 92, 246, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
  }
`;

const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TypeCode = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #8b5cf6;
  font-family: 'Courier New', monospace;
  background: rgba(139, 92, 246, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
`;

const TypeIcon = styled.div`
  font-size: 1.5rem;
`;

const TypeName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const TypeDescription = styled.p`
  color: #666;
  line-height: 1.5;
  margin: 0;
`;

const ExperienceSection = styled.section`
  margin-bottom: 4rem;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
  text-align: center;
`;

// const ExperienceIcon = styled.div`
//   font-size: 3rem;
//   margin-bottom: 1rem;
// `;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

// const ExperienceDescription = styled.p`
//   color: #666;
//   line-height: 1.5;
// `;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ExperienceItem = styled.li`
  color: #666;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: #8b5cf6;
    font-weight: bold;
    font-size: 1.1rem;
    min-width: 20px;
  }
`;

const CTASection = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: white;
  color: #8b5cf6;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

// DNA Types data
const strands = [
  {
    code: 'C',
    title: 'Connector',
    icon: '⚡',
    description: 'You naturally connect with others and thrive in social settings.'
  },
  {
    code: 'F',
    title: 'Focuser',
    icon: '💖',
    description: 'You prefer deeper, more focused connections with fewer people.'
  },
  {
    code: 'P',
    title: 'Present',
    icon: '🧠',
    description: 'You\'re drawn to what you can see and experience right now.'
  },
  {
    code: 'T',
    title: 'Potential',
    icon: '⏳',
    description: 'You\'re attracted to future possibilities and growth potential.'
  }
];

const dnaTypes = {
  connectors: {
    title: 'The Connectors',
    subtitle: 'Social energy that draws people together',
    types: [
      { code: 'CPLS', icon: '🌟', name: 'The Strategic Connector', description: 'Natural networker who builds strategic relationships' },
      { code: 'CPLO', icon: '🌊', name: 'The Natural Networker', description: 'Effortlessly connects people and creates community' },
      { code: 'CPES', icon: '💝', name: 'The Heartfelt Connector', description: 'Builds deep emotional bonds through genuine care' },
      { code: 'CPEO', icon: '🦋', name: 'The Free-Spirited Connector', description: 'Spontaneous connector who brings joy and energy' },
      { code: 'CTLS', icon: '🔮', name: 'The Visionary Connector', description: 'Connects people around shared future goals' },
      { code: 'CTLO', icon: '🌈', name: 'The Dreamer Connector', description: 'Inspires connections through imagination and possibility' },
      { code: 'CTES', icon: '🔥', name: 'The Passionate Visionary', description: 'Connects through shared passion and future vision' },
      { code: 'CTEO', icon: '✨', name: 'The Free-Spirited Dreamer', description: 'Creates magical connections through spontaneity and vision' }
    ]
  },
  focusers: {
    title: 'The Focusers',
    subtitle: 'Deep, meaningful connections with fewer people',
    types: [
      { code: 'FPLS', icon: '🎯', name: 'The Focused Strategist', description: 'Builds strategic, purposeful relationships' },
      { code: 'FPLO', icon: '🌱', name: 'The Natural Focuser', description: 'Creates deep, organic connections naturally' },
      { code: 'FPES', icon: '💎', name: 'The Heartfelt Focuser', description: 'Develops profound emotional intimacy' },
      { code: 'FPEO', icon: '🕊️', name: 'The Free-Spirited Focuser', description: 'Maintains freedom while building depth' },
      { code: 'FTLS', icon: '🚀', name: 'The Visionary Focuser', description: 'Focuses on relationships with future potential' },
      { code: 'FTLO', icon: '🌙', name: 'The Dreamer Focuser', description: 'Seeks deep connections with dreamers and visionaries' },
      { code: 'FTES', icon: '⚡', name: 'The Passionate Focuser', description: 'Builds intense, passionate deep connections' },
      { code: 'FTEO', icon: '🎭', name: 'The Authentic Dreamer', description: 'Creates authentic connections through shared dreams' }
    ]
  }
};

function DNATypes() {
  return (
    <DNATypesContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Your Dating DNA Profile</Title>
          <Subtitle>
            Your results combine four core dimensions into a unique, practical profile. Publicly we share the big picture. Unlock your full profile, development plan, and compatibility insights in the premium report.
          </Subtitle>
        </Header>

        <>
          {FLAGS.PUBLIC_IP_SAFE_MODE ? (
            <Section>
              <SectionTitle>The Four Dimensions</SectionTitle>
              <SectionSubtitle>
                Our framework reveals key patterns in your dating approach
              </SectionSubtitle>
              
              <StrandsGrid>
                {strands.map((strand, index) => (
                  <StrandCard
                    key={strand.code}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StrandIcon>{strand.icon}</StrandIcon>
                    <StrandTitle>{strand.title}</StrandTitle>
                    <StrandCode>{strand.code}</StrandCode>
                    <StrandDescription>{strand.description}</StrandDescription>
                    <StrandTraits>
                      <TraitItem>Natural compatibility patterns</TraitItem>
                      <TraitItem>Communication preferences</TraitItem>
                      <TraitItem>Relationship development style</TraitItem>
                    </StrandTraits>
                  </StrandCard>
                ))}
              </StrandsGrid>
            </Section>
          ) : (
            <>
              <TypesSection>
                <SectionTitle>The 16 Dating DNA Types</SectionTitle>
                <SectionSubtitle>
                  Discover your unique combination and how it shapes your dating personality
                </SectionSubtitle>
                
                <CategoryGrid>
                  {Object.entries(dnaTypes).map(([key, category], categoryIndex) => (
                    <CategoryCard
                      key={key}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CategoryHeader>
                        <CategoryTitle>{category.title}</CategoryTitle>
                        <CategorySubtitle>{category.subtitle}</CategorySubtitle>
                      </CategoryHeader>
                      <TypeList>
                        {category.types.map((type, typeIndex) => (
                          <TypeItem
                            key={type.code}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: typeIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <TypeHeader>
                              <TypeCode>{type.code}</TypeCode>
                              <TypeIcon>{type.icon}</TypeIcon>
                              <TypeName>{type.name}</TypeName>
                            </TypeHeader>
                            <TypeDescription>{type.description}</TypeDescription>
                          </TypeItem>
                        ))}
                      </TypeList>
                    </CategoryCard>
                  ))}
                </CategoryGrid>
              </TypesSection>

              <ExperienceSection>
                <SectionTitle>How Your Type Shapes Your Dating Experience</SectionTitle>
                <SectionSubtitle>
                  Understanding your Dating DNA type helps you navigate relationships with greater awareness and success
                </SectionSubtitle>
              
                <ExperienceGrid>
                  <ExperienceCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceTitle>Connection Patterns</ExperienceTitle>
                    <ExperienceList>
                      <ExperienceItem>How you prefer to meet potential partners</ExperienceItem>
                      <ExperienceItem>What social settings energize vs. drain you</ExperienceItem>
                      <ExperienceItem>Your ideal frequency and style of communication</ExperienceItem>
                      <ExperienceItem>How you build emotional intimacy</ExperienceItem>
                    </ExperienceList>
                  </ExperienceCard>

                  <ExperienceCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceTitle>Attraction Triggers</ExperienceTitle>
                    <ExperienceList>
                      <ExperienceItem>What initially draws you to someone</ExperienceItem>
                      <ExperienceItem>Whether you focus on present chemistry or future potential</ExperienceItem>
                      <ExperienceItem>How quickly you develop feelings</ExperienceItem>
                      <ExperienceItem>What sustains your interest long-term</ExperienceItem>
                    </ExperienceList>
                  </ExperienceCard>

                  <ExperienceCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceTitle>Decision Framework</ExperienceTitle>
                    <ExperienceList>
                      <ExperienceItem>Evaluate relationship compatibility</ExperienceItem>
                      <ExperienceItem>Handle conflicts and disagreements</ExperienceItem>
                      <ExperienceItem>Make commitment decisions</ExperienceItem>
                      <ExperienceItem>Balance logic and emotion in dating</ExperienceItem>
                    </ExperienceList>
                  </ExperienceCard>

                  <ExperienceCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceTitle>Relationship Rhythm</ExperienceTitle>
                    <ExperienceList>
                      <ExperienceItem>Your preferred pace for relationship milestones</ExperienceItem>
                      <ExperienceItem>How you like to structure dates and time together</ExperienceItem>
                      <ExperienceItem>Your comfort with uncertainty vs. need for clarity</ExperienceItem>
                      <ExperienceItem>How you approach future planning</ExperienceItem>
                    </ExperienceList>
                  </ExperienceCard>
                </ExperienceGrid>
              </ExperienceSection>
            </>
          )}

          <CTASection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CTATitle>Ready to Discover Your Dating DNA™ Profile?</CTATitle>
            <CTADescription>
              Take the assessment to unlock your unique profile and get personalized insights.
            </CTADescription>
            <CTAButton
              as={Link}
              to="/assessment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take the Assessment
            </CTAButton>
          </CTASection>
        </>
      </ContentWrapper>
    </DNATypesContainer>
  );
}

export default DNATypes; 