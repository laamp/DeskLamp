import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loading from "../loading";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';

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
    this.props.fetchHubs(this.props.match.params.organizationId)
      .then(() => (this.setState({ loading: false, thisOrgId: this.props.match.params.organizationId })))
      .fail(() => (this.setState({ loading: false })));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderHubs(hubtype) {
    return (
      <>
        <div className='hub-divider'>
          {/* <div>{hubtype == "company" ? this.props.currentOrganization : hubtype}</div> */}
        </div>
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
    if (this.state.loading) return <Loading />;

    return (
      <>
        <LoggedInHeaderContainer currentOrganization={this.props.currentOrganization} />
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
