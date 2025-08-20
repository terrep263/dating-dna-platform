import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; // Removed to fix ESLint warning
// Firebase removed - not needed for core functionality
// import { 
//   collection, 
//   getDocs, 
//   query, 
//   where, 
//   orderBy
// } from 'firebase/firestore';
// import { db } from '../firebase/config';
// import { createAffiliate, getAffiliateData } from '../firebase/services';
import { media, spacing, fontSizes } from '../utils/responsive';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: ${spacing.xl};
  
  ${media.maxMd} {
    padding: ${spacing.md};
  }
`;

const Header = styled.div`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: ${spacing.xl};
  border-radius: 20px;
  margin-bottom: ${spacing.xl};
  text-align: center;
  
  ${media.maxMd} {
    padding: ${spacing.lg};
  }
`;

const Title = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 700;
  margin-bottom: ${spacing.md};

  ${media.maxMd} {
    font-size: ${fontSizes.xxl};
  }
`;

const Subtitle = styled.p`
  font-size: ${fontSizes.lg};
  opacity: 0.9;
  
  ${media.maxMd} {
    font-size: ${fontSizes.md};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.lg};
  margin-bottom: ${spacing.xl};
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: ${spacing.xl};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 2px solid rgba(255, 107, 157, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 107, 157, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: ${spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${fontSizes.md};
  color: #666;
  font-weight: 500;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xl};
  
  ${media.maxLg} {
    grid-template-columns: 1fr;
  }
`;

const Section = styled(motion.div)`
  background: white;
  padding: ${spacing.xl};
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(255, 107, 157, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 700;
  color: #333;
  margin-bottom: ${spacing.lg};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

const ReferralLink = styled.div`
  background: #f8f9fa;
  border: 2px dashed #ff6b9d;
  border-radius: 12px;
  padding: ${spacing.lg};
  margin-bottom: ${spacing.lg};
  text-align: center;
`;

const LinkText = styled.div`
  font-family: 'Courier New', monospace;
  background: white;
  padding: ${spacing.md};
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin: ${spacing.md} 0;
  font-size: 0.9rem;
  word-break: break-all;
`;

const CopyButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: ${spacing.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
  }
`;

const CommissionTable = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${spacing.md};
  padding: ${spacing.md};
  background: #f8f9fa;
  border-radius: 8px;
  font-weight: 600;
  color: #333;
  margin-bottom: ${spacing.sm};
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${spacing.md};
  padding: ${spacing.md};
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SetupForm = styled.div`
  background: white;
  padding: ${spacing.xl};
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(255, 107, 157, 0.1);
  margin-bottom: ${spacing.xl};
`;

const FormGroup = styled.div`
  margin-bottom: ${spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: ${spacing.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: ${spacing.md};
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: ${fontSizes.md};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: ${spacing.md} ${spacing.xl};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: ${fontSizes.md};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.xl};
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: ${spacing.md};
  border-radius: 8px;
  margin-bottom: ${spacing.lg};
`;

const SuccessMessage = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: ${spacing.md};
  border-radius: 8px;
  margin-bottom: ${spacing.lg};
