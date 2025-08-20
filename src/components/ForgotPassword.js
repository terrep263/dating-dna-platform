import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmailToUser } from '../firebase/services';
import { media, spacing, fontSizes } from '../utils/responsive';

const ForgotPasswordContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xl};
  
  ${media.maxMd} {
    padding: ${spacing.md};
  }
`;

const ForgotPasswordCard = styled(motion.div)`
  background: white;
  padding: ${spacing.xxxl};
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
  
  ${media.maxMd} {
    padding: ${spacing.xl};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.xl};

  .logo-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .logo-text {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Title = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 700;
  margin-bottom: ${spacing.md};
  color: #333;
  
  ${media.maxMd} {
    font-size: ${fontSizes.xxl};
  }
`;

const Subtitle = styled.p`
  font-size: ${fontSizes.lg};
  color: #666;
  margin-bottom: ${spacing.xl};
  line-height: 1.6;
  
  ${media.maxMd} {
    font-size: ${fontSizes.md};
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: ${spacing.lg};
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: ${spacing.sm};
  font-size: ${fontSizes.md};
`;

const Input = styled.input`
  width: 100%;
  padding: ${spacing.lg};
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: ${fontSizes.md};
  transition: all 0.3s ease;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #ff6b9d;
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.15);
  }

  &.error {
    border-color: #dc3545;
    background: #fff5f5;
  }

  &::placeholder {
    color: #999;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: ${spacing.sm};
  text-align: left;
`;

const SuccessMessage = styled.div`
  color: #28a745;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  padding: ${spacing.md};
  border-radius: 8px;
  margin-bottom: ${spacing.lg};
  font-size: ${fontSizes.md};
`;

const SendButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: ${spacing.lg} ${spacing.xl};
  font-size: ${fontSizes.md};
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: ${spacing.lg};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const BackToLogin = styled.div`
  text-align: center;
  margin-top: ${spacing.lg};
  
  a {
    color: #ff6b9d;
    text-decoration: none;
    font-weight: 600;
    font-size: ${fontSizes.md};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const InfoBox = styled.div`
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 8px;
  padding: ${spacing.lg};
  margin-top: ${spacing.lg};
  text-align: left;
  
  h4 {
    margin: 0 0 ${spacing.sm} 0;
    color: #1976d2;
    font-size: ${fontSizes.md};
  }
  
  p {
    margin: 0;
    color: #424242;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendPasswordResetEmailToUser(email);
      
      if (result.success) {
        setSuccess(`Password reset email sent to ${email}. Please check your inbox and follow the instructions to reset your password.`);
        setEmail('');
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Password reset error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo>
          <div className="logo-icon">DNA</div>
          <div className="logo-text">Dating DNA</div>
        </Logo>

        <Title>Reset Your Password</Title>
        <Subtitle>
          Enter your email address and we'll send you a link to reset your password.
        </Subtitle>

        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={error ? 'error' : ''}
              placeholder="Enter your email address"
              disabled={isLoading}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FormGroup>

          <SendButton
            type="submit"
            disabled={isLoading || success}
            whileHover={{ scale: success ? 1 : 1.02 }}
            whileTap={{ scale: success ? 1 : 0.98 }}
          >
            {isLoading ? 'Sending Reset Email...' : success ? 'Email Sent!' : 'Send Reset Email'}
          </SendButton>
        </Form>

        <BackToLogin>
          <Link to="/login">← Back to Login</Link>
        </BackToLogin>

        <InfoBox>
          <h4>📧 What happens next?</h4>
          <p>
            1. Check your email inbox (and spam folder)<br/>
            2. Click the reset link in the email<br/>
            3. Enter your new password<br/>
            4. Log in with your new credentials
          </p>
        </InfoBox>
      </ForgotPasswordCard>
    </ForgotPasswordContainer>
  );
}

export default ForgotPassword;
