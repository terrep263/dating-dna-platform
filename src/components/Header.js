import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { media, spacing, fontSizes, touchFriendly, accessibility } from '../utils/responsive';


const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${spacing.md} ${spacing.xl};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  
  ${media.maxMd} {
    padding: ${spacing.sm} ${spacing.md};
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: ${fontSizes.xxl};
  ${touchFriendly.link}
  ${accessibility.focusVisible}
  
  span {
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  ${media.maxMd} {
    font-size: ${fontSizes.xl};
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  border-radius: 50%;
  margin-right: ${spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${fontSizes.sm};
  
  ${media.maxMd} {
    width: 28px;
    height: 28px;
    font-size: ${fontSizes.xs};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  ${media.maxMd} {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  font-size: ${fontSizes.md};
  ${touchFriendly.link}
  ${accessibility.focusVisible}

  &:hover {
    color: #ff6b9d;
  }

  &.active {
    color: #ff6b9d;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
      border-radius: 1px;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: ${spacing.md};
  align-items: center;

  ${media.maxMd} {
    display: none;
  }
`;

const Button = styled(motion.button)`
  ${touchFriendly.button}
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${fontSizes.sm};
  ${accessibility.focusVisible}

  &.primary {
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 157, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    color: #ff6b9d;
    border: 2px solid #ff6b9d;
    
    &:hover {
      background: #ff6b9d;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${fontSizes.xxl};
  cursor: pointer;
  color: #333;
  ${touchFriendly.button}
  ${accessibility.focusVisible}

  ${media.maxMd} {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: ${spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  flex-direction: column;
  gap: ${spacing.md};

  ${media.maxMd} {
    display: flex;
  }
`;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  const isActive = (path) => location.pathname === path;



  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoIcon>DNA</LogoIcon>
          <span>My Dating DNA™</span>
        </Logo>

        <NavLinks>
          <NavLink to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/how-it-works" className={isActive('/how-it-works') ? 'active' : ''}>
            How It Works
          </NavLink>
          <NavLink to="/dna-types" className={isActive('/dna-types') ? 'active' : ''}>
            DNA Types
          </NavLink>
          <NavLink to="/premium" className={isActive('/premium') ? 'active' : ''}>
            Premium
          </NavLink>
          <NavLink to="/education" className={isActive('/education') ? 'active' : ''}>
            Education
          </NavLink>
        </NavLinks>

        <AuthButtons>
          <Button
            as={Link}
            to="/login"
            className="secondary"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
              Login
            </motion.span>
          </Button>
        </AuthButtons>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </NavLink>
            <NavLink to="/dna-types" onClick={() => setIsMobileMenuOpen(false)}>
              DNA Types
            </NavLink>
            <NavLink to="/premium" onClick={() => setIsMobileMenuOpen(false)}>
              Premium
            </NavLink>
            <NavLink to="/education" onClick={() => setIsMobileMenuOpen(false)}>
              Education
            </NavLink>
            <Button
              as={Link}
              to="/login"
              className="secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Button>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}

export default Header; 