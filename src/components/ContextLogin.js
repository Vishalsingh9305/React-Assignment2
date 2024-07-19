import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Welcome from './Welcome'; // Import the Welcome component

const ContextLogin = () => {
  const { setUsername } = useContext(UserContext);
  const [input, setInput] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null); // State to track logged-in user

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
    setLoggedInUser(input); // Set the logged-in user
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
      {loggedInUser && <Welcome username={loggedInUser} />} {/* Display welcome message if logged in */}
    </div>
  );
};

export default ContextLogin;
