import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { setUserLoggedIn } from '../utils/auth';

const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoginCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  max-width: 400px;
  width: 100%;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  .logo-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .logo-text {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &.error {
    border-color: #e74c3c;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const LoginButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  color: #666;
  font-size: 0.9rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e0e0e0;
  }

  span {
    padding: 0 1rem;
  }
`;

const SocialButton = styled(motion.button)`
  background: white;
  border: 2px solid #e0e0e0;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #666;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ForgotPassword = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #667eea;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Set user as logged in
      setUserLoggedIn(formData.email);
      // Navigate to payment page since they need to pay for assessment
      navigate('/payment');
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    // Simulate social login
    console.log(`Logging in with ${provider}`);
    setUserLoggedIn('social-user@example.com');
    navigate('/payment');
  };

  return (
    <LoginContainer>
      <LoginCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>
          <div className="logo-icon">DNA</div>
                      <div className="logo-text">My Dating DNA™</div>
        </Logo>

        <Title>Welcome Back</Title>
        <Subtitle>Sign in to access your Dating DNA profile</Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>

          <LoginButton
            type="submit"
            disabled={isLoading}
          >
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block" }}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </motion.span>
          </LoginButton>
        </Form>

        <ForgotPassword>
          <Link to="/forgot-password">Forgot your password?</Link>
        </ForgotPassword>

        <Divider>
          <span>or continue with</span>
        </Divider>

        <SocialButton
          type="button"
          onClick={() => handleSocialLogin('Google')}
        >
          <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block" }}>
            <span>🔍</span>
            Continue with Google
          </motion.span>
        </SocialButton>

        <SignupLink>
          Don't have an account? <Link to="/register">Sign up</Link>
        </SignupLink>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login; 