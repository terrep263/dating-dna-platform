import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const HomeContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  color: #111827;
`;

const ReadingProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  z-index: 1000;
  transition: width 0.1s;
`;

const HeroSection = styled.section`
  position: relative;
  background-image: url('/hero-bored-date.jpg');
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
  isolation: isolate;
  color: white;
  height: 388px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  /* Fallback background color in case image fails to load */
  background-color: #8b5cf6;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.65) 0%, rgba(196, 69, 105, 0.65) 50%, rgba(139, 92, 246, 0.65) 100%);
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center 20%;
  }
`;

const HeroContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const Button = styled(motion.button)`
  background: ${props => props.variant === 'primary' ? '#8b5cf6' : props.variant === 'secondary' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'};
  color: ${props => props.variant === 'primary' ? '#ffffff' : props.variant === 'secondary' ? '#ffffff' : '#8b5cf6'};
  border: ${props => props.variant === 'secondary' ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'};
  padding: ${props => props.size === 'large' ? '1rem 2rem' : '0.75rem 1.5rem'};
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    filter: ${props => props.variant === 'primary' ? 'brightness(0.95)' : 'none'};
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
    transform: ${props => props.variant === 'secondary' ? 'translateY(-1px)' : 'none'};
  }
`;

const Link = styled.a`
  color: #8b5cf6;
  text-decoration: none;
  
  &:hover {
    color: #6f4ef0;
  }
`;

const Section = styled.section`
  padding: 4rem 1.5rem;
  background: ${props => props.bg === 'white' ? '#ffffff' : props.bg === 'tint' ? 'linear-gradient(180deg, rgba(255, 107, 157, 0.05), rgba(139, 92, 246, 0.05))' : '#f9fafb'};
`;

const SectionContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  &.cols-2 {
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  &.cols-3 {
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  &.cols-4 {
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-left: ${props => props.$borderLeft ? `4px solid ${props.$borderLeft}` : 'none'};
  border-top: ${props => props.$borderTop ? `4px solid ${props.$borderTop}` : 'none'};
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const CardList = styled.ul`
  color: #374151;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  space-y: 0.5rem;
  list-style: disc;
  list-style-position: inside;
`;

const CardListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CTAButton = styled(motion.a)`
  background: #8b5cf6;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    filter: brightness(0.95);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }
`;

function HomePage() {
  useEffect(() => {
    // Reading progress bar
    const handleScroll = () => {
      const progress = document.getElementById('progress');
      if (progress) {
        const h = document.documentElement;
        const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
        progress.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = (type) => {
    const urls = {
      single: process.env.REACT_APP_THRIVECART_SINGLE_URL_LIVE,
      couples: process.env.REACT_APP_THRIVECART_COUPLES_URL_LIVE
    };
    
    if (urls[type]) {
      window.location.href = urls[type];
    }
  };

  return (
    <HomeContainer>
      {/* Reading Progress Bar */}
      <ReadingProgress id="progress" />

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Break the Cycle. Find Love That Lasts.</HeroTitle>
          <HeroSubtitle>
            Your Dating DNA™ reveals the hidden patterns sabotaging your love life — and gives you the plan to finally choose differently.
          </HeroSubtitle>
          <ButtonGroup>
            <Button as="a" href="#break-cycle" variant="white" size="large">
              See the Cycle
            </Button>
            <Button onClick={() => handleCheckout('single')} variant="primary" size="large">
              Singles Assessment – $49
            </Button>
            <Button onClick={() => handleCheckout('couples')} variant="secondary" size="large">
              Couples Assessment – $79
            </Button>
          </ButtonGroup>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Button 
              as="a"
              href="/free-assessment" 
              style={{ 
                background: '#ffd700', 
                color: '#333', 
                fontSize: '1rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              🎁 Try Free Preview (3 Questions)
            </Button>
          </div>
        </HeroContent>
      </HeroSection>

      {/* Pain → Solution Visual Flow */}
      <Section id="break-cycle" bg="white">
        <SectionContent>
          <SectionTitle>Why You Keep Ending Up Here — and How We Break the Cycle</SectionTitle>
          <Grid className="cols-4">
            <Card 
              $borderLeft="#c44569"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardIcon>💔</CardIcon>
              <CardTitle>Meet Someone "Different"</CardTitle>
              <CardText>
                Feels exciting at first, but you're drawn by the same unconscious attraction patterns. 
                <Link href="/education"> Learn more</Link>.
              </CardText>
            </Card>
            
            <Card 
              $borderLeft="#ff6b9d"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>🚩</CardIcon>
              <CardTitle>Ignore Red Flags</CardTitle>
              <CardText>
                Chemistry feels like compatibility, so warning signs get overlooked. 
                <Link href="/education"> See dysfunctionships</Link>.
              </CardText>
            </Card>
            
            <Card 
              $borderLeft="#c44569"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardIcon>⏳</CardIcon>
              <CardTitle>Invest Months or Years</CardTitle>
              <CardText>
                The relationship drains you emotionally but feels hard to leave. 
                <Link href="/education"> Why it sticks</Link>.
              </CardText>
            </Card>
            
            <Card 
              $borderLeft="#8b5cf6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CardIcon>🔄</CardIcon>
              <CardTitle>Start Again</CardTitle>
              <CardText>
                Different face, same outcome — and the cycle repeats. 
                <Link href="/education"> The pattern</Link>.
              </CardText>
            </Card>
          </Grid>
          
          {/* Break Point CTA */}
          <div style={{ textAlign: 'center' }}>
            <CTAButton href="#how">
              🚀 Break the Cycle With Dating DNA™
            </CTAButton>
          </div>
        </SectionContent>
      </Section>

      {/* Choose Your Path (Singles vs Couples) */}
      <Section id="paths" bg="tint">
        <SectionContent>
          <SectionTitle>Choose Your Path</SectionTitle>
          <Grid className="cols-3">
            <Card 
              $borderTop="#ffd700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardTitle>🎁 Free Preview — $0</CardTitle>
              <CardList>
                <CardListItem>3-question personality preview</CardListItem>
                <CardListItem>Basic DNA type insight</CardListItem>
                <CardListItem>Sample of what full assessment offers</CardListItem>
              </CardList>
              <Button as="a" href="/free-assessment" style={{ 
                background: '#ffd700', 
                color: '#333', 
                marginTop: '1rem' 
              }}>
                Try Free Preview
              </Button>
            </Card>
            
            <Card 
              $borderTop="#8b5cf6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardTitle>Singles Assessment — $49</CardTitle>
              <CardList>
                <CardListItem>32-question, research‑informed assessment</CardListItem>
                <CardListItem>Your personal compatibility blueprint (4 strands)</CardListItem>
                <CardListItem>Action steps to spot red flags early and choose better</CardListItem>
              </CardList>
              <Button onClick={() => handleCheckout('single')} variant="primary" size="large" style={{ marginTop: '1rem' }}>
                Start Singles — $49
              </Button>
            </Card>
            
            <Card 
              $borderTop="#c44569"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardTitle>Couples Assessment — $79</CardTitle>
              <CardList>
                <CardListItem>Each partner completes the same 32-question assessment</CardListItem>
                <CardListItem>Shared view of alignment across Social Energy, Attraction Style, Decision Filter, and Relationship Pace</CardListItem>
                <CardListItem>Clear guidance on strengths, friction points, and pacing</CardListItem>
              </CardList>
              <Button onClick={() => handleCheckout('couples')} variant="primary" size="large" style={{ marginTop: '1rem' }}>
                Start Couples — $79
              </Button>
            </Card>
          </Grid>
        </SectionContent>
      </Section>

      {/* How It Works → New Path */}
      <Section id="how" bg="gray">
        <SectionContent>
          <SectionTitle>Your New Path to Real Compatibility</SectionTitle>
          <Grid className="cols-3">
            <Card 
              $borderTop="#8b5cf6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardIcon>🧬</CardIcon>
              <CardTitle>1) Take the Assessment</CardTitle>
              <CardText>
                32 targeted, research‑informed questions uncover your <strong>Social Energy</strong>, <strong>Attraction Style</strong>, <strong>Decision Filter</strong>, and <strong>Relationship Pace</strong>. 
                <Link href="/how-it-works"> How it works</Link>.
              </CardText>
            </Card>
            
            <Card 
              $borderTop="#16a34a"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>📄</CardIcon>
              <CardTitle>2) Get Your DNA Code</CardTitle>
              <CardText>
                A personalized compatibility blueprint that explains past failures and shows how to choose better. 
                <Link href="/dna-types"> Explore strands</Link>.
              </CardText>
            </Card>
            
            <Card 
              $borderTop="#2563eb"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardIcon>❤️</CardIcon>
              <CardTitle>3) Choose With Clarity</CardTitle>
              <CardText>
                Spot red flags early, date strategically, and attract partners who truly fit your personality. 
                <Link href="/education"> Authentic attraction</Link>.
              </CardText>
            </Card>
          </Grid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button onClick={() => handleCheckout('single')} variant="primary" size="large">
              Start My Assessment – $49
            </Button>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
              Secure payment • Instant access • Results you can use immediately
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button 
                as="a"
                href="/free-assessment" 
                style={{ 
                  background: '#ffd700', 
                  color: '#333', 
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem'
                }}
              >
                🎁 Try Free Preview First
              </Button>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* Science / Four Strands */}
      <Section id="science" bg="white">
        <SectionContent>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '3rem' }}>🧪</div>
            <SectionTitle style={{ marginBottom: '0.5rem' }}>The Four Strands That Drive Compatibility</SectionTitle>
            <p style={{ color: '#6b7280' }}>Dating DNA™ is organized around four dimensions referenced throughout our Education Hub.</p>
          </div>
          
          <Grid className="cols-4">
            <Card 
              $borderLeft="#3b82f6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardTitle>Social Energy</CardTitle>
              <CardText>Who energizes you vs. drains you — core to day‑to‑day compatibility.</CardText>
            </Card>
            
            <Card 
              $borderLeft="#ec4899"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardTitle>Attraction Style</CardTitle>
              <CardText>What reliably pulls you in — including patterns that masquerade as "chemistry."</CardText>
            </Card>
            
            <Card 
              $borderLeft="#16a34a"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardTitle>Decision Filter</CardTitle>
              <CardText>How you choose (or avoid choosing) a partner — and where it backfires.</CardText>
            </Card>
            
            <Card 
              $borderLeft="#8b5cf6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CardTitle>Relationship Pace</CardTitle>
              <CardText>How fast or slow you move — timing that makes or breaks connection.</CardText>
            </Card>
          </Grid>
          
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <Button onClick={() => handleCheckout('single')} variant="primary" size="large">
                Start Singles — $49
              </Button>
              <Button onClick={() => handleCheckout('couples')} variant="primary" size="large">
                Start Couples — $79
              </Button>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* Value Framing */}
      <Section bg="gray">
        <SectionContent>
          <SectionTitle>$49 vs. Another Year of Heartbreak</SectionTitle>
          <Grid className="cols-2">
            <Card 
              $borderTop="#dc2626"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardTitle>The Cost of Staying Stuck</CardTitle>
              <CardList>
                <CardListItem>Investing months or years in the wrong relationship</CardListItem>
                <CardListItem>Confusing anxiety or drama for love</CardListItem>
                <CardListItem>Repeating avoidable mistakes with "new" people</CardListItem>
                <CardListItem>Eroding confidence and trust in your judgment</CardListItem>
              </CardList>
              <Link href="/education" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#dc2626' }}>
                Read about dysfunctionships →
              </Link>
            </Card>
            
            <Card 
              $borderTop="#16a34a"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardTitle>What You Gain With Dating DNA™</CardTitle>
              <CardList>
                <CardListItem>Clarity on your actual compatibility patterns</CardListItem>
                <CardListItem>Ability to spot red flags early</CardListItem>
                <CardListItem>Strategic dating based on your strengths</CardListItem>
                <CardListItem>Confidence to present your authentic self</CardListItem>
              </CardList>
              <Link href="/education" style={{ display: 'inline-block', marginTop: '0.75rem' }}>
                Learn authentic attraction →
              </Link>
            </Card>
          </Grid>
          
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button onClick={() => handleCheckout('single')} variant="primary" size="large">
              Start My Assessment – $49
            </Button>
          </div>
        </SectionContent>
      </Section>
    </HomeContainer>
  );
}

export default HomePage;
