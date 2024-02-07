// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Create a new CSS file for SignUp styles

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSignUp = () => {
    alert(`Welcome, ${name}!`);
    nav('/chat')
  };

  return (
    <div className="signbody">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-group">
        <input
          type="text"
          className='user'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type="email"
          className='user'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type="password"
          className='user'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </div>
      <div className="button-group">
        <button className="sign" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
