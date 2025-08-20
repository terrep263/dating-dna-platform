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

const TermsContent = styled(motion.div)`
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

const Terms = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Terms of Service</Title>
          <Subtitle>
            Please read these terms carefully before using our Dating DNA platform.
          </Subtitle>
          <LastUpdated>Last updated: December 2024</LastUpdated>
        </Header>

        <TermsContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section>
            <SectionTitle>1. Acceptance of Terms</SectionTitle>
            <Paragraph>
              By accessing and using the Dating DNA platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>2. Description of Service</SectionTitle>
            <Paragraph>
              Dating DNA provides personality-based dating assessments and compatibility analysis. Our services include:
            </Paragraph>
            <List>
              <ListItem>Individual personality assessments</ListItem>
              <ListItem>Couples compatibility assessments</ListItem>
              <ListItem>Personalized dating insights and recommendations</ListItem>
              <ListItem>Premium reports and analysis</ListItem>
              <ListItem>Educational content about relationships and compatibility</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>3. User Accounts and Registration</SectionTitle>
            <Paragraph>
              To access certain features of our platform, you must create an account. You agree to:
            </Paragraph>
            <List>
              <ListItem>Provide accurate, current, and complete information</ListItem>
              <ListItem>Maintain and update your account information</ListItem>
              <ListItem>Keep your account credentials secure</ListItem>
              <ListItem>Accept responsibility for all activities under your account</ListItem>
              <ListItem>Notify us immediately of any unauthorized use</ListItem>
            </List>
            <Paragraph>
              You must be at least 18 years old to create an account and use our services.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>4. Payment Terms</SectionTitle>
            <Paragraph>
              Our assessment services require payment before access. Payment terms include:
            </Paragraph>
            <List>
              <ListItem>All prices are listed in USD and are subject to change</ListItem>
              <ListItem>Payments are processed securely through PayPal</ListItem>
              <ListItem>All payments are final and non-refundable</ListItem>
              <ListItem>Subscription services may be cancelled at any time</ListItem>
              <ListItem>Failed payments may result in service suspension</ListItem>
            </List>
            
            <HighlightBox>
              <HighlightTitle>Payment Policy</HighlightTitle>
              <HighlightText>
                All assessment purchases are final and non-refundable. Once payment is processed and your assessment results are generated, no refunds will be provided. This policy ensures the integrity of our assessment process and protects against abuse.
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>5. Acceptable Use</SectionTitle>
            <Paragraph>
              You agree to use our platform only for lawful purposes and in accordance with these terms. You agree not to:
            </Paragraph>
            <List>
              <ListItem>Use the service for any illegal or unauthorized purpose</ListItem>
              <ListItem>Attempt to gain unauthorized access to our systems</ListItem>
              <ListItem>Interfere with or disrupt the service</ListItem>
              <ListItem>Share your account credentials with others</ListItem>
              <ListItem>Submit false or misleading information</ListItem>
              <ListItem>Use automated systems to access the service</ListItem>
              <ListItem>Harass, abuse, or harm other users</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>6. Intellectual Property Rights</SectionTitle>
            <Paragraph>
              The Dating DNA platform and its content are protected by intellectual property laws. You acknowledge that:
            </Paragraph>
            <List>
              <ListItem>All content, features, and functionality are owned by Dating DNA</ListItem>
              <ListItem>Assessment questions and methodology are proprietary</ListItem>
              <ListItem>You may not copy, reproduce, or distribute our content</ListItem>
              <ListItem>Your assessment results are for personal use only</ListItem>
              <ListItem>You retain rights to your personal data and feedback</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>7. Privacy and Data Protection</SectionTitle>
            <Paragraph>
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
            </Paragraph>
            <Paragraph>
              By using our service, you consent to the collection and use of your information as described in our Privacy Policy.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>8. Disclaimers and Limitations</SectionTitle>
            <Paragraph>
              Our assessments are designed for educational and entertainment purposes. Important limitations include:
            </Paragraph>
            <List>
              <ListItem>Results are not a substitute for professional relationship counseling</ListItem>
              <ListItem>We do not guarantee compatibility or relationship success</ListItem>
              <ListItem>Assessment accuracy depends on honest responses</ListItem>
              <ListItem>Results may vary over time as people change</ListItem>
              <ListItem>We are not responsible for relationship decisions based on results</ListItem>
            </List>
            
            <HighlightBox>
              <HighlightTitle>No Professional Advice</HighlightTitle>
              <HighlightText>
                Dating DNA provides personality insights and compatibility analysis for educational purposes only. Our assessments are not intended to replace professional relationship counseling, therapy, or medical advice. Always consult qualified professionals for serious relationship or mental health concerns.
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>9. Limitation of Liability</SectionTitle>
            <Paragraph>
              To the maximum extent permitted by law, Dating DNA shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </Paragraph>
            <List>
              <ListItem>Loss of profits, data, or use</ListItem>
              <ListItem>Relationship problems or breakups</ListItem>
              <ListItem>Emotional distress or mental health issues</ListItem>
              <ListItem>Damages arising from use of assessment results</ListItem>
              <ListItem>Service interruptions or technical issues</ListItem>
            </List>
            <Paragraph>
              Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>10. Indemnification</SectionTitle>
            <Paragraph>
              You agree to indemnify and hold harmless Dating DNA from any claims, damages, or expenses arising from:
            </Paragraph>
            <List>
              <ListItem>Your use of the platform</ListItem>
              <ListItem>Your violation of these terms</ListItem>
              <ListItem>Your violation of any third-party rights</ListItem>
              <ListItem>Your actions or decisions based on assessment results</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>11. Termination</SectionTitle>
            <Paragraph>
              We may terminate or suspend your account and access to our services at any time, with or without cause, including for violation of these terms.
            </Paragraph>
            <Paragraph>
              You may terminate your account at any time by contacting us. Upon termination, your right to use the service will cease immediately.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>12. Governing Law</SectionTitle>
            <Paragraph>
              These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.
            </Paragraph>
            <Paragraph>
              Any disputes arising from these terms or your use of our service shall be resolved through binding arbitration or in the courts of [Your Jurisdiction].
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>13. Changes to Terms</SectionTitle>
            <Paragraph>
              We reserve the right to modify these terms at any time. We will notify users of material changes by posting the updated terms on our platform and updating the "Last updated" date.
            </Paragraph>
            <Paragraph>
              Your continued use of our services after any changes indicates your acceptance of the updated terms.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>14. Severability</SectionTitle>
            <Paragraph>
              If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in full force and effect.
            </Paragraph>
          </Section>

          <ContactInfo>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactText>
              If you have any questions about these terms of service, please contact us at:<br />
              <strong>Email:</strong> legal@datingdna.com<br />
              <strong>Address:</strong> [Your Business Address]
            </ContactText>
          </ContactInfo>
        </TermsContent>
      </ContentWrapper>
    </Container>
  );
};

export default Terms; 