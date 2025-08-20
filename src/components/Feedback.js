import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
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

const FeedbackForm = styled(motion.form)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const RatingButton = styled.button`
  background: ${props => props.selected ? 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)' : '#f7fafc'};
  color: ${props => props.selected ? 'white' : '#4a5568'};
  border: 2px solid ${props => props.selected ? 'transparent' : '#e2e8f0'};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    border-color: #ff6b9d;
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #ff6b9d;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SuccessText = styled.p`
  opacity: 0.9;
  line-height: 1.6;
`;

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: 0,
    experience: '',
    suggestions: '',
    categories: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        feedbackType: '',
        rating: 0,
        experience: '',
        suggestions: '',
        categories: []
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Container>
        <ContentWrapper>
          <SuccessMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SuccessTitle>Thank You for Your Feedback!</SuccessTitle>
            <SuccessText>
              Your feedback has been submitted successfully. We appreciate you taking the time to help us improve Dating DNA.
            </SuccessText>
          </SuccessMessage>
          
          <FeedbackForm
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Header>
              <Title>Submit More Feedback</Title>
              <Subtitle>
                Have additional thoughts? We'd love to hear from you.
              </Subtitle>
            </Header>
            
            <FormGroup>
              <Label htmlFor="name">Name (Optional)</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="feedbackType">Type of Feedback</Label>
              <Select
                id="feedbackType"
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleInputChange}
              >
                <option value="">Select feedback type</option>
                <option value="general">General Feedback</option>
                <option value="assessment">Assessment Experience</option>
                <option value="results">Results & Insights</option>
                <option value="website">Website/App Experience</option>
                <option value="payment">Payment Process</option>
                <option value="support">Customer Support</option>
                <option value="suggestion">Feature Suggestion</option>
                <option value="bug">Bug Report</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Overall Rating</Label>
              <RatingContainer>
                {[1, 2, 3, 4, 5].map(rating => (
                  <RatingButton
                    key={rating}
                    type="button"
                    selected={formData.rating === rating}
                    onClick={() => handleRatingClick(rating)}
                  >
                    {rating}
                  </RatingButton>
                ))}
              </RatingContainer>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="experience">Tell us about your experience</Label>
              <TextArea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Please share your experience with Dating DNA..."
              />
            </FormGroup>

            <FormGroup>
              <Label>What would you like to provide feedback about?</Label>
              <CheckboxGroup>
                {[
                  'Assessment questions',
                  'Results accuracy',
                  'Website design',
                  'User interface',
                  'Payment process',
                  'Customer support',
                  'Mobile experience',
                  'Overall satisfaction'
                ].map(category => (
                  <CheckboxItem key={category}>
                    <Checkbox
                      type="checkbox"
                      checked={formData.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </CheckboxItem>
                ))}
              </CheckboxGroup>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="suggestions">Suggestions for improvement</Label>
              <TextArea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleInputChange}
                placeholder="How can we make Dating DNA better for you?"
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </SubmitButton>
          </FeedbackForm>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Share Your Feedback</Title>
          <Subtitle>
            We value your input! Help us improve Dating DNA by sharing your thoughts, suggestions, and experiences.
          </Subtitle>
        </Header>

        <FeedbackForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormGroup>
            <Label htmlFor="name">Name (Optional)</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="feedbackType">Type of Feedback</Label>
            <Select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleInputChange}
            >
              <option value="">Select feedback type</option>
              <option value="general">General Feedback</option>
              <option value="assessment">Assessment Experience</option>
              <option value="results">Results & Insights</option>
              <option value="website">Website/App Experience</option>
              <option value="payment">Payment Process</option>
              <option value="support">Customer Support</option>
              <option value="suggestion">Feature Suggestion</option>
              <option value="bug">Bug Report</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Overall Rating</Label>
            <RatingContainer>
              {[1, 2, 3, 4, 5].map(rating => (
                <RatingButton
                  key={rating}
                  type="button"
                  selected={formData.rating === rating}
                  onClick={() => handleRatingClick(rating)}
                >
                  {rating}
                </RatingButton>
              ))}
            </RatingContainer>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="experience">Tell us about your experience</Label>
            <TextArea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Please share your experience with Dating DNA..."
            />
          </FormGroup>

          <FormGroup>
            <Label>What would you like to provide feedback about?</Label>
            <CheckboxGroup>
              {[
                'Assessment questions',
                'Results accuracy',
                'Website design',
                'User interface',
                'Payment process',
                'Customer support',
                'Mobile experience',
                'Overall satisfaction'
              ].map(category => (
                <CheckboxItem key={category}>
                  <Checkbox
                    type="checkbox"
                    checked={formData.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </CheckboxItem>
              ))}
            </CheckboxGroup>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="suggestions">Suggestions for improvement</Label>
            <TextArea
              id="suggestions"
              name="suggestions"
              value={formData.suggestions}
              onChange={handleInputChange}
              placeholder="How can we make Dating DNA better for you?"
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </SubmitButton>
        </FeedbackForm>
      </ContentWrapper>
    </Container>
  );
};

export default Feedback; 