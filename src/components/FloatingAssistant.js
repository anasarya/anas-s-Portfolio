import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './FloatingAssistant.css';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Anas's AI Assistant. I'm here to help you learn more about his services and experience. Feel free to ask me anything!",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "What services does Anas offer?",
    "How much experience does he have?",
    "What technologies does he use?",
    "How can I contact him?",
    "What are his rates?",
    "Can he work remotely?"
  ];

  const botResponses = {
    "what services does anas offer": "Anas offers Web Development, Mobile App Development, Backend Development, Cloud Deployment, SEO Optimization, and UI/UX Design services.",
    "how much experience does he have": "Anas has over 4 years of experience in software development and has completed 50+ projects for 30+ happy clients.",
    "what technologies does he use": "Anas specializes in React, JavaScript, TypeScript, Node.js, Express, MongoDB, React Native, and modern web technologies.",
    "how can i contact him": "You can contact Anas via WhatsApp, Email, or through the contact form. Check the floating buttons on the right!",
    "what are his rates": "Anas offers competitive rates based on project complexity. Contact him for a free consultation and custom quote.",
    "can he work remotely": "Yes! Anas works with clients worldwide and provides 24/7 support for all projects.",
    "default": "That's a great question! For detailed information, please contact Anas directly via WhatsApp or email. He'll be happy to help you personally!"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const getBotResponse = (message) => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(question.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-chat"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">
                <FaRobot />
              </div>
              <div className="chat-info">
                <h4>AI Assistant</h4>
                <span className="online-status">Online</span>
              </div>
              <button className="close-chat" onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="quick-questions">
              <p>Quick Questions:</p>
              <div className="questions-grid">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-question-btn"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage} className="send-btn">
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        className="floating-assistant-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: -10 }}
        whileTap={{ scale: 0.95 }}
        title={isOpen ? "Close Assistant" : "Ask AI Assistant"}
      >
        <div className="assistant-icon">
          <FaRobot />
        </div>
        <span className="assistant-text">AI HELP</span>
        {!isOpen && <span className="notification-badge">[?]</span>}
      </motion.button>
    </>
  );
};

export default FloatingAssistant;