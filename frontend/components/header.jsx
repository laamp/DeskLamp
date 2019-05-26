import React from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <header>
      <div className="header-left">
        <Link to='/'>
          <div>
            <img className="company-logo" src={window.basecampLogoUrl} />
          </div>
          <h1 id="company-name">DeskLamp</h1>
        </Link>
      </div>
      <nav className="header-right">
        <Link className='header-link' to='/signin'>Sign In</Link>
        <Link id='sign-up-button' to='/signup'>Try It FREE</Link>
      </nav>
    </header>
  );
};
