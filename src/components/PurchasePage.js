import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media, spacing, fontSizes } from '../utils/responsive';
import PayPalPayment from './PayPalPayment';

const PurchaseContainer = styled.div`
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

const PurchaseCard = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
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
  max-width: 600px;
  margin: 0 auto;
  
  ${media.maxMd} {
    font-size: ${fontSizes.md};
  }
`;

const Content = styled.div`
  padding: ${spacing.xxl} ${spacing.xl};
  
  ${media.maxMd} {
    padding: ${spacing.xl} ${spacing.md};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.xl};
  margin-bottom: ${spacing.xxl};

  ${media.md} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: ${spacing.xl};
  }
  
  ${media.lg} {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  padding: ${spacing.xxl};
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
  
  ${media.maxMd} {
    padding: ${spacing.xl};
  }
`;

const FeaturedProductCard = styled(ProductCard)`
  border: 2px solid #8b5cf6;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
`;

const PriceDescription = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
`;

const FeatureItem = styled.li`
  padding: 0.75rem 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &::before {
    content: '✓';
    color: #8b5cf6;
    font-weight: bold;
    font-size: 1.2rem;
    min-width: 20px;
  }
`;

const PurchaseButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
  }
`;

const UpgradeNote = styled.p`
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
`;

const TrustSection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 15px;
`;

const TrustTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const TrustItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const TrustIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const TrustText = styled.p`
  color: #666;
  font-size: 0.9rem;
  text-align: center;
`;

const PaymentPolicy = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  margin-top: 2rem;
`;

const GuaranteeTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const GuaranteeText = styled.p`
  opacity: 0.9;
  font-size: 0.9rem;
`;

// const ErrorMessage = styled(motion.div)`
//   background: #fee2e2;
//   border: 1px solid #fecaca;
//   color: #dc2626;
//   padding: 1rem;
//   border-radius: 8px;
//   margin-bottom: 1rem;
//   text-align: center;
//   font-weight: 500;
// `;

const UpgradeCard = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
  margin-bottom: 2rem;
`;

const UpgradeIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const UpgradeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const UpgradeDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const UpgradePrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const UpgradeButton = styled(motion.button)`
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

function PurchasePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Get user email from localStorage if available and check URL params
  React.useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
    
    // Check if product is specified in URL
    const urlParams = new URLSearchParams(window.location.search);
    const productFromUrl = urlParams.get('product');
    if (productFromUrl && ['single', 'couples', 'premium'].includes(productFromUrl)) {
      setSelectedProduct(productFromUrl);
      setShowPayment(true);
    }
  }, []);

  const handlePurchase = (productType) => {
    setSelectedProduct(productType);
    setShowPayment(true);
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful:', paymentData);
    // Payment success is handled by the PayPal component
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    setShowPayment(false);
    setSelectedProduct(null);
  };

  const handleBackToProducts = () => {
    setShowPayment(false);
    setSelectedProduct(null);
  };

    // Show PayPal payment form if product is selected
  if (showPayment && selectedProduct) {
    return (
      <PurchaseContainer>
        <PayPalPayment
          productType={selectedProduct}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
          userEmail={userEmail}
        />
        <motion.button
          onClick={handleBackToProducts}
          style={{
            background: 'transparent',
            border: '2px solid #8b5cf6',
            color: '#8b5cf6',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            cursor: 'pointer',
            marginTop: '1rem',
            width: '100%',
            maxWidth: '500px',
            margin: '1rem auto',
            display: 'block'
          }}
        >
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
            ← Back to Products
          </motion.span>
        </motion.button>
      </PurchaseContainer>
    );
  }

  return (
    <PurchaseContainer>
      <PurchaseCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <Title>Choose Your Dating DNA Experience</Title>
          <Subtitle>
            Discover your unique dating personality and unlock insights that will transform your relationships
          </Subtitle>
        </Header>

        <Content>
          <ProductsGrid>
            <ProductCard
              transition={{ duration: 0.3 }}
            >
              <ProductTitle>Individual Assessment</ProductTitle>
              <Price>$49</Price>
              <PriceDescription>One-time payment</PriceDescription>
              
              <FeaturesList>
                <FeatureItem>32 personalized questions</FeatureItem>
                <FeatureItem>Complete personality profile</FeatureItem>
                <FeatureItem>Compatibility insights</FeatureItem>
                <FeatureItem>Basic report included</FeatureItem>
                <FeatureItem>Premium upgrade available</FeatureItem>
                <FeatureItem>Lifetime access to results</FeatureItem>
              </FeaturesList>

              <PurchaseButton
                onClick={() => handlePurchase('single')}
              >
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
                  Buy Individual Assessment
                </motion.span>
              </PurchaseButton>
              
              <UpgradeNote>
                * Premium detailed report available after purchase
              </UpgradeNote>
            </ProductCard>

            <FeaturedProductCard
              transition={{ duration: 0.3 }}
            >
              <FeaturedBadge>Most Popular</FeaturedBadge>
              <ProductTitle>Couples Compatibility</ProductTitle>
              <Price>$79</Price>
              <PriceDescription>Save $19 • One-time payment</PriceDescription>
              
              <FeaturesList>
                <FeatureItem>Two complete assessments</FeatureItem>
                <FeatureItem>Relationship compatibility analysis</FeatureItem>
                <FeatureItem>Individual + couples reports</FeatureItem>
                <FeatureItem>Communication insights</FeatureItem>
                <FeatureItem>Basic reports included</FeatureItem>
                <FeatureItem>Premium upgrades available</FeatureItem>
              </FeaturesList>

              <PurchaseButton
                onClick={() => handlePurchase('couples')}
              >
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
                  Buy Couples Assessment
                </motion.span>
              </PurchaseButton>
              
              <UpgradeNote>
                * Premium detailed reports available after purchase
              </UpgradeNote>
            </FeaturedProductCard>
          </ProductsGrid>

          {/* Premium Upgrade Section */}
          <UpgradeCard
            transition={{ duration: 0.3 }}
          >
            <UpgradeIcon>⭐</UpgradeIcon>
            <UpgradeTitle>Premium Report Upgrade</UpgradeTitle>
            <UpgradeDescription>
              Upgrade your assessment results with a complete 16-page personality analysis, detailed insights, and personalized strategies.
            </UpgradeDescription>
            <UpgradePrice>$19</UpgradePrice>
            <UpgradeButton
              onClick={() => handlePurchase('premium')}
            >
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
                Upgrade Now
              </motion.span>
            </UpgradeButton>
            <UpgradeNote>
              * Available after completing any assessment
            </UpgradeNote>
          </UpgradeCard>

          <TrustSection>
            <TrustTitle>Trusted by 50,000+ Users</TrustTitle>
            <TrustGrid>
              <TrustItem>
                <TrustIcon>🔒</TrustIcon>
                <TrustText>PayPal Secure</TrustText>
              </TrustItem>
              <TrustItem>
                <TrustIcon>⚡</TrustIcon>
                <TrustText>Instant Results</TrustText>
              </TrustItem>
              <TrustItem>
                <TrustIcon>📊</TrustIcon>
                <TrustText>Science-Based</TrustText>
              </TrustItem>
              <TrustItem>
                <TrustIcon>💝</TrustIcon>
                <TrustText>Instant Access</TrustText>
              </TrustItem>
            </TrustGrid>

            <PaymentPolicy>
              <GuaranteeTitle>PayPal Buyer Protection</GuaranteeTitle>
              <GuaranteeText>
                Your payment is protected by PayPal's buyer protection program. All payments are secure and encrypted.
              </GuaranteeText>
            </PaymentPolicy>
          </TrustSection>
        </Content>
      </PurchaseCard>
    </PurchaseContainer>
  );
}

export default PurchasePage; 