import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, signInUser } from '../firebase/services';

function FirebaseTest() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [message, setMessage] = useState('');

  const testCreateUser = async () => {
    try {
      setMessage('Creating user...');
      console.log('Starting user creation for:', email);
      
      const user = await createUser(email, password, {
        firstName: 'Test',
        lastName: 'User',
        productType: 'single'
      });
      
      console.log('User created successfully:', user);
      setMessage(`✅ User created successfully! UID: ${user.uid}`);
      
      // Store user data in localStorage for session management
      localStorage.setItem('userEmail', email);
      localStorage.setItem('hasPaid_single', 'true');
      
      // Redirect to assessment after 2 seconds
      setTimeout(() => {
        navigate('/assessment');
      }, 2000);
    } catch (error) {
      console.error('User creation error:', error);
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const testSignIn = async () => {
    try {
      setMessage('Signing in...');
      const user = await signInUser(email, password);
      setMessage(`✅ Signed in successfully! Email: ${user.email}`);
      
      // Store user data in localStorage for session management
      localStorage.setItem('userEmail', email);
      localStorage.setItem('hasPaid_single', 'true');
      
      // Redirect to assessment after 2 seconds
      setTimeout(() => {
        navigate('/assessment');
      }, 2000);
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Firebase Connection Test</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={testCreateUser} style={{ padding: '0.5rem 1rem' }}>
          Test Create User
        </button>
        <button onClick={testSignIn} style={{ padding: '0.5rem 1rem' }}>
          Test Sign In
        </button>
        <button onClick={() => navigate('/assessment')} style={{ padding: '0.5rem 1rem', backgroundColor: '#10b981', color: 'white' }}>
          Go to Assessment
        </button>
      </div>
      
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        minHeight: '50px'
      }}>
        {message || 'Click a button to test Firebase connection...'}
      </div>
    </div>
  );
}

export default FirebaseTest; 