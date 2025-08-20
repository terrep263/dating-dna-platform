import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { media, spacing, fontSizes } from '../utils/responsive';
import PayPalPayment from './PayPalPayment';

const CheckoutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing.xl};
  
  ${media.maxMd} {
    width: 95%;
    padding: ${spacing.md};
  }
`;

const CheckoutCard = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: ${spacing.xxl} ${spacing.xl};
  text-align: center;
  
  ${media.maxMd} {
    padding: ${spacing.xl} ${spacing.md};
  }
`;

const Title = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 700;
  margin-bottom: ${spacing.md};

  ${media.maxMd} {
    font-size: ${fontSizes.xxl};
  }
`;

const Subtitle = styled.p`
  font-size: ${fontSizes.lg};
  opacity: 0.9;
  line-height: 1.6;
  
  ${media.maxMd} {
    font-size: ${fontSizes.md};
  }
`;

const ProductSummary = styled.div`
  padding: ${spacing.xl};
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 16px;
  margin: ${spacing.xl};
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 600;
  color: #333;
  margin-bottom: ${spacing.sm};
`;

const ProductPrice = styled.div`
  font-size: ${fontSizes.xxl};
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: ${spacing.sm};
`;

const ProductDescription = styled.p`
  font-size: ${fontSizes.md};
  color: #666;
  line-height: 1.6;
`;

const BackButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #8b5cf6;
  color: #8b5cf6;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  margin: ${spacing.xl} auto;
  width: 100%;
  max-width: 500px;
  display: block;
  font-size: ${fontSizes.md};
  font-weight: 500;
  
  &:hover {
    background: #8b5cf6;
    color: white;
  }
`;

const DirectCheckout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [userEmail] = useState('');
  
  // Get product type from URL params
  const productType = searchParams.get('type') || 'single';
  const assessmentCode = searchParams.get('assessment') || '';
  
  // Product information based on type
  const getProductInfo = (type) => {
    switch (type) {
      case 'couples':
        return {
          name: 'Couples Compatibility Assessment',
          price: 79,
          description: 'Dual assessment with relationship compatibility analysis, communication insights, and personalized strategies for both partners.'
        };
      case 'premium':
        return {
          name: 'Premium Report Upgrade',
          price: 19,
          description: `16-page detailed personality analysis for your ${assessmentCode} assessment results, with comprehensive insights, personalized strategies, and actionable recommendations.`
        };
      case 'single':
      default:
        return {
          name: 'Individual Dating DNA Assessment',
          price: 49,
          description: 'Complete 32-question assessment with personality profile, compatibility insights, and basic report included.'
        };
    }
  };
  
  const product = getProductInfo(productType);
  
  const handleBackToHome = () => {
    navigate('/');
  };
  
  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful:', paymentData);
    // The PayPalPayment component will handle the redirect
  };
  
  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
  };

  return (
    <CheckoutContainer>
      <CheckoutCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <Title>Complete Your Purchase</Title>
          <Subtitle>
            Secure payment powered by PayPal
          </Subtitle>
        </Header>
        
        <ProductSummary>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductSummary>
        
        <PayPalPayment
          productType={productType}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
          userEmail={userEmail}
        />
        
        <BackButton
          onClick={handleBackToHome}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back to Home
        </BackButton>
      </CheckoutCard>
    </CheckoutContainer>
  );
};

export default DirectCheckout;
