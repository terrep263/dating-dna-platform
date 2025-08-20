import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Test checkout function
const testCheckout = (type) => {
  const urls = {
    single: import.meta.env.VITE_THRIVECART_SINGLE_URL_LIVE,
    couples: import.meta.env.VITE_THRIVECART_COUPLES_URL_LIVE
  };
  
  const url = urls[type];
  console.log(`Testing ${type} checkout redirect to:`, url);
  
  if (url) {
    window.location.href = url;
  } else {
    console.error('Environment variable not loaded!');
  }
};

// Simple Home component
function HomePage() {
  return React.createElement('div', {
    style: { padding: '40px', textAlign: 'center', fontFamily: 'Arial' }
  }, [
    React.createElement('h1', { key: 'title' }, 'My Dating DNA - Checkout Test'),
    React.createElement('p', { key: 'desc' }, 'Test your checkout functionality'),
    React.createElement('div', { key: 'buttons', style: { marginTop: '30px' } }, [
      React.createElement('button', {
        key: 'singles',
        onClick: () => testCheckout('single'),
        style: {
          backgroundColor: '#007bff',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
          fontSize: '16px'
        }
      }, 'Singles Assessment - $49'),
      React.createElement('button', {
        key: 'couples',
        onClick: () => testCheckout('couples'),
        style: {
          backgroundColor: '#28a745',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
          fontSize: '16px'
        }
      }, 'Couples Assessment - $79')
    ])
  ]);
}

function App() {
  return React.createElement('div', { style: { minHeight: '100vh' } }, 
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(HomePage) })
    )
  );
}

export default App;
