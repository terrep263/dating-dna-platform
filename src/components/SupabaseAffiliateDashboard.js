import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dbService } from '../supabase/config';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatsCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 2px solid rgba(255, 107, 157, 0.1);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const ReferralsTable = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.div`
  background: #f8f9fa;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  font-weight: 600;
  color: #333;
`;

const TableRow = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f3f4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 600;
  
  &.pending {
    background: #fff3cd;
    color: #856404;
  }
  
  &.converted {
    background: #d4edda;
    color: #155724;
  }
  
  &.expired {
    background: #f8d7da;
    color: #721c24;
  }
`;

const AffiliateForm = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FormTitle = styled.h3`
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
`;

const ReferralLink = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  border: 2px dashed #dee2e6;
  text-align: center;
  margin-top: 1rem;
`;

const LinkText = styled.code`
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  font-family: 'Courier New', monospace;
  color: #333;
  word-break: break-all;
`;

function SupabaseAffiliateDashboard() {
  const [affiliateData, setAffiliateData] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const [isNewAffiliate, setIsNewAffiliate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    company_name: '',
    website: '',
    commission_rate: 20.00
  });

  const initializeAffiliateDashboard = useCallback(async () => {
    try {
      setLoading(true);
      
      // Check if user is logged in (you can enhance this with proper auth)
      const userEmail = localStorage.getItem('userEmail') || 'test@example.com';
      
      if (!userEmail) {
        setError('Please log in to access affiliate dashboard');
        setLoading(false);
        return;
      }

      // Check if affiliate exists
      const existingAffiliate = await dbService.getAffiliateByUserId(userEmail);
      
      if (existingAffiliate) {
        setAffiliateData(existingAffiliate);
        await fetchAffiliateStats(existingAffiliate.id);
        await fetchRecentReferrals(existingAffiliate.id);
      } else {
        setIsNewAffiliate(true);
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Affiliate dashboard initialization error:', err);
      setError('Failed to load affiliate dashboard');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeAffiliateDashboard();
  }, [initializeAffiliateDashboard]);

  const fetchAffiliateStats = async (affiliateId) => {
    try {
      const stats = await dbService.getAffiliateStats(affiliateId);
      setAffiliateData(prev => ({ ...prev, ...stats }));
    } catch (err) {
      console.error('Error fetching affiliate stats:', err);
    }
  };

  const fetchRecentReferrals = async (affiliateId) => {
    try {
      const recentReferrals = await dbService.getReferralsByAffiliate(affiliateId);
      setReferrals(recentReferrals.slice(0, 10)); // Show last 10 referrals
    } catch (err) {
      console.error('Error fetching recent referrals:', err);
    }
  };

  const handleCreateAffiliate = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');
      
      const userEmail = localStorage.getItem('userEmail') || 'test@example.com';
      
      const affiliateData = {
        user_id: userEmail, // In real app, this would be the actual user ID
        affiliate_id: `aff_${Date.now()}`, // Generate unique affiliate ID
        company_name: formData.company_name,
        website: formData.website,
        commission_rate: parseFloat(formData.commission_rate),
        status: 'active'
      };

      const newAffiliate = await dbService.createAffiliate(affiliateData);
      
      setAffiliateData(newAffiliate);
      setIsNewAffiliate(false);
      setSuccess('Affiliate account created successfully!');
      
      // Clear form
      setFormData({
        company_name: '',
        website: '',
        commission_rate: 20.00
      });
      
    } catch (err) {
      console.error('Error creating affiliate:', err);
      setError('Failed to create affiliate account');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyReferralLink = () => {
    const link = `https://www.mydatingdna.com?ref=${affiliateData?.affiliate_id}`;
    navigator.clipboard.writeText(link);
    setSuccess('Referral link copied to clipboard!');
  };

  if (loading) {
    return (
      <Container>
        <ContentWrapper>
          <LoadingSpinner>Loading affiliate dashboard...</LoadingSpinner>
        </ContentWrapper>
      </Container>
    );
  }

  if (isNewAffiliate) {
    return (
      <Container>
        <ContentWrapper>
          <Header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Become an Affiliate</Title>
            <Subtitle>
              Join our affiliate program and earn commissions for every successful referral
            </Subtitle>
          </Header>

          <AffiliateForm
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Create Your Affiliate Account</FormTitle>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
            
            <form onSubmit={handleCreateAffiliate}>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="company_name">Company Name</Label>
                  <Input
                    type="text"
                    id="company_name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your company name"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="commission_rate">Commission Rate (%)</Label>
                  <Input
                    type="number"
                    id="commission_rate"
                    name="commission_rate"
                    value={formData.commission_rate}
                    onChange={handleInputChange}
                    min="5"
                    max="50"
                    step="0.01"
                    required
                  />
                </FormGroup>
              </FormGrid>
              
              <div style={{ textAlign: 'center' }}>
                <Button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? 'Creating Account...' : 'Create Affiliate Account'}
                </Button>
              </div>
            </form>
          </AffiliateForm>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Affiliate Dashboard</Title>
          <Subtitle>
            Track your referrals, earnings, and performance
          </Subtitle>
        </Header>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <DashboardGrid>
          <StatsCard
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StatNumber>${affiliateData?.total_earnings?.toFixed(2) || '0.00'}</StatNumber>
            <StatLabel>Total Earnings</StatLabel>
          </StatsCard>
          
          <StatsCard
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StatNumber>{affiliateData?.total_referrals || 0}</StatNumber>
            <StatLabel>Total Referrals</StatLabel>
          </StatsCard>
          
          <StatsCard
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatNumber>{affiliateData?.commission_rate || 20}%</StatNumber>
            <StatLabel>Commission Rate</StatLabel>
          </StatsCard>
        </DashboardGrid>

        <Section>
          <SectionTitle>Your Referral Link</SectionTitle>
          <ReferralLink>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              Share this link to start earning commissions:
            </p>
            <LinkText>
              https://www.mydatingdna.com?ref={affiliateData?.affiliate_id}
            </LinkText>
            <Button
              onClick={copyReferralLink}
              style={{ marginTop: '1rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Copy Link
            </Button>
          </ReferralLink>
        </Section>

        <Section>
          <SectionTitle>Recent Referrals</SectionTitle>
          <ReferralsTable>
            <TableHeader>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem' }}>
                <div>Date</div>
                <div>Status</div>
                <div>Amount</div>
                <div>Commission</div>
              </div>
            </TableHeader>
            
            {referrals.length > 0 ? (
              referrals.map((referral) => (
                <TableRow key={referral.id}>
                  <div>{new Date(referral.created_at).toLocaleDateString()}</div>
                  <div>
                    <StatusBadge className={referral.status}>
                      {referral.status}
                    </StatusBadge>
                  </div>
                  <div>
                    {referral.conversion_amount ? `$${referral.conversion_amount}` : 'Pending'}
                  </div>
                  <div>
                    {referral.commission_earned ? `$${referral.commission_earned}` : 'Pending'}
                  </div>
                </TableRow>
              ))
            ) : (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                No referrals yet. Share your link to start earning!
              </div>
            )}
          </ReferralsTable>
        </Section>
      </ContentWrapper>
    </Container>
  );
}

export default SupabaseAffiliateDashboard;
