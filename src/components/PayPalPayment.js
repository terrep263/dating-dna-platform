import React, { useCallback, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { products } from '../paypal/config';
import { setPremiumAccess } from '../utils/auth';

const PaymentContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const PaymentHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PaymentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PaymentSubtitle = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ProductInfo = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const PayPalWrapper = styled.div`
  margin: 1rem 0;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SecurityInfo = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
`;

const PayPalPayment = ({ productType, onSuccess, userEmail }) => {
  const [searchParams] = useSearchParams();
  const [paymentStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const product = products[productType];
  
  // Define all useCallback hooks at the top level
  const createOrder = useCallback((data, actions) => {
    // MUST return a Promise<string> - the order ID string
    return actions.order.create({
      purchase_units: [
        {
          reference_id: `${productType}-${Date.now()}`,
          custom_id: userEmail || 'guest',
          description: product.description,
          soft_descriptor: 'DatingDNA',
          amount: { 
            value: product.price.toFixed(2), 
            currency_code: "USD",
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: product.price.toFixed(2)
              }
            }
          },
          items: [
            {
              name: product.name,
              description: product.description,
              sku: product.sku,
              quantity: '1',
              unit_amount: {
                currency_code: 'USD',
                value: product.price.toFixed(2)
              },
              category: 'DIGITAL_GOODS'
            }
          ]
        },
      ],
      application_context: {
        // Remove return_url to prevent PayPal from redirecting
        cancel_url: `${window.location.origin}/`,
        shipping_preference: 'NO_SHIPPING',
        user_action: 'PAY_NOW'
      }
    });
  }, [product?.name, product?.price, productType, userEmail, product?.description, product?.sku]);

  const onApprove = useCallback(async (data, actions) => {
    try {
      console.log('Payment approved, capturing order...');
      const order = await actions.order.capture();
      console.log('Payment captured successfully:', order);
      
      // Set payment status based on product type
      if (productType === 'premium') {
        // For premium upgrades, set premium access for the specific assessment type
        const assessmentType = searchParams.get('assessment') || 'single';
        setPremiumAccess(assessmentType, true);
        console.log(`Premium access granted for ${assessmentType} assessment`);
      } else {
        // For regular assessments, payment completed successfully
        console.log(`Payment completed for ${productType} assessment`);
      }
      
      // Call success callback
      if (onSuccess) {
        onSuccess(order);
      }
      
      // Determine the correct assessment route based on product type
      let assessmentRoute = '/assessment';
      if (productType === 'couples') {
        assessmentRoute = '/assessment/couples';
      } else if (productType === 'single') {
        assessmentRoute = '/assessment';
      } else if (productType === 'premium') {
        // Premium upgrades should stay on the current results page
        // since they're upgrading an existing assessment
        assessmentRoute = window.location.pathname;
      }
      
      console.log(`Redirecting to: ${assessmentRoute}`);
      
      // Method 1: Try window.location.href
      try {
        window.location.href = assessmentRoute;
      } catch (e) {
        console.log("Method 1 failed, trying Method 2...");
        // Method 2: Try window.location.replace
        try {
          window.location.replace(assessmentRoute);
        } catch (e2) {
          console.log("Method 2 failed, trying Method 3...");
          // Method 3: Try window.location.assign
          window.location.assign(assessmentRoute);
        }
      }
      
    } catch (error) {
      console.error("=== PAYMENT CAPTURE FAILED ===");
      console.error("Error details:", {
        message: error.message,
        name: error.name,
        stack: error.stack,
        orderID: data?.orderID
      });
      setErrorMessage(`Payment failed: ${error.message}. Please try again or contact support.`);
    }
  }, [onSuccess, productType, searchParams]);

  const onError = useCallback((err) => {
    console.error("PayPal error:", err);
    console.error("Error details:", {
      message: err.message,
      code: err.code,
      details: err.details
    });
    setErrorMessage(`PayPal error: ${err.message || 'Unknown error occurred'}. Please try again or contact support.`);
  }, []);

  const onCancel = useCallback(() => {
    setErrorMessage('');
    setSuccessMessage('');
  }, []);

  // Early return for invalid product type
  if (!product) {
    return (
      <PaymentContainer>
        <ErrorMessage>
          Invalid product type selected: {productType}
        </ErrorMessage>
      </PaymentContainer>
    );
  }

  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>Complete Your Purchase</PaymentTitle>
        <PaymentSubtitle>
          Secure payment powered by PayPal
        </PaymentSubtitle>
      </PaymentHeader>

      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>

      {errorMessage && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}

      {successMessage && (
        <SuccessMessage>
          {successMessage}
        </SuccessMessage>
      )}

      <PayPalWrapper>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onCancel={onCancel}
          style={{ layout: "vertical", shape: "rect", color: "blue" }}
          // Keep button mounted during payment to prevent context loss
        />
        
        {paymentStatus === 'loading' && (
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '1rem',
            borderRadius: '8px',
            zIndex: 10
          }}>
            <LoadingMessage>
              Processing payment... Please wait.
            </LoadingMessage>
          </div>
        )}
      </PayPalWrapper>

      <SecurityInfo>
        🔒 Your payment is secured by PayPal's industry-leading security
      </SecurityInfo>
    </PaymentContainer>
  );
};

export default PayPalPayment;
