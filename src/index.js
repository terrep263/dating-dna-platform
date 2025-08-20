import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

console.log('ENV DEBUG:', {
  single: process.env.REACT_APP_THRIVECART_SINGLE_URL_LIVE,
  couples: process.env.REACT_APP_THRIVECART_COUPLES_URL_LIVE,
  base: process.env.REACT_APP_PUBLIC_BASE_URL,
  mode: process.env.NODE_ENV,
  prod: process.env.NODE_ENV === 'production'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
      React.createElement(App)
    )
  )
);
