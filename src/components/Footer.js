import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: white;
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  .logo-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <div className="logo-icon">DNA</div>
            My Dating DNA™
          </Logo>
          <FooterText>
            Discover your unique dating personality through our proprietary, research-informed assessment. 
            Understand how you connect, what draws you, how you decide, and how you prefer relationships to grow.
          </FooterText>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              📘
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              🐦
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              📷
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              💼
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Platform</FooterTitle>
          <FooterLink to="/assessment">Take Assessment</FooterLink>
          <FooterLink to="/login">Sign In</FooterLink>
          <FooterLink to="/checkout?type=single">Create Account</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Learn</FooterTitle>
          <FooterLink to="/about">About My Dating DNA™</FooterLink>
          <FooterLink to="/how-it-works">How It Works</FooterLink>
          <FooterLink to="/dna-types">DNA Types</FooterLink>
          <FooterLink to="/compatibility">Compatibility Guide</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink to="/help">Help Center</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/feedback">Feedback</FooterLink>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <Copyright>
          © 2025 My Dating DNA™. All rights reserved. "My Dating DNA" and associated materials are proprietary.
        </Copyright>
        <LegalLinks>
          <LegalLink to="/privacy">Privacy Policy</LegalLink>
          <LegalLink to="/terms">Terms of Service</LegalLink>
          <LegalLink to="/cookies">Cookie Policy</LegalLink>
          <LegalLink to="/accessibility">Accessibility</LegalLink>
        </LegalLinks>
      </BottomBar>
    </FooterContainer>
  );
}

export default Footer; 