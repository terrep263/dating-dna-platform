import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

const RedirectMessage = styled.div`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: 2rem;
  border-radius: 20px;
  max-width: 500px;
  margin-bottom: 1rem;
`;

const RedirectButton = styled(motion.a)`
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  margin-top: 1rem;
  display: inline-block;
  
  &:hover {
    background: #2563eb;
  }
`;

function AdminRedirect() {
  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://affiliate.mydatingdna.com/accessatlv';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RedirectContainer>
      <RedirectMessage>
        <h2>🔄 Redirecting to Admin Portal</h2>
        <p>You're being redirected to the unified admin dashboard at the affiliate site.</p>
        <p>This keeps the main site fast and focused on our core features.</p>
      </RedirectMessage>
      
      <RedirectButton
        href="https://affiliate.mydatingdna.com/accessatlv"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go to Admin Portal Now
      </RedirectButton>
      
      <p style={{ marginTop: '1rem', color: '#666' }}>
        Redirecting automatically in 3 seconds...
      </p>
    </RedirectContainer>
  );
}

export default AdminRedirect;
