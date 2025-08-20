import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const Status = styled.div`
  background: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
`;

function SimpleTestPage() {
  return (
    <TestContainer>
      <Title>🧪 Simple Test Page</Title>
      <Status>✅ This page is working! Routing is functional.</Status>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        If you can see this, the routing system is working properly.
      </p>
    </TestContainer>
  );
}

export default SimpleTestPage;
