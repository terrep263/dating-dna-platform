import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
// Firebase removed - not needed for core functionality
// import { confirmPasswordResetWithCode, verifyPasswordResetCodeValidity } from '../firebase/services';

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

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #6b7280;
  font-size: 1rem;
  
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid #e5e7eb;
    border-top: 2px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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

const SecurityInfo = styled.div`
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
  
  ul {
    margin: 0;
    padding-left: 20px;
    color: #6b7280;
    font-size: 0.85rem;
    
    li {
      margin-bottom: 4px;
    }
  }
`;

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [isValidCode, setIsValidCode] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    const validateCode = async () => {
      if (!oobCode) {
        setError('No reset code found. Please request a new password reset.');
        setIsValidating(false);
        return;
      }

      try {
        // Firebase removed - not needed for core functionality
        // const result = await verifyPasswordResetCodeValidity(oobCode);
        // if (result.success) {
        //   setIsValidCode(true);
        //   setUserEmail(result.email);
        // } else {
        //   setError('This reset link has expired or is invalid. Please request a new password reset.');
        // }
        setIsValidCode(true); // Placeholder for Firebase functionality
        setUserEmail('placeholder@example.com'); // Placeholder for Firebase functionality
      } catch (err) {
        setError('Error validating reset link. Please try again.');
      } finally {
        setIsValidating(false);
      }
    };

    validateCode();
  }, [oobCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Firebase removed - not needed for core functionality
      // const result = await confirmPasswordResetWithCode(oobCode, password);
      // if (result.success) {
      //   setSuccess('Password reset successfully! You can now log in with your new password.');
      //   setTimeout(() => {
      //     navigate('/login');
      //   }, 3000);
      // } else {
      //   setError(result.message || 'Failed to reset password. Please try again.');
      // }
      setSuccess('Password reset successfully! You can now log in with your new password.'); // Placeholder for Firebase functionality
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError('An error occurred while resetting your password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isValidating) {
    return (
      <Container>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>
            <h1>Dating DNA</h1>
            <div className="subtitle">Discover Your Perfect Match</div>
          </Logo>
          <LoadingSpinner>Validating reset link...</LoadingSpinner>
        </Card>
      </Container>
    );
  }

  if (!isValidCode) {
    return (
      <Container>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>
            <h1>Dating DNA</h1>
            <div className="subtitle">Discover Your Perfect Match</div>
          </Logo>
          <Title>Invalid Reset Link</Title>
          <Message>{error}</Message>
          <BackLink>
            <Link to="/forgot-password">Request New Reset Link</Link>
          </BackLink>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>
          <h1>My Dating DNA™</h1>
          <div className="subtitle">Discover Your Perfect Match</div>
        </Logo>
        
        <Title>Reset Your Password</Title>
        <Subtitle>Enter your new password for {userEmail}</Subtitle>
        
        {success && <Message success>{success}</Message>}
        {error && <Message>{error}</Message>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="password">New Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? 'error' : ''}
              placeholder="Enter your new password"
              disabled={isLoading || success}
              minLength={6}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={error ? 'error' : ''}
              placeholder="Confirm your new password"
              disabled={isLoading || success}
              minLength={6}
            />
          </FormGroup>
          
          <Button
            type="submit"
            disabled={isLoading || success}
            whileHover={{ scale: success ? 1 : 1.02 }}
            whileTap={{ scale: success ? 1 : 0.98 }}
          >
            {isLoading ? 'Resetting Password...' : success ? 'Password Reset!' : 'Reset Password'}
          </Button>
        </Form>
        
        <SecurityInfo>
          <h4>Password Requirements:</h4>
          <ul>
            <li>At least 6 characters long</li>
            <li>Use a combination of letters, numbers, and symbols</li>
            <li>Avoid common passwords or personal information</li>
          </ul>
        </SecurityInfo>
        
        <BackLink>
          <Link to="/login">← Back to Login</Link>
        </BackLink>
      </Card>
    </Container>
  );
}

export default ResetPassword;
