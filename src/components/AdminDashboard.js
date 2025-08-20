import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Firebase removed - not needed for core functionality
// import { 
//   collection, 
//   getDocs, 
//   query, 
//   orderBy, 
//   limit,
//   doc,
//   deleteDoc 
// } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import { db, auth } from '../firebase/config';
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

const UserList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.md};
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

const UserEmail = styled.div`
  font-weight: 600;
  color: #333;
`;

const UserMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ActionButton = styled.button`
  padding: ${spacing.xs} ${spacing.sm};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.edit {
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &.delete {
    background: #ef4444;
    color: white;
    margin-left: ${spacing.xs};
    
    &:hover {
      background: #dc2626;
    }
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

const AffiliateLink = styled(motion.a)`
  background: #3b82f6;
  color: white;
  border: none;
  padding: ${spacing.sm} ${spacing.md};
  font-size: ${fontSizes.sm};
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  top: ${spacing.lg};
  right: 120px;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }
`;

function AdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAssessments: 0,
    totalPayments: 0,
    totalRevenue: 0
  });
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);

  // Check if user is admin
  const checkAdminAccess = () => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    const adminEmail = localStorage.getItem('adminEmail');
    const adminEmails = ['admin@mydatingdna.com', 'terrep263@gmail.com'];
    
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
        
        // Fetch stats and data
        await Promise.all([
          fetchStats(),
          fetchRecentUsers(),
          fetchRecentPayments()
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

  const fetchStats = async () => {
    try {
      // Fetch users count
      // const usersSnapshot = await getDocs(collection(db, 'users'));
      // const totalUsers = usersSnapshot.size;

      // Fetch assessments count
      // const assessmentsSnapshot = await getDocs(collection(db, 'assessments'));
      // const totalAssessments = assessmentsSnapshot.size;

      // Fetch payments
      // const paymentsSnapshot = await getDocs(collection(db, 'payments'));
      // const totalPayments = paymentsSnapshot.size;
      
      // Calculate total revenue
      // let totalRevenue = 0;
      // paymentsSnapshot.forEach(doc => {
      //   const payment = doc.data();
      //   if (payment.status === 'completed' && payment.amount) {
      //     totalRevenue += parseFloat(payment.amount);
      //   }
      // });

      setStats({
        totalUsers: 0, // Placeholder - Firebase not available
        totalAssessments: 0, // Placeholder - Firebase not available
        totalPayments: 0, // Placeholder - Firebase not available
        totalRevenue: 0 // Placeholder - Firebase not available
      });
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const fetchRecentUsers = async () => {
    try {
      // const q = query(
      //   collection(db, 'users'), 
      //   orderBy('createdAt', 'desc'), 
      //   limit(10)
      // );
      // const snapshot = await getDocs(q);
      // const users = snapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data()
      // }));
      // setRecentUsers(users);
      setRecentUsers([]); // Placeholder - Firebase not available
    } catch (err) {
      console.error('Error fetching recent users:', err);
    }
  };

  const fetchRecentPayments = async () => {
    try {
      // const q = query(
      //   collection(db, 'payments'), 
      //   orderBy('createdAt', 'desc'), 
      //   limit(10)
      // );
      // const snapshot = await getDocs(q);
      // const payments = snapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data()
      // }));
      // setRecentPayments(payments);
      setRecentPayments([]); // Placeholder - Firebase not available
    } catch (err) {
      console.error('Error fetching recent payments:', err);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        // await deleteDoc(doc(db, 'users', userId));
        // await fetchRecentUsers(); // Refresh the list
        // await fetchStats(); // Update stats
        alert('User deletion not available - Firebase not configured');
      } catch (err) {
        console.error('Error deleting user:', err);
        alert('Failed to delete user');
      }
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

  if (loading) {
    return (
      <DashboardContainer>
        <LoadingSpinner>Loading admin dashboard...</LoadingSpinner>
      </DashboardContainer>
    );
  }

  if (!isAdmin) {
    return (
      <DashboardContainer>
        <AccessDenied>
          <h2>🔒 Access Denied</h2>
          <p>You don't have permission to access the admin dashboard.</p>
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
        <AffiliateLink
          href="https://affiliate.mydatingdna.com/accessatlv"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Affiliate Admin
        </AffiliateLink>
        <LogoutButton
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </LogoutButton>
        <Title>Admin Dashboard</Title>
        <Subtitle>Manage your Dating DNA Platform</Subtitle>
      </Header>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <StatsGrid>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatNumber>{stats.totalUsers}</StatNumber>
          <StatLabel>Total Users</StatLabel>
        </StatCard>
        
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StatNumber>{stats.totalAssessments}</StatNumber>
          <StatLabel>Assessments Taken</StatLabel>
        </StatCard>
        
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatNumber>{stats.totalPayments}</StatNumber>
          <StatLabel>Total Payments</StatLabel>
        </StatCard>
        
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StatNumber>${stats.totalRevenue.toFixed(2)}</StatNumber>
          <StatLabel>Total Revenue</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionGrid>
        <Section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>
            👥 Recent Users
          </SectionTitle>
          <UserList>
            {recentUsers.map((user) => (
              <UserItem key={user.id}>
                <UserInfo>
                  <UserEmail>{user.email}</UserEmail>
                  <UserMeta>
                    Created: {user.createdAt?.toDate?.()?.toLocaleDateString() || 'Unknown'}
                  </UserMeta>
                </UserInfo>
                <div>
                  <ActionButton className="edit">Edit</ActionButton>
                  <ActionButton 
                    className="delete"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </ActionButton>
                </div>
              </UserItem>
            ))}
          </UserList>
        </Section>

        <Section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SectionTitle>
            💳 Recent Payments
          </SectionTitle>
          <UserList>
            {recentPayments.map((payment) => (
              <UserItem key={payment.id}>
                <UserInfo>
                  <UserEmail>${payment.amount}</UserEmail>
                  <UserMeta>
                    Status: {payment.status || 'Unknown'} | 
                    Date: {payment.createdAt?.toDate?.()?.toLocaleDateString() || 'Unknown'}
                  </UserMeta>
                </UserInfo>
                <div>
                  <ActionButton className="edit">View</ActionButton>
                </div>
              </UserItem>
            ))}
          </UserList>
        </Section>
      </SectionGrid>
    </DashboardContainer>
  );
}

export default AdminDashboard;
