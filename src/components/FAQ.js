import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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
  line-height: 1.6;
`;

const SearchContainer = styled.div`
  margin-bottom: 3rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  font-size: 1rem;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.2);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const FAQSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  color: #ff6b9d;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff6b9d;
  }
`;

const QuestionText = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.5;
`;

const Icon = styled.div`
  font-size: 1.2rem;
  color: #ff6b9d;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
`;

const Answer = styled.p`
  color: #4a5568;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "How does the Dating DNA assessment work?",
          answer: "Our assessment uses scientifically validated personality psychology to analyze your dating preferences, communication style, and relationship needs. You'll answer 32 carefully crafted questions, and our algorithm will generate your unique Dating DNA profile with personalized insights and recommendations."
        },
        {
          question: "How long does the assessment take?",
          answer: "The assessment typically takes 10-15 minutes to complete. You can save your progress and return later if needed. Take your time to answer honestly for the most accurate results."
        },
        {
          question: "What's the difference between single and couples assessments?",
          answer: "The single assessment provides insights into your dating personality and preferences. The couples assessment analyzes compatibility between two partners, showing how your personalities work together and providing relationship improvement suggestions."
        }
      ]
    },
    {
      category: "Results & Insights",
      icon: "📊",
      questions: [
        {
          question: "What will I learn from my results?",
          answer: "Your results include your Dating DNA type, detailed personality insights, communication style analysis, dating preferences, relationship strengths and challenges, and personalized recommendations for finding compatible partners."
        },
        {
          question: "How accurate are the results?",
          answer: "Our assessment is based on established psychological frameworks and has been validated through extensive research. However, results are most accurate when you answer honestly and reflect your true self rather than who you think you should be."
        },
        {
          question: "Can I retake the assessment?",
          answer: "Yes, you can retake the assessment at any time. People change over time, so retaking it periodically can provide updated insights. Your previous results will be saved for comparison."
        }
      ]
    },
    {
      category: "Account & Privacy",
      icon: "🔒",
      questions: [
        {
          question: "Is my data secure and private?",
          answer: "Absolutely. We take your privacy seriously. Your assessment responses and results are encrypted and stored securely. We never share your personal data with third parties without your explicit consent."
        },
        {
          question: "Can I delete my account and data?",
          answer: "Yes, you can delete your account and all associated data at any time through your account settings. This action is permanent and cannot be undone."
        },
        {
          question: "Do you sell my information?",
          answer: "No, we never sell your personal information. Your data is used solely to provide you with your assessment results and improve our services. We may use anonymized, aggregated data for research purposes."
        }
      ]
    },
    {
      category: "Payment & Billing",
      icon: "💳",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, and digital wallets through our secure PayPal payment processor. All payments are encrypted and processed securely with PayPal's buyer protection."
        },
        {
          question: "What is your payment policy?",
          answer: "All payments are final and non-refundable. We accept all major credit cards, debit cards, and digital wallets through our secure PayPal payment processor. All payments are encrypted and processed securely with PayPal's buyer protection."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees. The price you see is the price you pay. There are no recurring charges or subscription fees unless you explicitly choose a subscription service."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: "🛠️",
      questions: [
        {
          question: "What browsers are supported?",
          answer: "Our platform works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser."
        },
        {
          question: "Can I take the assessment on mobile?",
          answer: "Yes! Our platform is fully responsive and optimized for mobile devices. You can take the assessment on your smartphone or tablet with the same experience as desktop."
        },
        {
          question: "What if I lose my internet connection?",
          answer: "Your progress is automatically saved as you go. If you lose connection, simply reconnect and continue from where you left off. If you're unable to continue, contact support for assistance."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Frequently Asked Questions</Title>
          <Subtitle>
            Find answers to common questions about Dating DNA assessments, results, and our platform.
          </Subtitle>
        </Header>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <FAQSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredData.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: categoryIndex < filteredData.length - 1 ? '3rem' : '0' }}>
              <CategoryTitle>
                <CategoryIcon>{category.icon}</CategoryIcon>
                {category.category}
              </CategoryTitle>
              
              {category.questions.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                const isOpen = openItems[key];
                
                return (
                  <FAQItem key={questionIndex}>
                    <QuestionButton onClick={() => toggleItem(categoryIndex, questionIndex)}>
                      <QuestionText>{item.question}</QuestionText>
                      <Icon isOpen={isOpen}>▼</Icon>
                    </QuestionButton>
                    
                    <AnswerContainer
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Answer>{item.answer}</Answer>
                    </AnswerContainer>
                  </FAQItem>
                );
              })}
            </div>
          ))}
          
          {filteredData.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                No questions found matching your search. Try different keywords or browse all categories.
              </p>
            </div>
          )}
        </FAQSection>
      </ContentWrapper>
    </Container>
  );
};

export default FAQ; 