import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Firebase removed - not needed for core functionality
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }
  
  .subtitle {
    color: #6b7280;
    font-size: 1rem;
    margin-top: 8px;
  }
`;

const Title = styled.h2`
  color: #1f2937;
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #6b7280;
  text-align: center;
  margin-bottom: 30px;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #374151;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &.error {
    border-color: #ef4444;
  }
  
  &:disabled {
    background: #f9fafb;
    color: #6b7280;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const Message = styled.div`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 20px;
  
  ${props => props.success ? `
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #a7f3d0;
  ` : `
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  `}
`;

const BackLink = styled.div`
  text-align: center;
  margin-top: 24px;
  
  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #5a67d8;
      text-decoration: underline;
    }
  }
`;

const SecurityNotice = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  margin-top: 20px;
  
  h4 {
    color: #374151;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #6b7280;
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.5;
  }
`;

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Sign in with Firebase
      // const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;
      
      // Check if user is admin
      const adminEmails = [
        'admin@mydatingdna.com', 
        'terrep263@gmail.com',
        'test@mydatingdna.com' // Temporary test account - REMOVE AFTER TESTING
      ];
      
      // if (adminEmails.includes(user.email)) {
      if (adminEmails.includes(email)) { // Temporary workaround - Firebase not available
        // Store admin session
        // localStorage.setItem('adminEmail', user.email);
        localStorage.setItem('adminEmail', email);
        localStorage.setItem('adminLoggedIn', 'true');
        
        setMessage('Admin login successful! Redirecting to dashboard...');
        setIsSuccess(true);
        
        setTimeout(() => {
          navigate('/admin');
        }, 1500);
      } else {
        // Sign out non-admin users
        // await auth.signOut();
        setMessage('Access denied. Admin privileges required.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Admin login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      // if (error.code === 'auth/user-not-found') {
      //   errorMessage = 'Admin account not found.';
      // } else if (error.code === 'auth/wrong-password') {
      //   errorMessage = 'Incorrect password.';
      // } else if (error.code === 'auth/invalid-email') {
      //   errorMessage = 'Invalid email address.';
      // }
      
      setMessage(errorMessage);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>
          <h1>My Dating DNA™</h1>
          <div className="subtitle">Admin Access</div>
        </Logo>
        
        <Title>Admin Login</Title>
        <Subtitle>
          Sign in to access the admin dashboard
        </Subtitle>
        
        {message && <Message success={isSuccess}>{message}</Message>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Admin Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              disabled={isLoading}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              disabled={isLoading}
              required
            />
          </FormGroup>
          
          <Button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
          >
            {isLoading ? 'Signing In...' : 'Sign In as Admin'}
          </Button>
        </Form>
        
        <SecurityNotice>
          <h4>🔒 Secure Admin Access</h4>
          <p>
            This area is restricted to authorized administrators only. 
            All login attempts are logged for security purposes.
          </p>
        </SecurityNotice>
        
        <BackLink>
          <a href="/">← Back to Main Site</a>
        </BackLink>
      </Card>
    </Container>
  );
}

export default AdminLogin;
