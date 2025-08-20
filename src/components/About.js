import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #f8fafc;
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
`;

const HighlightTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
`;

const HighlightText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border-radius: 15px;
  color: white;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const About = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>About Dating DNA</Title>
          <Subtitle>
            We're on a mission to revolutionize how people understand themselves and their relationships through the power of personality science.
          </Subtitle>
        </Header>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Our Story</SectionTitle>
          <SectionSubtitle>
            Founded by relationship psychologists and data scientists, Dating DNA emerged from a simple belief: understanding yourself is the first step to finding meaningful connections.
          </SectionSubtitle>
          
          <Paragraph>
            In today's fast-paced dating world, it's easy to get lost in endless swipes and superficial interactions. We saw that people were craving deeper, more meaningful connections, but they lacked the tools to understand what truly makes them compatible with others.
          </Paragraph>
          
          <Paragraph>
            That's why we created Dating DNA - a scientifically-backed platform that goes beyond surface-level attraction to help you understand your core personality traits, communication style, and relationship needs. Our assessment is built on decades of psychological research and validated through thousands of real relationships.
          </Paragraph>
          
          <HighlightBox>
            <HighlightTitle>Our Mission</HighlightTitle>
            <HighlightText>
              To empower individuals with the self-knowledge and insights they need to build healthier, more fulfilling relationships through the science of personality compatibility.
            </HighlightText>
          </HighlightBox>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionTitle>What Makes Us Different</SectionTitle>
          <SectionSubtitle>
            Unlike traditional dating apps that focus on photos and brief bios, we dive deep into what really matters for long-term compatibility.
          </SectionSubtitle>
          
          <Grid>
            <Card>
              <CardIcon>🧬</CardIcon>
              <CardTitle>Science-Based Approach</CardTitle>
              <CardText>
                Our assessment is built on validated psychological frameworks, including the Big Five personality model and attachment theory.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Personalized Insights</CardTitle>
              <CardText>
                Get detailed analysis of your dating personality, communication style, and specific recommendations for finding compatible partners.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>💝</CardIcon>
              <CardTitle>Relationship Focused</CardTitle>
              <CardText>
                We help you understand not just who you're attracted to, but who you can build a lasting relationship with.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Privacy First</CardTitle>
              <CardText>
                Your personal data is protected with enterprise-grade security. We never share your information without your consent.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>📱</CardIcon>
              <CardTitle>Accessible Anywhere</CardTitle>
              <CardText>
                Take your assessment on any device, anywhere. Your results are always available when you need them.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>🔄</CardIcon>
              <CardTitle>Continuous Learning</CardTitle>
              <CardText>
                Our platform evolves with the latest research to provide you with the most accurate and helpful insights.
              </CardText>
            </Card>
          </Grid>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>Our Impact</SectionTitle>
          <SectionSubtitle>
            Join thousands of people who have discovered their Dating DNA and transformed their relationships.
          </SectionSubtitle>
          
          <StatsGrid>
            <StatCard>
              <StatNumber>50,000+</StatNumber>
              <StatLabel>Assessments Completed</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>95%</StatNumber>
              <StatLabel>User Satisfaction Rate</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>89%</StatNumber>
              <StatLabel>Reported Improved Self-Awareness</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>76%</StatNumber>
              <StatLabel>Better Relationship Communication</StatLabel>
            </StatCard>
          </StatsGrid>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionTitle>Our Team</SectionTitle>
          <SectionSubtitle>
            We're a diverse team of psychologists, data scientists, and relationship experts passionate about helping people find meaningful connections.
          </SectionSubtitle>
          
          <Paragraph>
            Our team brings together decades of experience in relationship psychology, data analysis, and user experience design. We're united by a shared belief that everyone deserves to understand themselves better and find relationships that truly fulfill them.
          </Paragraph>
          
          <Paragraph>
            We continuously collaborate with leading researchers and relationship experts to ensure our platform stays at the forefront of personality science and relationship psychology. Our commitment to scientific rigor means you can trust that your insights are based on solid research, not just popular opinion.
          </Paragraph>
          
          <HighlightBox>
            <HighlightTitle>Our Commitment</HighlightTitle>
            <HighlightText>
              We're committed to ongoing research and development to provide you with the most accurate, helpful, and up-to-date relationship insights. Your success in finding meaningful connections is our success.
            </HighlightText>
          </HighlightBox>
        </Section>
      </ContentWrapper>
    </Container>
  );
};

export default About; 