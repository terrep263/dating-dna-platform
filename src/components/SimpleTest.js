import React, { useState } from 'react';
// Firebase removed - not needed for core functionality
// import { auth, db } from '../firebase/config';

function SimpleTest() {
  const [status, setStatus] = useState('Ready to test');
  const [email, setEmail] = useState(`test${Date.now()}@example.com`);
  const [password, setPassword] = useState('password123');

  const testFirebase = async () => {
    try {
      setStatus('Testing Firebase connection...');
      
      // Test 1: Check if Firebase is initialized
      // if (!auth || !db) {
      //   setStatus('❌ Firebase not initialized');
      //   return;
      // }
      
      setStatus('❌ Firebase not available - using Supabase instead');
      return;
      
      // setStatus('✅ Firebase initialized successfully');
      
      // Test 2: Try to create a user
      // setStatus('Creating test user...');
      // console.log('Starting user creation for:', email);
      
      // const { createUserWithEmailAndPassword } = await import('firebase/auth');
      // const { setDoc, doc, serverTimestamp } = await import('firebase/firestore');
      
      // console.log('About to call createUserWithEmailAndPassword');
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // console.log('User credential received:', userCredential);
      
      // const user = userCredential.user;
      // console.log('User object:', user);
      
      // setStatus(`✅ User created! UID: ${user.uid}`);
      
             // Test 3: Store data in Firestore
       // setStatus('Storing data in Firestore...');
       // console.log('About to store data in Firestore for user:', user.uid);
       
       // try {
       //   await setDoc(doc(db, 'users', user.uid), {
       //     email: user.email,
       //     createdAt: serverTimestamp(),
       //     testUser: true
       //   });
       //   console.log('Data stored successfully in Firestore');
       //   setStatus('✅ Data stored in Firestore! Test complete.');
       // } catch (firestoreError) {
       //   console.error('Firestore error:', firestoreError);
       //   console.error('Firestore error code:', firestoreError.code);
       //   console.error('Firestore error message:', firestoreError.message);
       //   setStatus(`❌ Firestore error: ${firestoreError.message} (Code: ${firestoreError.code})`);
       //   return;
       // }
      
    } catch (error) {
      console.error('Test error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      setStatus(`❌ Error: ${error.message} (Code: ${error.code})`);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Simple Firebase Test</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Email: </label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '200px', padding: '0.5rem' }}
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Password: </label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '200px', padding: '0.5rem' }}
        />
      </div>
      
      <button 
        onClick={testFirebase}
        style={{ 
          padding: '1rem 2rem', 
          backgroundColor: '#10b981', 
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1rem'
        }}
      >
        Test Firebase
      </button>
      
      <button 
        onClick={async () => {
          try {
            setStatus('Testing network connection...');
            
            // Test network connectivity to Firebase
            // const response = await fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + auth.config.apiKey, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({
            //     email: email,
            //     password: password,
            //     returnSecureToken: true
            //   })
            // });
            
            // if (response.ok) {
            //   setStatus('✅ Network connection to Firebase successful');
            // } else {
            //   const errorData = await response.json();
            //   setStatus(`❌ Network error: ${errorData.error?.message || 'Unknown error'}`);
            // }
            setStatus('❌ Firebase not available - using Supabase instead');
          } catch (error) {
            console.error('Network test error:', error);
            setStatus(`❌ Network test failed: ${error.message}`);
          }
        }}
        style={{ 
          padding: '1rem 2rem', 
          backgroundColor: '#f59e0b', 
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1rem'
        }}
      >
        Test Network
      </button>
      
      <button 
        onClick={async () => {
          try {
            setStatus('Testing user creation only...');
            console.log('Starting user creation test...');
            

            
            // const { createUserWithEmailAndPassword } = await import('firebase/auth');
            // console.log('Firebase auth imported successfully');
            
            // const userCreationPromise = createUserWithEmailAndPassword(auth, email, password);
            // console.log('User creation promise created');
            
            // const userCredential = await Promise.race([userCreationPromise, timeoutPromise]);
            // console.log('User creation completed:', userCredential);
            
            // setStatus(`✅ User created! UID: ${userCredential.user.uid}`);
            setStatus('❌ Firebase not available - using Supabase instead');
          } catch (error) {
            console.error('User creation error:', error);
            setStatus(`❌ User creation failed: ${error.message} (Code: ${error.code || 'unknown'})`);
          }
        }}
        style={{ 
          padding: '1rem 2rem', 
          backgroundColor: '#3b82f6', 
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1rem'
        }}
      >
        Test User Creation Only
      </button>

      <button 
        onClick={async () => {
          try {
            setStatus('Testing simple Firebase connection...');
            console.log('=== SIMPLE FIREBASE TEST START ===');
            
            // Test 1: Check auth object
            // console.log('Auth object:', auth);
            // console.log('Auth config:', auth?.config);
            
            // if (!auth) {
            //   setStatus('❌ Auth object is null');
            //   return;
            // }
            
            // Test 2: Check if we can access Firebase methods
            // console.log('Testing Firebase import...');
            // const firebaseAuth = await import('firebase/auth');
            // console.log('Firebase auth imported:', Object.keys(firebaseAuth));
            
            // Test 3: Try to get current user (should be null if not logged in)
            // console.log('Testing getCurrentUser...');
            // const currentUser = auth.currentUser;
            // console.log('Current user:', currentUser);
            
            setStatus('❌ Firebase not available - using Supabase instead');
            
          } catch (error) {
            console.error('Simple test error:', error);
            setStatus(`❌ Simple test failed: ${error.message}`);
          }
        }}
        style={{ 
          padding: '1rem 2rem', 
          backgroundColor: '#8b5cf6', 
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
               >
         Simple Connection Test
       </button>

               <button 
          onClick={async () => {
            try {
              setStatus('Testing simple Firestore write...');
              console.log('=== SIMPLE FIRESTORE WRITE TEST ===');
              
              // Test 1: Check if db object exists
              // console.log('DB object:', db);
              // if (!db) {
              //   setStatus('❌ DB object is null');
              //   return;
              // }
              
              // Test 2: Try importing Firestore
              // console.log('Importing Firestore...');
              // const { setDoc, doc } = await import('firebase/firestore'); // Removed serverTimestamp to fix ESLint warning
              // console.log('Firestore imports successful');
              
              // Test 3: Create simple data without serverTimestamp
              // const testData = {
              //   test: true,
              //   message: 'Hello Firestore!',
              //   createdAt: new Date().toISOString()
              // };
              
              // console.log('About to write test data:', testData);
              // console.log('About to call setDoc...');
              
              // Test 4: Try with timeout
              // const timeoutPromise = new Promise((_, reject) => {
              //   setTimeout(() => reject(new Error('Firestore write timed out after 10 seconds')), 10000);
              // });
              
              // const writePromise = setDoc(doc(db, 'test', 'simple-test'), testData);
              // await Promise.race([writePromise, timeoutPromise]);
              
              // console.log('Test data written successfully!');
              // setStatus('✅ Simple Firestore write successful!');
              setStatus('❌ Firebase not available - using Supabase instead');
              
            } catch (error) {
              console.error('Simple Firestore write error:', error);
              console.error('Error code:', error.code);
              console.error('Error message:', error.message);
              setStatus(`❌ Simple Firestore write failed: ${error.message} (Code: ${error.code})`);
            }
          }}
         style={{ 
           padding: '1rem 2rem', 
           backgroundColor: '#ef4444', 
           color: 'white',
           border: 'none',
           borderRadius: '4px',
           cursor: 'pointer',
           marginTop: '1rem'
         }}
               >
          Test Simple Firestore Write
        </button>

        <button 
          onClick={async () => {
            try {
              setStatus('Testing basic network connectivity...');
              console.log('=== BASIC NETWORK TEST ===');
              
              // Test 1: Basic Google connectivity
              console.log('Testing Google connectivity...');
              const googleResponse = await fetch('https://www.google.com', { 
                method: 'HEAD',
                mode: 'no-cors'
              });
              console.log('Google response:', googleResponse);
              
              // Test 2: Firebase website
              console.log('Testing Firebase website...');
              const firebaseResponse = await fetch('https://firebase.google.com', { 
                method: 'HEAD',
                mode: 'no-cors'
              });
              console.log('Firebase website response:', firebaseResponse);
              
              // Test 3: Simple API test
              console.log('Testing simple API...');
              const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
              console.log('API response status:', apiResponse.status);
              
              if (apiResponse.ok) {
                setStatus('✅ Basic network connectivity successful!');
              } else {
                setStatus(`❌ API test failed: ${apiResponse.status}`);
              }
              
            } catch (error) {
              console.error('Network test error:', error);
              setStatus(`❌ Network test failed: ${error.message}`);
            }
          }}
          style={{ 
            padding: '1rem 2rem', 
            backgroundColor: '#9333ea', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem',
            marginLeft: '1rem'
          }}
                 >
           Test Network Connectivity
         </button>
      
      <div style={{ 
        marginTop: '2rem',
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        minHeight: '50px'
      }}>
        <strong>Status:</strong> {status}
      </div>
    </div>
  );
}

export default SimpleTest; 