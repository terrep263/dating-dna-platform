// Authentication and payment verification utilities

// Check if user has access to assessments
export const checkAssessmentAccess = (assessmentType = 'single') => {
  // Check if user is logged in (has email in localStorage)
  const userEmail = localStorage.getItem('userEmail');
  const hasPaid = localStorage.getItem(`hasPaid_${assessmentType}`);
  
  return {
    isLoggedIn: !!userEmail,
    hasPaid: !!hasPaid,
    userEmail: userEmail,
    canAccess: !!(userEmail && hasPaid)
  };
};

// Check if user has premium access
export const hasPremiumAccess = (assessmentType = 'single') => {
  const hasPaid = localStorage.getItem(`hasPaid_${assessmentType}`);
  const hasPremium = localStorage.getItem(`hasPremium_${assessmentType}`);
  return !!(hasPaid && hasPremium);
};

// Set user as logged in
export const setUserLoggedIn = (email) => {
  localStorage.setItem('userEmail', email);
};

// Set payment status
export const setPaymentStatus = (assessmentType, hasPaid = true) => {
  localStorage.setItem(`hasPaid_${assessmentType}`, hasPaid);
};

// Set premium access status
export const setPremiumAccess = (assessmentType, hasPremium = true) => {
  localStorage.setItem(`hasPremium_${assessmentType}`, hasPremium);
};

// Clear user data
export const clearUserData = () => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('hasPaid_single');
  localStorage.removeItem('hasPaid_couples');
  localStorage.removeItem('hasPremium_single');
  localStorage.removeItem('hasPremium_couples');
};

// Redirect to appropriate page based on access status
export const handleAssessmentAccess = (assessmentType, navigate) => {
  const access = checkAssessmentAccess(assessmentType);
  
  if (!access.isLoggedIn) {
    // User not logged in - redirect to login
    navigate('/login');
    return false;
  }
  
  if (!access.hasPaid) {
    // User logged in but hasn't paid - redirect to payment
    navigate('/payment');
    return false;
  }
  
  // User has access - allow navigation
  return true;
}; 