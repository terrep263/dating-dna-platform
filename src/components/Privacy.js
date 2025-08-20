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

const PrivacyContent = styled(motion.div)`
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

const Privacy = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Privacy Policy</Title>
          <Subtitle>
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </Subtitle>
          <LastUpdated>Last updated: December 2024</LastUpdated>
        </Header>

        <PrivacyContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section>
            <SectionTitle>1. Information We Collect</SectionTitle>
            <Paragraph>
              We collect information you provide directly to us, such as when you create an account, complete an assessment, or contact us for support.
            </Paragraph>
            <List>
              <ListItem>Personal information (name, email address, date of birth)</ListItem>
              <ListItem>Assessment responses and results</ListItem>
              <ListItem>Payment information (processed securely through PayPal)</ListItem>
              <ListItem>Communication preferences and feedback</ListItem>
              <ListItem>Technical information (IP address, browser type, device information)</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>2. How We Use Your Information</SectionTitle>
            <Paragraph>
              We use the information we collect to provide, maintain, and improve our services, including:
            </Paragraph>
            <List>
              <ListItem>Processing your assessment and generating personalized results</ListItem>
              <ListItem>Processing payments and sending receipts</ListItem>
              <ListItem>Providing customer support and responding to inquiries</ListItem>
              <ListItem>Sending important updates about our services</ListItem>
              <ListItem>Analyzing usage patterns to improve our platform</ListItem>
              <ListItem>Ensuring the security and integrity of our services</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>3. Information Sharing and Disclosure</SectionTitle>
            <Paragraph>
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
            </Paragraph>
            <List>
              <ListItem>With your explicit consent</ListItem>
              <ListItem>To comply with legal obligations or court orders</ListItem>
              <ListItem>To protect our rights, property, or safety</ListItem>
              <ListItem>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</ListItem>
            </List>
            
            <HighlightBox>
              <HighlightTitle>Your Assessment Data</HighlightTitle>
              <HighlightText>
                Your assessment responses and results are kept strictly confidential and are only used to generate your personalized Dating DNA report. We do not share individual assessment data with third parties or use it for purposes other than providing you with your results.
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>4. Data Security</SectionTitle>
            <Paragraph>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </Paragraph>
            <List>
              <ListItem>Encryption of data in transit and at rest</ListItem>
              <ListItem>Regular security assessments and updates</ListItem>
              <ListItem>Access controls and authentication measures</ListItem>
              <ListItem>Secure payment processing through PayPal</ListItem>
              <ListItem>Regular backups and disaster recovery procedures</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>5. Data Retention</SectionTitle>
            <Paragraph>
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Assessment data is retained to allow you to access your results and for our legitimate business purposes.
            </Paragraph>
            <Paragraph>
              You may request deletion of your account and associated data at any time by contacting us. We will process such requests in accordance with applicable data protection laws.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>6. Your Rights and Choices</SectionTitle>
            <Paragraph>
              You have certain rights regarding your personal information, including:
            </Paragraph>
            <List>
              <ListItem>Access to your personal information</ListItem>
              <ListItem>Correction of inaccurate information</ListItem>
              <ListItem>Deletion of your account and data</ListItem>
              <ListItem>Objection to certain processing activities</ListItem>
              <ListItem>Data portability</ListItem>
              <ListItem>Withdrawal of consent (where applicable)</ListItem>
            </List>
            <Paragraph>
              To exercise these rights, please contact us using the information provided below.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>7. Cookies and Tracking Technologies</SectionTitle>
            <Paragraph>
              We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
            </Paragraph>
            <List>
              <ListItem>Remember your preferences and settings</ListItem>
              <ListItem>Analyze how our platform is used</ListItem>
              <ListItem>Provide personalized content and features</ListItem>
              <ListItem>Ensure the security of our services</ListItem>
            </List>
            <Paragraph>
              You can control cookie settings through your browser preferences, though disabling certain cookies may affect the functionality of our platform.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>8. Third-Party Services</SectionTitle>
            <Paragraph>
              Our platform may integrate with third-party services, such as payment processors (PayPal) and analytics providers. These services have their own privacy policies, and we encourage you to review them.
            </Paragraph>
            <Paragraph>
              We are not responsible for the privacy practices of third-party services, but we carefully select our partners and require them to maintain appropriate data protection standards.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>9. Children's Privacy</SectionTitle>
            <Paragraph>
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>10. International Data Transfers</SectionTitle>
            <Paragraph>
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>11. Changes to This Policy</SectionTitle>
            <Paragraph>
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our platform and updating the "Last updated" date.
            </Paragraph>
            <Paragraph>
              Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </Paragraph>
          </Section>

          <ContactInfo>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactText>
              If you have any questions about this privacy policy or our data practices, please contact us at:<br />
              <strong>Email:</strong> privacy@datingdna.com<br />
              <strong>Address:</strong> [Your Business Address]
            </ContactText>
          </ContactInfo>
        </PrivacyContent>
      </ContentWrapper>
    </Container>
  );
};

export default Privacy; 