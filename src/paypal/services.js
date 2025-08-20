// PayPal payment service functions
import { products } from './config';

export class PayPalService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || '';
    this.environment = process.env.REACT_APP_PAYPAL_ENVIRONMENT || 'live';
  }

  // Create PayPal order via serverless function
  async createOrder(productType, userEmail) {
    try {
      console.log('PayPalService.createOrder called with:', { productType, userEmail });
      
      const product = products[productType];
      if (!product) {
        throw new Error('Invalid product type');
      }

      // Call the serverless function to create the order
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productType,
          userEmail
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create order');
      }

      const orderData = await response.json();
      return orderData;
    } catch (error) {
      console.error('Error creating PayPal order:', error);
      throw error;
    }
  }

  // Capture PayPal payment
  async capturePayment(orderID) {
    try {
      console.log('Capturing payment for order:', orderID);
      
      // Call the serverless function to capture the payment
      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to capture payment');
      }

      const captureData = await response.json();
      
      // Store payment locally for demo purposes
      // In production, this would be handled by webhooks
      this.storePaymentLocally(captureData);

      return captureData;
    } catch (error) {
      console.error('Error capturing PayPal payment:', error);
      throw error;
    }
  }

  // Store payment locally (for demo purposes)
  storePaymentLocally(paymentData) {
    try {
      const payments = JSON.parse(localStorage.getItem('payments') || '[]');
      payments.push({
        id: paymentData.captureID,
        orderID: paymentData.orderID,
        status: paymentData.status,
        timestamp: paymentData.timestamp,
        amount: paymentData.amount,
        currency: paymentData.currency
      });
      localStorage.setItem('payments', JSON.stringify(payments));
    } catch (error) {
      console.error('Error storing payment locally:', error);
    }
  }

  // Get product price from order (helper function)
  getProductPriceFromOrder(orderID) {
    // Extract product type from order ID and return price
    if (orderID.includes('single')) return 49.00;
    if (orderID.includes('couples')) return 79.00;
    if (orderID.includes('premium')) return 19.00;
    return 0;
  }

  // Verify payment status
  async verifyPayment(paymentID) {
    try {
      // In a real app, you'd verify with PayPal's API via your backend
      // For now, we'll check local storage
      const payments = JSON.parse(localStorage.getItem('payments') || '[]');
      const payment = payments.find(p => p.id === paymentID);
      
      if (!payment) {
        throw new Error('Payment not found');
      }

      return payment;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  }

  // Get user's payment history
  getUserPayments(userEmail) {
    try {
      const payments = JSON.parse(localStorage.getItem('payments') || '[]');
      return payments.filter(p => p.userEmail === userEmail);
    } catch (error) {
      console.error('Error getting user payments:', error);
      return [];
    }
  }

  // Get all payments (for admin purposes)
  getAllPayments() {
    try {
      return JSON.parse(localStorage.getItem('payments') || '[]');
    } catch (error) {
      console.error('Error getting all payments:', error);
      return [];
    }
  }

  // Clear local payment data (for testing)
  clearLocalPayments() {
    try {
      localStorage.removeItem('payments');
      console.log('Local payment data cleared');
    } catch (error) {
      console.error('Error clearing local payments:', error);
    }
  }
}

// Export singleton instance
export const paypalService = new PayPalService();
