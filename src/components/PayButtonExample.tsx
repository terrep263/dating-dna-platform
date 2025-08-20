import React from 'react';
import PayButton from './PayButton';

export default function PayButtonExample() {
  const product = { id: 'single', name: 'Singles Assessment', price: '49.00' };
  
  return (
    <div className="container">
      <h1>Purchase</h1>
      <PayButton product={product} />
    </div>
  );
}
