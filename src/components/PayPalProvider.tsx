import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

// HOIST a stable options object (don't create inline)
const PAYPAL_OPTIONS = {
  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID!, // set in .env for React
  currency: "USD" as const,
  intent: "capture" as const,
  components: "buttons" as const,
  environment: (process.env.REACT_APP_PAYPAL_ENVIRONMENT === 'live' ? 'production' : 'sandbox') as 'sandbox' | 'production',
};

export default function PayPalProvider({ children }: { children: React.ReactNode }) {
  if (!PAYPAL_OPTIONS.clientId) {
    throw new Error("Missing REACT_APP_PAYPAL_CLIENT_ID - check your .env file");
  }
  return <PayPalScriptProvider options={PAYPAL_OPTIONS}>{children}</PayPalScriptProvider>;
}
