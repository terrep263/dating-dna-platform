import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled(motion.div)`
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
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled(motion.section)`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SectionIcon = styled.span`
  font-size: 2rem;
  color: #ff6b9d;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
  border-left: 4px solid #ff6b9d;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
`;

const HighlightText = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  line-height: 1.6;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  margin: 1.5rem 0;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const Card = styled(motion.div)`
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardIcon = styled.span`
  color: #ff6b9d;
  font-size: 1.2rem;
`;

const Conclusion = styled(motion.div)`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(255, 107, 157, 0.1) 100%);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
`;

const ConclusionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
`;

const ConclusionText = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
`;

export default function AboutScience() {
  return (
    <Container>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Scientific Foundations</Title>
          <Subtitle>
            Evidence-based insights into personality-based dating assessment tools and their empirical validation
          </Subtitle>
        </Header>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionTitle>
            <SectionIcon>🔬</SectionIcon>
            The Scientific Landscape
          </SectionTitle>
          
          <HighlightBox>
            <HighlightText>
              The empirical evidence presents a paradoxical landscape: while individual personality traits demonstrate robust predictive validity for relationship outcomes, personality-based matching algorithms show limited superiority over user choice in actual compatibility prediction.
            </HighlightText>
          </HighlightBox>

          <Paragraph>
            This comprehensive review of meta-analyses, longitudinal studies, and systematic reviews from 2010-2024 reveals that the Big Five personality model offers strong scientific validation, while Jung's MBTI theory shows significant limitations in romantic contexts.
          </Paragraph>

          <Paragraph>
            The research suggests that having individually desirable personality traits matters more than algorithmic matching, with <strong>low neuroticism and high conscientiousness</strong> emerging as the most consistent predictors of relationship success across cultures.
          </Paragraph>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SectionTitle>
            <SectionIcon>📊</SectionIcon>
            Big Five Model Validation
          </SectionTitle>

          <StatCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>3,800+</StatNumber>
            <StatLabel>Participants in Meta-Analytic Research</StatLabel>
          </StatCard>

          <Paragraph>
            The most compelling evidence supports the Five-Factor Model's validity in romantic relationships. Meta-analytic research spanning over 3,800 participants consistently identifies four traits as significant predictors of relationship satisfaction.
          </Paragraph>

          <Grid>
            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>😌</CardIcon>
                Low Neuroticism
              </CardTitle>
              <Paragraph>
                Strongest predictor of relationship satisfaction, with correlations ranging from -0.20 to -0.44 across cultures.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>🤝</CardIcon>
                High Agreeableness
              </CardTitle>
              <Paragraph>
                Facilitates cooperative behavior and conflict resolution, contributing to relationship harmony.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>🎯</CardIcon>
                High Conscientiousness
              </CardTitle>
              <Paragraph>
                Shows correlations as high as r = 0.90 with marital satisfaction in recent studies.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>🌟</CardIcon>
                High Extraversion
              </CardTitle>
              <Paragraph>
                Correlates strongly with relationship satisfaction (r = 0.833) and predicts higher dating frequency.
              </Paragraph>
            </Card>
          </Grid>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SectionTitle>
            <SectionIcon>⚠️</SectionIcon>
            MBTI Theory Limitations
          </SectionTitle>

          <HighlightBox>
            <HighlightText>
              Jung's psychological types and MBTI theory demonstrate substantial empirical weaknesses in romantic relationship prediction.
            </HighlightText>
          </HighlightBox>

          <Paragraph>
            Meta-analytic reliability studies reveal concerning measurement issues, with overall reliability coefficients averaging 0.815 but showing high variability (range 0.480-0.970). The Thinking-Feeling dimension shows particular problems with the lowest reliability at 0.764.
          </Paragraph>

          <Paragraph>
            Up to 50% of individuals receive different type classifications upon retesting, and the most comprehensive study following 426 couples over seven years found minimal support for traditional compatibility theories.
          </Paragraph>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SectionTitle>
            <SectionIcon>🎯</SectionIcon>
            Assessment Methodologies
          </SectionTitle>

          <Paragraph>
            Personality assessment in dating applications encounters substantial psychometric obstacles that compromise scientific validity. Self-presentation bias emerges as a primary concern, with individuals systematically underreporting socially undesirable traits.
          </Paragraph>

          <Grid>
            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>🎭</CardIcon>
                Self-Presentation Bias
              </CardTitle>
              <Paragraph>
                Individuals systematically underreport socially undesirable traits relative to spouse ratings, particularly for dominance and hostility dimensions.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>⏱️</CardIcon>
                Test-Retest Reliability
              </CardTitle>
              <Paragraph>
                Varies significantly across relationship contexts, with optimal testing intervals of one to two months showing agreement rates of 87-99%.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>📝</CardIcon>
                Response Formats
              </CardTitle>
              <Paragraph>
                Forced-choice formats demonstrate superior resistance to impression management, while Likert scales provide greater information capture.
              </Paragraph>
            </Card>
          </Grid>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <SectionTitle>
            <SectionIcon>📈</SectionIcon>
            Matching Algorithm Effectiveness
          </SectionTitle>

          <HighlightBox>
            <HighlightText>
              Comprehensive meta-analyses present sobering evidence about personality-based matching algorithm performance.
            </HighlightText>
          </HighlightBox>

          <Paragraph>
            Finkel et al.'s seminal analysis found inconclusive evidence that matching algorithms outperform users' own partner selection abilities, despite widespread marketing claims about "scientific algorithms."
          </Paragraph>

          <Paragraph>
            Research consistently demonstrates that individual personality traits matter more than partner matching or similarity. Actor-Partner Interdependence Model studies reveal that individual trait levels account for most predictive variance (85%+), while partner effects and similarity show minimal incremental validity.
          </Paragraph>

          <StatCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>85%+</StatNumber>
            <StatLabel>Individual Trait Variance in Relationship Outcomes</StatLabel>
          </StatCard>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <SectionTitle>
            <SectionIcon>🧠</SectionIcon>
            Personality Dimensions & Dating Behavior
          </SectionTitle>

          <Paragraph>
            Empirical research demonstrates systematic connections between personality traits and specific dating behaviors, though with important methodological considerations.
          </Paragraph>

          <Grid>
            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>🗣️</CardIcon>
                Extraversion
              </CardTitle>
              <Paragraph>
                Maintains larger, more socially similar networks and engages in more frequent relationship initiation behaviors.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>🔍</CardIcon>
                Sensing-Intuition
              </CardTitle>
              <Paragraph>
                Sensing types focus on concrete, practical partner qualities, while Intuitive types emphasize future possibilities and abstract compatibility.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>⚖️</CardIcon>
                Thinking-Feeling
              </CardTitle>
              <Paragraph>
                Thinking types more likely to use competing and compromising conflict styles, while Feeling types preferred accommodating approaches.
              </Paragraph>
            </Card>

            <Card
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>
                <CardIcon>📅</CardIcon>
                Judging-Perceiving
              </CardTitle>
              <Paragraph>
                Judging types prefer structured relationship progression with clear timelines, while Perceiving types favor flexible, spontaneous development.
              </Paragraph>
            </Card>
          </Grid>
        </Section>

        <Conclusion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <ConclusionTitle>Key Findings</ConclusionTitle>
          <ConclusionText>
            The scientific literature reveals a complex landscape characterized by <strong>strong individual trait predictive validity alongside weak matching algorithm effectiveness</strong>. The Big Five personality model demonstrates robust empirical support across cultures and relationship contexts, with neuroticism and conscientiousness emerging as particularly important predictors. However, the translation of these patterns into effective matching algorithms remains challenging.
          </ConclusionText>
          <ConclusionText>
            For practical applications, the research supports focusing on <strong>individual personality development rather than algorithmic matching</strong>, with particular attention to emotional regulation and relationship maintenance skills. Personality-based tools show greatest promise when integrated with evidence-based relationship interventions and realistic communication about their predictive limitations.
          </ConclusionText>
        </Conclusion>
      </ContentWrapper>
    </Container>
  );
} 