import React from 'react';
import { Link } from 'react-router-dom';

export const SplashComponent = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <Link to='/'>
            <img className="company-logo" src="/assets/basecamp-logo.png" />
            <h1 id="company-name">DeskLamp</h1>
          </Link>
        </div>
        <nav className="header-right">
          <Link className='header-link' to='/signin'>Sign In</Link>
          <Link id='sign-up-button' to='/signup'>Try It FREE</Link>
        </nav>
      </header>
      <section className="splash-content">
        <section className="about-section-container">
          <section className="about-section">
            <img src="/assets/50-mil.jpg" />
            <p>
              <strong>
                That’s the number of projects that have been managed with Basecamp.&nbsp;
              </strong>
              Companies trust Basecamp because it’s *the* gold-standard for managing
              projects, working with clients, and communicating with your team.
              Don’t settle for imitators and also-rans.
              If you want to finish projects faster with less chaos and confusion,
              there’s only Basecamp.
            </p>
          </section>
        </section>
        <section className="testimonials-section"></section>
        <section className="footer-section"></section>
      </section>
    </>
  );
};
