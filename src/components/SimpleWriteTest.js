import React, { useState } from 'react';
// Firebase removed - not needed for core functionality
// import { db } from '../firebase/config';
// import { collection, addDoc, serverTimestamp, doc, setDoc } from 'firebase/firestore';

function SimpleWriteTest() {
  const [status, setStatus] = useState('Ready to test');
  const [results, setResults] = useState([]);

  const addResult = (message) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testBasicConnectivity = async () => {
    setStatus('Testing basic Firebase connectivity...');
    setResults([]);
    
    try {
      addResult('Testing basic Firebase connectivity...');
      addResult(`Firebase app initialized: ${db.app.name}`);
      addResult(`Firebase project ID: ${db.app.options.projectId}`);
      addResult(`Firestore instance: ${db ? 'Created' : 'Failed'}`);
      
      // Test if we can access Firestore settings
      try {
        const settings = db.settings;
        addResult(`Firestore settings: ${JSON.stringify(settings)}`);
      } catch (error) {
        addResult(`Firestore settings error: ${error.message}`);
      }
      
      // Test if we can access the collection reference
      try {
        const testCollection = collection(db, 'test');
        addResult(`Collection reference created: ${testCollection ? 'Yes' : 'No'}`);
        addResult(`Collection path: ${testCollection.path}`);
      } catch (error) {
        addResult(`Collection reference error: ${error.message}`);
      }
      
      addResult('✅ Basic Firebase connectivity OK');
      setStatus('Basic connectivity OK');
      
    } catch (error) {
      addResult(`❌ BASIC CONNECTIVITY ERROR: ${error.message}`);
      addResult(`Error details: ${JSON.stringify(error, null, 2)}`);
      setStatus('Basic connectivity failed');
      
      console.error('Basic connectivity error:', error);
    }
  };

  const testNetworkConnectivity = async () => {
    setStatus('Testing network connectivity...');
    setResults([]);
    
    try {
      addResult('Testing network connectivity to Firebase...');
      
      // Test 1: Check basic internet connectivity
      addResult('Testing basic internet connectivity...');
      const internetResponse = await fetch('https://www.google.com', { mode: 'no-cors' });
      addResult('✅ Basic internet connectivity OK');
      
      // Test 2: Check if we can reach Firebase Console
      addResult('Testing Firebase Console accessibility...');
      const consoleResponse = await fetch('https://console.firebase.google.com', { mode: 'no-cors' });
      addResult('✅ Firebase Console accessible');
      
      // Test 3: Check if we can reach Google APIs
      addResult('Testing Google APIs accessibility...');
      const googleResponse = await fetch('https://www.googleapis.com/discovery/v1/apis');
      addResult(`Google APIs response: ${googleResponse.status} ${googleResponse.statusText}`);
      
      // Test 4: Check if we can reach Firebase project (different endpoint)
      addResult('Testing Firebase project accessibility (alternative)...');
      try {
        const projectResponse = await fetch(`https://${db.app.options.projectId}.firebaseio.com/.json`);
        addResult(`Firebase project response: ${projectResponse.status} ${projectResponse.statusText}`);
      } catch (error) {
        addResult(`Firebase project error: ${error.message}`);
      }
      
      // Test 5: Check if we can reach Firestore (with different approach)
      addResult('Testing Firestore accessibility (alternative)...');
      try {
        const firestoreResponse = await fetch(`https://firestore.googleapis.com/v1/projects/${db.app.options.projectId}/databases/(default)/documents`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        addResult(`Firestore response: ${firestoreResponse.status} ${firestoreResponse.statusText}`);
      } catch (error) {
        addResult(`Firestore error: ${error.message}`);
      }
      
      addResult('Network connectivity test completed');
      setStatus('Network connectivity test completed');
      
    } catch (error) {
      addResult(`❌ NETWORK ERROR: ${error.message}`);
      addResult(`Error details: ${JSON.stringify(error, null, 2)}`);
      setStatus('Network connectivity failed');
      
      console.error('Network test error:', error);
    }
  };

  const testSimpleWrite = async () => {
    setStatus('Testing simple write without serverTimestamp...');
    setResults([]);
    
    try {
      addResult('Testing simple write without serverTimestamp...');
      
      const simpleData = {
        message: 'Simple test without serverTimestamp',
        testId: Date.now(),
        createdAt: new Date().toISOString()
      };
      
      addResult(`Writing simple data: ${JSON.stringify(simpleData)}`);
      
      // Add timeout to detect hanging operations
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out after 10 seconds')), 10000);
      });
      
      const writePromise = addDoc(collection(db, 'simple-test'), simpleData);
      
      addResult('Waiting for simple write operation...');
      
      const docRef = await Promise.race([writePromise, timeoutPromise]);
      
      addResult(`✅ SUCCESS! Simple document written with ID: ${docRef.id}`);
      setStatus('Simple write successful!');
      
    } catch (error) {
      addResult(`❌ SIMPLE WRITE ERROR: ${error.message}`);
      addResult(`Error code: ${error.code}`);
      addResult(`Error name: ${error.name}`);
      addResult(`Full error: ${JSON.stringify(error, null, 2)}`);
      setStatus('Simple write failed');
      
      console.error('Simple write error:', error);
    }
  };

  const testWrite = async () => {
    setStatus('Testing...');
    setResults([]);
    
    try {
      addResult('Starting write test...');
      addResult(`Firebase config projectId: ${db.app.options.projectId}`);
      addResult(`Firebase config authDomain: ${db.app.options.authDomain}`);
      addResult(`Firebase config appId: ${db.app.options.appId}`);
      
      // Test 1: Simple document write
      addResult('Attempting to write test document...');
      
      const testData = {
        message: 'Hello from React app!',
        timestamp: serverTimestamp(),
        testId: Date.now()
      };
      
      addResult(`Writing data: ${JSON.stringify(testData)}`);
      
      // Add timeout to detect hanging operations
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out after 10 seconds')), 10000);
      });
      
      const writePromise = addDoc(collection(db, 'test'), testData);
      
      addResult('Waiting for write operation...');
      
      const docRef = await Promise.race([writePromise, timeoutPromise]);
      
      addResult(`✅ SUCCESS! Document written with ID: ${docRef.id}`);
      setStatus('Write successful!');
      
    } catch (error) {
      addResult(`❌ ERROR: ${error.message}`);
      addResult(`Error code: ${error.code}`);
      addResult(`Error name: ${error.name}`);
      addResult(`Error stack: ${error.stack}`);
      addResult(`Full error object: ${JSON.stringify(error, null, 2)}`);
      setStatus('Write failed');
      
      console.error('Write error:', error);
    }
  };

  const testUsersCollection = async () => {
    setStatus('Testing users collection...');
    setResults([]);
    
    try {
      addResult('Testing users collection write...');
      
      const userData = {
        email: 'test@example.com',
        createdAt: serverTimestamp(),
        testData: {
          message: 'Test user write',
          timestamp: Date.now()
        }
      };
      
      addResult(`Writing user data: ${JSON.stringify(userData)}`);
      
      const docRef = await addDoc(collection(db, 'users'), userData);
      
      addResult(`✅ SUCCESS! User document written with ID: ${docRef.id}`);
      setStatus('Users write successful!');
      
    } catch (error) {
      addResult(`❌ USERS ERROR: ${error.message}`);
      addResult(`Error code: ${error.code}`);
      addResult(`Error name: ${error.name}`);
      addResult(`Full error: ${JSON.stringify(error, null, 2)}`);
      setStatus('Users write failed');
      
      console.error('Users write error:', error);
    }
  };

  const testNewFirebaseInstance = async () => {
    setStatus('Testing new Firebase instance...');
    setResults([]);
    
    try {
      addResult('Testing new Firebase instance...');
      
      // Import Firebase functions dynamically
      const { initializeApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      
      addResult('Firebase modules imported successfully');
      
      // Create a new Firebase config
      const newConfig = {
        apiKey: "AIzaSyAIQH-qLi6bYJuD72FYXy4wQFpE939KSS4",
        authDomain: "dating-dna.firebaseapp.com",
        projectId: "dating-dna",
        storageBucket: "dating-dna.firebasestorage.app",
        messagingSenderId: "517419033505",
        appId: "1:517419033505:web:adf92b09922e981f1661e0"
      };
      
      addResult('Creating new Firebase app...');
      const newApp = initializeApp(newConfig, 'test-app');
      addResult(`New app created: ${newApp.name}`);
      
      addResult('Creating new Firestore instance...');
      const newDb = getFirestore(newApp);
      addResult(`New Firestore instance created: ${newDb ? 'Yes' : 'No'}`);
      
      addResult('✅ New Firebase instance test completed');
      setStatus('New Firebase instance OK');
      
    } catch (error) {
      addResult(`❌ NEW FIREBASE INSTANCE ERROR: ${error.message}`);
      addResult(`Error details: ${JSON.stringify(error, null, 2)}`);
      setStatus('New Firebase instance failed');
      
      console.error('New Firebase instance error:', error);
    }
  };

  const debugFirestoreWrite = async () => {
    setStatus('Running comprehensive Firestore diagnostic...');
    setResults([]);
    
    try {
      addResult('🔍 Starting Firestore diagnostic...');
      
      // Step 1: Check if we can access the database delegate
      try {
        addResult('Checking Firestore initialization...');
        
        // First check if db exists
        if (!db) {
          addResult('❌ Firestore db is null or undefined');
          return;
        }
        
        addResult(`Firestore db object: ${typeof db}`);
        addResult(`Firestore db constructor: ${db.constructor.name}`);
        
        // Check if we can access the delegate safely (might not be available in v12)
        if (db._delegate) {
          const databaseId = db._delegate._databaseId;
          addResult(`✅ Firestore properly initialized. Database ID: ${databaseId}`);
        } else {
          addResult('⚠️ Firestore _delegate not available - this is normal in Firebase v12');
          addResult('Proceeding with write tests to verify functionality');
        }
        
      } catch (error) {
        addResult(`❌ Firestore initialization check failed: ${error.message}`);
        addResult(`Error stack: ${error.stack}`);
        return;
      }
      
      // Step 2: Test connection with a simpler operation
      addResult('📡 Testing basic Firestore connection...');
      try {
        const testRef = doc(db, 'connection-test', 'ping');
        
        // Use a very simple write with minimal timeout
        const connectionPromise = setDoc(testRef, { 
          ping: new Date(), 
          test: true 
        }, { merge: true });
        
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Connection test timeout')), 3000)
        );
        
        await Promise.race([connectionPromise, timeoutPromise]);
        addResult('✅ Basic connection works');
        
      } catch (error) {
        addResult(`❌ Connection test failed: ${error.message}`);
        addResult(`Error code: ${error.code}`);
        
        // Specific Firestore error codes
        if (error.code === 'permission-denied') {
          addResult('🚫 This is a security rules issue!');
          addResult('Check your Firestore rules in Firebase Console');
        } else if (error.code === 'unavailable') {
          addResult('📡 Network/connectivity issue');
        } else if (error.code === 'unauthenticated') {
          addResult('🔐 Authentication required');
        }
        return;
      }
      
      // Step 3: Try the original write with better error handling
      addResult('📝 Testing your original write operation...');
      
      const testData = {
        message: "Simple test without serverTimestamp",
        testId: Date.now(),
        createdAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      };
      
      addResult(`Data to write: ${JSON.stringify(testData)}`);
      
      // Try with addDoc (auto-generates ID) instead of setDoc
      const writePromise = addDoc(collection(db, 'debug-test'), testData);
      const writeTimeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Write operation timeout')), 8000)
      );
      
      const docRef = await Promise.race([writePromise, writeTimeoutPromise]);
      addResult(`✅ Write successful! Document ID: ${docRef.id}`);
      setStatus('Debug write successful!');
      
    } catch (error) {
      addResult(`❌ Write operation failed: ${error.message}`);
      addResult(`Error code: ${error.code}`);
      addResult(`Error stack: ${error.stack}`);
      
      // Additional debugging info
      if (error.code) {
        addResult(`🔍 Firestore error code: ${error.code}`);
        switch (error.code) {
          case 'permission-denied':
            addResult('Security rules are blocking this write');
            break;
          case 'not-found':
            addResult('Collection/document path not found');
            break;
          case 'already-exists':
            addResult('Document already exists (if using setDoc without merge)');
            break;
          case 'resource-exhausted':
            addResult('Quota exceeded or rate limited');
            break;
          case 'failed-precondition':
            addResult('Operation requires specific conditions');
            break;
          case 'aborted':
            addResult('Operation was aborted (possibly due to concurrent updates)');
            break;
        }
      }
      setStatus('Debug write failed');
    }
  };

  const alternativeApproaches = async () => {
    setStatus('Trying alternative approaches...');
    setResults([]);
    
    addResult('🔄 Trying alternative approaches...');
    
    // Approach 1: Use setDoc with a specific document ID
    try {
      addResult('Testing setDoc with specific document ID...');
      const specificDocRef = doc(db, 'test-collection', `test-${Date.now()}`);
      await setDoc(specificDocRef, {
        message: "Test with specific doc ID",
        timestamp: new Date()
      });
      addResult('✅ setDoc with specific ID worked');
    } catch (error) {
      addResult(`❌ setDoc approach failed: ${error.code} - ${error.message}`);
    }
    
    // Approach 2: Check if using emulator
    const isEmulator = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';
    
    if (isEmulator) {
      addResult('🧪 Running on localhost - checking emulator status');
      addResult('Make sure Firestore emulator is running or connect to production');
    }
    
    // Approach 3: Test with minimal data
    try {
      addResult('Testing with minimal data...');
      const minimalData = { test: true, time: Date.now() };
      const docRef = await addDoc(collection(db, 'minimal-test'), minimalData);
      addResult(`✅ Minimal data write successful: ${docRef.id}`);
    } catch (error) {
      addResult(`❌ Minimal data write failed: ${error.code} - ${error.message}`);
    }
    
    setStatus('Alternative approaches completed');
  };

  const testFirebaseApp = async () => {
    setStatus('Testing Firebase app initialization...');
    setResults([]);
    
    try {
      addResult('Testing Firebase app initialization...');
      
      // Check if we can import Firebase modules
      addResult('Importing Firebase modules...');
      const { initializeApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      addResult('✅ Firebase modules imported successfully');
      
      // Create a fresh Firebase config
      const freshConfig = {
        apiKey: "AIzaSyAIQH-qLi6bYJuD72FYXy4wQFpE939KSS4",
        authDomain: "dating-dna.firebaseapp.com",
        projectId: "dating-dna",
        storageBucket: "dating-dna.firebasestorage.app",
        messagingSenderId: "517419033505",
        appId: "1:517419033505:web:adf92b09922e981f1661e0"
      };
      
      addResult('Creating fresh Firebase app...');
      const freshApp = initializeApp(freshConfig, 'fresh-test-app');
      addResult(`✅ Fresh Firebase app created: ${freshApp.name}`);
      
      addResult('Creating fresh Firestore instance...');
      const freshDb = getFirestore(freshApp);
      addResult(`✅ Fresh Firestore instance created: ${freshDb ? 'Yes' : 'No'}`);
      
      // Test if the fresh instance has a delegate
      if (freshDb._delegate) {
        addResult(`✅ Fresh Firestore has delegate: ${freshDb._delegate._databaseId}`);
      } else {
        addResult('❌ Fresh Firestore missing delegate');
      }
      
      // Test a simple write with the fresh instance
      addResult('Testing write with fresh Firestore instance...');
      const testData = { test: true, time: Date.now() };
      const docRef = await addDoc(collection(freshDb, 'fresh-test'), testData);
      addResult(`✅ Fresh Firestore write successful: ${docRef.id}`);
      
      setStatus('Firebase app test successful!');
      
    } catch (error) {
      addResult(`❌ Firebase app test failed: ${error.message}`);
      addResult(`Error code: ${error.code}`);
      addResult(`Error stack: ${error.stack}`);
      setStatus('Firebase app test failed');
    }
  };

  const comprehensiveDiagnostic = async () => {
    setStatus('Running comprehensive network diagnostic...');
    setResults([]);
    
    try {
      addResult('🌐 Starting comprehensive network diagnostic...');
      
      // Step 1: Basic network connectivity
      addResult('1️⃣ Testing basic network connectivity...');
      try {
        const response = await fetch('https://www.google.com/favicon.ico', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        addResult('✅ Basic internet connectivity: Working');
      } catch (error) {
        addResult('❌ Basic internet connectivity: Failed');
        addResult('You may be offline or have network restrictions');
        return;
      }
      
      // Step 2: Test Firebase/Google services connectivity
      addResult('2️⃣ Testing Firebase services connectivity...');
      const googleServices = [
        'https://firebaseapp.com',
        'https://googleapis.com', 
        'https://firestore.googleapis.com'
      ];
      
      for (const service of googleServices) {
        try {
          const response = await Promise.race([
            fetch(service, { method: 'HEAD', mode: 'no-cors' }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000))
          ]);
          addResult(`✅ ${service}: Reachable`);
        } catch (error) {
          addResult(`❌ ${service}: ${error.message}`);
        }
      }
      
      // Step 3: Check Firebase configuration
      addResult('3️⃣ Checking Firebase configuration...');
      try {
        const app = db.app;
        const config = app.options;
        
        addResult('Firebase config present: ' + !!config);
        addResult('Project ID: ' + (config.projectId || 'NOT SET'));
        addResult('API Key present: ' + !!config.apiKey);
        addResult('Auth Domain: ' + (config.authDomain || 'NOT SET'));
        
        if (!config.projectId) {
          addResult('🚨 CRITICAL: No project ID configured!');
          return;
        }
        
      } catch (error) {
        addResult('❌ Firebase not initialized properly: ' + error.message);
        return;
      }
      
      // Step 4: Check if running in emulator mode
      addResult('4️⃣ Checking environment...');
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
      addResult('Running on localhost: ' + isLocalhost);
      
      if (isLocalhost) {
        addResult('🧪 LOCALHOST DETECTED');
        addResult('Are you trying to connect to:');
        addResult('  - Firestore Emulator? (localhost:8080)');
        addResult('  - Production Firestore? (firestore.googleapis.com)');
        addResult('');
        addResult('If using emulator, make sure it\'s running:');
        addResult('  firebase emulators:start');
      }
      
      // Step 5: Test Firestore with different approaches
      addResult('5️⃣ Testing Firestore with different approaches...');
      
      // Test A: Very basic doc reference (no write)
      try {
        const testRef = doc(db, 'test', 'diagnostic');
        addResult('✅ Document reference created: ' + testRef.id);
      } catch (error) {
        addResult('❌ Cannot create document reference: ' + error.message);
        return;
      }
      
      // Test B: Check Firestore settings
      try {
        addResult('Firestore app: ' + db.app.name);
        addResult('Firestore type: ' + (db.type || 'production'));
        
        // Try to get firestore settings if available
        if (db._delegate && db._delegate._settings) {
          addResult('Firestore settings: ' + JSON.stringify(db._delegate._settings));
        }
      } catch (error) {
        addResult('Cannot access Firestore settings: ' + error.message);
      }
      
      // Test C: Minimal write with extended timeout
      addResult('6️⃣ Attempting minimal write with extended diagnostics...');
      try {
        const testRef = doc(db, 'diagnostic', Date.now().toString());
        
        addResult('Starting write operation...');
        const startTime = Date.now();
        
        await Promise.race([
          setDoc(testRef, { test: true, timestamp: startTime }),
          new Promise((_, reject) => 
            setTimeout(() => {
              const elapsed = Date.now() - startTime;
              reject(new Error(`Timeout after ${elapsed}ms`));
            }, 15000)
          )
        ]);
        
        const elapsed = Date.now() - startTime;
        addResult(`✅ Write successful in ${elapsed}ms`);
        setStatus('Comprehensive diagnostic successful!');
        
      } catch (error) {
        const elapsed = Date.now() - (error.startTime || Date.now());
        addResult(`❌ Write failed after ${elapsed}ms`);
        addResult('Error name: ' + error.name);
        addResult('Error message: ' + error.message);
        addResult('Error code: ' + error.code);
        addResult('Error stack preview: ' + (error.stack?.split('\n')[0] || 'No stack'));
        
        // Check for specific patterns
        if (error.message.includes('timeout') || error.message.includes('Timeout')) {
          addResult('🔄 This is definitely a timeout issue');
        }
        
        if (!error.code) {
          addResult('⚠️ No Firestore error code - likely network/connection issue');
        }
      }
      
      // Step 7: Environment suggestions
      addResult('7️⃣ Troubleshooting suggestions:');
      addResult('');
      
      if (isLocalhost) {
        addResult('🏠 LOCALHOST ENVIRONMENT:');
        addResult('  Option 1: Use Firestore Emulator');
        addResult('    - Run: firebase emulators:start');
        addResult('    - Add: connectFirestoreEmulator(db, "localhost", 8080)');
        addResult('');
        addResult('  Option 2: Connect to production');
        addResult('    - Ensure proper Firebase config');
        addResult('    - Check network isn\'t blocking Google APIs');
      } else {
        addResult('🌐 PRODUCTION ENVIRONMENT:');
        addResult('  - Check firewall/proxy settings');
        addResult('  - Verify DNS resolution for *.googleapis.com');
        addResult('  - Test from different network if possible');
      }
      
    } catch (error) {
      addResult('❌ Comprehensive diagnostic failed: ' + error.message);
      setStatus('Comprehensive diagnostic failed');
    }
  };

  const testEmulatorConnection = async () => {
    setStatus('Testing Firestore Emulator connection...');
    setResults([]);
    
    try {
      addResult('🧪 Testing Firestore Emulator connection...');
      
      // Test if emulator is running
      try {
        const response = await fetch('http://localhost:8080', { 
          method: 'GET',
          mode: 'cors'
        });
        addResult('✅ Firestore Emulator is running on localhost:8080');
        
        // Now try connecting Firestore to emulator
        const { connectFirestoreEmulator } = await import('firebase/firestore');
        connectFirestoreEmulator(db, 'localhost', 8080);
        addResult('✅ Connected to Firestore Emulator');
        
        // Test a write to the emulator
        const testRef = doc(db, 'emulator-test', Date.now().toString());
        await setDoc(testRef, { test: true, timestamp: Date.now() });
        addResult('✅ Write to emulator successful');
        
        setStatus('Emulator connection successful!');
        return true;
      } catch (error) {
        addResult('❌ Firestore Emulator not available: ' + error.message);
        setStatus('Emulator connection failed');
        return false;
      }
    } catch (error) {
      addResult('❌ Emulator test failed: ' + error.message);
      setStatus('Emulator test failed');
      return false;
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Simple Firestore Write Test</h2>
      
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <strong>Status:</strong> {status}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={testBasicConnectivity}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6f42c1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Basic Connectivity
        </button>
        
        <button 
          onClick={testNetworkConnectivity}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6f42c1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Network
        </button>
        
        <button 
          onClick={testSimpleWrite}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Simple Write (no serverTimestamp)
        </button>
        
        <button 
          onClick={testWrite}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Write (with serverTimestamp)
        </button>
        
        <button 
          onClick={testUsersCollection}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Test Users Collection
        </button>

        <button 
          onClick={testNewFirebaseInstance}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test New Firebase Instance
        </button>

        <button 
          onClick={debugFirestoreWrite}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Run Comprehensive Debug
        </button>

        <button 
          onClick={alternativeApproaches}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Try Alternative Approaches
        </button>

        <button 
          onClick={testFirebaseApp}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Firebase App Initialization
        </button>

        <button 
          onClick={comprehensiveDiagnostic}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#f0ad4e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Run Comprehensive Diagnostic
        </button>

        <button 
          onClick={testEmulatorConnection}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#5bc0de',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Emulator Connection
        </button>
      </div>

      {results.length > 0 && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '4px',
          border: '1px solid #dee2e6'
        }}>
          <h3>Test Results:</h3>
          <div style={{ 
            fontFamily: 'monospace', 
            fontSize: '0.9rem',
            maxHeight: '400px',
            overflowY: 'auto',
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #ced4da'
          }}>
            {results.map((result, index) => (
              <div key={index} style={{ 
                marginBottom: '0.5rem',
                color: result.includes('✅') ? '#28a745' : result.includes('❌') ? '#dc3545' : '#6c757d',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}>
                {result}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e7f3ff', borderRadius: '4px' }}>
        <h3>What this test does:</h3>
        <ul>
          <li>Shows detailed Firebase configuration</li>
          <li>Writes a simple document to a 'test' collection</li>
          <li>Tests writing to 'users' collection (like your services)</li>
          <li>Shows complete error details including stack traces</li>
        </ul>
      </div>
    </div>
  );
}

export default SimpleWriteTest;

