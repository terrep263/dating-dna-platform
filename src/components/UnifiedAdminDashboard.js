import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Firebase removed - not needed for core functionality
// import { 
//   collection, 
//   getDocs
// } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import { db, auth } from '../firebase/config';
import { media, spacing, fontSizes } from '../utils/responsive';

// Styled Components
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
  position: relative;
  
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

const LogoutButton = styled(motion.button)`
  background: #ef4444;
  color: white;
  border: none;
  padding: ${spacing.sm} ${spacing.md};
  font-size: ${fontSizes.sm};
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: ${spacing.lg};
  right: ${spacing.lg};
  
  &:hover {
    background: #dc2626;
    transform: translateY(-1px);
  }
`;

// Platform Overview Cards
const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.lg};
  margin-bottom: ${spacing.xl};
`;

const PlatformCard = styled(motion.div)`
  background: white;
  padding: ${spacing.xl};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 107, 157, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 107, 157, 0.15);
  }
`;

const PlatformIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${spacing.md};
`;

const PlatformTitle = styled.h3`
  font-size: ${fontSizes.xl};
  font-weight: 700;
  color: #333;
  margin-bottom: ${spacing.sm};
`;

const PlatformStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.md};
  margin-bottom: ${spacing.md};
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b9d;
`;

const StatLabel = styled.div`
  font-size: ${fontSizes.sm};
  color: #666;
`;

const PlatformStatus = styled.div`
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 8px;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  text-align: center;
  
  &.active {
    background: #dcfce7;
    color: #166534;
  }
  
  &.coming-soon {
    background: #fef3c7;
    color: #92400e;
  }
`;

const PlatformActions = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-top: ${spacing.md};
`;

const ActionButton = styled.button`
  padding: ${spacing.xs} ${spacing.sm};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  flex: 1;
  
  &.primary {
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &.secondary {
    background: #f3f4f6;
    color: #374151;
    
    &:hover {
      background: #e5e7eb;
    }
  }
`;

// Cross-Platform Analytics
const AnalyticsSection = styled(motion.div)`
  background: white;
  padding: ${spacing.xl};
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(255, 107, 157, 0.1);
  margin-bottom: ${spacing.xl};
`;

const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.lg};
`;

const AnalyticsCard = styled.div`
  text-align: center;
  padding: ${spacing.lg};
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
`;

const AnalyticsNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: ${spacing.xs};
`;

const AnalyticsLabel = styled.div`
  font-size: ${fontSizes.md};
  color: #666;
  font-weight: 500;
`;

// Loading and Error States
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

const AccessDenied = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`;

const BackButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: ${spacing.md} ${spacing.lg};
  font-size: ${fontSizes.md};
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  margin-top: ${spacing.lg};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
  }
`;

function UnifiedAdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [crossPlatformStats, setCrossPlatformStats] = useState({
    totalUsers: 0,
    totalRevenue: 0,
    totalAssessments: 0,
    totalAffiliates: 0
  });
  const [platformStats, setPlatformStats] = useState({
    mainPlatform: { users: 0, revenue: 0, assessments: 0 },
    affiliatePlatform: { affiliates: 0, referrals: 0, commissions: 0 },
    coursePlatform: { courses: 0, students: 0, revenue: 0 }
  });

  // Check if user is admin
  const checkAdminAccess = () => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    const adminEmail = localStorage.getItem('adminEmail');
    const adminEmails = [
      'admin@mydatingdna.com', 
      'terrep263@gmail.com',
      'test@mydatingdna.com' // Temporary test account - REMOVE AFTER TESTING
    ];
    
    if (adminLoggedIn === 'true' && adminEmail && adminEmails.includes(adminEmail)) {
      return true;
    }
    
    return false;
  };

  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        setLoading(true);
        
        // Check admin access
        if (!checkAdminAccess()) {
          setIsAdmin(false);
          setLoading(false);
          return;
        }
        
        setIsAdmin(true);
        
        // Fetch cross-platform data
        await Promise.all([
          fetchCrossPlatformStats(),
          fetchPlatformStats()
        ]);
        
      } catch (err) {
        console.error('Dashboard initialization error:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    initializeDashboard();
  }, []);

  const fetchCrossPlatformStats = async () => {
    try {
      // Fetch users count
      // const usersSnapshot = await getDocs(collection(db, 'users'));
      // const totalUsers = usersSnapshot.size;

      // Fetch assessments count
      // const assessmentsSnapshot = await getDocs(collection(db, 'assessments'));
      // const totalAssessments = assessmentsSnapshot.size;

      // Fetch payments
      // const paymentsSnapshot = await getDocs(collection(db, 'payments'));
      // let totalRevenue = 0;
      // paymentsSnapshot.forEach(doc => {
      //   const payment = doc.data();
      //   if (payment.status === 'completed' && payment.amount) {
      //     totalRevenue += parseFloat(payment.amount);
      //   }
      // });

      // Fetch affiliates count
      // const affiliatesSnapshot = await getDocs(collection(db, 'affiliates'));
      // const totalAffiliates = affiliatesSnapshot.size;

      setCrossPlatformStats({
        totalUsers: 0, // Placeholder - Firebase not available
        totalRevenue: 0, // Placeholder - Firebase not available
        totalAssessments: 0, // Placeholder - Firebase not available
        totalAffiliates: 0 // Placeholder - Firebase not available
      });
    } catch (err) {
      console.error('Error fetching cross-platform stats:', err);
    }
  };

  const fetchPlatformStats = async () => {
    try {
      // Main Platform Stats
      // const usersSnapshot = await getDocs(collection(db, 'users'));
      // const assessmentsSnapshot = await getDocs(collection(db, 'assessments'));
      // const paymentsSnapshot = await getDocs(collection(db, 'payments'));
      
      // let mainRevenue = 0;
      // paymentsSnapshot.forEach(doc => {
      //   const payment = doc.data();
      //   if (payment.status === 'completed' && payment.amount) {
      //     mainRevenue += parseFloat(payment.amount);
      //   }
      // });

      // Affiliate Platform Stats
      // const affiliatesSnapshot = await getDocs(collection(db, 'affiliates'));
      // const referralsSnapshot = await getDocs(collection(db, 'referrals'));
      
      // let totalCommissions = 0;
      // referralsSnapshot.forEach(doc => {
      //   const referral = doc.data();
      //   if (referral.commission) {
      //     totalCommissions += parseFloat(referral.commission);
      //   }
      // });

      setPlatformStats({
        mainPlatform: {
          users: 0, // Placeholder - Firebase not available
          revenue: 0, // Placeholder - Firebase not available
          assessments: 0 // Placeholder - Firebase not available
        },
        affiliatePlatform: {
          affiliates: 0, // Placeholder - Firebase not available
          referrals: 0, // Placeholder - Firebase not available
          commissions: 0 // Placeholder - Firebase not available
        },
        coursePlatform: {
          courses: 0, // Placeholder for future
          students: 0, // Placeholder for future
          revenue: 0 // Placeholder for future
        }
      });
    } catch (err) {
      console.error('Error fetching platform stats:', err);
    }
  };

  const handleLogout = async () => {
    try {
      // await signOut(auth);
      localStorage.removeItem('adminEmail');
      localStorage.removeItem('adminLoggedIn');
      navigate('/admin-login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handlePlatformAction = (platform, action) => {
    switch (platform) {
      case 'main':
        if (action === 'manage') {
          // Navigate to main platform management
          console.log('Navigate to main platform management');
        }
        break;
      case 'affiliate':
        if (action === 'manage') {
          // Navigate to affiliate management
          console.log('Navigate to affiliate management');
        }
        break;
      case 'course':
        if (action === 'manage') {
          alert('Course platform coming soon!');
        }
        break;
      default:
        break;
    }
  };

  if (loading) {
    return (
      <DashboardContainer>
        <LoadingSpinner>Loading unified admin dashboard...</LoadingSpinner>
      </DashboardContainer>
    );
  }

  if (!isAdmin) {
    return (
      <DashboardContainer>
        <AccessDenied>
          <h2>🔒 Access Denied</h2>
          <p>You don't have permission to access the unified admin dashboard.</p>
          <BackButton
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back Home
          </BackButton>
        </AccessDenied>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <Header>
        <LogoutButton
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </LogoutButton>
        <Title>Unified Admin Dashboard</Title>
        <Subtitle>Manage all platforms from one central location</Subtitle>
      </Header>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Cross-Platform Analytics */}
      <AnalyticsSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ marginBottom: spacing.lg, color: '#333', fontSize: fontSizes.xl }}>
          📊 Cross-Platform Overview
        </h2>
        <AnalyticsGrid>
          <AnalyticsCard>
            <AnalyticsNumber>{crossPlatformStats.totalUsers}</AnalyticsNumber>
            <AnalyticsLabel>Total Users</AnalyticsLabel>
          </AnalyticsCard>
          <AnalyticsCard>
            <AnalyticsNumber>${crossPlatformStats.totalRevenue.toFixed(2)}</AnalyticsNumber>
            <AnalyticsLabel>Total Revenue</AnalyticsLabel>
          </AnalyticsCard>
          <AnalyticsCard>
            <AnalyticsNumber>{crossPlatformStats.totalAssessments}</AnalyticsNumber>
            <AnalyticsLabel>Assessments Taken</AnalyticsLabel>
          </AnalyticsCard>
          <AnalyticsCard>
            <AnalyticsNumber>{crossPlatformStats.totalAffiliates}</AnalyticsNumber>
            <AnalyticsLabel>Active Affiliates</AnalyticsLabel>
          </AnalyticsCard>
        </AnalyticsGrid>
      </AnalyticsSection>

      {/* Platform Management */}
      <PlatformGrid>
        {/* Main Platform */}
        <PlatformCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handlePlatformAction('main', 'manage')}
        >
          <PlatformIcon>🧬</PlatformIcon>
          <PlatformTitle>Main Platform</PlatformTitle>
          <PlatformStats>
            <Stat>
              <StatNumber>{platformStats.mainPlatform.users}</StatNumber>
              <StatLabel>Users</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>{platformStats.mainPlatform.assessments}</StatNumber>
              <StatLabel>Assessments</StatLabel>
            </Stat>
          </PlatformStats>
          <PlatformStatus className="active">Active</PlatformStatus>
          <PlatformActions>
            <ActionButton 
              className="primary"
              onClick={(e) => {
                e.stopPropagation();
                handlePlatformAction('main', 'manage');
              }}
            >
              Manage
            </ActionButton>
            <ActionButton 
              className="secondary"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://www.mydatingdna.com', '_blank');
              }}
            >
              View Site
            </ActionButton>
          </PlatformActions>
        </PlatformCard>

        {/* Affiliate Platform */}
        <PlatformCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => handlePlatformAction('affiliate', 'manage')}
        >
          <PlatformIcon>🤝</PlatformIcon>
          <PlatformTitle>Affiliate Platform</PlatformTitle>
          <PlatformStats>
            <Stat>
              <StatNumber>{platformStats.affiliatePlatform.affiliates}</StatNumber>
              <StatLabel>Affiliates</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>{platformStats.affiliatePlatform.referrals}</StatNumber>
              <StatLabel>Referrals</StatLabel>
            </Stat>
          </PlatformStats>
          <PlatformStatus className="active">Active</PlatformStatus>
          <PlatformActions>
            <ActionButton 
              className="primary"
              onClick={(e) => {
                e.stopPropagation();
                handlePlatformAction('affiliate', 'manage');
              }}
            >
              Manage
            </ActionButton>
            <ActionButton 
              className="secondary"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://affiliate.mydatingdna.com', '_blank');
              }}
            >
              View Site
            </ActionButton>
          </PlatformActions>
        </PlatformCard>

        {/* Course Platform */}
        <PlatformCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => handlePlatformAction('course', 'manage')}
        >
          <PlatformIcon>📚</PlatformIcon>
          <PlatformTitle>Course Platform</PlatformTitle>
          <PlatformStats>
            <Stat>
              <StatNumber>{platformStats.coursePlatform.courses}</StatNumber>
              <StatLabel>Courses</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>{platformStats.coursePlatform.students}</StatNumber>
              <StatLabel>Students</StatLabel>
            </Stat>
          </PlatformStats>
          <PlatformStatus className="coming-soon">Coming Soon</PlatformStatus>
          <PlatformActions>
            <ActionButton 
              className="primary"
              onClick={(e) => {
                e.stopPropagation();
                handlePlatformAction('course', 'manage');
              }}
            >
              Coming Soon
            </ActionButton>
            <ActionButton 
              className="secondary"
              onClick={(e) => {
                e.stopPropagation();
                alert('Course platform development planned!');
              }}
            >
              Learn More
            </ActionButton>
          </PlatformActions>
        </PlatformCard>
      </PlatformGrid>
    </DashboardContainer>
  );
}

export default UnifiedAdminDashboard;
