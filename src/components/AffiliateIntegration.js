import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntegrationContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const IntegrationCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled(motion.a)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: white;
  color: #ff6b9d;
  border: 2px solid #ff6b9d;
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #ff6b9d;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 8px;
  text-align: left;
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.connected ? '#10b981' : '#f59e0b'};
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

function AffiliateIntegration() {
  const [connectionStatus, setConnectionStatus] = React.useState('checking');
  const [userEmail, setUserEmail] = React.useState(null);

  useEffect(() => {
    // Check current user status
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
    
    // Simulate connection check
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 1000);
  }, []);

  const handleAffiliateRedirect = () => {
    // Store current user context for affiliate platform
    if (userEmail) {
      localStorage.setItem('affiliateRedirectUser', userEmail);
    }
    // Redirect to affiliate platform
    window.open('https://affiliate.mydatingdna.com/accessatlv', '_blank');
  };

  const handleCreateReferralLink = () => {
    const baseUrl = 'https://www.mydatingdna.com';
    const referralId = userEmail || 'default';
    const referralLink = `${baseUrl}?ref=${encodeURIComponent(referralId)}`;
    
    navigator.clipboard.writeText(referralLink).then(() => {
      alert('Referral link copied to clipboard!');
    });
  };

  return (
    <IntegrationContainer>
      <IntegrationCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>🔗 Affiliate Integration Hub</Title>
        
        <StatusIndicator connected={connectionStatus === 'connected'}>
          {connectionStatus === 'checking' ? '🔄 Checking connection...' : '✅ Platforms Connected'}
        </StatusIndicator>
        
        <Description>
          Manage your Dating DNA affiliate program across both platforms. 
          Access your affiliate dashboard and track performance seamlessly.
        </Description>

        <InfoBox>
          <h4>📊 Current Status:</h4>
          <p><strong>User:</strong> {userEmail || 'Not logged in'}</p>
          <p><strong>Main Platform:</strong> www.mydatingdna.com</p>
          <p><strong>Affiliate Platform:</strong> affiliate.mydatingdna.com</p>
          <p><strong>Integration:</strong> Active</p>
        </InfoBox>

        <ButtonGroup>
          <ActionButton
            as={motion.a}
            onClick={handleAffiliateRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Access Affiliate Dashboard
          </ActionButton>
          
          <SecondaryButton
            as={motion.a}
            onClick={handleCreateReferralLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📋 Generate Referral Link
          </SecondaryButton>
        </ButtonGroup>

        <InfoBox style={{ marginTop: '2rem' }}>
          <h4>🎯 Quick Actions:</h4>
          <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
            <li>Access your affiliate admin at /accessatlv</li>
            <li>Track referrals and commissions</li>
            <li>Generate new referral links</li>
            <li>View performance analytics</li>
          </ul>
        </InfoBox>
      </IntegrationCard>
    </IntegrationContainer>
  );
}

export default AffiliateIntegration;
