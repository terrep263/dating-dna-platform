// Add this at the top of src/index.js (after any imports)
console.log('ENV DEBUG:', {
  single: import.meta.env.VITE_THRIVECART_SINGLE_URL_LIVE,
  couples: import.meta.env.VITE_THRIVECART_COUPLES_URL_LIVE,
  base: import.meta.env.VITE_PUBLIC_BASE_URL,
  mode: import.meta.env.MODE,
  prod: import.meta.env.PROD
});

// Your existing code continues below...
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 
