import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { generateRelationshipAdvice, checkOpenAIConfig } from '../services/openai';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  max-height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ChatBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 400px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  word-wrap: break-word;
  
  ${props => props.isUser ? `
    background: #667eea;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  ` : `
    background: #f1f3f4;
    color: #333;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  `}
`;

const InputContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 0.5rem;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 0.9rem;
  
  &:focus {
    border-color: #667eea;
  }
`;

const SendButton = styled(motion.button)`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f1f3f4;
  border-radius: 18px;
  align-self: flex-start;
  border-bottom-left-radius: 4px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #999;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
  
  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  z-index: 1000;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ErrorMessage = styled.div`
  background: #fee;
  color: #c53030;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.5rem 1rem;
  font-size: 0.9rem;
  border-left: 4px solid #c53030;
`;

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI relationship coach. I can help you with dating advice based on your personality type. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConfigured, setIsConfigured] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Check if OpenAI is configured
    try {
      const config = checkOpenAIConfig();
      setIsConfigured(config.isConfigured);
    } catch (err) {
      setIsConfigured(false);
      setError('OpenAI not configured. Please add your API key to .env file.');
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !isConfigured) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // Get user's DNA type from localStorage (if available)
      const userResults = localStorage.getItem('datingDNAResults');
      const dnaType = userResults ? JSON.parse(userResults).dnaCode : 'Unknown';
      
      // Generate AI response
      const aiResponse = await generateRelationshipAdvice(
        dnaType,
        'dating and relationships',
        inputValue.trim()
      );

      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('Failed to generate AI response:', err);
      setError('Sorry, I encountered an error. Please try again.');
      
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  if (!isConfigured) {
    return null; // Don't show chatbot if OpenAI isn't configured
  }

  return (
    <>
      {!isOpen && (
        <FloatingButton
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💬
        </FloatingButton>
      )}

      <AnimatePresence>
        {isOpen && (
          <ChatbotContainer
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ChatHeader onClick={toggleChat}>
              <ChatTitle>🤖 AI Relationship Coach</ChatTitle>
              <ToggleButton>×</ToggleButton>
            </ChatHeader>

            <ChatBody>
              <MessagesContainer>
                {messages.map((message) => (
                  <Message key={message.id} isUser={message.isUser}>
                    {message.text}
                  </Message>
                ))}
                
                {isLoading && (
                  <LoadingDots>
                    <Dot />
                    <Dot />
                    <Dot />
                  </LoadingDots>
                )}
                
                <div ref={messagesEndRef} />
              </MessagesContainer>

              {error && (
                <ErrorMessage>
                  {error}
                </ErrorMessage>
              )}
            </ChatBody>

            <InputContainer>
              <MessageInput
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about relationships..."
                disabled={isLoading}
              />
              <SendButton
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ➤
              </SendButton>
            </InputContainer>
          </ChatbotContainer>
        )}
      </AnimatePresence>
    </>
  );
}
