import React from "react";
import { Link, withRouter } from "react-router-dom";
import Loading from "../loading";

class LoggedInHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentOrganization) return null;
    return (
      <header className="logged-in-header">
        <div className="left-header-item">
          <img src={window.basecampLogoUrl} alt="Organizations" draggable='false' />
        </div>
        <div className="center-header-item">
          <nav className="nav-items">
            <Link to={`/organizations/${this.props.currentOrganization.id}`}>
              <i id="home-icon" className="material-icons">home</i>
              <div id="home-button">Home</div>
            </Link>
          </nav>
        </div>
        <div className="right-header-item">
          <i className="material-icons">account_circle</i>
        </div>
      </header>
    );
  }
}

export default withRouter(LoggedInHeader);
