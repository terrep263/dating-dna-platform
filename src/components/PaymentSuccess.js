import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Firebase services removed - not needed for PayPal flow
// import { createUser, updateUserPaymentStatus } from '../firebase/services';

const SuccessContainer = styled.div`
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

const SuccessCard = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const Content = styled.div`
  padding: 3rem 2rem;
`;

const ReceiptSection = styled.div`
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ReceiptTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ReceiptDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ReceiptItem = styled.div`
  text-align: center;
`;

const ReceiptLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const ReceiptValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const FormSubtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
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
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &.error {
    border-color: #e74c3c;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const ContinueButton = styled(motion.button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
  color: white;
  border: none;
  padding: 1.5rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #10b981;
`;

function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  // Get payment data from navigation state
  const paymentData = location.state || {
    productType: 'single',
    email: 'customer@example.com',
    amount: 49
  };

  useEffect(() => {
    // If no payment data, redirect to home
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsCreatingAccount(true);
    
    try {
      // Firebase functions temporarily disabled - not needed for PayPal flow
      /*
      // Create user account with Firebase
      const user = await createUser(paymentData.email, formData.password, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        productType: paymentData.productType,
        purchaseAmount: paymentData.amount,
        hasAccess: true
      });
      
      // Update payment status
      await updateUserPaymentStatus(user.uid, paymentData.productType);
      */
      
      console.log('Payment success - Firebase functions disabled for PayPal testing');
      
      // Store minimal data in localStorage for session management
      localStorage.setItem('userEmail', paymentData.email);
      localStorage.setItem(`hasPaid_${paymentData.productType}`, 'true');
      
      setIsCreatingAccount(false);
      
            // Redirect to appropriate assessment
      if (paymentData.productType === 'couples') {
        navigate('/assessment/couples');
      } else {
        navigate('/assessment');
      }
    } catch (error) {
      setIsCreatingAccount(false);
      console.error('Error creating account:', error);
      setErrors({ general: 'Failed to create account. Please try again.' });
    }
  };

  if (!location.state) {
    return (
      <SuccessContainer>
        <LoadingSpinner>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{ marginRight: '1rem' }}
          >
            ⚡
          </motion.div>
          Loading...
        </LoadingSpinner>
      </SuccessContainer>
    );
  }

  return (
    <SuccessContainer>
      <SuccessCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <SuccessIcon>✅</SuccessIcon>
          <Title>Payment Successful!</Title>
          <Subtitle>
            Your Dating DNA assessment is ready. Let's create your account to get started.
          </Subtitle>
        </Header>

        <Content>
          <ReceiptSection>
            <ReceiptTitle>Purchase Summary</ReceiptTitle>
            <ReceiptDetails>
              <ReceiptItem>
                <ReceiptLabel>Product</ReceiptLabel>
                <ReceiptValue>
                  {paymentData.productType === 'single' ? 'Individual Assessment' : 'Couples Assessment'}
                </ReceiptValue>
              </ReceiptItem>
              <ReceiptItem>
                <ReceiptLabel>Amount</ReceiptLabel>
                <ReceiptValue>${paymentData.amount}</ReceiptValue>
              </ReceiptItem>
              <ReceiptItem>
                <ReceiptLabel>Email</ReceiptLabel>
                <ReceiptValue>{paymentData.email}</ReceiptValue>
              </ReceiptItem>
              <ReceiptItem>
                <ReceiptLabel>Status</ReceiptLabel>
                <ReceiptValue>Paid</ReceiptValue>
              </ReceiptItem>
            </ReceiptDetails>
          </ReceiptSection>

          <Form onSubmit={handleSubmit}>
            <FormTitle>Create Your Account</FormTitle>
            <FormSubtitle>
              Complete your profile to access your Dating DNA assessment
            </FormSubtitle>

            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'error' : ''}
                  placeholder="Enter first name"
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'error' : ''}
                  placeholder="Enter last name"
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={paymentData.email}
                disabled
                className="disabled"
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="Create password"
                />
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error' : ''}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
              </FormGroup>
            </FormRow>

            <ContinueButton
              type="submit"
              disabled={isCreatingAccount}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isCreatingAccount ? 'Creating Account...' : 'Continue to Assessment'}
            </ContinueButton>
          </Form>
        </Content>
      </SuccessCard>
    </SuccessContainer>
  );
}

export default PaymentSuccess; 