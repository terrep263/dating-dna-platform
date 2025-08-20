import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCallback } from "react";

type Product = { id: string; name: string; price: string };

export default function PayButton({ product }: { product: Product }) {
  const createOrder = useCallback((data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          description: product.name,
          amount: { currency_code: 'USD', value: product.price },
        },
      ],
      application_context: { shipping_preference: 'NO_SHIPPING' },
    });
  }, [product.name, product.price]);

  const onApprove = useCallback(async (data: any, actions: any) => {
    const capture = await actions.order.capture();
    console.log('CAPTURE', capture);
    sessionStorage.setItem('mdna_paid', 'true');
    window.location.href = '/assessment';
  }, []);

  const onError = useCallback((err: any) => {
    console.error('PayPal error', err);
    alert('Payment failed. Please try again.');
  }, []);

  return (
    <PayPalButtons
      style={{ layout: 'vertical', shape: 'rect' }}
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
      forceReRender={[product.id, product.price]}
    />
  );
}
