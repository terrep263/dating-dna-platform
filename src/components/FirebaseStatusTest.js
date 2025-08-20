import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/config';

function FirebaseStatusTest() {
  const [status, setStatus] = useState('Checking Firebase status...');
  const [projectInfo, setProjectInfo] = useState(null);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    checkFirebaseStatus();
  }, []);

  const checkFirebaseStatus = async () => {
    try {
      setStatus('Checking Firebase configuration...');
      
      // Get project information
      const projectId = db.app.options.projectId;
      const appName = db.app.name;
      
      setProjectInfo({
        projectId,
        appName,
        authDomain: db.app.options.authDomain
      });

      setStatus('Firebase configuration loaded successfully');
      
      // Check if we can access the project
      try {
        const response = await fetch(`https://${projectId}.firebaseio.com/.json`);
        if (response.ok) {
          setInstructions([
            '✅ Firebase project is accessible',
            '❌ Firestore Database might not be enabled',
            '',
            'To enable Firestore Database:',
            '1. Go to https://console.firebase.google.com/',
            `2. Select project: "${projectId}"`,
            '3. Click "Firestore Database" in the left sidebar',
            '4. If you see "Create database", click it',
            '5. Choose "Start in test mode"',
            '6. Select a location (choose closest to you)',
            '7. Click "Done"',
            '',
            'After enabling Firestore, try the write tests again.'
          ]);
        } else {
          setInstructions([
            '❌ Cannot access Firebase project',
            'This might mean:',
            '- Project does not exist',
            '- Wrong project configuration',
            '- Network connectivity issues',
            '',
            'Please verify:',
            '1. Go to https://console.firebase.google.com/',
            '2. Check if project exists',
            '3. Verify project ID matches: ' + projectId
          ]);
        }
      } catch (error) {
        setInstructions([
          '❌ Network error accessing Firebase',
          'Error: ' + error.message,
          '',
          'This could be due to:',
          '- Network connectivity issues',
          '- Firewall blocking Firebase',
          '- Project configuration problems',
          '',
          'Please check:',
          '1. Internet connection',
          '2. Firebase Console access',
          '3. Project configuration'
        ]);
      }

    } catch (error) {
      setStatus('Error checking Firebase status');
      setInstructions([
        '❌ Firebase configuration error',
        'Error: ' + error.message,
        '',
        'Please check your Firebase configuration.'
      ]);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Firebase Status Check</h2>
      
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <strong>Status:</strong> {status}
      </div>

      {projectInfo && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#d1fae5', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          <h3>Project Information:</h3>
          <p><strong>Project ID:</strong> {projectInfo.projectId}</p>
          <p><strong>App Name:</strong> {projectInfo.appName}</p>
          <p><strong>Auth Domain:</strong> {projectInfo.authDomain}</p>
        </div>
      )}

      {instructions.length > 0 && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#fef3c7', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          <h3>Instructions:</h3>
          {instructions.map((instruction, index) => (
            <p key={index} style={{ 
              margin: '0.5rem 0',
              fontFamily: instruction.startsWith('1.') || instruction.startsWith('2.') || instruction.startsWith('3.') || instruction.startsWith('4.') || instruction.startsWith('5.') || instruction.startsWith('6.') || instruction.startsWith('7.') ? 'monospace' : 'inherit',
              color: instruction.startsWith('✅') ? '#065f46' : instruction.startsWith('❌') ? '#dc2626' : 'inherit'
            }}>
              {instruction}
            </p>
          ))}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h3>Quick Links:</h3>
        <ul>
          <li><a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase Console</a></li>
                     <li><a href="https://console.firebase.google.com/project/dating-dna/firestore" target="_blank" rel="noopener noreferrer">Firestore Database (direct link)</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '4px' }}>
        <h3>Common Issues:</h3>
        <ul>
          <li><strong>Firestore not enabled:</strong> Most common cause of write failures</li>
          <li><strong>Wrong project:</strong> Make sure you're using the correct Firebase project</li>
          <li><strong>Network issues:</strong> Check if you can access Firebase Console</li>
          <li><strong>Rules blocking writes:</strong> Firestore rules might be too restrictive</li>
        </ul>
      </div>
    </div>
  );
}

export default FirebaseStatusTest;
