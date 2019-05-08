import React from 'react';

class OrganizationForm extends React.Component {
  componentDidMount() {
    this.props.requestUserOrgs();
  }

  render() {
    const { organizations } = this.props;

    return (
      <>
        <header>
          <div>
            <h1>
              <img src="/assets/blank-logo.png" alt="DeskLamp" />
              <strong>DeskLamp&nbsp;</strong>Launchpad
            </h1>
          </div>

          <div>
            <i className="material-icons">account_circle</i>
            <button onClick={this.props.signOut}>Log out</button>
          </div>
        </header>
        <section>
          <div>
            <h2>DeskLamp</h2>
            <ul>
              {Object.values(organizations).map(
                org => <li key={org.id}>
                  <img src="assets/basecamp-logo.png" />
                  <h2>{org.name}</h2>
                </li>
              )}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default OrganizationForm;
