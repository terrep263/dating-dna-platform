import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, enableNetwork } from 'firebase/firestore'; // Removed disableNetwork to fix ESLint warning
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIQH-qLi6bYJuD72FYXy4wQFpE939KSS4",
  authDomain: "dating-dna.firebaseapp.com",
  projectId: "dating-dna",
  storageBucket: "dating-dna.firebasestorage.app",
  messagingSenderId: "517419033505",
  appId: "1:517419033505:web:adf92b09922e981f1661e0"
  // measurementId: "G-XXXXXXXXXX" // Commented out since it's not configured
};

// Initialize Firebase
console.log('Initializing Firebase with config:', firebaseConfig);
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);

// Initialize Firebase services
export const auth = getAuth(app);
console.log('Firebase auth initialized:', auth);

// Initialize Firestore with explicit settings
export const db = getFirestore(app);
console.log('Firebase db initialized:', db);

// Ensure Firestore is properly connected
const initializeFirestore = async () => {
  try {
    // Enable network connection
    await enableNetwork(db);
    console.log('Firestore network enabled');
    
    // Test if we can access the delegate
    if (db._delegate) {
      console.log('Firestore delegate available:', db._delegate._databaseId);
    } else {
      console.log('Firestore delegate not available - this might be normal in v12');
    }
    
    return true;
  } catch (error) {
    console.error('Firestore initialization error:', error);
    return false;
  }
};

// Don't initialize Firestore immediately - let components initialize it when needed
// initializeFirestore();

// Try to connect to Firestore with explicit settings
// Only connect to emulator in development
// Temporarily disabled to prevent interference with PayPal
/*
if (process.env.NODE_ENV === 'development' && window.location.hostname === 'localhost') {
  try {
    console.log('Attempting to connect to Firestore emulator...');
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('✅ Connected to Firestore emulator on localhost:8080');
  } catch (error) {
    console.log('Firestore emulator connection failed:', error);
  }
}
*/

// Temporarily disable offline persistence for testing
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code === 'failed-precondition') {
//     console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
//   } else if (err.code === 'unimplemented') {
//     console.log('The current browser does not support persistence.');
//   }
// });

// Only initialize analytics if measurementId is available
let analytics = null;
try {
  analytics = getAnalytics(app);
  console.log('Firebase analytics initialized:', analytics);
} catch (error) {
  console.log('Analytics not initialized (no measurementId):', error.message);
}
export { analytics };

export default app; 