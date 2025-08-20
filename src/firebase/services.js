import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  addDoc,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode
} from 'firebase/auth';
import { db, auth } from './config';

// User Management
export const createUser = async (email, password, userData = {}) => {
  try {
    console.log('createUser called with:', { email, userData });
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Firebase auth user created:', user.uid);
    
    // Store additional user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      createdAt: serverTimestamp(),
      ...userData
    });
    console.log('User data stored in Firestore');
    
    return user;
  } catch (error) {
    console.error('createUser error:', error);
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

// User Data Management
export const getUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const updateUserData = async (userId, data) => {
  try {
    await updateDoc(doc(db, 'users', userId), data);
  } catch (error) {
    throw error;
  }
};

// Payment Management
export const recordPayment = async (paymentData) => {
  try {
    const paymentRef = await addDoc(collection(db, 'payments'), {
      ...paymentData,
      createdAt: serverTimestamp()
    });
    return paymentRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateUserPaymentStatus = async (userId, productType) => {
  try {
    const paymentField = productType === 'single' ? 'hasPaid_single' : 'hasPaid_couples';
    await updateDoc(doc(db, 'users', userId), {
      [paymentField]: true,
      purchaseDate: serverTimestamp()
    });
  } catch (error) {
    throw error;
  }
};

// Assessment Management
export const saveAssessmentResults = async (userId, assessmentData) => {
  try {
    const assessmentRef = await addDoc(collection(db, 'assessments'), {
      userId,
      ...assessmentData,
      completedAt: serverTimestamp()
    });
    return assessmentRef.id;
  } catch (error) {
    throw error;
  }
};

export const getUserAssessments = async (userId) => {
  try {
    const q = query(collection(db, 'assessments'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

// Admin Functions
export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

export const getAllPayments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'payments'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

// Affiliate Management
export const createAffiliate = async (affiliateData) => {
  try {
    const affiliateRef = await addDoc(collection(db, 'affiliates'), {
      ...affiliateData,
      createdAt: serverTimestamp(),
      totalEarnings: 0
    });
    return affiliateRef.id;
  } catch (error) {
    throw error;
  }
};

export const getAffiliateData = async (affiliateId) => {
  try {
    const q = query(collection(db, 'affiliates'), where('affiliateId', '==', affiliateId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    throw error;
  }
};

// Referral Management
export const createReferral = async (referralData) => {
  try {
    const referralRef = await addDoc(collection(db, 'referrals'), {
      ...referralData,
      createdAt: serverTimestamp(),
      status: 'pending'
    });
    return referralRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateReferralStatus = async (referralId, status, commission = null) => {
  try {
    const updateData = { 
      status,
      updatedAt: serverTimestamp()
    };
    
    if (commission) {
      updateData.commission = commission;
    }
    
    await updateDoc(doc(db, 'referrals', referralId), updateData);
  } catch (error) {
    throw error;
  }
};

export const getReferralsByAffiliate = async (affiliateId) => {
  try {
    const q = query(
      collection(db, 'referrals'), 
      where('affiliateId', '==', affiliateId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

// Password Reset Functions
export const sendPasswordResetEmailToUser = async (email) => {
  try {
    // Try without redirect URL first to test basic functionality
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent successfully');
    return { success: true, message: 'Password reset email sent successfully' };
  } catch (error) {
    console.error('Password reset email error:', error);
    
    // Return user-friendly error messages
    let message = 'Failed to send password reset email';
    switch (error.code) {
      case 'auth/user-not-found':
        message = 'No account found with this email address';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address';
        break;
      case 'auth/too-many-requests':
        message = 'Too many requests. Please try again later';
        break;
      default:
        message = error.message || 'Failed to send password reset email';
    }
    
    return { success: false, message };
  }
};

export const confirmPasswordResetWithCode = async (code, newPassword) => {
  try {
    await confirmPasswordReset(auth, code, newPassword);
    console.log('Password reset successfully');
    return { success: true, message: 'Password reset successfully' };
  } catch (error) {
    console.error('Password reset confirmation error:', error);
    
    let message = 'Failed to reset password';
    switch (error.code) {
      case 'auth/expired-action-code':
        message = 'Password reset link has expired';
        break;
      case 'auth/invalid-action-code':
        message = 'Invalid or expired password reset link';
        break;
      case 'auth/weak-password':
        message = 'Password is too weak. Please choose a stronger password';
        break;
      default:
        message = error.message || 'Failed to reset password';
    }
    
    return { success: false, message };
  }
};

export const verifyPasswordResetCodeValidity = async (code) => {
  try {
    const email = await verifyPasswordResetCode(auth, code);
    return { success: true, email };
  } catch (error) {
    console.error('Password reset code verification error:', error);
    return { success: false, message: 'Invalid or expired reset code' };
  }
}; 