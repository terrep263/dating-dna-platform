import React from 'react';

function SimpleAdminTest() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>🎯 Admin Test Page</h1>
      <p>If you can see this, the admin route is working!</p>
      <p>Current URL: {window.location.href}</p>
      <p>Time: {new Date().toLocaleString()}</p>
      
      <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
        <h3>🔧 Debug Info:</h3>
        <p>User Email: {localStorage.getItem('userEmail') || 'Not set'}</p>
        <p>Has Paid: {localStorage.getItem('hasPaid_single') || 'Not set'}</p>
        <p>React Router working: ✅</p>
      </div>
      
      <button 
        onClick={() => window.location.href = '/'}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          background: 'white',
          color: '#ff6b9d',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default SimpleAdminTest;