`;

function AffiliateDashboard() {
  // const navigate = useNavigate(); // Removed to fix ESLint warning
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [affiliateData, setAffiliateData] = useState(null);
  const [isNewAffiliate, setIsNewAffiliate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    paypalEmail: ''
  });
  const [stats, setStats] = useState({
    totalReferrals: 0,
    totalEarnings: 0,
    pendingCommissions: 0,
    conversionRate: 0
  });
  const [recentReferrals, setRecentReferrals] = useState([]);

  useEffect(() => {
    initializeAffiliateDashboard();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const initializeAffiliateDashboard = async () => {
    try {
      setLoading(true);
      const userEmail = localStorage.getItem('userEmail');
      
      if (!userEmail) {
        setError('Please log in to access affiliate dashboard');
        setLoading(false);
        return;
      }

      // Check if affiliate exists
      // const existingAffiliate = await getAffiliateData(userEmail);
      
      // if (existingAffiliate) {
      //   setAffiliateData(existingAffiliate);
      //   await fetchAffiliateStats(existingAffiliate.id);
      //   await fetchRecentReferrals(existingAffiliate.id);
      // } else {
        setIsNewAffiliate(true);
        setFormData(prev => ({ ...prev, email: userEmail }));
      // }
      
    } catch (err) {
      console.error('Affiliate dashboard initialization error:', err);
      setError('Failed to load affiliate dashboard');
    } finally {
      setLoading(false);
    }
  };

  const fetchAffiliateStats = async (affiliateId) => {
    try {
      // Fetch referrals for this affiliate
      // const q = query(
      //   collection(db, 'referrals'), 
      //   where('affiliateId', '==', affiliateId)
      // );
      // const snapshot = await getDocs(q);
      
      // let totalReferrals = 0;
      // let totalEarnings = 0;
      // let pendingCommissions = 0;
      // let conversions = 0;

      // snapshot.forEach(doc => {
      //   const referral = doc.data();
      //   totalReferrals++;
        
      //   if (referral.status === 'converted') {
      //     conversions++;
      //     totalEarnings += referral.commission || 9.80; // 20% of $49
      //   } else if (referral.status === 'pending') {
      //     pendingCommissions += referral.commission || 9.80;
      //   }
      // });

      // const conversionRate = totalReferrals > 0 ? (conversions / totalReferrals) * 100 : 0;

      setStats({
        totalReferrals: 0, // Placeholder - Firebase not available
        totalEarnings: 0, // Placeholder - Firebase not available
        pendingCommissions: 0, // Placeholder - Firebase not available
        conversionRate: '0.0' // Placeholder - Firebase not available
      });
    } catch (err) {
      console.error('Error fetching affiliate stats:', err);
    }
  };

  const fetchRecentReferrals = async (affiliateId) => {
    try {
      // const q = query(
      //   collection(db, 'referrals'), 
      //   where('affiliateId', '==', affiliateId),
      //   orderBy('createdAt', 'desc')
      // );
      // const snapshot = await getDocs(q);
      // const referrals = snapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data()
      // }));
      // setRecentReferrals(referrals);
      setRecentReferrals([]); // Placeholder - Firebase not available
    } catch (err) {
      console.error('Error fetching recent referrals:', err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // await createAffiliate({
      //   ...formData,
      //   affiliateId: formData.email, // Use email as affiliate ID
      //   status: 'approved', // Auto-approve for now
      //   commissionRate: 0.20 // 20% commission
      // });

      // setSuccess('Affiliate account created successfully!');
      // setIsNewAffiliate(false);
      
      // // Refresh the dashboard
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);

    } catch (err) {
      console.error('Error creating affiliate:', err);
      setError('Failed to create affiliate account');
    }
  };

  const copyReferralLink = () => {
    const referralLink = `https://www.mydatingdna.com?ref=${affiliateData?.affiliateId}`;
    navigator.clipboard.writeText(referralLink).then(() => {
      setSuccess('Referral link copied to clipboard!');
      setTimeout(() => setSuccess(null), 3000);
    });
  };

  if (loading) {
    return (
      <DashboardContainer>
        <LoadingSpinner>Loading affiliate dashboard...</LoadingSpinner>
      </DashboardContainer>
    );
  }

  if (isNewAffiliate) {
    return (
      <DashboardContainer>
        <Header>
          <Title>Become an Affiliate</Title>
          <Subtitle>Join our affiliate program and earn 20% commission on every sale!</Subtitle>
        </Header>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <SetupForm>
          <SectionTitle>🚀 Affiliate Application</SectionTitle>
          <form onSubmit={handleSubmitApplication}>
            <FormGroup>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="website">Website/Social Media (Optional)</Label>
              <Input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://your-website.com"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="paypalEmail">PayPal Email for Payments *</Label>
              <Input
                type="email"
                id="paypalEmail"
                name="paypalEmail"
                value={formData.paypalEmail}
                onChange={handleInputChange}
                required
                placeholder="paypal@example.com"
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Application
            </SubmitButton>
          </form>
        </SetupForm>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <Header>
        <Title>Affiliate Dashboard</Title>
        <Subtitle>Track your referrals and earnings</Subtitle>
      </Header>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      <StatsGrid>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatNumber>{stats.totalReferrals}</StatNumber>
          <StatLabel>Total Referrals</StatLabel>
        </StatCard>
        
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StatNumber>${stats.totalEarnings.toFixed(2)}</StatNumber>
          <StatLabel>Total Earnings</StatLabel>
        </StatCard>
        
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatNumber>${stats.pendingCommissions.toFixed(2)}</StatNumber>
          <StatLabel>Pending Commissions</StatLabel>
        </StatCard>
        
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StatNumber>{stats.conversionRate}%</StatNumber>
          <StatLabel>Conversion Rate</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionGrid>
        <Section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>
            🔗 Your Referral Link
          </SectionTitle>
          <ReferralLink>
            <p>Share this link to earn 20% commission on every sale:</p>
            <LinkText>
              https://www.mydatingdna.com?ref={affiliateData?.affiliateId}
            </LinkText>
            <CopyButton
              onClick={copyReferralLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📋 Copy Link
            </CopyButton>
          </ReferralLink>
        </Section>

        <Section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SectionTitle>
            💰 Recent Commissions
          </SectionTitle>
          <CommissionTable>
            <TableHeader>
              <div>Date</div>
              <div>Status</div>
              <div>Commission</div>
            </TableHeader>
            {recentReferrals.map((referral) => (
              <TableRow key={referral.id}>
                <div>{referral.createdAt?.toDate?.()?.toLocaleDateString() || 'Unknown'}</div>
                <div>
                  <span style={{ 
                    color: referral.status === 'converted' ? '#10b981' : '#f59e0b',
                    fontWeight: '600'
                  }}>
                    {referral.status || 'pending'}
                  </span>
                </div>
                <div>${(referral.commission || 9.80).toFixed(2)}</div>
              </TableRow>
            ))}
            {recentReferrals.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                No referrals yet. Start sharing your link!
              </div>
            )}
          </CommissionTable>
        </Section>
      </SectionGrid>
    </DashboardContainer>
  );
}

export default AffiliateDashboard;
