// Chat.js

import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      // Updated to push new messages to the beginning of the array
      setMessages([{ text: messageInput, user: 'You' }, ...messages]);
      setMessageInput('');
    }
  };

  return (
    <div className="chat-body">
      <div className="chat-container">
        <div className="message-container">
          {messages.map((msg, index) => (
            // Updated key to use a unique identifier (e.g., message timestamp)
            <div key={index} className="message-wrapper">
              <strong className="message-text">{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">
            ^_^
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
