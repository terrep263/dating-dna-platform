import React, { useState } from 'react';
import { dbService } from '../supabase/config';

function SupabaseTest() {
  const [status, setStatus] = useState('Ready to test Supabase');
  const [results, setResults] = useState([]);

  const addResult = (message) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testSupabaseConnection = async () => {
    setStatus('Testing Supabase connection...');
    setResults([]);
    
    try {
      addResult('🔗 Testing Supabase connection...');
      
      // Test basic connection
      const testData = await dbService.testConnection();
      
      addResult(`✅ Supabase connection successful!`);
      addResult(`📝 Test record created with ID: ${testData.id}`);
      addResult(`📅 Timestamp: ${testData.timestamp}`);
      addResult(`💬 Message: ${testData.message}`);
      
      setStatus('Supabase connection successful!');
      
    } catch (error) {
      addResult(`❌ Supabase connection failed: ${error.message}`);
      addResult(`🔍 Error details: ${JSON.stringify(error, null, 2)}`);
      
      if (error.message.includes('YOUR_SUPABASE_URL')) {
        addResult('');
        addResult('🚨 SETUP REQUIRED:');
        addResult('1. Go to https://supabase.com');
        addResult('2. Create a free account');
        addResult('3. Create a new project');
        addResult('4. Get your project URL and anon key');
        addResult('5. Add them to your .env file:');
        addResult('   REACT_APP_SUPABASE_URL=your_project_url');
        addResult('   REACT_APP_SUPABASE_ANON_KEY=your_anon_key');
      }
      
      setStatus('Supabase connection failed');
    }
  };

  const testUserCreation = async () => {
    setStatus('Testing user creation...');
    setResults([]);
    
    try {
      addResult('👤 Testing user creation...');
      
      const userData = {
        email: `test-${Date.now()}@example.com`,
        name: 'Test User',
        created_at: new Date().toISOString()
      };
      
      const newUser = await dbService.createUser(userData);
      
      addResult(`✅ User created successfully!`);
      addResult(`🆔 User ID: ${newUser.id}`);
      addResult(`📧 Email: ${newUser.email}`);
      addResult(`📅 Created: ${newUser.created_at}`);
      
      setStatus('User creation successful!');
      
    } catch (error) {
      addResult(`❌ User creation failed: ${error.message}`);
      addResult(`🔍 Error details: ${JSON.stringify(error, null, 2)}`);
      setStatus('User creation failed');
    }
  };

  const testAssessmentSave = async () => {
    setStatus('Testing assessment save...');
    setResults([]);
    
    try {
      addResult('📊 Testing assessment save...');
      
      const assessmentData = {
        user_id: '550e8400-e29b-41d4-a716-446655440000', // Use the test user ID from database
        dna_type: 'Explorer',
        compatibility_score: 85,
        answers: { q1: 'A', q2: 'B', q3: 'C' },
        created_at: new Date().toISOString()
      };
      
      const savedAssessment = await dbService.saveAssessmentResults(assessmentData);
      
      addResult(`✅ Assessment saved successfully!`);
      addResult(`🆔 Assessment ID: ${savedAssessment.id}`);
      addResult(`🧬 DNA Type: ${savedAssessment.dna_type}`);
      addResult(`📈 Score: ${savedAssessment.compatibility_score}%`);
      
      setStatus('Assessment save successful!');
      
    } catch (error) {
      addResult(`❌ Assessment save failed: ${error.message}`);
      addResult(`🔍 Error details: ${JSON.stringify(error, null, 2)}`);
      setStatus('Assessment save failed');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Supabase Database Test</h2>
      
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '4px',
        marginBottom: '1rem',
        border: '1px solid #0ea5e9'
      }}>
        <strong>Status:</strong> {status}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={testSupabaseConnection}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0ea5e9',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test Supabase Connection
        </button>
        
        <button 
          onClick={testUserCreation}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginRight: '1rem'
          }}
        >
          Test User Creation
        </button>
        
        <button 
          onClick={testAssessmentSave}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Test Assessment Save
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
                color: result.includes('✅') ? '#10b981' : result.includes('❌') ? '#ef4444' : '#6b7280',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}>
                {result}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '4px', border: '1px solid #f59e0b' }}>
        <h3>🚀 Why Supabase is Perfect for Your Dating DNA Platform:</h3>
        <ul>
          <li><strong>PostgreSQL Database:</strong> Powerful, reliable, and scalable</li>
          <li><strong>Real-time Subscriptions:</strong> Perfect for live compatibility updates</li>
          <li><strong>Built-in Authentication:</strong> User management out of the box</li>
          <li><strong>REST API:</strong> Easy to integrate with your React app</li>
          <li><strong>Free Tier:</strong> Generous limits for development and small apps</li>
          <li><strong>No Network Issues:</strong> Reliable connectivity worldwide</li>
        </ul>
      </div>
    </div>
  );
}

export default SupabaseTest;
