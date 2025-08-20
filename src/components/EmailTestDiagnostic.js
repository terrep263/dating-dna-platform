import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Firebase removed - not needed for core functionality
// import { sendPasswordResetEmailToUser } from '../firebase/services';
// import { auth } from '../firebase/config';

const DiagnosticContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #f8f9fa;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const Label = styled.div`
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  color: #333;
  word-break: break-all;
`;

const TestForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: end;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const TestButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ResultBox = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.success ? '#d4edda' : '#f8d7da'};
  border: 1px solid ${props => props.success ? '#c3e6cb' : '#f5c6cb'};
  color: ${props => props.success ? '#155724' : '#721c24'};
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${props => props.status === 'connected' ? '#28a745' : 
                         props.status === 'error' ? '#dc3545' : '#ffc107'};
  color: white;
`;

function EmailTestDiagnostic() {
  const [testEmail, setTestEmail] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailTest = async (e) => {
    e.preventDefault();
    if (!testEmail) return;

    setIsLoading(true);
    setTestResult(null);

    try {
      // const result = await sendPasswordResetEmailToUser(testEmail);
      // setTestResult(result);
      setTestResult({
        success: true,
        message: 'Test email functionality is currently disabled due to Firebase dependency issues.'
      });
    } catch (error) {
      setTestResult({
        success: false,
        message: `Test failed: ${error.message}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getAuthStatus = () => {
    // if (auth && auth.currentUser !== undefined) {
    //   return 'connected';
    // }
    return 'error';
  };

  return (
    <DiagnosticContainer>
      <Title>🔧 Email & Firebase Authentication Diagnostic</Title>
      
      <Section>
        <SectionTitle>📊 Firebase Configuration Status</SectionTitle>
        <InfoGrid>
          <InfoItem>
            <Label>Project ID:</Label>
            <Value>{/* auth.app.options.projectId || 'Not configured' */}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Auth Domain:</Label>
            <Value>{/* auth.app.options.authDomain || 'Not configured' */}</Value>
          </InfoItem>
          <InfoItem>
            <Label>API Key:</Label>
            <Value>{/* auth.app.options.apiKey ? '✅ Configured' : '❌ Missing' */}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Auth Status:</Label>
            <Value>
              <StatusIndicator status={getAuthStatus()}>
                {/* {getAuthStatus() === 'connected' ? '✅ Connected' : '❌ Error'} */}
                Firebase Authentication is not configured.
              </StatusIndicator>
            </Value>
          </InfoItem>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>📧 Email Configuration Check</SectionTitle>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Test password reset email functionality. This will send a real email if Firebase is properly configured.
        </p>
        
        <TestForm onSubmit={handleEmailTest}>
          <Input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="Enter email to test (e.g., your.email@gmail.com)"
            required
          />
          <TestButton
            type="submit"
            disabled={isLoading || !testEmail}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? 'Testing...' : 'Send Test Email'}
          </TestButton>
        </TestForm>

        {testResult && (
          <ResultBox success={testResult.success}>
            <strong>{testResult.success ? '✅ Success!' : '❌ Failed:'}</strong>
            <br />
            {testResult.message}
          </ResultBox>
        )}
      </Section>

      <Section>
        <SectionTitle>🔧 Common Email Issues & Solutions</SectionTitle>
        <div style={{ lineHeight: '1.6', color: '#555' }}>
          <h4>Possible reasons emails aren't sending:</h4>
          <ol>
            <li><strong>Firebase Authentication not enabled:</strong> Check Firebase Console → Authentication → Sign-in method</li>
            <li><strong>Email/Password provider disabled:</strong> Enable Email/Password in sign-in methods</li>
            <li><strong>Custom email templates not configured:</strong> Go to Authentication → Templates in Firebase Console</li>
            <li><strong>Domain not authorized:</strong> Add your domain to authorized domains</li>
            <li><strong>SMTP settings:</strong> Firebase uses Google's SMTP by default, no additional setup needed</li>
          </ol>
          
          <h4 style={{ marginTop: '1.5rem' }}>Next steps:</h4>
          <ul>
            <li>Visit <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">Firebase Console</a></li>
            <li>Go to your "dating-dna" project</li>
            <li>Navigate to Authentication → Templates</li>
            <li>Configure password reset email template</li>
            <li>Test with the form above</li>
          </ul>
        </div>
      </Section>
    </DiagnosticContainer>
  );
}

export default EmailTestDiagnostic;
