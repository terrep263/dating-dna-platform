import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #ff6b9d;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #4a5568;
  line-height: 1.6;
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
`;

const SuccessText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Contact Us</Title>
          <Subtitle>
            Have questions or need support? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </Subtitle>
        </Header>

        <ContactGrid>
          <ContactForm
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Send us a Message</FormTitle>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SuccessText>
                  Thank you for your message! We'll get back to you within 24 hours.
                </SuccessText>
              </SuccessMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InfoTitle>Get in Touch</InfoTitle>
            
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <InfoContent>
                <InfoLabel>Email Support</InfoLabel>
                <InfoText>
                  support@datingdna.com<br />
                  We typically respond within 24 hours
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>🕒</InfoIcon>
              <InfoContent>
                <InfoLabel>Support Hours</InfoLabel>
                <InfoText>
                  Monday - Friday: 9 AM - 6 PM EST<br />
                  Saturday: 10 AM - 4 PM EST<br />
                  Sunday: Closed
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoContent>
                <InfoLabel>Live Chat</InfoLabel>
                <InfoText>
                  Available during business hours<br />
                  Look for the chat icon in the bottom right
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>📋</InfoIcon>
              <InfoContent>
                <InfoLabel>FAQ</InfoLabel>
                <InfoText>
                  Check our frequently asked questions<br />
                  You might find your answer there
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>🔒</InfoIcon>
              <InfoContent>
                <InfoLabel>Privacy</InfoLabel>
                <InfoText>
                  Your information is secure and confidential<br />
                  We never share your personal data
                </InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
        </ContactGrid>
      </ContentWrapper>
    </Container>
  );
};

export default Contact; 