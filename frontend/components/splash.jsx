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
            <div className="about-signup-container">
              <div className="about-text">
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
              </div>
              <div className="signup-text">
                <p>3,089 businesses signed up in the last week. Join them! Try Basecamp</p>
                <Link to="/signup">Sign up for free!</Link>
              </div>
            </div>
          </section>
        </section>
        <section className="testimonials-section">
          <div className="about-list-container">
            <img src="/assets/laptop.png" />
            <ul className="about-list">
              <li>Track, assign, and chart to-dos.</li>
              <li>Centralize discussions and feedback.</li>
              <li>Automatically summarize progress.</li>
              <li>Cut back on meetings, free up focused time.</li>
              <li>Show clients you're organized and professional.</li>
              <li>Eliminate bottlenecks, increase self-sufficiency.</li>
              <li>Ditch the mess of Slack, Asana, Trello, Jira, etc.</li>
            </ul>
          </div>
          <hr className="green-divider" />
          <div className="review-container">
            <blockquote className="review">
              <p>
                <span>Some really good things about this website.</span>
              </p>
              <cite>-Totally Real Person, App Academy</cite>
            </blockquote>
            <blockquote className="review">
              <p>
                This has made coordination much easier.
                <span>My restaurant is better than ever.</span>
              </p>
              <cite>-Ronald, High-end Restaurant</cite>
            </blockquote>
            <blockquote className="review">
              <p>
                Great product, easy to use.
                <span>UI is clean.</span>
                I wish there was a dark mode.
              </p>
              <cite>-Bob Johnson, Theater Manager</cite>
            </blockquote>
            <blockquote className="review">
              <p>
                <span>Productivity is up!</span>
                This helps those tickets disappear.
              </p>
              <cite>-Alice Smith, Big Tech Company</cite>
            </blockquote>
            <blockquote className="review">
              <p>
                We make so many different ales.
                <span>This helps us all keep track of the progress.</span>
              </p>
              <cite>-Samuel, Local Brewery</cite>
            </blockquote>
            <blockquote className="review">
              <p>
                <span>We never lose track of any classified information anymore.</span>
                Perfect for organizing sensitive documents.
              </p>
              <cite>-User 223, Corporation Corp.</cite>
            </blockquote>
          </div>
        </section>
        <section className="footer-section">
          <ul className="footer-list">
            <li>
              <strong>Get Started: </strong>
              <Link to='/signup'>Sign up,</Link>&nbsp;
              <Link to='/signin'>Sign in.</Link>
            </li>
            <li>
              <strong>GitHub: </strong>
              <a href="https://github.com/laamp/DeskLamp">This project.</a>
            </li>
          </ul>
          <p>Copyright 2019, Enjoy your day!</p>
          <img src="/assets/footer-graph.svg" />
        </section>
      </section>
    </>
  );
};
