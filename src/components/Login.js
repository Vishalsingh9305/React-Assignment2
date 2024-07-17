import React, { useRef } from 'react';

const Login = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onLogin({ username, password });
  };

  return (
    <div>
      <h2>Login Form (Using Ref)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={usernameRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
