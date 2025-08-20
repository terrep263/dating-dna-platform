import React, { useState } from 'react';
// Firebase removed - not needed for core functionality
// import { doc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import { db } from '../firebase/config';

function WorkingWriteTest() {
  const [status, setStatus] = useState('Ready to test');
  const [results, setResults] = useState([]);

  const addResult = (test, success, message, error = null) => {
    setResults(prev => [...prev, {
      test,
      success,
      message,
      error: error ? error.toString() : null,
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  const testUsersCollection = async () => {
    setStatus('Testing users collection write...');
    setResults([]);

    try {
      // Test writing to users collection (like createUser function)
      const testUserId = `test-user-${Date.now()}`;
      const userDocRef = doc(db, 'users', testUserId);
      
      const userData = {
        email: 'test@example.com',
        createdAt: serverTimestamp(),
        testData: {
          message: 'Test user write',
          timestamp: Date.now()
        }
      };

      console.log('Writing to users collection:', userData);
      await setDoc(userDocRef, userData);
      
      addResult('Users Collection Write', true, `Successfully wrote user document with ID: ${testUserId}`);
      console.log('Users collection write successful');
    } catch (error) {
      addResult('Users Collection Write', false, 'Failed to write to users collection', error);
      console.error('Users collection write failed:', error);
    }

    setStatus('Users collection test completed');
  };

  const testPaymentsCollection = async () => {
    setStatus('Testing payments collection write...');

    try {
      // Test writing to payments collection (like recordPayment function)
      const paymentsCollectionRef = collection(db, 'payments');
      
      const paymentData = {
        amount: 29.99,
        currency: 'USD',
        productType: 'single',
        testData: {
          message: 'Test payment write',
          timestamp: Date.now()
        },
        createdAt: serverTimestamp()
      };

      console.log('Adding to payments collection:', paymentData);
      const docRef = await addDoc(paymentsCollectionRef, paymentData);
      
      addResult('Payments Collection Write', true, `Successfully added payment with ID: ${docRef.id}`);
      console.log('Payments collection write successful');
    } catch (error) {
      addResult('Payments Collection Write', false, 'Failed to add to payments collection', error);
      console.error('Payments collection write failed:', error);
    }

    setStatus('Payments collection test completed');
  };

  const testAssessmentsCollection = async () => {
    setStatus('Testing assessments collection write...');

    try {
      // Test writing to assessments collection (like saveAssessmentResults function)
      const assessmentsCollectionRef = collection(db, 'assessments');
      
      const assessmentData = {
        userId: 'test-user-123',
        assessmentType: 'single',
        results: {
          dnaType: 'Explorer',
          score: 85
        },
        testData: {
          message: 'Test assessment write',
          timestamp: Date.now()
        },
        completedAt: serverTimestamp()
      };

      console.log('Adding to assessments collection:', assessmentData);
      const docRef = await addDoc(assessmentsCollectionRef, assessmentData);
      
      addResult('Assessments Collection Write', true, `Successfully added assessment with ID: ${docRef.id}`);
      console.log('Assessments collection write successful');
    } catch (error) {
      addResult('Assessments Collection Write', false, 'Failed to add to assessments collection', error);
      console.error('Assessments collection write failed:', error);
    }

    setStatus('All tests completed');
  };

  const runAllTests = async () => {
    setStatus('Running all tests...');
    setResults([]);
    
    await testUsersCollection();
    await testPaymentsCollection();
    await testAssessmentsCollection();
  };

  const clearResults = () => {
    setResults([]);
    setStatus('Ready to test');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Working Collections Write Test</h2>
      
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <strong>Status:</strong> {status}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={runAllTests} 
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            marginRight: '1rem'
          }}
        >
          Test Working Collections
        </button>
        <button 
          onClick={clearResults} 
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#6b7280', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px'
          }}
        >
          Clear Results
        </button>
      </div>

      {results.length > 0 && (
        <div>
          <h3>Test Results:</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {results.map((result, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '1rem', 
                  marginBottom: '0.5rem',
                  backgroundColor: result.success ? '#d1fae5' : '#fee2e2',
                  border: `1px solid ${result.success ? '#a7f3d0' : '#fecaca'}`,
                  borderRadius: '4px'
                }}
              >
                <div style={{ fontWeight: 'bold', color: result.success ? '#065f46' : '#dc2626' }}>
                  {result.success ? '✅' : '❌'} {result.test}
                </div>
                <div style={{ marginTop: '0.5rem' }}>{result.message}</div>
                {result.error && (
                  <details style={{ marginTop: '0.5rem' }}>
                    <summary>Error Details</summary>
                    <pre style={{ 
                      backgroundColor: '#f3f4f6', 
                      padding: '0.5rem', 
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      overflow: 'auto'
                    }}>
                      {result.error}
                    </pre>
                  </details>
                )}
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
                  {result.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '4px' }}>
        <h3>What This Test Does:</h3>
        <p>This test uses the same collections and patterns as your working Firebase services:</p>
        <ul>
          <li><strong>users</strong> collection (like createUser function)</li>
          <li><strong>payments</strong> collection (like recordPayment function)</li>
          <li><strong>assessments</strong> collection (like saveAssessmentResults function)</li>
        </ul>
        <p>If these work, then the issue is with the test collections, not your Firebase setup.</p>
      </div>
    </div>
  );
}

export default WorkingWriteTest;
