import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import ContextLogin from './components/ContextLogin';
import RegistrationForm from './components/RegistrationForm';
import Welcome from './components/Welcome';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('Initial Title');
  const [variableD, setVariableD] = useState('Initial D');
  const [inputTitle, setInputTitle] = useState(''); // Added state for the input field

  // Update the page title when the `title` or `variableD` changes
  useEffect(() => {
    document.title = title;
  }, [title, variableD]); // Added `title` to dependencies to avoid ESLint warning

  // Section for Simple Login Form
  const handleLogin = (user) => {
    setUsername(user.username);
  };

  // Handle title input change
  const handleInputChange = (event) => {
    setInputTitle(event.target.value);
  };

  // Update the title with the text from the input field
  const handleUpdateTitle = () => {
    setTitle(inputTitle || 'Default Title'); // Set to inputTitle or fallback to 'Default Title'
  };

  return (
    <div className="App">
      <h1>React User Details App</h1>

      {/* Simple Login Form Section */}
      <section>
       
        {username ? (
          <Welcome username={username} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </section>

      <hr />

      {/* Context-Based Login Form Section */}
      <UserProvider>
        <section>
          
          <ContextLogin />
          <Welcome username={username}/>
        </section>
      </UserProvider>

      <hr />

      {/* Registration Form Section */}
      <section>
        <h2>Registration Form</h2>
        <h3>Class Component</h3>
        <RegistrationForm />
        <h3>Function Component</h3>
        <RegistrationForm />
      </section>

      <hr />

      {/* Login Form Using Ref Section */}
      <section>
        
        <Login
          onLogin={(user) => {
            setUsername(user.username);
            console.log('Logged in user:', user);
          }}
        />
        {username && <Welcome username={username} />}
      </section>

      <hr />

      {/* Page Title Updates Section */}
      <section>
        <h2>Page Title Updates</h2>
        <input
          type="text"
          placeholder="Enter new title"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdateTitle}>Change Title</button>
        <button onClick={() => setVariableD('Changed D')}>Change Variable D</button>
      </section>
    </div>
  );
}

export default App;
