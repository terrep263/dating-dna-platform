import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const Container = styled.div`
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
  margin-bottom: 1rem;
`;

const CodeBox = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  font-family: monospace;
  word-break: break-all;
  margin: 1rem 0;
`;

function ResetPasswordTest() {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');
  const mode = searchParams.get('mode');

  return (
    <Container>
      <Title>🧪 Reset Password Test Page</Title>
      <Status>✅ This page is loading correctly!</Status>
      
      <h3>URL Parameters:</h3>
      <CodeBox>
        <strong>oobCode:</strong> {oobCode || 'Not found'}
      </CodeBox>
      <CodeBox>
        <strong>mode:</strong> {mode || 'Not found'}
      </CodeBox>
      
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        If you can see this, the routing is working and we can debug the reset password functionality.
      </p>
    </Container>
  );
}

export default ResetPasswordTest;
