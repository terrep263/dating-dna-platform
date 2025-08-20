import React, { useState } from 'react';
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

const CookiesContent = styled(motion.div)`
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

const CookieTable = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  background: #e2e8f0;
  color: #2d3748;
  font-weight: 600;
  border-bottom: 2px solid #cbd5e0;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
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

const CookieSettings = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const SettingsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const SettingInfo = styled.div`
  flex: 1;
`;

const SettingName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
`;

const SettingDescription = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-left: 1rem;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  }
  
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const SaveButton = styled.button`
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

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleSettingChange = (setting) => {
    setCookieSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSaveSettings = () => {
    // Simulate saving cookie preferences
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Cookie Policy</Title>
          <Subtitle>
            Learn about how we use cookies and similar technologies to enhance your experience on Dating DNA.
          </Subtitle>
          <LastUpdated>Last updated: December 2024</LastUpdated>
        </Header>

        <CookiesContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section>
            <SectionTitle>What Are Cookies?</SectionTitle>
            <Paragraph>
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>How We Use Cookies</SectionTitle>
            <Paragraph>
              We use cookies and similar technologies for several purposes:
            </Paragraph>
            <List>
              <ListItem><strong>Essential Cookies:</strong> Required for the website to function properly</ListItem>
              <ListItem><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</ListItem>
              <ListItem><strong>Preference Cookies:</strong> Remember your settings and choices</ListItem>
              <ListItem><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Types of Cookies We Use</SectionTitle>
            <CookieTable>
              <Table>
                <thead>
                  <tr>
                    <Th>Cookie Type</Th>
                    <Th>Purpose</Th>
                    <Th>Duration</Th>
                    <Th>Essential</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>Session ID</Td>
                    <Td>Maintains your login session</Td>
                    <Td>Session</Td>
                    <Td>Yes</Td>
                  </tr>
                  <tr>
                    <Td>Assessment Progress</Td>
                    <Td>Saves your assessment answers</Td>
                    <Td>Session</Td>
                    <Td>Yes</Td>
                  </tr>
                  <tr>
                    <Td>Language Preference</Td>
                    <Td>Remembers your language choice</Td>
                    <Td>1 year</Td>
                    <Td>No</Td>
                  </tr>
                  <tr>
                    <Td>Analytics</Td>
                    <Td>Website usage statistics</Td>
                    <Td>2 years</Td>
                    <Td>No</Td>
                  </tr>
                  <tr>
                    <Td>Marketing</Td>
                    <Td>Personalized advertisements</Td>
                    <Td>1 year</Td>
                    <Td>No</Td>
                  </tr>
                </tbody>
              </Table>
            </CookieTable>
          </Section>

          <Section>
            <SectionTitle>Third-Party Cookies</SectionTitle>
            <Paragraph>
              We may use third-party services that also place cookies on your device:
            </Paragraph>
            <List>
              <ListItem><strong>PayPal:</strong> Payment processing and security</ListItem>
              <ListItem><strong>Google Analytics:</strong> Website analytics and performance</ListItem>
              <ListItem><strong>Google Ads:</strong> Advertising and remarketing</ListItem>
              <ListItem><strong>Social Media:</strong> Social sharing and integration</ListItem>
            </List>
            <Paragraph>
              These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies for more information.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Managing Your Cookie Preferences</SectionTitle>
            <Paragraph>
              You can control and manage cookies in several ways:
            </Paragraph>
            <List>
              <ListItem>Use our cookie settings panel below</ListItem>
              <ListItem>Adjust your browser settings to block or delete cookies</ListItem>
              <ListItem>Use browser extensions to manage cookies</ListItem>
              <ListItem>Opt out of specific third-party cookies</ListItem>
            </List>
            
            <HighlightBox>
              <HighlightTitle>Important Note</HighlightTitle>
              <HighlightText>
                Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for the site to work properly.
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>Cookie Settings</SectionTitle>
            <CookieSettings>
              <SettingsTitle>Manage Your Cookie Preferences</SettingsTitle>
              <SettingsGrid>
                <SettingItem>
                  <SettingInfo>
                    <SettingName>Necessary Cookies</SettingName>
                    <SettingDescription>Required for the website to function properly</SettingDescription>
                  </SettingInfo>
                  <Toggle>
                    <ToggleInput
                      type="checkbox"
                      checked={cookieSettings.necessary}
                      disabled
                    />
                    <ToggleSlider />
                  </Toggle>
                </SettingItem>

                <SettingItem>
                  <SettingInfo>
                    <SettingName>Analytics Cookies</SettingName>
                    <SettingDescription>Help us improve our website by collecting usage data</SettingDescription>
                  </SettingInfo>
                  <Toggle>
                    <ToggleInput
                      type="checkbox"
                      checked={cookieSettings.analytics}
                      onChange={() => handleSettingChange('analytics')}
                    />
                    <ToggleSlider />
                  </Toggle>
                </SettingItem>

                <SettingItem>
                  <SettingInfo>
                    <SettingName>Marketing Cookies</SettingName>
                    <SettingDescription>Used to deliver personalized advertisements</SettingDescription>
                  </SettingInfo>
                  <Toggle>
                    <ToggleInput
                      type="checkbox"
                      checked={cookieSettings.marketing}
                      onChange={() => handleSettingChange('marketing')}
                    />
                    <ToggleSlider />
                  </Toggle>
                </SettingItem>

                <SettingItem>
                  <SettingInfo>
                    <SettingName>Preference Cookies</SettingName>
                    <SettingDescription>Remember your settings and choices</SettingDescription>
                  </SettingInfo>
                  <Toggle>
                    <ToggleInput
                      type="checkbox"
                      checked={cookieSettings.preferences}
                      onChange={() => handleSettingChange('preferences')}
                    />
                    <ToggleSlider />
                  </Toggle>
                </SettingItem>
              </SettingsGrid>
              
              <SaveButton onClick={handleSaveSettings}>
                Save Cookie Preferences
              </SaveButton>
            </CookieSettings>
          </Section>

          <Section>
            <SectionTitle>Browser-Specific Instructions</SectionTitle>
            <Paragraph>
              To manage cookies in your specific browser:
            </Paragraph>
            <List>
              <ListItem><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</ListItem>
              <ListItem><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</ListItem>
              <ListItem><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</ListItem>
              <ListItem><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Updates to This Policy</SectionTitle>
            <Paragraph>
              We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
            </Paragraph>
          </Section>

          <ContactInfo>
            <ContactTitle>Questions About Cookies?</ContactTitle>
            <ContactText>
              If you have any questions about our use of cookies or this policy, please contact us at:<br />
              <strong>Email:</strong> privacy@datingdna.com<br />
              <strong>Subject:</strong> Cookie Policy Inquiry
            </ContactText>
          </ContactInfo>
        </CookiesContent>
      </ContentWrapper>
    </Container>
  );
};

export default Cookies; 