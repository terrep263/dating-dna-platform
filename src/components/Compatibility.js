import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #f8fafc;
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
`;

const HighlightTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
`;

const HighlightText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1rem;
`;

const CompatibilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const CompatibilityCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  border: 2px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #ff6b9d;
    transform: translateY(-3px);
  }
`;

const CompatibilityIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CompatibilityTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const CompatibilityDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Compatibility = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Understanding Compatibility</Title>
          <Subtitle>
            Discover how personality science can help you find deeper, more meaningful connections and build lasting relationships.
          </Subtitle>
        </Header>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>The Science of Compatibility</SectionTitle>
          <SectionSubtitle>
            Compatibility isn't just about attraction - it's about how well two people can work together as a team in a relationship.
          </SectionSubtitle>
          
          <Paragraph>
            Traditional dating often focuses on surface-level attraction and shared interests, but research shows that the most successful long-term relationships are built on deeper personality compatibility. Our Dating DNA assessment analyzes multiple dimensions of compatibility to give you insights that go far beyond what you can learn from a first date.
          </Paragraph>
          
          <Paragraph>
            We use scientifically validated personality frameworks, including the Big Five personality model and attachment theory, to understand how different personality traits interact in relationships. This research-backed approach helps you identify not just who you're attracted to, but who you can build a lasting partnership with.
          </Paragraph>
          
          <HighlightBox>
            <HighlightTitle>Why Personality Matters</HighlightTitle>
            <HighlightText>
              Personality compatibility predicts relationship satisfaction, communication effectiveness, and long-term success better than shared interests or physical attraction alone.
            </HighlightText>
          </HighlightBox>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionTitle>Key Compatibility Factors</SectionTitle>
          <SectionSubtitle>
            Understanding these fundamental aspects of compatibility can transform how you approach relationships.
          </SectionSubtitle>
          
          <Grid>
            <Card>
              <CardIcon>💬</CardIcon>
              <CardTitle>Communication Style</CardTitle>
              <CardText>
                How you express needs, handle conflicts, and share emotions can make or break a relationship. Understanding your communication patterns helps you find partners who can truly hear and understand you.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Values & Goals</CardTitle>
              <CardText>
                Alignment on core values, life goals, and relationship expectations is crucial for long-term success. Our assessment helps identify these fundamental compatibility factors.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Energy & Lifestyle</CardTitle>
              <CardText>
                Whether you're an introvert or extrovert, prefer routine or spontaneity, these differences can create harmony or conflict. Understanding your energy patterns is key.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>🤝</CardIcon>
              <CardTitle>Conflict Resolution</CardTitle>
              <CardText>
                How you handle disagreements and stress together determines relationship longevity. Compatible conflict styles lead to healthier, more resilient partnerships.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>💝</CardIcon>
              <CardTitle>Love Languages</CardTitle>
              <CardText>
                Understanding how you give and receive love helps you connect with partners who can meet your emotional needs and appreciate your expressions of affection.
              </CardText>
            </Card>
            
            <Card>
              <CardIcon>🌱</CardIcon>
              <CardTitle>Growth Compatibility</CardTitle>
              <CardText>
                Partners who support each other's personal growth and development tend to have more fulfilling, long-lasting relationships.
              </CardText>
            </Card>
          </Grid>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>Dating DNA Types</SectionTitle>
          <SectionSubtitle>
            Our assessment identifies your unique Dating DNA type and shows you how it interacts with other personality types.
          </SectionSubtitle>
          
          <CompatibilityGrid>
            <CompatibilityCard>
              <CompatibilityIcon>🔥</CompatibilityIcon>
              <CompatibilityTitle>The Passionate Explorer</CompatibilityTitle>
              <CompatibilityDescription>
                Adventurous, spontaneous, and emotionally expressive. You thrive with partners who share your enthusiasm for life and can keep up with your energy.
              </CompatibilityDescription>
            </CompatibilityCard>
            
            <CompatibilityCard>
              <CompatibilityIcon>🧠</CompatibilityIcon>
              <CompatibilityTitle>The Thoughtful Guardian</CompatibilityTitle>
              <CompatibilityDescription>
                Analytical, reliable, and deeply caring. You build strong foundations with partners who appreciate your wisdom and share your commitment to growth.
              </CompatibilityDescription>
            </CompatibilityCard>
            
            <CompatibilityCard>
              <CompatibilityIcon>🌟</CompatibilityIcon>
              <CompatibilityTitle>The Creative Visionary</CompatibilityTitle>
              <CompatibilityDescription>
                Imaginative, idealistic, and inspiring. You connect best with partners who appreciate your unique perspective and support your creative pursuits.
              </CompatibilityDescription>
            </CompatibilityCard>
            
            <CompatibilityCard>
              <CompatibilityIcon>⚖️</CompatibilityIcon>
              <CompatibilityTitle>The Balanced Harmonizer</CompatibilityTitle>
              <CompatibilityDescription>
                Diplomatic, adaptable, and relationship-focused. You excel at creating harmony and work well with many different personality types.
              </CompatibilityDescription>
            </CompatibilityCard>
            
            <CompatibilityCard>
              <CompatibilityIcon>🎯</CompatibilityIcon>
              <CompatibilityTitle>The Determined Achiever</CompatibilityTitle>
              <CompatibilityDescription>
                Goal-oriented, confident, and driven. You thrive with partners who respect your ambition and can match your determination.
              </CompatibilityDescription>
            </CompatibilityCard>
            
            <CompatibilityCard>
              <CompatibilityIcon>💫</CompatibilityIcon>
              <CompatibilityTitle>The Intuitive Empath</CompatibilityTitle>
              <CompatibilityDescription>
                Sensitive, perceptive, and emotionally intelligent. You create deep connections with partners who value emotional intimacy and understanding.
              </CompatibilityDescription>
            </CompatibilityCard>
          </CompatibilityGrid>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionTitle>Building Better Relationships</SectionTitle>
          <SectionSubtitle>
            Understanding compatibility is just the beginning. Here's how to use these insights to create stronger connections.
          </SectionSubtitle>
          
          <Paragraph>
            Once you understand your Dating DNA and compatibility factors, you can make more informed decisions about potential partners. But remember, compatibility doesn't mean perfection - it means having the tools to work through differences and grow together.
          </Paragraph>
          
          <Paragraph>
            Our assessment provides specific recommendations for each compatibility area, helping you identify potential challenges and opportunities in your relationships. Whether you're single and looking, in a new relationship, or working to strengthen an existing partnership, these insights can guide your journey.
          </Paragraph>
          
          <HighlightBox>
            <HighlightTitle>Remember: Compatibility is Dynamic</HighlightTitle>
            <HighlightText>
              People grow and change, and so do relationships. Regular assessment and open communication help you adapt and grow together, maintaining compatibility over time.
            </HighlightText>
          </HighlightBox>
        </Section>
      </ContentWrapper>
    </Container>
  );
};

export default Compatibility; 