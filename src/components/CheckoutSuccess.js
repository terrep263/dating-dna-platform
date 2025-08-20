import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #28a745;
  margin-bottom: 2rem;
`;

const SuccessIcon = styled.div`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const PaymentDetails = styled.div`
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #495057;
`;

const DetailValue = styled.span`
  color: #6c757d;
  font-family: 'Courier New', monospace;
`;

const TestBadge = styled.div`
  background: #ffc107;
  color: #212529;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
  
  &:hover {
    background: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export default function CheckoutSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { captureData, isTest } = location.state || {};

  if (!captureData) {
    return (
      <Container>
        <Title>❌ Payment Information Not Found</Title>
        <p style={{ textAlign: 'center', color: '#666' }}>
          No payment information was found. Please try again.
        </p>
        <ButtonContainer>
          <Button onClick={() => navigate('/checkout/test')}>
            Go to Test Page
          </Button>
          <Button onClick={() => navigate('/')}>
            Go Home
          </Button>
        </ButtonContainer>
      </Container>
    );
  }

  return (
    <Container>
      <SuccessIcon>🎉</SuccessIcon>
      <Title>Payment Successful!</Title>
      
      {isTest && (
        <div style={{ textAlign: 'center' }}>
          <TestBadge>🧪 TEST TRANSACTION</TestBadge>
        </div>
      )}

      <PaymentDetails>
        <h3>Payment Details</h3>
        <DetailRow>
          <DetailLabel>Capture ID:</DetailLabel>
          <DetailValue>{captureData.captureID}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Order ID:</DetailLabel>
          <DetailValue>{captureData.orderID}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Status:</DetailLabel>
          <DetailValue>{captureData.status}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Amount:</DetailLabel>
          <DetailValue>${captureData.amount} {captureData.currency}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Timestamp:</DetailLabel>
          <DetailValue>{new Date(captureData.timestamp).toLocaleString()}</DetailValue>
        </DetailRow>
      </PaymentDetails>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {isTest 
            ? 'Test payment completed successfully! This demonstrates the PayPal integration is working correctly.'
            : 'Your payment has been processed successfully. You will receive a confirmation email shortly.'
          }
        </p>
      </div>

      <ButtonContainer>
        {isTest && (
          <Button onClick={() => navigate('/checkout/test')}>
            Run Another Test
          </Button>
        )}
        <Button onClick={() => navigate('/')}>
          Go Home
        </Button>
      </ButtonContainer>
    </Container>
  );
}
