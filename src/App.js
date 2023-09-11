// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './SignupPage';
import WelcomePage from './WelcomePage';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/" component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;
