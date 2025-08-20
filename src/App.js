import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PayPalProvider from './components/PayPalProvider';
import { initializeAffiliateTracking } from './utils/affiliateTracking';

// Components
import HomePage from './components/HomePage';
import SinglesAssessmentApp from './components/assessment/SinglesAssessmentApp';
import CouplesAssessmentApp from './components/assessment/CouplesAssessmentApp';
import Results from './components/Results';
import Login from './components/Login';
import PurchasePage from './components/PurchasePage';
import DirectCheckout from './components/DirectCheckout';
import PaymentSuccess from './components/PaymentSuccess';
import AboutScience from './components/AboutScience';
import About from './components/About';
import Compatibility from './components/Compatibility';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Help from './components/Help';
import Feedback from './components/Feedback';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Cookies from './components/Cookies';
import Accessibility from './components/Accessibility';
import Education from './components/Education';
import ArticlePage from './components/ArticlePage';
import HowItWorks from './components/HowItWorks';
import DNATypes from './components/DNATypes';
import Premium from './components/Premium';
import Header from './components/Header';
import Footer from './components/Footer';
import PremiumSingles from './components/PremiumSingles';
import PremiumCouples from './components/PremiumCouples';
// Firebase components removed - not needed for core functionality
// import FirebaseTest from './components/FirebaseTest';
// import SimpleFirebaseTest from './components/SimpleFirebaseTest';
import SimpleTest from './components/SimpleTest';
import SupabaseTest from './components/SupabaseTest';
// import AdminDashboard from './components/AdminDashboard'; // Removed for performance
// import AffiliateDashboard from './components/AffiliateDashboard'; // Removed for performance
import SimpleAdminTest from './components/SimpleAdminTest';
import AffiliateIntegration from './components/AffiliateIntegration';
import SupabaseAffiliateDashboard from './components/SupabaseAffiliateDashboard';
// import ForgotPassword from './components/ForgotPassword'; // Temporarily unused
import EmailTestDiagnostic from './components/EmailTestDiagnostic';
import SimpleTestPage from './components/SimpleTestPage';
import ForgotPasswordSimple from './components/ForgotPasswordSimple';
import ResetPassword from './components/ResetPassword';
import AdminRedirect from './components/AdminRedirect';
import UnifiedAdminDashboard from './components/UnifiedAdminDashboard';
import PayPalTest from './components/PayPalTest';
import AIEnhancedAssessment from './components/AIEnhancedAssessment';
import FreeAssessment from './components/FreeAssessment';
import FreeResults from './components/FreeResults';
import CheckoutTest from './components/CheckoutTest';
import CheckoutSuccess from './components/CheckoutSuccess';
import WebhookManager from './components/WebhookManager';
// import AIChatbot from './components/AIChatbot'; // Removed - replaced with Grace in results pages
// import AdminLogin from './components/AdminLogin'; // Removed for performance

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled(motion.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    // Initialize affiliate tracking on app load
    initializeAffiliateTracking();
  }, []);

  return (
    <PayPalProvider>
      <AppContainer>
        <Header />
        <AnimatePresence mode="wait">
          <MainContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/dna-types" element={<DNATypes />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/premium-singles" element={<PremiumSingles />} />
              <Route path="/premium-couples" element={<PremiumCouples />} />
              <Route path="/assessment" element={<SinglesAssessmentApp />} />
              <Route path="/assessment/couples" element={<CouplesAssessmentApp />} />
              <Route path="/results" element={<Results />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPasswordSimple />} />
              <Route path="/__/auth/action" element={<ResetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/email-test" element={<EmailTestDiagnostic />} />
              <Route path="/test" element={<SimpleTestPage />} />
              {/* Admin routes - unified admin system */}
              <Route path="/admin-login" element={<AdminRedirect />} />
              <Route path="/admin" element={<UnifiedAdminDashboard />} />
              <Route path="/admin-unified" element={<UnifiedAdminDashboard />} />
              <Route path="/checkout" element={<DirectCheckout />} />
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-science" element={<AboutScience />} />
              <Route path="/compatibility" element={<Compatibility />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<Help />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/education" element={<Education />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              {/* Firebase test routes removed - not needed for core functionality */}
              {/* <Route path="/firebase-test" element={<FirebaseTest />} /> */}
              {/* <Route path="/simple-firebase-test" element={<SimpleFirebaseTest />} /> */}
              <Route path="/simple-test" element={<SimpleTest />} />
              <Route path="/supabase-test" element={<SupabaseTest />} />
              <Route path="/simple-admin-test" element={<SimpleAdminTest />} />
                              <Route path="/admin-full" element={<AffiliateIntegration />} />
                <Route path="/affiliate-dashboard" element={<SupabaseAffiliateDashboard />} />
              <Route path="/paypal-test" element={<PayPalTest />} />
              <Route path="/ai-assessment" element={<AIEnhancedAssessment />} />
              <Route path="/free-assessment" element={<FreeAssessment />} />
              <Route path="/free-results" element={<FreeResults />} />
              <Route path="/checkout/test" element={<CheckoutTest />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/webhook-manager" element={<WebhookManager />} />
            </Routes>
          </MainContent>
        </AnimatePresence>
        <Footer />
        {/* Grace AI Coach is now integrated into assessment results pages */}
      </AppContainer>
    </PayPalProvider>
  );
}

export default App; 