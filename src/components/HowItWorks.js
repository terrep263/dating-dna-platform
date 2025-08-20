import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FLAGS } from '../config/flags';

const HowItWorksContainer = styled.div`
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StepsSection = styled.section`
  margin-bottom: 4rem;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StepCard = styled(motion.div)`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
`;

const StrandsSection = styled.section`
  margin-bottom: 4rem;
`;

const StrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StrandCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
  text-align: center;
`;

const StrandIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const StrandTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StrandDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const CTASection = styled(motion.section)`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
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
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
  }
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

function HowItWorks() {
  return (
    <HowItWorksContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>How It Works</Title>
          <Subtitle>
            Discover your unique Dating DNA™ with our proprietary, research-informed assessment
          </Subtitle>
        </Header>

        <StepsSection>
          <SectionTitle>Simple 3-Step Process</SectionTitle>
          <SectionSubtitle>
            Our assessment is designed to be quick, accurate, and insightful
          </SectionSubtitle>
          
          <StepsGrid>
            <StepCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <StepNumber>1</StepNumber>
              <StepTitle>Take the Assessment</StepTitle>
              <StepDescription>
                Answer a proprietary set of items about connection, attraction, decisions, and pacing. 
                Our question set and scoring are proprietary.
              </StepDescription>
            </StepCard>

            <StepCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StepNumber>2</StepNumber>
              <StepTitle>Get Your DNA Code</StepTitle>
              <StepDescription>
                Get a concise profile that summarizes your patterns. 
                Your unique DNA code reveals your specific dating style and preferences.
              </StepDescription>
            </StepCard>

            <StepCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StepNumber>3</StepNumber>
              <StepTitle>Unlock Your Insights</StepTitle>
              <StepDescription>
                Upgrade to the premium report for an in-depth, personalized analysis 
                and compatibility guidance. Detailed methodology is reserved for paid reports.
              </StepDescription>
            </StepCard>
          </StepsGrid>
        </StepsSection>

        {FLAGS.PUBLIC_IP_SAFE_MODE ? (
          <StrandsSection>
            <SectionTitle>The Four Dimensions</SectionTitle>
            <SectionSubtitle>
              Our framework reveals key patterns in your dating approach
            </SectionSubtitle>
            
            <StrandsGrid>
              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <StrandIcon>⚡</StrandIcon>
                <StrandTitle>Connection</StrandTitle>
                <StrandDescription>
                  Where you naturally connect best.
                </StrandDescription>
              </StrandCard>

              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StrandIcon>💖</StrandIcon>
                <StrandTitle>Attraction</StrandTitle>
                <StrandDescription>
                  What reliably draws you.
                </StrandDescription>
              </StrandCard>

              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StrandIcon>🧠</StrandIcon>
                <StrandTitle>Decisions</StrandTitle>
                <StrandDescription>
                  How you weigh compatibility.
                </StrandDescription>
              </StrandCard>

              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StrandIcon>⏳</StrandIcon>
                <StrandTitle>Pace</StrandTitle>
                <StrandDescription>
                  How you prefer relationships to develop.
                </StrandDescription>
              </StrandCard>
            </StrandsGrid>
          </StrandsSection>
        ) : (
          <StrandsSection>
            <SectionTitle>The Four DNA Strands</SectionTitle>
            <SectionSubtitle>
              Our framework breaks down dating personality into four core dimensions
            </SectionSubtitle>
            
            <StrandsGrid>
              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <StrandIcon>⚡</StrandIcon>
                <StrandTitle>Social Energy</StrandTitle>
                <StrandDescription>
                  Connector: Recharge through social interaction and connection
                  Focuser: Recharge through alone time and deep focus
                </StrandDescription>
              </StrandCard>

              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StrandIcon>💖</StrandIcon>
                <StrandTitle>Attraction Style</StrandTitle>
                <StrandDescription>
                  Present: Drawn to current qualities and immediate connection
                  Potential: Drawn to future possibilities and growth potential
                </StrandDescription>
              </StrandCard>

              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StrandIcon>🧠</StrandIcon>
                <StrandTitle>Decision Filter</StrandTitle>
                <StrandDescription>
                  Logical: Make decisions based on facts, analysis, and reasoning
                  Emotional: Make decisions based on feelings, intuition, and values
                </StrandDescription>
              </StrandCard>

              <StrandCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StrandIcon>⏳</StrandIcon>
                <StrandTitle>Relationship Pace</StrandTitle>
                <StrandDescription>
                  Structured: Prefer clear timelines, milestones, and planning
                  Organic: Prefer natural progression and going with the flow
                </StrandDescription>
              </StrandCard>
            </StrandsGrid>
          </StrandsSection>
        )}

        <CTASection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Discover Your Dating DNA?</CTATitle>
          <CTADescription>
            Join thousands of people who have unlocked their dating potential 
            and found deeper, more meaningful connections.
          </CTADescription>
          <CTAButton
            as={Link}
            to="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Assessment
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </HowItWorksContainer>
  );
}

export default HowItWorks; 