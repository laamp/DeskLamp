import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class OrganizationHome extends React.Component {

  componentDidMount() {
    this.props.getHubs(this.props.match.params.organizationId);
  }

  orgViewHeader() {
    return (
      <header className="org-view-header">
        <div className="left-header-item">
          <img src={window.basecampLogoUrl} alt="Organizations" draggable='false' />
        </div>
        <div className="center-header-item">
          <nav className="nav-items">
            <div id="home-button">Home</div>
            <div id="signout-button">Log out</div>
          </nav>
        </div>
        <div className="right-header-item">
          <i className="material-icons">account_circle</i>
        </div>
      </header>
    );
  }

  render() {
    const { hubs } = this.props;
    return (
      <>
        {this.orgViewHeader()}
        <ul>
          {Object.values(hubs).map(
            hub => <li key={hub.id}>
              <Link to={`/hubs/${hub.id}`}>
                <h2>{hub.name}</h2>
                <h2>{hub.description}</h2>
              </Link>
            </li>
          )}
        </ul>
      </>
    );
  }
}

export default withRouter(OrganizationHome);
