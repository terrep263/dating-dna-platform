import React from 'react'
import ReactDOM from 'react-dom/client'

// Debug environment variables
console.log('ENV DEBUG:', {
  single: import.meta.env.VITE_THRIVECART_SINGLE_URL_LIVE,
  couples: import.meta.env.VITE_THRIVECART_COUPLES_URL_LIVE,
  base: import.meta.env.VITE_PUBLIC_BASE_URL
});

function App() {
  return React.createElement('div', null, 'Hello World - Environment test working!')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(App)
)
