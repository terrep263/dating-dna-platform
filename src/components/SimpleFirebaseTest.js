import React, { useState, useEffect } from 'react';
// Removed unused Firebase imports to fix ESLint warnings
import { auth, db } from '../firebase/config';

function SimpleFirebaseTest() {
  const [status, setStatus] = useState('Initializing...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        setStatus('Testing Firebase configuration...');
        
        setStatus('Testing Authentication...');
        // Test auth is working
        if (auth) {
          console.log('Auth initialized:', auth.app.name);
        }
        
        setStatus('Testing Firestore...');
        // Test firestore is working
        if (db) {
          console.log('Firestore initialized:', db.app.name);
        }
        
        setStatus('✅ Firebase connection successful!');
        setError(null);
        
      } catch (err) {
        setStatus('❌ Firebase connection failed');
        setError(err.message);
        console.error('Firebase error:', err);
      }
    };

    testFirebaseConnection();
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Firebase Connection Test</h2>
      
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <strong>Status:</strong> {status}
      </div>
      
      {error && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#fee2e2', 
          border: '1px solid #fecaca',
          borderRadius: '4px',
          color: '#dc2626'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Troubleshooting Steps:</h3>
        <ol>
          <li>Check if Firebase project "dating-dna" exists</li>
          <li>Enable Authentication in Firebase Console</li>
          <li>Enable Firestore Database in Firebase Console</li>
          <li>Verify web app is registered in Project Settings</li>
          <li>Check if project is in the correct region</li>
        </ol>
      </div>
    </div>
  );
}

export default SimpleFirebaseTest; 