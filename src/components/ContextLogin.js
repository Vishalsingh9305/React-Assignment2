import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const ContextLogin = () => {
  const { setUsername } = useContext(UserContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
  };

  return (
    <div>
      <h2>Login Form (Using Context)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ContextLogin;
