// src/SignupPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = () => {
    // Here, you can add logic to handle the signup process
    // For this example, we'll just navigate to the welcome page
    history.push('/welcome');
  };

  return (
    <div className="dark-theme">
      <h2>Signup</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
