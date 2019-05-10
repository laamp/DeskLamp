import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class OrganizationHome extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHubs();
  }

  render() {
    const { hubs } = this.props;

    return (
      <>
        <h1>organization view</h1>

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
