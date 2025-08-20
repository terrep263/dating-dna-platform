import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const EducationContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2d3748;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #2d3748;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ArticleCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 107, 157, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(255, 107, 157, 0.15);
    border-color: rgba(255, 107, 157, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
  line-height: 1.3;
`;

const ArticleSummary = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const ReadMoreLink = styled(Link)`
  color: #ff6b9d;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: #c44569;
    transform: translateX(5px);
  }

  &::after {
    content: ' →';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(3px);
  }
`;

const articles = [
  {
    id: 1,
    title: "The Dating Marketplace Problem",
    summary: "Why self-awareness is the missing ingredient in the modern dating marketplace — and how knowing your Dating DNA fixes it.",
    link: "/education/marketplace-problem"
  },
  {
    id: 2,
    title: "Dating DNA: The Ultimate Empowerment Tool",
    summary: "Learn how understanding your Dating DNA unlocks confidence, clarity, and authentic connection in dating.",
    link: "/education/empowerment-tool"
  },
  {
    id: 3,
    title: "Stop Choosing Wrong. Start Choosing Powerfully.",
    summary: "Break the cycle of wrong-fit partners by discovering your compatibility patterns through Dating DNA.",
    link: "/education/choose-powerfully"
  },
  {
    id: 4,
    title: "Breaking Free from Informed Trauma in Dating",
    summary: "How trauma-informed attraction patterns sabotage your love life — and how your DNA gives you a new template.",
    link: "/education/informed-trauma"
  },
  {
    id: 5,
    title: "Breaking Free from Dysfunctionships",
    summary: "Learn to recognize and escape emotional addiction disguised as chemistry — and choose real relationships.",
    link: "/education/dysfunctionships"
  },

];

function Education() {
  return (
    <EducationContainer>
      <EducationContent>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education Hub
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore in-depth insights into the Dating DNA framework and dating psychology.
          </Subtitle>
        </Header>

        <ArticlesGrid>
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleSummary>{article.summary}</ArticleSummary>
              <ReadMoreLink to={article.link}>
                Read Full Article
              </ReadMoreLink>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </EducationContent>
    </EducationContainer>
  );
}

export default Education; 