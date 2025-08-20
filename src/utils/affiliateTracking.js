// Affiliate tracking utilities for Dating DNA Platform
import { dbService } from '../supabase/config';

export const getAffiliateReferralFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('ref') || urlParams.get('affiliate');
};

export const storeAffiliateReferral = async (referralId) => {
  if (!referralId) return;
  
  try {
    // Store in localStorage for immediate access
    localStorage.setItem('affiliateReferral', referralId);
    localStorage.setItem('affiliateReferralDate', new Date().toISOString());
    
    // Also store in Supabase for tracking
    const referralData = {
      referral_code: referralId,
      source_url: window.location.href,
      status: 'pending',
      created_at: new Date().toISOString()
    };
    
    await dbService.createReferral(referralData);
    console.log('Affiliate referral stored:', referralId);
    
  } catch (error) {
    console.error('Error storing affiliate referral:', error);
  }
};

export const getStoredAffiliateReferral = () => {
  return {
    referralId: localStorage.getItem('affiliateReferral'),
    date: localStorage.getItem('affiliateReferralDate')
  };
};

export const trackAffiliateConversion = async (paymentData) => {
  const referral = getStoredAffiliateReferral();
  
  if (!referral.referralId) {
    console.log('No affiliate referral found');
    return;
  }

  try {
    // Get affiliate data
    const affiliate = await dbService.getAffiliate(referral.referralId);
    if (!affiliate) {
      console.log('Affiliate not found:', referral.referralId);
      return;
    }

    // Calculate commission (default 20%)
    const commissionRate = affiliate.commission_rate || 20.00;
    const commissionAmount = (paymentData.amount * commissionRate) / 100;

    // Update referral status to converted
    const conversionData = {
      amount: paymentData.amount,
      commission: commissionAmount
    };

    // Find the referral record and update it
    const referrals = await dbService.getReferralsByAffiliate(affiliate.id);
    const referralRecord = referrals.find(r => r.referral_code === referral.referralId);
    
    if (referralRecord) {
      await dbService.updateReferralStatus(referralRecord.id, 'converted', conversionData);
    }

    // Record payment with affiliate info
    const paymentWithAffiliate = {
      ...paymentData,
      affiliate_id: affiliate.id,
      referral_source: referral.referralId,
      commission_paid: false,
      commission_amount: commissionAmount
    };

    await dbService.recordPayment(paymentWithAffiliate);

    // Update affiliate stats
    await dbService.updateAffiliate(affiliate.id, {
      total_earnings: (affiliate.total_earnings || 0) + commissionAmount,
      total_referrals: (affiliate.total_referrals || 0) + 1
    });

    console.log('Affiliate conversion tracked successfully:', {
      affiliateId: referral.referralId,
      commission: commissionAmount,
      paymentAmount: paymentData.amount
    });

    // Clear stored referral after successful tracking
    localStorage.removeItem('affiliateReferral');
    localStorage.removeItem('affiliateReferralDate');

  } catch (error) {
    console.error('Error tracking affiliate conversion:', error);
  }
};

export const generateAffiliateLink = (affiliateId, targetPage = '') => {
  const baseUrl = window.location.origin;
  const page = targetPage ? `/${targetPage}` : '';
  return `${baseUrl}${page}?ref=${encodeURIComponent(affiliateId)}`;
};

// Initialize affiliate tracking on page load
export const initializeAffiliateTracking = async () => {
  const referralId = getAffiliateReferralFromURL();
  
  if (referralId) {
    await storeAffiliateReferral(referralId);
  }
};
