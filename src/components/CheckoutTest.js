import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  color: #333;
  margin-bottom: 2rem;
`;

const TestInfo = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #007bff;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

const PayPalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const StatusMessage = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  
  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  
  &.info {
    background: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }
`;

export default function CheckoutTest() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const createOrder = async () => {
    try {
      setStatus('info');
      setMessage('Creating test order...');
      
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productType: 'test',
          userEmail: 'test@example.com'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      setStatus('success');
      setMessage(`Order created: ${data.orderID}`);
      return data.orderID;
      
    } catch (error) {
      console.error('Error creating order:', error);
      setStatus('error');
      setMessage(`Error creating order: ${error.message}`);
      throw error;
    }
  };

  const onApprove = async (data, actions) => {
    try {
      setStatus('info');
      setMessage('Capturing payment...');
      
      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      });

      if (!response.ok) {
        throw new Error('Failed to capture payment');
      }

      const captureData = await response.json();
      
      setStatus('success');
      setMessage(`Payment captured! Capture ID: ${captureData.captureID}`);
      
      // Log the capture details
      console.log('Payment captured successfully:', captureData);
      
      // Redirect to success page after a short delay
      setTimeout(() => {
        navigate('/checkout/success', { 
          state: { 
            captureData,
            isTest: true
          }
        });
      }, 2000);
      
    } catch (error) {
      console.error('Error capturing payment:', error);
      setStatus('error');
      setMessage(`Error capturing payment: ${error.message}`);
    }
  };

  const onError = (err) => {
    console.error('PayPal error:', err);
    setStatus('error');
    setMessage(`PayPal error: ${err.message || 'Unknown error'}`);
  };

  const onCancel = () => {
    setStatus('info');
    setMessage('Payment cancelled by user');
  };

  return (
    <Container>
      <Title>🧪 PayPal Integration Test</Title>
      
      <TestInfo>
        <h3>Test Information</h3>
        <p><strong>Amount:</strong> $1.00</p>
        <p><strong>Purpose:</strong> Testing PayPal integration</p>
        <p><strong>Environment:</strong> {process.env.REACT_APP_PAYPAL_ENVIRONMENT || 'sandbox'}</p>
        <p><strong>Note:</strong> This is a test transaction. No real money will be charged.</p>
      </TestInfo>

      {status && (
        <StatusMessage className={status}>
          {message}
        </StatusMessage>
      )}

      <PayPalContainer>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onCancel={onCancel}
          style={{
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'pay'
          }}
        />
      </PayPalContainer>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ color: '#666' }}>
          Click the PayPal button above to test the complete payment flow.
        </p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          On success, you'll be redirected to the success page with capture details.
        </p>
      </div>
    </Container>
  );
}
