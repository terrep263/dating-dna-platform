import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const HelpCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff6b9d;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
  }
`;

const TroubleshootingSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const TroubleshootingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const TroubleshootingItem = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  background: #f8fafc;
`;

const ProblemTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const Solution = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  color: white;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const ContactButton = styled.button`
  background: white;
  color: #ff6b9d;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Help = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleFAQClick = () => {
    navigate('/faq');
  };

  const handlePurchaseClick = () => {
    navigate('/checkout?type=single');
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Help & Support</Title>
          <Subtitle>
            Need assistance? We're here to help you get the most out of your Dating DNA experience.
          </Subtitle>
        </Header>

        <HelpGrid>
          <HelpCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardIcon>📋</CardIcon>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              New to Dating DNA? Learn how to take your first assessment and understand your results.
            </CardDescription>
            <ActionButton onClick={handlePurchaseClick}>
              Start Assessment
            </ActionButton>
          </HelpCard>

          <HelpCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CardIcon>❓</CardIcon>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions about assessments, results, and account management.
            </CardDescription>
            <ActionButton onClick={handleFAQClick}>
              View FAQ
            </ActionButton>
          </HelpCard>

          <HelpCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardIcon>💬</CardIcon>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Our support team is ready to help you.
            </CardDescription>
            <ActionButton onClick={handleContactClick}>
              Contact Us
            </ActionButton>
          </HelpCard>
        </HelpGrid>

        <TroubleshootingSection>
          <SectionTitle>Common Issues & Solutions</SectionTitle>
          <TroubleshootingGrid>
            <TroubleshootingItem>
              <ProblemTitle>Can't access my assessment</ProblemTitle>
              <Solution>
                Make sure you've completed the purchase process. If you've already paid, try logging out and back in, or contact support for assistance.
              </Solution>
            </TroubleshootingItem>

            <TroubleshootingItem>
              <ProblemTitle>Assessment results not loading</ProblemTitle>
              <Solution>
                Check your internet connection and refresh the page. If the issue persists, try clearing your browser cache or using a different browser.
              </Solution>
            </TroubleshootingItem>

            <TroubleshootingItem>
              <ProblemTitle>Payment issues</ProblemTitle>
              <Solution>
                Ensure your payment method is valid and has sufficient funds. If you're still having trouble, contact our support team with your transaction details.
              </Solution>
            </TroubleshootingItem>

            <TroubleshootingItem>
              <ProblemTitle>Account login problems</ProblemTitle>
              <Solution>
                Try resetting your password or use the email address associated with your purchase. If you can't remember your login details, contact support.
              </Solution>
            </TroubleshootingItem>

            <TroubleshootingItem>
              <ProblemTitle>Results not saving</ProblemTitle>
              <Solution>
                Make sure you complete the entire assessment before closing the browser. Your results are automatically saved once you finish all questions.
              </Solution>
            </TroubleshootingItem>

            <TroubleshootingItem>
              <ProblemTitle>Mobile app issues</ProblemTitle>
              <Solution>
                For the best experience, use a modern web browser on your mobile device. The assessment is optimized for mobile viewing and should work on all devices.
              </Solution>
            </TroubleshootingItem>
          </TroubleshootingGrid>
        </TroubleshootingSection>

        <ContactSection>
          <ContactTitle>Still Need Help?</ContactTitle>
          <ContactText>
            Our support team is available to assist you with any questions or issues you may have.
          </ContactText>
          <ContactButton onClick={handleContactClick}>
            Get in Touch
          </ContactButton>
        </ContactSection>
      </ContentWrapper>
    </Container>
  );
};

export default Help; 