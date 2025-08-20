import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
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
  line-height: 1.6;
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 1rem;
`;

const AccessibilityContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f7fafc;
`;

const Paragraph = styled.p`
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const List = styled.ul`
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const FeatureCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ff6b9d;
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const HighlightTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const HighlightText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ComplianceSection = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const ComplianceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const ComplianceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ComplianceItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
`;

const ComplianceName = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const ComplianceStatus = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => props.status === 'compliant' ? '#c6f6d5' : props.status === 'partial' ? '#fef5e7' : '#fed7d7'};
  color: ${props => props.status === 'compliant' ? '#22543d' : props.status === 'partial' ? '#744210' : '#742a2a'};
`;

const ContactInfo = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: #4a5568;
  line-height: 1.6;
`;

const Accessibility = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Accessibility Statement</Title>
          <Subtitle>
            We are committed to making Dating DNA accessible to all users, regardless of ability or technology.
          </Subtitle>
          <LastUpdated>Last updated: December 2024</LastUpdated>
        </Header>

        <AccessibilityContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section>
            <SectionTitle>Our Commitment to Accessibility</SectionTitle>
            <Paragraph>
              Dating DNA is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </Paragraph>
            <Paragraph>
              We believe that websites and digital services should be accessible to all users, including those with visual, auditory, motor, or cognitive disabilities. Our goal is to provide an inclusive experience that works for everyone.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Accessibility Features</SectionTitle>
            <Paragraph>
              Our platform includes the following accessibility features and improvements:
            </Paragraph>
            
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon>👁️</FeatureIcon>
                <FeatureTitle>Visual Accessibility</FeatureTitle>
                <FeatureDescription>
                  High contrast options, resizable text, and clear typography to support users with visual impairments.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎧</FeatureIcon>
                <FeatureTitle>Screen Reader Support</FeatureTitle>
                <FeatureDescription>
                  Proper heading structure, alt text for images, and semantic HTML for screen reader compatibility.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>⌨️</FeatureIcon>
                <FeatureTitle>Keyboard Navigation</FeatureTitle>
                <FeatureDescription>
                  Full keyboard accessibility with visible focus indicators and logical tab order.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureTitle>Focus Management</FeatureTitle>
                <FeatureDescription>
                  Clear focus indicators and logical navigation flow for keyboard and assistive technology users.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>Mobile Accessibility</FeatureTitle>
                <FeatureDescription>
                  Responsive design that works across devices and supports touch navigation for mobile users.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🎨</FeatureIcon>
                <FeatureTitle>Color and Contrast</FeatureTitle>
                <FeatureDescription>
                  WCAG AA compliant color contrast ratios and options for users with color vision deficiencies.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </Section>

          <Section>
            <SectionTitle>Assessment Accessibility</SectionTitle>
            <Paragraph>
              Our personality assessments are designed to be accessible to users with various abilities:
            </Paragraph>
            <List>
              <ListItem>Clear, simple language and instructions</ListItem>
              <ListItem>Multiple choice questions with clear options</ListItem>
              <ListItem>Progress indicators and navigation controls</ListItem>
              <ListItem>Ability to save progress and return later</ListItem>
              <ListItem>Alternative input methods for question responses</ListItem>
              <ListItem>Comprehensive results presentation with clear explanations</ListItem>
            </List>
            
            <HighlightBox>
              <HighlightTitle>Assessment Accommodations</HighlightTitle>
              <HighlightText>
                If you need accommodations to complete our assessments, such as extended time, alternative formats, or assistance, please contact our support team. We're committed to working with you to ensure you can fully participate in our services.
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>Compliance Standards</SectionTitle>
            <Paragraph>
              We strive to meet or exceed the following accessibility standards:
            </Paragraph>
            
            <ComplianceSection>
              <ComplianceTitle>Current Compliance Status</ComplianceTitle>
              <ComplianceGrid>
                <ComplianceItem>
                  <ComplianceName>WCAG 2.1 Level AA</ComplianceName>
                  <ComplianceStatus status="compliant">Compliant</ComplianceStatus>
                </ComplianceItem>
                <ComplianceItem>
                  <ComplianceName>Section 508</ComplianceName>
                  <ComplianceStatus status="partial">Partially Compliant</ComplianceStatus>
                </ComplianceItem>
                <ComplianceItem>
                  <ComplianceName>ADA Title III</ComplianceName>
                  <ComplianceStatus status="compliant">Compliant</ComplianceStatus>
                </ComplianceItem>
                <ComplianceItem>
                  <ComplianceName>EN 301 549</ComplianceName>
                  <ComplianceStatus status="partial">Partially Compliant</ComplianceStatus>
                </ComplianceItem>
              </ComplianceGrid>
            </ComplianceSection>
          </Section>

          <Section>
            <SectionTitle>Known Limitations</SectionTitle>
            <Paragraph>
              While we strive for comprehensive accessibility, we acknowledge some current limitations:
            </Paragraph>
            <List>
              <ListItem>Some third-party integrations may have limited accessibility features</ListItem>
              <ListItem>Advanced interactive features may require additional accessibility improvements</ListItem>
              <ListItem>Video content may not always include captions or audio descriptions</ListItem>
              <ListItem>Some older browsers may not support all accessibility features</ListItem>
            </List>
            <Paragraph>
              We are actively working to address these limitations and improve accessibility across all features.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Testing and Evaluation</SectionTitle>
            <Paragraph>
              Our accessibility efforts include:
            </Paragraph>
            <List>
              <ListItem>Regular automated accessibility testing using industry-standard tools</ListItem>
              <ListItem>Manual testing with assistive technologies including screen readers</ListItem>
              <ListItem>User testing with individuals who have disabilities</ListItem>
              <ListItem>Ongoing monitoring and improvement based on user feedback</ListItem>
              <ListItem>Regular accessibility audits and compliance reviews</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Feedback and Support</SectionTitle>
            <Paragraph>
              We welcome feedback on the accessibility of our platform. If you experience accessibility barriers or have suggestions for improvement, please contact us:
            </Paragraph>
            <List>
              <ListItem>Email us at accessibility@datingdna.com</ListItem>
              <ListItem>Use our contact form with "Accessibility" as the subject</ListItem>
              <ListItem>Call our support line and mention accessibility concerns</ListItem>
              <ListItem>Provide specific details about the issue you encountered</ListItem>
            </List>
            <Paragraph>
              We aim to respond to accessibility feedback within 2 business days and will work with you to address any concerns.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Continuous Improvement</SectionTitle>
            <Paragraph>
              Accessibility is an ongoing commitment. We regularly:
            </Paragraph>
            <List>
              <ListItem>Review and update our accessibility policies and procedures</ListItem>
              <ListItem>Train our development team on accessibility best practices</ListItem>
              <ListItem>Monitor new accessibility standards and guidelines</ListItem>
              <ListItem>Implement improvements based on user feedback and testing</ListItem>
              <ListItem>Conduct regular accessibility audits and assessments</ListItem>
            </List>
          </Section>

          <ContactInfo>
            <ContactTitle>Need Accessibility Assistance?</ContactTitle>
            <ContactText>
              If you need help accessing our platform or have accessibility concerns, please contact us:<br />
              <strong>Email:</strong> accessibility@datingdna.com<br />
              <strong>Phone:</strong> [Your Support Phone Number]<br />
              <strong>Response Time:</strong> Within 2 business days
            </ContactText>
          </ContactInfo>
        </AccessibilityContent>
      </ContentWrapper>
    </Container>
  );
};

export default Accessibility; 