import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signOut }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.name}!</h2>
      <button className="header-button" onClick={signOut}>Sign Out</button>
    </hgroup>
  );

  if (currentUser) {
    return personalGreeting();
  } else {
    return sessionLinks();
  }
};

export default Greeting;
