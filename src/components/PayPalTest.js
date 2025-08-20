import React, { useCallback, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import styled from 'styled-components';

const TestContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const TestTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const TestInfo = styled.div`
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const StatusMessage = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  font-weight: 500;
`;

const SuccessMessage = styled(StatusMessage)`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
`;

const ErrorMessage = styled(StatusMessage)`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
`;

const LoadingMessage = styled(StatusMessage)`
  background: #fefce8;
  border: 1px solid #fde047;
  color: #ca8a04;
`;

const PayPalTest = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const createOrder = useCallback((data, actions) => {
    console.log('Creating test order...');
    setStatus('creating');
    setMessage('Creating order...');
    
    return actions.order.create({
      purchase_units: [
        {
          description: 'Test Payment - $1.00',
          amount: {
            value: '1.00',
            currency_code: 'USD'
          }
        }
      ]
    });
  }, []);

  const onApprove = useCallback(async (data, actions) => {
    try {
      console.log('Order approved, capturing payment...');
      setStatus('capturing');
      setMessage('Capturing payment...');
      
      const capture = await actions.order.capture();
      console.log('Payment captured:', capture);
      
      setStatus('success');
      setMessage(`Payment successful! Order ID: ${capture.id}`);
      
    } catch (error) {
      console.error('Capture failed:', error);
      setStatus('error');
      setMessage(`Capture failed: ${error.message}`);
    }
  }, []);

  const onError = useCallback((err) => {
    console.error('PayPal error:', err);
    setStatus('error');
    setMessage(`PayPal error: ${err.message || 'Unknown error'}`);
  }, []);

  const onCancel = useCallback(() => {
    console.log('Payment cancelled');
    setStatus('cancelled');
    setMessage('Payment was cancelled');
  }, []);

  return (
    <TestContainer>
      <TestTitle>PayPal Sandbox Test</TestTitle>
      
      <TestInfo>
        <strong>Test with these sandbox accounts:</strong><br/>
        • <strong>Buyer:</strong> sb-buyer@business.example.com / password123<br/>
        • <strong>Seller:</strong> sb-business@business.example.com / password123<br/>
        • <strong>Amount:</strong> $1.00 (test payment)
      </TestInfo>

      {status === 'creating' && (
        <LoadingMessage>{message}</LoadingMessage>
      )}

      {status === 'capturing' && (
        <LoadingMessage>{message}</LoadingMessage>
      )}

      {status === 'success' && (
        <SuccessMessage>{message}</SuccessMessage>
      )}

      {status === 'error' && (
        <ErrorMessage>{message}</ErrorMessage>
      )}

      {status === 'cancelled' && (
        <ErrorMessage>{message}</ErrorMessage>
      )}

      <div style={{ marginTop: '2rem' }}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onCancel={onCancel}
          style={{ layout: 'vertical', shape: 'rect', color: 'blue' }}
        />
      </div>

      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <strong>Debug Info:</strong><br/>
        • Status: {status}<br/>
        • Environment: {process.env.REACT_APP_PAYPAL_ENVIRONMENT || 'not set'}<br/>
        • Client ID: {process.env.REACT_APP_PAYPAL_CLIENT_ID ? '✓ Set' : '✗ Missing'}
      </div>
    </TestContainer>
  );
};

export default PayPalTest;
