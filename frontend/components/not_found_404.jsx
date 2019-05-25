import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent } from "./header";

const NotFound = () => {
  return (
    <>
      <HeaderComponent />
      <section className='notfound-container'>
        <section className="notfound">
          <div className='notfound-sorrymessage'>
            <h6 className='real-big-text'>Sorry, that page isn't here.</h6>
            <p>You didn’t do anything wrong. We may have moved the page you’re
              looking for somewhere else.</p>
          </div>
          <div className="notfound-directions">
            <p><strong>Did you follow a link from here?</strong><br />
              Well, here's another link to take you <Link to='/'>back to our homepage!</Link></p><br />

            <p><strong>Did you type the URL?</strong><br />
              You may have typed the address (URL) incorrectly. Check to make
              sure you’ve got the exact right spelling, capitalization, etc. You
              can view our footer below for links to our most popular content.</p><br />
          </div>
        </section>
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
          <p>Copyright 2019, Enjoy your day!</p>
        </ul>
        <img src={window.footerGraphUrl} />
      </section>
    </>
  );
}

export default NotFound;
