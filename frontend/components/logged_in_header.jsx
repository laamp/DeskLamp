import React from "react";

const LoggedInHeader = () => (
  <header className="logged-in-header">
    <div className="left-header-item">
      <img src={window.basecampLogoUrl} alt="Organizations" draggable='false' />
    </div>
    <div className="center-header-item">
      <nav className="nav-items">
        <i className="material-icons">home</i><div id="home-button">Home</div>
      </nav>
    </div>
    <div className="right-header-item">
      <i className="material-icons">account_circle</i>
    </div>
  </header>
);

export default LoggedInHeader;
