import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class OrganizationHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidUpdate() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.getHubs(this.props.match.params.organizationId)
      .then(() => (this.setState({ loading: false })))
      .fail(() => (this.setState({ loading: false })));
  }

  componentWillUnmount() {
    this.props.clearErrors();
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

  renderHubs(hubtype) {
    return (
      <>
        <div className='hub-divider'><div>{hubtype}</div></div>
        <ul className='hubs-list'>
          {Object.values(this.props.hubs).map(hub => {
            if (hub.hubType === hubtype) {
              return (
                <li className='hub-tile' key={hub.id}>
                  <Link to={`/hubs/${hub.id}`}>
                    <h2>{hub.name}</h2>
                    <h3>{hub.description}</h3>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }

  renderErrors() {
    return (
      <ul className="org-errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.state.loading) return null;

    return (
      <>
        {this.orgViewHeader()}
        {this.renderErrors()}

        <section className='hubs-wrapper'>
          <div className='hubs-container'>
            {this.renderHubs("company")}
            {this.renderHubs("team")}
            {this.renderHubs("project")}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(OrganizationHome);
