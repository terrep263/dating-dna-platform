import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PremiumContainer = styled.div`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const PricingCard = styled(motion.div)`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border: 3px solid #ff6b9d;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 1rem;
`;

const PriceDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const BenefitItem = styled.li`
  padding: 0.5rem 0;
  color: #333;
  font-weight: 500;
  
  &:before {
    content: "✅ ";
    margin-right: 0.5rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
  }
`;

function Premium() {
  return (
    <PremiumContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Premium Reports</Title>
          <Subtitle>
            Unlock your complete Dating DNA™ profile with detailed insights, compatibility analysis, and personalized strategies
          </Subtitle>
        </Header>

        <Section>
          <SectionTitle>Choose Your Premium Report</SectionTitle>
          <SectionSubtitle>
            Select the premium report that matches your assessment type for detailed insights and personalized strategies
          </SectionSubtitle>
          
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>👤</FeatureIcon>
              <FeatureTitle>Premium Singles Report</FeatureTitle>
              <FeatureDescription>
                Complete analysis of your individual DNA type with detailed compatibility insights, development roadmap, and personalized strategies.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>💑</FeatureIcon>
              <FeatureTitle>Premium Couples Report</FeatureTitle>
              <FeatureDescription>
                Comprehensive analysis of both partners' DNA types with relationship dynamics, communication strategies, and growth plans.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <Section>
          <SectionTitle>What's Included in Premium Reports</SectionTitle>
          <SectionSubtitle>
            Both premium reports include comprehensive insights and actionable strategies
          </SectionSubtitle>
          
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🧬</FeatureIcon>
              <FeatureTitle>Detailed DNA Analysis</FeatureTitle>
              <FeatureDescription>
                In-depth exploration of your four DNA strands with specific examples and behavioral patterns.
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
                How your type interacts with others, including communication strategies and potential friction points.
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
                Personalized growth plan with specific steps to enhance your dating strengths and address challenges.
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
                Tailored advice for expressing your needs and understanding your partner's communication style.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>Long-term Strategy</FeatureTitle>
              <FeatureDescription>
                Vision for building lasting relationships based on your unique compatibility patterns.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🚫</FeatureIcon>
              <FeatureTitle>Red Flags & Warning Signs</FeatureTitle>
              <FeatureDescription>
                Specific patterns to watch for that indicate incompatibility with your DNA type.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <Section>
          <SectionTitle>Get Your Premium Report</SectionTitle>
          <SectionSubtitle>
            Choose the premium report that matches your assessment type
          </SectionSubtitle>
          
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>👤</FeatureIcon>
              <FeatureTitle>Premium Singles Report</FeatureTitle>
              <FeatureDescription>
                For individual assessments. Get your detailed DNA analysis and personal growth strategies.
              </FeatureDescription>
              <CTAButton
                as={Link}
                to="/premium-singles"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: '1rem' }}
              >
                View Singles Report
              </CTAButton>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>💑</FeatureIcon>
              <FeatureTitle>Premium Couples Report</FeatureTitle>
              <FeatureDescription>
                For couples assessments. Understand your relationship dynamics and growth opportunities.
              </FeatureDescription>
              <CTAButton
                as={Link}
                to="/premium-couples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: '1rem' }}
              >
                View Couples Report
              </CTAButton>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <Section>
          <PricingCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Price>$19</Price>
            <PriceDescription>
              Premium upgrade only available after purchasing core assessment
            </PriceDescription>
            <BenefitsList>
              <BenefitItem>Detailed DNA type analysis</BenefitItem>
              <BenefitItem>Compatibility insights</BenefitItem>
              <BenefitItem>Personal development roadmap</BenefitItem>
              <BenefitItem>Communication strategies</BenefitItem>
              <BenefitItem>Long-term relationship vision</BenefitItem>
              <BenefitItem>Red flags guide</BenefitItem>
              <BenefitItem>Lifetime access</BenefitItem>
            </BenefitsList>
            <CTAButton
              as={Link}
              to="/assessment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Assessment First
            </CTAButton>
          </PricingCard>
        </Section>
      </ContentWrapper>
    </PremiumContainer>
  );
}

export default Premium;
