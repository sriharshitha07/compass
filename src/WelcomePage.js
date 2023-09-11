// src/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="dark-theme">
      <h2>Welcome</h2>
      <nav>
        <ul>
          <li>
            <Link to="/evaluation">Compass Evaluation</Link>
          </li>
          <li>
            <Link to="/updates">Updates and News</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/useful-info">Useful Info</Link>
          </li>
        </ul>
      </nav>
      <button className="my-account-button">My Account</button>
    </div>
  );
}

export default WelcomePage;
