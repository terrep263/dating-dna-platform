// PayPal Configuration
// Set these environment variables in your .env file:
// REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
// REACT_APP_PAYPAL_ENVIRONMENT=live (or sandbox for development)

export const paypalConfig = {
  // PayPal Client ID - Get this from your PayPal Developer Dashboard
  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || '',
  
  // Environment: 'live' for production, 'sandbox' for development
  environment: process.env.REACT_APP_PAYPAL_ENVIRONMENT || 'live',
  
  // Currency and locale settings
  currency: 'USD',
  locale: 'en_US',
  
  // Additional PayPal options
  intent: 'CAPTURE',
  components: ['buttons', 'marks', 'messages']
};

// PayPal webhook endpoints
export const paypalWebhookUrls = {
  sandbox: 'https://www.sandbox.paypal.com/webhook',
  live: 'https://www.paypal.com/webhook'
};

// Product configurations
export const products = {
  single: {
    id: 'single-assessment',
    name: 'Individual Dating DNA Assessment',
    price: 49.00,
    description: 'Complete 32-question assessment with personality profile',
    sku: 'DNA-SINGLE-001'
  },
  couples: {
    id: 'couples-assessment',
    name: 'Couples Compatibility Assessment',
    price: 79.00,
    description: 'Dual assessment with relationship compatibility analysis',
    sku: 'DNA-COUPLES-001'
  },
  premium: {
    id: 'premium-upgrade',
    name: 'Premium Report Upgrade',
    price: 19.00,
    description: '16-page detailed personality analysis and strategies',
    sku: 'DNA-PREMIUM-001'
  },
  test: {
    id: 'test-transaction',
    name: 'Test Transaction',
    price: 1.00,
    description: 'Test transaction for PayPal integration testing',
    sku: 'TEST-001'
  }
};

// PayPal API endpoints
export const paypalApiEndpoints = {
  sandbox: {
    base: 'https://api-m.sandbox.paypal.com',
    orders: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
    captures: 'https://api-m.sandbox.paypal.com/v2/payments/captures'
  },
  live: {
    base: 'https://api-m.paypal.com',
    orders: 'https://api-m.paypal.com/v2/checkout/orders',
    captures: 'https://api-m.paypal.com/v2/payments/captures'
  }
};
