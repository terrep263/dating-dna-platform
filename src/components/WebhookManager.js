import React, { useState } from 'react';
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
  color: #333;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
`;

const SectionTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #0056b3;
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
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

const WebhookInfo = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const CodeBlock = styled.code`
  background: #e9ecef;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  display: block;
  margin: 0.5rem 0;
  word-break: break-all;
`;

export default function WebhookManager() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [webhookInfo, setWebhookInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetupWebhook = async (e) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      setStatus('error');
      setMessage('Please enter a webhook URL');
      return;
    }

    setIsLoading(true);
    setStatus('info');
    setMessage('Setting up webhook...');

    try {
      const response = await fetch('/api/paypal/setup-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          webhookUrl: webhookUrl
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to setup webhook');
      }

      const data = await response.json();
      setWebhookInfo(data);
      setStatus('success');
      setMessage('Webhook created successfully!');
      
    } catch (error) {
      console.error('Error setting up webhook:', error);
      setStatus('error');
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentDomain = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'https://yourdomain.com';
  };

  const getWebhookUrl = () => {
    const domain = getCurrentDomain();
    return `${domain}/api/paypal/webhook`;
  };

  return (
    <Container>
      <Title>🔗 PayPal Webhook Manager</Title>
      
      <Section>
        <SectionTitle>Current Webhook URL</SectionTitle>
        <WebhookInfo>
          <strong>Your webhook endpoint:</strong>
          <CodeBlock>{getWebhookUrl()}</CodeBlock>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
            This is the URL where PayPal will send payment notifications.
          </p>
        </WebhookInfo>
      </Section>

      <Section>
        <SectionTitle>Setup Webhook</SectionTitle>
        <Form onSubmit={handleSetupWebhook}>
          <Input
            type="url"
            placeholder="Enter webhook URL"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Setting up...' : 'Setup Webhook'}
          </Button>
        </Form>
        
        {status && (
          <StatusMessage className={status}>
            {message}
          </StatusMessage>
        )}
      </Section>

      {webhookInfo && (
        <Section>
          <SectionTitle>Webhook Created Successfully</SectionTitle>
          <WebhookInfo>
            <p><strong>Webhook ID:</strong> {webhookInfo.webhookId}</p>
            <p><strong>URL:</strong> {webhookInfo.url}</p>
            <p><strong>Status:</strong> {webhookInfo.status}</p>
            <p><strong>Event Types:</strong></p>
            <ul>
              {webhookInfo.eventTypes?.map((event, index) => (
                <li key={index}>{event.name}</li>
              ))}
            </ul>
          </WebhookInfo>
        </Section>
      )}

      <Section>
        <SectionTitle>Next Steps</SectionTitle>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>Copy the webhook URL above</li>
          <li>Go to your PayPal Developer Dashboard</li>
          <li>Navigate to Webhooks section</li>
          <li>Add the webhook URL</li>
          <li>Select the event types you want to receive</li>
          <li>Save the webhook</li>
          <li>Copy the webhook ID and add it to your environment variables</li>
        </ol>
        
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '4px' }}>
          <strong>Environment Variable to Add:</strong>
          <CodeBlock>PAYPAL_WEBHOOK_ID=your_webhook_id_here</CodeBlock>
        </div>
      </Section>

      <Section>
        <SectionTitle>Testing Webhooks</SectionTitle>
        <p>To test your webhook:</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>Complete a test payment using the checkout test page</li>
          <li>Check your server logs for webhook events</li>
          <li>Verify that payment notifications are received</li>
        </ol>
      </Section>
    </Container>
  );
}
